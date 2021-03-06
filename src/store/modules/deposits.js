import DepositEndpoints from '@/backend-endpoints/DepositEndpoints'
import axios from "axios"

const state = {
  query: {
    size: 0,
    offset: 0,
    sortby: null,
    sortdir: "ASC",
    publicId: null, 
    takingsId: null,
    crew: null,
    name: "%",
    confirmed: null,
    cby: null,
    cfrom: 1581292800,
    cto: null,
    payfrom: null,
    payto:null,
    crfrom: null,
    crto:null
  },

  items: [], 
  donations: [],
  page: {
    size: 10,
    offset: 0
  },
  countItems: 0,
  sorting: {
    field: "deposit.created",
    dir: "DESC"
  },
  count: null,
  error: null
}

const getters = {
  all: (state) => {
    return state.items
  },
  overview: (state) => {
    return state.items.map((deposit) => {
        var status = "unconfirmed"
        if(deposit.hasOwnProperty("confirmed")) {
            status = deposit.confirmed
        }
      return {
        "id": deposit.publicId,
        "amount": {
          "amount": deposit.amount.reduce((amount, source) => amount + source.amount.amount, 0),
          "currency": deposit.amount[0].amount.currency
	},
        "date": {
          "received": deposit.dateOfDeposit,
          "created": deposit.created,
        },
        "actions": deposit.amount,
        "crew": deposit.crew,
        "supporter": [deposit.supporter],
        "status": status
      }
    })
  }, 
  donationName: (state) => (donationId) => {
      var name = null
      var donation = state.donations.find(d => d.id === donationId)
      if(typeof donation !== "undefined" && donation !== null) {
          name = donation.context.description
      }
      return name
  },
  isError: (state) => {
    return state.error !== null
  },
  getErrorCode: (state) => {
    var res = null
    if(state.error !== null && typeof state.error !== "undefined" && state.error.hasOwnProperty("response")) {
      res = state.error.response.code
    }
    return res
  },
  filter: (state) => {
    return JSON.parse(JSON.stringify(state.query))
  },
  taggableFilter: (state) => {
    var res = []
    function check(obj, attr) {
      return obj.hasOwnProperty(attr) && (typeof obj[attr] !== "undefined") && obj[attr] !== null &&
        (obj[attr] !== "" || typeof obj[attr] !== "string") &&
        (obj[attr] !== 0.0 || typeof obj[attr] !== "number") &&
        ((Array.isArray(obj[attr]) && obj[attr].length !== 0) || !Array.isArray(obj[attr]))
    }
    var fields = [
      {
        "obj": state.filter,
        "attr": "publicId"
      },
      {
        "obj": state.filter,
        "attr": "takingsId"
      },
      {
        "obj": state.filter,
        "attr": "crew"
      }
    ]
    for(var field of fields) {
      if(check(field.obj, field.attr)) {
        res.push({
          "name": field.attr,
          "value": field.obj[field.attr]
        })
      }
    }
    return res
  },
  sort: (state) => {
    return state.sorting
  },
  count: (state) => {
    return state.count
  }
}

const actions = {
    
  init (store, query) {
    axios.get('/backend/stream/deposits', {params: query})
      .then(function (response){
        store.commit({"type": 'init', "deposits": response.data})
      }).catch(function (error) {
        store.commit({"type": 'setError', error: error})
      })
  },
  nextPage (store, query) {
    axios.get('/backend/stream/deposits', { params: query })
      .then(function (response){
        store.commit({"type": 'assign', "deposits": response.data})
      }).catch(function (error) {
        store.commit({"type": 'setError', error: error})
      })
  },
  count (store, query) {
    axios.get('/backend/stream/deposits/count', { params: query })
    .then(function (response) {
      store.commit({'type': 'count', 'count': response.data })
    }).catch(function (error) {
      store.commit({'type': 'setError', error: error})
    })
  },
  page (store, down) {
        var offset = store.state.page.offset - store.state.page.size
        var valid = offset >= 0
        if(!down) {
            offset = store.state.page.offset + store.state.page.size
            valid = offset < store.state.countItems
        }
        if(valid) {
            store.commit({ "type": 'page', "offset": offset })
            store.dispatch('init')
        }
    },
    sort (store, sorting) {
        store.commit({ "type": "sort", "sort": sorting })
        store.dispatch('init')
    },
    filter: (state) => {
        return JSON.parse(JSON.stringify(state.filter))
    },

    add (store, deposit) {
      //get the current user
      var user = store.rootGetters['user/get']
      var crew = store.rootGetters['user/getCrew']
      //deposit["publicId"] = uuidv4()
      //deposit["crew"] = (crew !== null) ? crew[0] : { "name": "", "uuid": "00000000-0000-0000-0000-000000000000" } // hopefully not undefined
      deposit["supporter"] = {}
      deposit.supporter["uuid"] = user.uuid
      deposit.supporter["name"] = user.name
      deposit["created"] = Date.now()
      deposit["updated"] = Date.now()

      var amount = deposit.depositUnits.map((unit) => {
        return {
            //"publicId": uuidv4(),
            "takingId": unit.takingId,
            "amount": unit.amount,
            "created": Date.now()
        }
      })
      deposit["amount"] = amount
      deposit.depositUnits = []
      deposit["full"] = { "amount": deposit.amount.reduce((amount, source) => amount + source.amount.amount, 0), "currency": "EUR"}

      
      //post deposit
      var ajax = new DepositEndpoints(store)
      var successHandler = (response) => {
        store.commit({ "type": 'push', "deposit": response.data })
      }
      var errorHandler = (error) => store.commit({ "type": 'setError', error: error })
      ajax.save(successHandler, errorHandler, deposit)
  },
    confirm (store, deposit) {
        var user = store.rootGetters['user/get']
        var ajax = new DepositEndpoints(store)
        var successHandler = () => true
        var errorHandler = (error) => store.commit({ "type": 'setError', error: error })
        ajax.confirm(successHandler, errorHandler, { "id": deposit.id, "date": Date.now(), "uuid": user.uuid, "name": user.name })
    }
}

const mutations = {
    init(state, payload) {
        state.items = payload.deposits
    },
    initDons(state, pushDonations) {
        state.donations = pushDonations.donations
    },
  assign(state, payload) {
    for (var i in payload.deposits) {
      state.items.push(payload.deposits[i])
    }
  },
  count(state, payload) {
    state.count = payload.count.count
  },
    sort(state, sort) {
        state.sorting = sort.sort
    },
    page(state, offset) {
        state.page.offset = offset.offset
    },
    push(state, pushDeposit) {
        state.items.push(pushDeposit.deposit)
    },
    setError(state, pushError) {
        state.error = pushError.error
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

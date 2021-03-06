import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import axios from 'axios'
Vue.use(Router)

/**
 * All routes
 * You can pass a "meta" parameter, that contains {{ 'roles' : [] }}. The content of `roles` can be a string of the values
 * "Admin", "Employee" or "Supporter" or a complex JSON with the keys "name", "crew" and "pillar". For example (all
 * attributes except "name" are optional):
 * {{
 *  "name": "VolunteerManager",
 *  "pillar": "education", // "operation", "network", "finance"
 *  "crew" : {
 *    "name": "VcA Berlin",
 *    "id": "<some UUID>"
 *  }
 * }}
 * @type {VueRouter}
 */
var router = new Router({
  routes: [
    {
        path: '*',
        props: { msg: '/arise/#/error/404' }, 
        component: () => import('./components/Redirect.vue'),
    },
    {
        path: '/takings',
        name: 'takings',
        component: () => import('./views/Takings.vue'),
        meta: {
          'roles': ['Admin', 'Employee', { 'name': 'VolunteerManager' }] //'Admin',
        }
    },
    {
        path: '/takings/add',
        name: 'takings-add',
        component: () => import('./views/TakingsEdit.vue'),
        meta: {
          'roles': ['Admin', 'Employee', { 'name': 'VolunteerManager' }] //'Admin',
        }
    },
    {
        path: '/takings/edit/:id',
        name: 'takings-edit',
        props: true,
        component: () => import('./views/TakingsEdit.vue'),
        meta: {
          'roles': ['Admin', 'Employee', {'name': 'VolunteerManager'}]
        }
    },
    {
      path: '/household',
      name: 'household',
      component: () => import('./views/Household.vue'),
      meta: {
        'roles': ['Admin', 'Employee', 'Supporter', { 'name': 'VolunteerManager' }] //'Admin',
      }
    },
    {
      path: '/deposits',
      name: 'deposits',
      component: () => import('./views/Deposit.vue'),
      meta: {
        'roles': ['Admin', 'Employee', { 'name': 'VolunteerManager' }] //'Admin',
      }
    }
  ]
})






router.beforeEach((to, from, next) => {
     
  // drops identity request
  function getDropsIdentity() {
    return axios.get('/drops/webapp/identity');
  }

  // stream idenity request
  function getStreamIdentity() {
    return axios.get('/backend/stream/identity');
  }

  // checker function
  function checker () {
    // Now, check the roles for the given entry!
    if(!store.getters['user/isError']) {
      var records = to.matched.filter(record => record.meta.hasOwnProperty("roles"))
      var fulfillsRole = records.reduce((fulfills, record) => {
        return fulfills || store.getters['user/is'](record.meta.roles)
      }, records.length === 0)
      if(fulfillsRole) {
        next();
      } else {
        window.location.replace('/arise/#/error/403')
      }
    } else {
      switch (store.getters['user/getErrorCode']) {
        case 401:
          // Not Authenticated!
          window.location.replace('/arise/#/signin/' + btoa(to.fullPath))
          break;
        case 403:
          // Forbidden!
          window.location.replace('/arise/#/error/403')
          break;
        case 404:
          // redirect 404 error page
          window.location.replace('/arise/#/error/404')
          break;
        case 500:
          // redirect 500 error page
          window.location.replace('/arise/#/error/500')
          break;
        default:
          window.location.replace('/arise/#/signin')
          break;
      }
    }
  }


  if (to.matched.some(record => record.meta.hasOwnProperty("roles"))) {
        // only for init - checks if there is already a user, initiates OAuth handshake otherwise
        var u = store.getters['user/get']
        if(u === null) {
          // set user store to pending
          store.dispatch('user/pending')
          // User request using getDropsIdentity and getStreamIdentity request.
          axios.all([getDropsIdentity(), getStreamIdentity()])
            // handle responses
            .then(axios.spread((drops, stream) => {
              stream.data["name"] = drops.data.additional_information.profiles[0].supporter.fullName
              store.dispatch('user/success', stream.data)
              checker()
            }))
            // handle errors
            .catch((error) => {
              store.dispatch('user/error', error)
            })
        } else {
            checker()
        }
    } else {
        next()
    }
});



export default router

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08eaa530"],{"03c4":function(t,e,n){},"08ac":function(t,e,n){},"1af6":function(t,e,n){var i=n("63b6");i(i.S,"Array",{isArray:n("9003")})},"236e":function(t,e,n){"use strict";var i=n("c0b4"),a=n.n(i);a.a},"3d2c":function(t,e,n){"use strict";var i=n("8306"),a=n.n(i);a.a},"3da0":function(t,e,n){},"40c3":function(t,e,n){var i=n("6b4c"),a=n("5168")("toStringTag"),r="Arguments"==i(function(){return arguments}()),o=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=o(e=Object(t),a))?n:r?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}},4206:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("MoneyInput",{attrs:{size:"small",amount:t.amount_data.from},on:{change:function(e){return t.setFrom(e)}},model:{value:t.amount_data.from,callback:function(e){t.$set(t.amount_data,"from",e)},expression:"amount_data.from"}})],1),n("el-col",{attrs:{span:6}},[n("MoneyInput",{attrs:{size:"small",amount:t.amount_data.to},on:{change:function(e){return t.setTo(e)}},model:{value:t.amount_data.to,callback:function(e){t.$set(t.amount_data,"to",e)},expression:"amount_data.to"}})],1),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"small"},on:{click:t.reset}})],1)},a=[],r=n("63ee"),o={name:"FilterAmount",components:{MoneyInput:r["a"]},props:{amount:{type:Object,default:function(){return{from:0,to:0}}},lang:{type:Object,default:function(){return{from:"von",to:"bis"}}}},data:function(){return{amount_data:{from:{amount:0,currency:"EUR"},to:{amount:0,currency:"EUR"}}}},methods:{setFrom:function(t){this.$emit("from",this.amount_data.from.amount)},setTo:function(t){this.$emit("to",this.amount_data.to.amount)},reset:function(){this.amount_data.from.amount=0,this.amount_data.to.amount=0,this.$emit("from",null),this.$emit("to",null)}}},s=o,l=(n("e4ad"),n("2877")),u=Object(l["a"])(s,i,a,!1,null,null,null);e["a"]=u.exports},4383:function(t,e,n){"use strict";var i=n("ce18"),a=n.n(i);a.a},"469f":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("7d7b")},"4c1d":function(t,e,n){"use strict";var i=n("6a7b"),a=n.n(i);a.a},"4fe2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VcAFrame",[n("VcAColumn",{attrs:{size:"70%"}},[n("TakingOverview",{staticClass:"box-card",attrs:{deposit:t.deposit,depositAddView:t.depositAddView}}),t.hasNext?n("button",{staticClass:"paginate",on:{click:function(e){return t.pageUp()}}},[t._v("\n                "+t._s(t.$tc("pagination.next",t.pageGet.next,{number:t.pageGet.next}))+"\n            ")]):t._e()],1),n("VcAColumn",{attrs:{size:"20%"}},[n("el-card",{staticClass:"box-card"},[n("router-link",{staticClass:"vca-button-primary vca-full-width",attrs:{to:"/takings/add"}},[t._v("\n              "+t._s(t.$t("takings.buttons.add"))+"\n            ")]),t.depositAddView?t._e():n("button",{staticClass:"vca-button-primary vca-full-width",on:{click:function(e){return e.preventDefault(),t.depositAdd(e)}}},[t._v("\n                "+t._s(this.$t("takings.buttons.depositAdd"))+"\n            ")]),t.depositAddView?n("button",{staticClass:"vca-button-warn vca-full-width",on:{click:function(e){return e.preventDefault(),t.depositAdd(e)}}},[t._v("\n                "+t._s(t.$t("takings.buttons.abort"))+"\n            ")]):t._e(),n("p",{staticClass:"info"},[n("i",{staticClass:"el-icon-info"}),t._v(" "+t._s(this.$t("takings.info"))+" "),n("a",{attrs:{href:"https://pool2.vivaconagua.org/wiki/index.php/How_to_Finanzen"}},[t._v("How to Finanzen")])])],1),t.depositAddView?n("el-card",{staticClass:"box-card tail",attrs:{deposit:t.deposit}},[n("TakingDeposit",{attrs:{deposit:t.deposit},on:{resetDepositAddView:t.resetDepositAddView}})],1):t._e()],1)],1)},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),o=n("9c56"),s=n("5c96"),l=n("2f62"),u=n("0ced"),c=(n("1207"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{key:t.reloadKey,attrs:{model:t.deposit,rules:t.rules}},[n("div",{staticStyle:{display:"table",width:"100%"}},[t._l(t.deposit.depositUnits,(function(e){return n("div",{key:e.id,staticClass:"depositRow"},[n("div",{staticClass:"depositCell depositName"},[t._v("\n        "+t._s(t.takingName(e.takingId))+"\n      ")]),n("div",{staticClass:"depositCell depositAmount"},[t._v("\n        "+t._s(t.formatAmount(e.amount))+"\n      ")]),n("div",{staticClass:"depositOption"},[n("el-button",{staticClass:"depositCell depositButton",attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:t.pop}})],1)])})),t.deposit.depositUnits&&t.deposit.depositUnits.length>0?n("div",{staticClass:"depositTotal depositRow"},[n("div",{staticClass:"depositCell"},[t._v(t._s(t.$t("takings.placeholder.amount")))]),n("div",{staticClass:"depositCell"},[t._v(t._s(t.formatTotal(t.deposit.depositUnits)))]),n("div",{staticClass:"depositCell"})]):t._e()],2),n("br"),n("el-form-item",{staticClass:"vca-form",attrs:{required:!0}},[n("el-date-picker",{attrs:{type:"date",placeholder:t.$t("takings.placeholder.dateOfDeposit"),format:"dd. MMM. yyyy","value-format":"timestamp",clearable:!1},model:{value:t.deposit.dateOfDeposit,callback:function(e){t.$set(t.deposit,"dateOfDeposit",e)},expression:"deposit.dateOfDeposit"}})],1),n("button",{staticClass:"vca-button-primary vca-full-width",attrs:{disabled:!t.isValid},on:{click:function(e){return e.preventDefault(),t.commit(e)}}},[t._v("\n    "+t._s(t.$t("takings.buttons.depositAdd"))+"\n  ")])],1)}),d=[],f=n("768b"),p=(n("ffc1"),n("20d6"),n("d4d5"));function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={name:"TakingDeposit",components:{"el-form":s["Form"],"el-form-item":s["FormItem"],"el-date-picker":s["DatePicker"]},props:{deposit:{type:Object,default:function(){return{full:{amount:0,currency:"EUR"},depositUnits:[],dateOfDeposit:null}}}},data:function(){return{reloadKey:1,takings:[],rules:{},errorState:[]}},computed:h({unassignedDeposit:function(){var t=this.deposit.full.amount-this.deposit.depositUnits.reduce((function(t,e){return t+e.deposit.amount}),0),e=CurrencyFormatter.getFromNumeric(this.deposit.full.currency,t);return e},isValid:function(){return this.deposit.depositUnits&&this.deposit.depositUnits.length>0&&null!==this.deposit.dateOfDeposit},inErrorState:function(){return this.errorState.length>0}},Object(l["c"])("takings",{getById:"getById"})),methods:h({},Object(l["b"])("deposits",{save:"add"}),{addDepositUnit:function(t){var e=this.deposit.depositUnits.findIndex((function(e){return e.donation===t.donation}));-1!==e?this.deposit.depositUnits.splice(e,1,t):this.deposit.depositUnits.push(t)},removeDepositUnit:function(t){var e=this.deposit.depositUnits.findIndex((function(e){return e.donation===t})),n=this.takings.findIndex((function(e){return e.value===t}));this.deposit.depositUnits.splice(e,1),this.takings.splice(n,1)},selectTaking:function(t){this.takings.push(t),this.addDepositUnit({deposit:{amount:t.amount,currency:"EUR"},donation:t.value})},setErrorState:function(t){this.errorState.push(t)},removeErrorState:function(t){this.errorState=this.errorState.filter((function(e){return e!==t}))},reset:function(){this.$emit("resetDepositAddView"),this.reloadKey+=1},commit:function(){this.save(this.deposit),this.reset()},formatAmount:function(t){return p["a"].getString(t.amount,t.currency)},formatTotal:function(){var t=[],e="EUR";Object.entries(this.deposit.depositUnits).forEach((function(n){var i=Object(f["a"])(n,2),a=(i[0],i[1]);t.push(a.amount.amount),e=a.amount.currency}));var n={amount:t.reduce((function(t,e){return t+e}),0),currency:e};return this.formatAmount(n)},takingName:function(t){var e=this.getById(t);return e.context.description},pop:function(){var t=this.deposit.depositUnits.indexOf(this.unit);this.deposit.depositUnits.splice(t,1)}})},g=b,v=(n("e788"),n("2877")),y=Object(v["a"])(g,c,d,!1,null,"61a94130",null),_=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-collapse",[n("el-collapse-item",{attrs:{title:"Filter"}},[n("el-row",{attrs:{gutter:50}},[n("el-col",{attrs:{span:12}},[n("el-form",{attrs:{model:t.filter,"label-position":"left","label-width":"8em"}},[n("el-form-item",{attrs:{label:t.lang.events.label,required:""}},[n("FilterTags",{attrs:{lang:t.lang.events},on:{commit:function(e){return t.addEvent(e)},delete:function(e){return t.deleteEvent(e)}}})],1),n("el-form-item",{attrs:{label:t.lang.crews.label,required:""}},[n("FilterTags",{attrs:{lang:t.lang.crews},on:{commit:function(e){return t.addCrew(e)},delete:function(e){return t.deleteCrew(e)}}})],1),n("el-form-item",{attrs:{label:t.lang.external.label,required:""}},[n("FilterOption",{attrs:{lang:t.lang.external},on:{change:function(e){return t.setExternal(e)}}})],1)],1)],1),n("el-col",{attrs:{span:12}},[n("el-form",{attrs:{"label-position":"left"}},[n("el-form-item",{attrs:{label:t.lang.created.label,required:""}},[n("DateFilter",{attrs:{from:t.filter.crfrom,to:t.filter.crto},on:{update:function(e){return t.dateCreated(e)}}})],1),n("el-form-item",{attrs:{label:t.lang.received.label,required:""}},[n("DateFilter",{attrs:{from:t.filter.payfrom,to:t.filter.payto},on:{update:function(e){return t.dateReceived(e)}}})],1),n("el-form-item",{attrs:{label:t.lang.norms.label,required:""}},[n("FilterNorms",{attrs:{lang:t.lang.norms},on:{change:function(e){return t.setNorms(e)}}})],1)],1)],1)],1)],1)],1)},w=[],k=(n("a481"),n("30be"),n("dae3")),j=n("7571"),C=n("659a"),A=n("4206"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-radio-group",{staticStyle:{},on:{change:t.change},model:{value:t.norms,callback:function(e){t.norms=e},expression:"norms"}},[n("el-radio",{attrs:{label:"ECONOMIC"}},[t._v(t._s(t.lang.label_ECO))]),n("el-radio",{attrs:{label:"DONATION"}},[t._v(t._s(t.lang.label_DON))]),n("el-radio",{attrs:{label:null}},[t._v(t._s(t.lang.label_null))])],1)},E=[],$={name:"FilterNorms",props:{lang:{type:Object,default:function(){return{label_ECO:"Wirtschafts Einnahme",label_DON:"Spende",label_null:"All"}}}},data:function(){return{norms:null}},methods:{change:function(){this.$emit("change",this.norms)}}},D=$,U=Object(v["a"])(D,x,E,!1,null,null,null),S=U.exports,P={name:"TakingFilter",components:{FilterTags:j["a"],DateFilter:k["a"],FilterOption:C["a"],FilterAmount:A["a"],FilterNorms:S},props:{lang:{type:Object,default:function(){return{crew:{label:"Crew"},events:{label:"Aktion",new_tag:"+ New Aktion"},crews:{label:"Crews",new_tag:"+ add Crew"},created:{label:"Created"},received:{label:"Received"},norms:{label:"Art der Einzahlung",label_ECO:"Wirtschaftlich",label_DON:"Spende",label_null:"All"},external:{label:"Bar/Extern",label_true:"Extern",label_false:"Bar",label_null:"All"},open:{label:"open",label_true:"Open",label_false:"Not Open",label_null:"All"},confirmed_date:{label:"Confirmed Date"},amount:{label:"Amount"}}}}},data:function(){return{filter:{publicId:null,name:null,crew:null,ato:null,afrom:null,exto:null,exfrom:null,cashto:null,cashfrom:null,confirmed:null,unconfirmed:null,open:null,payfrom:null,payto:null,crfrom:null,crto:null,crewname:null,norms:null,external:null}}},methods:{addEvent:function(t){null!==this.filter.name?this.filter.name=this.filter.name+" %"+t+"%":this.filter.name="%"+t+"%",this.update()},deleteEvent:function(t){var e="%"+t+"%";this.filter.name=this.filter.name.replace(e,""),""===this.filter.name&&(this.filter.name=null),this.update()},addCrew:function(t){null!==this.filter.crewname?this.filter.crewname=this.filter.crewname+" %"+t+"%":this.filter.crewname="%"+t+"%",this.update()},deleteCrew:function(t){var e="%"+t+"%";this.filter.crewname=this.filter.crewname.replace(e,""),""===this.filter.crewname&&(this.filter.crewname=null),this.update()},dateCreated:function(t){this.filter.crfrom=t.from,this.filter.crto=t.to,this.update()},dateReceived:function(t){this.filter.payfrom=t.from,this.filter.payto=t.to,this.update()},setNorms:function(t){this.filter.norms=t,this.update()},setExternal:function(t){this.filter.external=t,this.update()},update:function(){this.$emit("update",this.filter)}}},T=P,V=(n("7e0a"),Object(v["a"])(T,O,w,!1,null,"3104fe49",null)),F=V.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"evaluation"},[n("span",{staticClass:"part"},[t._v(t._s(t.$t("donation.hints.total.cash",{total:20})))]),n("span",{staticClass:"part"},[t._v(t._s(t.$t("donation.hints.total.extern",{total:30})))]),n("span",{staticClass:"all"},[t._v(t._s(t.$t("donation.hints.total.all",{total:50})))])])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h3",[t._v("Crew Name")])])}],R={name:"CrewDetail",data:function(){return{}}},z=R,q=(n("4383"),Object(v["a"])(z,I,N,!1,null,"040ca1f4",null)),B=q.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-card",{staticClass:"box-card"},[n("TakingFilter",{on:{update:function(e){return t.updateFilter(e)}}})],1),n("el-card",{staticClass:"box-card tail"},[n("TakingList",{attrs:{deposit:t.deposit,depositAddView:t.depositAddView},on:{page:function(e){return t.updatePage(e)}}})],1)],1)},M=[],J=(n("55dd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.takings}},[n("el-table-column",{attrs:{prop:"name",label:t.$t("takings.table.head.title")}}),n("el-table-column",{attrs:{prop:"crew",label:t.$t("takings.table.head.crew")},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.crew,(function(e){return n("div",{key:e.id,staticClass:"vca-crew-name"},[n("el-tag",[t._v(" "+t._s(e.name)+" ")])],1)}))}}])}),n("el-table-column",{attrs:{prop:"amount",label:t.$t("takings.table.head.amount")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[t._v(t._s(t.$t("takings.table.popup.cash"))+": "+t._s(t.formatAmount(e.row.amount.cash)))]),n("p",[t._v(t._s(t.$t("takings.table.popup.extern"))+": "+t._s(t.formatAmount(e.row.amount.extern)))]),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[t._v("\n        "+t._s(t.formatAmount(e.row.amount.full))+"\n        "),t.isExtern(e.row.amount.extern)?n("i",{staticClass:"el-icon-bank-card"}):t._e()])])]}}])}),n("el-table-column",{attrs:{prop:"",label:t.$t("takings.table.head.deposited"),width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("DepositLights",{attrs:{taking:e.row}}),t.depositAddView?n("DepositAdd",{attrs:{depositUnit:t.deposit.depositUnits,taking:e.row,amount:e.row.amount.full,takingId:e.row.id}}):t._e()]}}])}),n("el-table-column",{attrs:{prop:"",label:t.$t("takings.table.head.date"),width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"dates"},[n("span",[t._v(t._s(t.$t("takings.table.dates.received",{date:t.formatDate(e.row.date.received)})))]),n("span",[t._v(t._s(t.$t("takings.table.dates.created",{date:t.formatDate(e.row.date.created)})))])])]}}])}),n("el-table-column",{attrs:{prop:"supporter",label:t.$t("takings.table.head.supporter")},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.supporter,(function(t){return n("div",{key:t.uuid,staticClass:"vca-crew-name"},[n("UserButton",{attrs:{user:t}})],1)}))}}])}),n("el-table-column",{attrs:{prop:"formatAmount(amount)",label:t.$t("takings.table.head.edit")},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-popover",{attrs:{trigger:"click",placement:"top"}},[n("TakingsDetails",{attrs:{amount:e.row.amount}}),n("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"}})],1)],1)],1),n("el-col",{attrs:{span:12}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(n){return t.editPage(e.row.id)}}})],1)],1)]}}])}),n("template",{slot:"append"},[n("div",[n("el-button",{staticClass:"load",attrs:{type:"info",plain:""},on:{click:t.loadHandler}},[t._v(t._s(t.loadButton))])],1)])],2)}),G=[],H=n("2b0e"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deposit"},[n("span",[n("AmpleLight",{attrs:{color:t.stateConfirmed}}),t._v(t._s(t.$t("donation.hints.deposit.confirmed",{amount:t.formatAmount(t.confirmed)})))],1),t.showUnconfirmed?n("span",[n("AmpleLight",{attrs:{color:t.stateUnconfirmed}}),t._v(t._s(t.$t("donation.hints.deposit.unconfirmed",{amount:t.formatAmount(t.unconfirmed)})))],1):t._e(),t.showOpen?n("span",[n("AmpleLight",{attrs:{color:t.stateOpen}}),t._v(t._s(t.$t("donation.hints.deposit.open",{amount:t.formatAmount(t.open)})))],1):t._e()])},W=[],Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"light",class:t.color})},X=[],Y={name:"AmpleLight",props:{color:{type:String,required:!0,validator:function(t){return-1!==["green","yellow","red"].indexOf(t)}}}},Z=Y,tt=(n("4c1d"),Object(v["a"])(Z,Q,X,!1,null,"8709ba80",null)),et=tt.exports,nt={name:"DepositLights",components:{AmpleLight:et},props:{taking:{type:Object,required:!0}},computed:{confirmed:function(){var t=0;return this.taking.deposited.confirmed.hasOwnProperty("EUR")&&(t=this.taking.deposited.confirmed.EUR),t},unconfirmed:function(){var t=0;return this.taking.deposited.unconfirmed.hasOwnProperty("EUR")&&(t=this.taking.deposited.unconfirmed.EUR),t},open:function(){return this.taking.amount.full-(this.confirmed+this.unconfirmed)},showUnconfirmed:function(){return this.unconfirmed>0},showOpen:function(){return this.open>0},stateConfirmed:function(){var t="red";return this.confirmed>0&&this.confirmed!==this.taking.amount.full?t="yellow":this.confirmed===this.taking.amount.full&&(t="green"),t},stateUnconfirmed:function(){var t="red";return this.unconfirmed>0&&(t="yellow"),t},stateOpen:function(){var t="green";return this.open>0&&(t="red"),t}},methods:{formatAmount:function(t){return p["a"].getString(t,"EUR")}}},it=nt,at=(n("a902"),Object(v["a"])(it,K,W,!1,null,"0273c3e5",null)),rt=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.submitted||t.stateConfirmed||t.stateUnConfirmed?t._e():n("div",{staticClass:"unit unsubmitted"},[n("MoneyInput",{staticClass:"money-input",attrs:{amount:t.unit.amount,size:"mini"},on:{change:function(e){return t.setAmount(e)}},model:{value:t.unit.amount,callback:function(e){t.$set(t.unit,"amount",e)},expression:"unit.amount"}}),n("el-button",{attrs:{type:"success",icon:"el-icon-check",size:"mini"},on:{click:t.submit}})],1),t.submitted?n("div",{staticClass:"unit submitted"},[n("span",{staticClass:"formatAmount"},[t._v(t._s(t.formatAmount(t.unit.amount)))]),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:t.pop}})],1):t._e()])},st=[],lt=(n("c5f6"),n("82a4"),n("63ee")),ut={name:"DepositAdd",components:{"el-button":s["Button"],MoneyInput:lt["a"]},props:{taking:{type:Object,required:!0},depositUnit:{type:Array,default:function(){return[]}},amount:{type:Number,default:0},takingId:{type:String,default:""}},created:function(){this.unit.amount.amount=this.amount,this.unit.takingId=this.takingId},data:function(){return{unit:{takingId:"",amount:{amount:0,currency:"EUR"},created:Date.now()}}},computed:{deleteUnit:function(){var t=this;return this.depositUnit.filter((function(e){return e.takingId!==t.unit.takingId}))},submitted:function(){var t;for(t=0;t<this.depositUnit.length;t++)if(this.depositUnit[t]===this.unit)return!0;return!1},confirmedAmount:function(){var t=0;return this.taking.deposited.confirmed.hasOwnProperty("EUR")&&(t=this.taking.deposited.confirmed.EUR),t},stateConfirmed:function(){return this.confirmedAmount>=this.taking.amount},unconfirmedAmount:function(){var t=0;return this.taking.deposited.unconfirmed.hasOwnProperty("EUR")&&(t=this.taking.deposited.unconfirmed.EUR),t},stateUnConfirmed:function(){return this.unconfirmedAmount>=this.taking.amount}},methods:{submit:function(){this.depositUnit.push(this.unit)},setAmount:function(t){this.unit.amount=t},formatAmount:function(t){return p["a"].getString(t.amount,t.currency)},pop:function(){var t=this.depositUnit.indexOf(this.unit);this.depositUnit.splice(t,1)}}},ct=ut,dt=(n("735c"),Object(v["a"])(ct,ot,st,!1,null,null,null)),ft=dt.exports,pt=n("9805"),mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v(" Übersicht Einnahmen ")]),n("span",[t._v(" Gesamt: ")]),n("p",[t._v(t._s(t.amount.full))]),n("span",[t._v(" Davon: ")]),n("p",[t._v(t._s(t.$t("takings.table.popup.cash"))+": "+t._s(t.amount.cash))]),n("p",[t._v(t._s(t.$t("takings.table.popup.extern"))+": "+t._s(t.amount.extern))])])},ht=[],bt={name:"TakingsDetails",props:{amount:{type:Object,default:function(){return{full:0,cash:0,extern:0,fullDon:0,donCash:0,donExtern:0,fullEC:0,ecCash:0,ecExtern:0}}}}},gt=bt,vt=Object(v["a"])(gt,mt,ht,!1,null,null,null),yt=vt.exports;function _t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_t(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}H["default"].use(s["Notification"]),s["Notification"].closeAll();var wt={name:"TakingList",components:{DepositLights:rt,DepositAdd:ft,UserButton:pt["a"],TakingsDetails:yt},props:{depositAddView:{type:Boolean,default:!1},deposit:{type:Object,default:function(){return{busy:!1,full:{amount:0,currency:"EUR"},depositUnits:[],dateOfDeposit:null}}}},data:function(){return{sort:{sortby:null,sort:null},page:{size:50,offset:0}}},computed:Ot({},Object(l["c"])("takings",{takings:"overview",count:"count",isError:"isError",getErrorCode:"getErrorCode",getById:"getById"}),{loadButton:function(){return this.count>this.page.offset?this.$t("takings.table.load.more"):this.$t("takings.table.load.finish")},maximumTags:function(){return 2},isEployee:function(){return this.$store.getters["user/is"](["Admin","Employee"])}}),methods:{formatAmount:function(t){return p["a"].getString(t,"EUR")},formatDate:function(t){var e=new Date(t);return this.$d(e,"short")},editPage:function(t){this.$router.push({name:"takings-edit",params:{id:t}})},loadHandler:function(){this.page.offset=this.page.offset+this.page.size,this.$emit("page",this.page)},isExtern:function(t){return t>0},open:function(t,e,n){Object(s["Notification"])({title:t,message:e,type:n})}}},kt=wt,jt=(n("3d2c"),Object(v["a"])(kt,J,G,!1,null,"5ac97fd2",null)),Ct=jt.exports;function At(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?At(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Et={name:"TakingOverview",components:{TakingFilter:F,TakingList:Ct},props:{depositAddView:{type:Boolean,default:!1},deposit:{type:Object,default:function(){return{full:{amount:0,currency:"EUR"},depositUnits:[],dateOfDeposit:null}}}},data:function(){return{filter:{},sort:{},page:{size:50,offset:0}}},computed:{query:function(){return Object.assign(this.sort,this.page,this.filter)}},created:function(){this.count(this.query),this.init(this.query)},methods:xt({},Object(l["b"])("takings",["init","count","nextPage"]),{updateFilter:function(t){this.filter=t,this.count(this.query),this.init(this.query)},updateSort:function(t){this.sort=t,this.init(this.query)},updatePage:function(t){this.page=t,this.nextPage(this.query)}})},$t=Et,Dt=(n("f8ca"),Object(v["a"])($t,L,M,!1,null,null,null)),Ut=Dt.exports;function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Pt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Tt={name:"takings",components:{VcAFrame:u["VcAFrame"],VcAColumn:u["VcAColumn"],TakingOverview:Ut,ListMenu:o["a"],TakingDeposit:_,TakingFilter:F,"el-card":s["Card"],CrewDetail:B},data:function(){var t={value:null,key:-1};return{editableDefault:t,editable:JSON.parse(JSON.stringify(t)),depositAddView:!1,deposit:{full:{amount:0,currency:"EUR"},depositUnits:[],dateOfDeposit:null}}},computed:Pt({},Object(l["c"])("takings",{pageGet:"page",taggableFilter:"taggableFilter"}),{hasPrevious:function(){return this.pageGet.previous>0},hasNext:function(){return this.pageGet.next>0},sortFields:function(){return[{value:"taking.norms",label:this.$t("takings.table.sort.norms")},{value:"taking.fullamount",label:this.$t("takings.table.sort.amount")},{value:"taking.description",label:this.$t("takings.table.sort.title")},{value:"taking.created",label:this.$t("takings.table.sort.date")}]},filterCrewTags:function(){var t=this;return JSON.parse(JSON.stringify(this.taggableFilter.filter((function(t){return"crew"===t.name})))).map((function(e){return e.name=t.$t("household.filter.tag.crew"),e}))},filterCrewTag:function(){return[{name:"name",value:"value"}]},filterTags:function(){return[{name:"norms",value:"value"}]},filterTag:function(){var t=this;return this.taggableFilter.reduce((function(e,n){var i=function(e){"publicId"===e.name?e.value=t.$t("household.filter.tag.values."+e.name+"."+e.value):"crew"===e.name?e.value=t.$t("household.states."+e.value):"name"===e.name?e.value=t.$t("household.process.VolunteerManager."+e.value):"norms"===e.name&&(e.value=t.$t("household.process.Employee."+e.value))},a=e;return"complete"===n.name&&"noSelection"===n.value||"crew"===n.name||(Array.isArray(n.value)?a=a.concat(n.value.map((function(t){return i({name:n.name,value:t})}))):a.push(i(n))),a}),[])}}),methods:Pt({},Object(l["b"])("takings",["page"]),{resetDepositAddView:function(){this.depositAddView=!1},editState:function(t){this.editable.value=this.byId(t.id),this.editable.key=t.id},addState:function(){this.editable=JSON.parse(JSON.stringify(this.editableDefault))},pageDown:function(){this.page(!0)},pageUp:function(){this.page(!1)},depositAdd:function(){!0===this.depositAddView?this.depositAddView=!1:this.depositAddView=!0}})},Vt=Tt,Ft=(n("7c63"),Object(v["a"])(Vt,i,a,!1,null,"c4b2af2e",null));e["default"]=Ft.exports},"504c":function(t,e,n){var i=n("9e1e"),a=n("0d58"),r=n("6821"),o=n("52a7").f;t.exports=function(t){return function(e){var n,s=r(e),l=a(s),u=l.length,c=0,d=[];while(u>c)n=l[c++],i&&!o.call(s,n)||d.push(t?[n,s[n]]:s[n]);return d}}},"54a1":function(t,e,n){n("6c1c"),n("1654"),t.exports=n("95d5")},"5d73":function(t,e,n){t.exports=n("469f")},6406:function(t,e,n){},"659a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-radio-group",{staticStyle:{},on:{change:t.change},model:{value:t.confirmed,callback:function(e){t.confirmed=e},expression:"confirmed"}},[n("el-radio",{attrs:{label:!0}},[t._v(t._s(t.lang.label_true))]),n("el-radio",{attrs:{label:!1}},[t._v(t._s(t.lang.label_false))]),n("el-radio",{attrs:{label:null}},[t._v(t._s(t.lang.label_null))])],1)},a=[],r={name:"FilterOption",props:{lang:{type:Object,default:function(){return{label_true:"Confirmed",label_false:"Not Confirmed",label_null:"All"}}}},data:function(){return{confirmed:null}},methods:{change:function(){this.$emit("change",this.confirmed)}}},o=r,s=n("2877"),l=Object(s["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},"6a7b":function(t,e,n){},"735c":function(t,e,n){"use strict";var i=n("b5b8"),a=n.n(i);a.a},7571:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.dynamicTags,(function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleClose(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])})),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"mini"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v(t._s(t.lang.new_tag))])],2)},a=[],r={name:"FilterTags",props:{lang:{type:Object,default:function(){return{new_tag:"+ New Tag"}}}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},methods:{handleClose:function(t){this.$emit("delete",t),this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleInputConfirm:function(){var t=this.inputValue;t&&(this.dynamicTags.push(t),this.$emit("commit",this.inputValue)),this.inputVisible=!1,this.inputValue=""}}},o=r,s=(n("236e"),n("2877")),l=Object(s["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},"768b":function(t,e,n){"use strict";var i=n("a745"),a=n.n(i);function r(t){if(a()(t))return t}var o=n("5d73"),s=n.n(o),l=n("c8bb"),u=n.n(l);function c(t,e){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,a=!1,r=void 0;try{for(var o,l=s()(t);!(i=(o=l.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){a=!0,r=c}finally{try{i||null==l["return"]||l["return"]()}finally{if(a)throw r}}return n}}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function f(t,e){return r(t)||c(t,e)||d()}n.d(e,"a",(function(){return f}))},"7c63":function(t,e,n){"use strict";var i=n("dde7"),a=n.n(i);a.a},"7cd6":function(t,e,n){var i=n("40c3"),a=n("5168")("iterator"),r=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||r[i(t)]}},"7d7b":function(t,e,n){var i=n("e4ae"),a=n("7cd6");t.exports=n("584a").getIterator=function(t){var e=a(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},"7e0a":function(t,e,n){"use strict";var i=n("08ac"),a=n.n(i);a.a},8306:function(t,e,n){},"95d5":function(t,e,n){var i=n("40c3"),a=n("5168")("iterator"),r=n("481b");t.exports=n("584a").isIterable=function(t){var e=Object(t);return void 0!==e[a]||"@@iterator"in e||r.hasOwnProperty(i(e))}},9805:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.userPage(t.user.uuid)}}},[t._v(" "+t._s(t.user.name)+" ")])},a=[],r={name:"UserButton",props:{user:{type:Object,default:function(){return{uuid:"",name:""}}}},methods:{userPage:function(t){window.location.href="/arise/#/user/"+t}}},o=r,s=n("2877"),l=Object(s["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},a745:function(t,e,n){t.exports=n("f410")},a902:function(t,e,n){"use strict";var i=n("3da0"),a=n.n(i);a.a},b5b8:function(t,e,n){},b830:function(t,e,n){},c0b4:function(t,e,n){},c8bb:function(t,e,n){t.exports=n("54a1")},ce18:function(t,e,n){},dae3:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-date-picker",{attrs:{size:"mini",type:"daterange","range-separator":"-","start-placeholder":"Start date","end-placeholder":"End date"},on:{change:t.setDate},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})},a=[],r={name:"FilterDate",props:["from","to"],data:function(){return{dates:[],result:{from:null,to:null}}},methods:{setDate:function(){null!==this.dates&&this.dates.length>1?(this.result.from=Date.parse(this.dates[0]),this.result.to=Date.parse(this.dates[1])+864e5-1):(this.result.from=null,this.result.to=null),this.$emit("update",this.result)}}},o=r,s=n("2877"),l=Object(s["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports},dde7:function(t,e,n){},e4ad:function(t,e,n){"use strict";var i=n("6406"),a=n.n(i);a.a},e788:function(t,e,n){"use strict";var i=n("b830"),a=n.n(i);a.a},f410:function(t,e,n){n("1af6"),t.exports=n("584a").Array.isArray},f8ca:function(t,e,n){"use strict";var i=n("03c4"),a=n.n(i);a.a},ffc1:function(t,e,n){var i=n("5ca1"),a=n("504c")(!0);i(i.S,"Object",{entries:function(t){return a(t)}})}}]);
//# sourceMappingURL=chunk-08eaa530.ba3ceb01.js.map
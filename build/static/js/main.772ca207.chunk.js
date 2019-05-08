(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/loading.41aa6dc9.gif"},64:function(e,t,a){e.exports=a(91)},69:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(69),a(56)),i=a(110),s=a(114),u=a(113),m=a(111),h=a(52),f=a.n(h),d=a(53),p=a.n(d),v=a(54),g=a.n(v),b=a(109),E=a(24),y=a(13),k=a(27),j=a(25),w=a(9),C=a(26),O=(a(39),function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(k.a)(this,Object(j.a)(t).call(this))).state={forces:[],search:[],text:""},e.searchHere=e.searchHere.bind(Object(w.a)(e)),e}return Object(C.a)(t,e),Object(y.a)(t,[{key:"forcesData",value:function(){var e=this;fetch("https://data.police.uk/api/forces").then(function(t){t.json().then(function(t){e.setState({forces:t})})})}},{key:"searchHere",value:function(e){var t=this.state.forces,a=e.target.value,n=t.filter(function(e){return-1!==e.name.substring(0,a.length).toLowerCase().indexOf(a.toLowerCase())});this.setState({search:n,text:a})}},{key:"componentDidMount",value:function(){this.forcesData()}},{key:"render",value:function(){var e=this.state,t=e.forces,a=e.search,n=e.text.length?a:t;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Seatch here...",onChange:this.searchHere}),n.map(function(e,t){return r.a.createElement("p",{className:"items",key:e.id},t+1,") ",e.name)}))}}]),t}(n.Component)),x=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(k.a)(this,Object(j.a)(t).call(this))).state={crimes:[],search:[],text:""},e.searchHere=e.searchHere.bind(Object(w.a)(e)),e}return Object(C.a)(t,e),Object(y.a)(t,[{key:"crimesData",value:function(){var e=this;fetch("https://data.police.uk/api/crime-categories").then(function(t){t.json().then(function(t){e.setState({crimes:t})})})}},{key:"searchHere",value:function(e){var t=this.state.crimes,a=e.target.value,n=t.filter(function(e){return-1!==e.name.substring(0,a.length).toLowerCase().indexOf(a.toLowerCase())});this.setState({search:n,text:a})}},{key:"componentDidMount",value:function(){this.crimesData()}},{key:"render",value:function(){var e=this.state,t=e.crimes,a=e.search,n=e.text.length?a:t;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Seatch here...",onChange:this.searchHere}),n.map(function(e,t){return r.a.createElement("p",{className:"items",key:e.url},t+1,") ",e.name)}))}}]),t}(n.Component),D=a(36),S=a(22),H=a.n(S),B=a(37);function F(e,t){return new Promise(function(a,n){fetch("https://data.police.uk/api/crimes-no-location?category="+e+"&force="+t).then(function(e){return e.json()}).then(function(e){a(e)}).catch(function(e){n({message:e.message})})})}var L=a(48),M=a.n(L),N=function(e){function t(){var e;return Object(E.a)(this,t),(e=Object(k.a)(this,Object(j.a)(t).call(this))).state={isLoading:!0,crimeCategories:[],force:[],selectedForce:"",selectedCategory:"",filterData:[],limit:15},e.submitButton=e.submitButton.bind(Object(w.a)(e)),e.loadMore=e.loadMore.bind(Object(w.a)(e)),e}return Object(C.a)(t,e),Object(y.a)(t,[{key:"selectedCategory",value:function(e){this.setState({selectedCategory:e.target.value})}},{key:"selectedForce",value:function(e){this.setState({selectedForce:e.target.value})}},{key:"submitButton",value:function(){var e=Object(B.a)(H.a.mark(function e(){var t,a,n,r;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.selectedForce,n=t.selectedCategory,console.log("selectedForce===>>>>",a),console.log("selectedCategory===>>>>",n),e.prev=3,e.next=6,F(n,a);case 6:r=e.sent,this.setState({filterData:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"categoryData",value:function(){var e=Object(B.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(e,t){fetch("https://data.police.uk/api/crime-categories").then(function(e){return e.json()}).then(function(t){e(t)}).catch(function(e){t({message:e.message})})});case 3:t=e.sent,this.setState({crimeCategories:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"forceData",value:function(){var e=Object(B.a)(H.a.mark(function e(){var t;return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(e,t){fetch("https://data.police.uk/api/forces").then(function(e){return e.json()}).then(function(t){e(t)}).catch(function(e){t({message:e.message})})});case 3:t=e.sent,this.setState({force:t,isLoading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.categoryData(),this.forceData()}},{key:"loadMore",value:function(){this.setState({limit:this.state.limit+15})}},{key:"onScroll",value:function(e){e.target.scrollHeight-e.target.scrollTop===e.target.clientHeight&&this.loadMore()}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.crimeCategories,c=t.force,o=t.filterData,l=t.limit;console.log("filterData====>>>>",o);var i=Object(D.a)(o);return i.length=l,r.a.createElement("div",null,a&&r.a.createElement("img",{src:M.a}),r.a.createElement("div",{className:"select-div"},r.a.createElement("select",{name:"pagination",onChange:function(t){e.selectedCategory(t)}},r.a.createElement("option",{value:null,selected:"selected"},"Select Category"),n.map(function(e){return r.a.createElement("option",{value:e.url},e.name)}))),r.a.createElement("br",null),r.a.createElement("div",{className:"select-div"},r.a.createElement("select",{name:"pagination",onChange:function(t){e.selectedForce(t)}},r.a.createElement("option",{value:null,selected:"selected"},"Select Force"),c.map(function(e){return r.a.createElement("option",{value:e.id},e.name)}))),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.submitButton},"Submit"),r.a.createElement("hr",null),0!=o.length&&r.a.createElement("div",{style:{height:"300px",overflow:"scroll"},onScroll:this.onScroll.bind(this)},r.a.createElement("table",{border:"1px"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"ID"),r.a.createElement("td",null,"Category"),r.a.createElement("td",null,"Date"))),r.a.createElement("tbody",null,i.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.outcome_status.category),r.a.createElement("td",null,e.outcome_status.date))})))))}}]),t}(n.Component);function P(e){return r.a.createElement(b.a,{component:"div",style:{padding:24}},e.children)}var G=Object(i.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}});var W=function(){var e=G(),t=r.a.useState(0),a=Object(l.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static",color:"default"},r.a.createElement(u.a,{value:n,onChange:function(e,t){c(t)},variant:"scrollable",scrollButtons:"on",indicatorColor:"primary",textColor:"primary"},r.a.createElement(m.a,{label:"Dashboard",icon:r.a.createElement(f.a,null)}),r.a.createElement(m.a,{label:"Forces",icon:r.a.createElement(p.a,null)}),r.a.createElement(m.a,{label:"Crime Categories",icon:r.a.createElement(g.a,null)}),"s")),0===n&&r.a.createElement(P,null,r.a.createElement(N,null)),1===n&&r.a.createElement(P,null,r.a.createElement(O,null)),2===n&&r.a.createElement(P,null,r.a.createElement(x,null)))},I=a(55),J=a(112),_=Object(i.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(I.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}});var K=function(){var e=_();return r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{position:"static"},r.a.createElement(J.a,null,r.a.createElement(b.a,{className:e.title,variant:"h6",color:"inherit",noWrap:!0},"UK Police Data Cell"))))};var R=function(){return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[64,1,2]]]);
//# sourceMappingURL=main.772ca207.chunk.js.map
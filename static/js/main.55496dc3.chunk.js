(this.webpackJsonpapp2=this.webpackJsonpapp2||[]).push([[0],{75:function(e,t,a){e.exports=a(90)},80:function(e,t,a){},87:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(80),a(13)),c=a(11),u=a(19),s=a(18),d=a(30),m=a(10),p=a(26),f=a.n(p),b=a(35),h=new function e(){var t=this;Object(i.a)(this,e),this.isLoggedIn=function(){return"true"===t.get("isLoggedIn")},this.set=function(e,t){return localStorage.setItem(e,t)},this.get=function(e){return t.getLocalStorage(e)},this.getLocalStorage=function(e){var t=localStorage.getItem(e);return t||null},this.login=function(){var e=Object(b.a)(f.a.mark((function e(a,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.set("isLoggedIn",!0),e.abrupt("return",!0);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.logout=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.isLoggedIn()&&t.set("isLoggedIn",!1);case 1:case"end":return e.stop()}}),e)})))},v=function(e){return h.isLoggedIn()?e.children:r.a.createElement(m.a,{to:"/login"})},E=a(17),g=a(127),y=a(141),O=a(132),j=Object(g.a)((function(e){return{root:{display:"flex","align-items":"center","justify-content":"center"},form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"300px"},"& .MuiButton-root":{margin:e.spacing(1),width:"300px"}}}}));function x(e){var t=j();return r.a.createElement("div",{className:t.root},r.a.createElement("form",{className:t.form,noValidate:!0,autoComplete:"off"},r.a.createElement("h1",null,"\u30ed\u30b0\u30a4\u30f3"),r.a.createElement("div",null,r.a.createElement(y.a,{id:"standard",label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"})),r.a.createElement("div",null,r.a.createElement(y.a,{id:"standard-password-input",label:"\u30d1\u30b9\u30ef\u30fc\u30c9",type:"password",autoComplete:"current-password"})),r.a.createElement("div",null,r.a.createElement(O.a,{variant:"contained",onClick:e.buttonClick},"\u30ed\u30b0\u30a4\u30f3"))))}var k=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).click=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.login(n.state.email,n.state.password);case 3:n.props.history.push({pathname:"/"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n.setState({errMessage:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304b\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9055\u3044\u307e\u3059"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.handleChange=function(e){n.setState(Object(E.a)({},e.target.id,e.target.value))},n.state={email:"",password:"",errMessage:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(x,{buttonClick:this.click})}}]),a}(n.Component),w=Object(m.g)(k),N=a(133),C=a(134),q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.logout();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.a,{className:"center"},r.a.createElement(C.a,{className:"justify-content-md-center"},r.a.createElement("div",null,r.a.createElement("h2",null,"\u30ed\u30b0\u30a2\u30a6\u30c8\u3057\u307e\u3057\u305f"),r.a.createElement("div",{className:"text-center"},r.a.createElement(d.b,{to:"/login"},"\u30ed\u30b0\u30a4\u30f3\u753b\u9762\u3078")))))}}]),a}(n.Component),S=Object(g.a)((function(e){return{root:{display:"flex","align-items":"center","justify-content":"center"}}}));function I(e){var t=S();return r.a.createElement("div",{className:t.root},"page Home")}var L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(I,null)}}]),a}(n.Component),V=Object(g.a)((function(e){return{root:{display:"flex","align-items":"center","justify-content":"center"}}}));function H(e){var t=V();return r.a.createElement("div",{className:t.root},"List1")}var T=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(H,null)}}]),a}(n.Component),W=Object(g.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function P(e){var t=W();return r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement("div",null,r.a.createElement(y.a,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World"}),r.a.createElement(y.a,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World"}),r.a.createElement(y.a,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password"}),r.a.createElement(y.a,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),r.a.createElement(y.a,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),r.a.createElement(y.a,{id:"standard-search",label:"Search field",type:"search"}),r.a.createElement(y.a,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})),r.a.createElement("div",null,r.a.createElement(y.a,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),r.a.createElement(y.a,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),r.a.createElement(y.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),r.a.createElement(y.a,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),r.a.createElement(y.a,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),r.a.createElement(y.a,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),r.a.createElement(y.a,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"})),r.a.createElement("div",null,r.a.createElement(y.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World",variant:"outlined"}),r.a.createElement(y.a,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World",variant:"outlined"}),r.a.createElement(y.a,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined"}),r.a.createElement(y.a,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"outlined"}),r.a.createElement(y.a,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"outlined"}),r.a.createElement(y.a,{id:"outlined-search",label:"Search field",type:"search",variant:"outlined"}),r.a.createElement(y.a,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"outlined"})))}var D=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(P,null)}}]),a}(n.Component),M=a(22);a(87);function R(e){return r.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderSquare",value:function(e){var t=this;return r.a.createElement(R,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(r.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(c.a)(a,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),a=t[t.length-1].squares.slice();F(a)||a[e]||(a[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:a}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,a=this.state.history,n=a[this.state.stepNumber],l=F(n.squares),o=a.map((function(e,a){var n=a?"Go to move #"+a:"Go to game start";return r.a.createElement("li",{key:a},r.a.createElement("button",{onClick:function(){return t.jumpTo(a)}},n))}));return e=l?"Winner: "+l:"Next player: "+(this.state.xIsNext?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(B,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,o)))}}]),a}(r.a.Component);function F(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(M.a)(t[a],3),r=n[0],l=n[1],o=n[2];if(e[r]&&e[r]===e[l]&&e[r]===e[o])return e[r]}return null}var A=a(56),J=a(138),X=a(139),K=a(52),$=a(140),z=a(67),Q=a.n(z),U=a(135),Y=a(143),Z=a(131),_=a(136),ee=a(137),te=Object(g.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250},logoutLink:{color:"white","text-decoration":"none","&:hover":{color:"white","text-decoration":"none"}},menuLink:{color:"#3f51b5","text-decoration":"none","&:hover":{color:"#3f51b5","text-decoration":"none"}}}}));function ae(){var e=te(),t=r.a.useState({left:!1}),a=Object(M.a)(t,2),n=a[0],l=a[1],o=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(A.a)(Object(A.a)({},n),{},Object(E.a)({},e,t)))}},i=r.a.createElement("div",{className:e.list,role:"presentation",onClick:o("left",!1),onKeyDown:o("left",!1)},r.a.createElement(Z.a,{subheader:r.a.createElement(U.a,{component:"div",id:"nested-list-subheader"}," Menu ")},[{name:"Home",path:"/"},{name:"List1",path:"/list1"},{name:"List2",path:"/list2"},{name:"Tutorial",path:"/Tutorial"}].map((function(t,a){return r.a.createElement(d.b,{to:t.path,className:e.menuLink},r.a.createElement(_.a,{button:!0,key:t.name},r.a.createElement(ee.a,{primary:t.name})))}))));return r.a.createElement("div",{className:e.root},r.a.createElement(J.a,{position:"static"},r.a.createElement(X.a,null,r.a.createElement($.a,{edge:"start",className:e.menuButton,onClick:o("left",!0),color:"inherit","aria-label":"menu"}," ",r.a.createElement(Q.a,null)," "),r.a.createElement(r.a.Fragment,{key:"left"},r.a.createElement(Y.a,{anchor:"left",open:n.left,onClose:o("left",!1)},i)),r.a.createElement(K.a,{variant:"h6",className:e.title}," My App "),r.a.createElement(d.b,{to:"/logout",className:e.logoutLink},"Logout"))))}var ne=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/login",component:w}),r.a.createElement(m.b,{exact:!0,path:"/logout",component:q}),r.a.createElement(v,null,r.a.createElement(ae,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:L}),r.a.createElement(m.b,{exact:!0,path:"/list1",component:T}),r.a.createElement(m.b,{exact:!0,path:"/list2",component:D}),r.a.createElement(m.b,{exact:!0,path:"/tutorial",component:G}),r.a.createElement(m.a,{from:"/",to:"/"})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.55496dc3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__242NY",BreadTop:"BurgerIngredient_BreadTop__3VdvA",Seeds1:"BurgerIngredient_Seeds1__3-jCy",Seeds2:"BurgerIngredient_Seeds2__2_J1O",Meat:"BurgerIngredient_Meat__2I1mv",Cheese:"BurgerIngredient_Cheese__1oQjL",Salad:"BurgerIngredient_Salad__3TJvv",Bacon:"BurgerIngredient_Bacon__2bJND"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__1Hpuu",Open:"SideDrawer_Open__2HAD7",Close:"SideDrawer_Close__U67Wk",Logo:"SideDrawer_Logo__3S8eo"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__RNvWm",Label:"BuildControl_Label__3h0n3",Less:"BuildControl_Less__1USYQ",More:"BuildControl_More__3bcCu"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__14jZZ",Logo:"Toolbar_Logo__sir_L",DesktopOnly:"Toolbar_DesktopOnly__2gstT"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3HdYz",active:"NavigationItem_active__1x3QC"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__zFDXh",OrderButton:"BuildControls_OrderButton__NxMu_",enable:"BuildControls_enable__3s0-Y"}},function(e,t,a){e.exports={Button:"Button_Button__3RfhT",Success:"Button_Success__2US_7",Danger:"Button_Danger__1nsNO"}},,,function(e,t,a){e.exports={Content:"Layout_Content__dfXke"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo_Logo__3NV0D"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__9ve9Z"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3mkkR"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2CUjV"}},function(e,t,a){e.exports={Burger:"Burger_Burger__ohB7_"}},function(e,t,a){e.exports={Modal:"Modal_Modal__2QuL8"}},,function(e,t,a){e.exports=a(33)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=(a(31),a(32),a(1)),i=a(2),s=a(4),d=a(3),u=a(5),m=function(e){return e.children},p=a(16),h=a.n(p),g=a(9),_=a.n(g),b=a(17),v=a.n(b),f=a(18),E=a.n(f),C=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:v.a,alt:"MyBurger"}))},B=a(19),k=a.n(B),w=a(11),y=a.n(w),N=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},O=function(e){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(N,{link:"/",active:!0},"Burger Builder"),r.a.createElement(N,{link:"/"},"Checkout"))},S=a(20),j=a.n(S),D=function(e){return r.a.createElement("div",{onClick:e.clicked,className:j.a.DrawerToggle},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},T=function(e){return r.a.createElement("header",{className:_.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:_.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:_.a.DesktopOnly},r.a.createElement(O,null)))},I=a(7),L=a.n(I),x=a(21),H=a.n(x),M=function(e){return e.show?r.a.createElement("div",{className:H.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),r.a.createElement(m,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:L.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(O,null))))},U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(T,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(P,{closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),r.a.createElement("main",{className:h.a.Content},this.props.children))}}]),t}(n.Component),A=a(10),Y=a(24),R=a(22),J=a.n(R),W=a(6),Q=a.n(W),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:Q.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:Q.a.BreadTop},r.a.createElement("div",{className:Q.a.Seeds1}),r.a.createElement("div",{className:Q.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:Q.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:Q.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:Q.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:Q.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),F=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(Y.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(z,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:J.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},V=a(12),Z=a.n(V),X=a(8),$=a.n(X),q=function(e){return r.a.createElement("div",{className:$.a.BuildControl},r.a.createElement("div",{className:$.a.Label},e.label),r.a.createElement("button",{className:$.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:$.a.More,onClick:e.added},"More"))},G=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],K=function(e){return r.a.createElement("div",{className:Z.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),G.map(function(t){return r.a.createElement(q,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ee=a(23),te=a.n(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentDidUpdate",value:function(){console.log("[Modal] Did Update")}},{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),ne=a(13),re=a.n(ne),le=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},oe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){console.log("[OrderSummary] DidUpdate")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(n.Component),ce={salad:.5,cheese:.4,meat:1.3,bacon:.7},ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.updatePurchaseState=function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);a.setState({purchasable:t>0})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(A.a)({},a.state.ingredients);n[e]=t;var r=ce[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(A.a)({},a.state.ingredients);r[e]=n;var l=ce[e],o=a.state.totalPrice-l;a.setState({totalPrice:o,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(oe,{ingredients:this.state.ingredients,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),r.a.createElement(F,{ingredients:this.state.ingredients}),r.a.createElement(K,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler}))}}]),t}(n.Component);var se=function(){return r.a.createElement("div",null,r.a.createElement(U,null,r.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,1,2]]]);
//# sourceMappingURL=main.8df9e6e4.chunk.js.map
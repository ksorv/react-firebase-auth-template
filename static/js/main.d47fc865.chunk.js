(this["webpackJsonpreact-firebase-auth-template"]=this["webpackJsonpreact-firebase-auth-template"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),s=a.n(o);a(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(18),i=a(32),c=(a(91),r.a.createContext(null)),u=a(13),d=a(15),m=a(16),h=a(17),p=r.a.createContext(null),w=function(e){return function(t){return r.a.createElement(p.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},E=p,b=a(54),g=a.n(b),f=(a(92),a(94),{apiKey:"AIzaSyDz54za_Fht_PNM4jhFsxvhDuP4xQu_DSg",authDomain:"react-firebase-auth-temp.firebaseapp.com",databaseURL:"https://react-firebase-auth-temp.firebaseio.com",projectId:"react-firebase-auth-temp",storageBucket:"react-firebase-auth-temp.appspot.com",messagingSenderId:"814457360561",appId:"1:814457360561:web:0872a03bd8d64adb0f9290",measurementId:"G-RYELS3CLFP"}),v=function e(){var t=this;Object(u.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},g.a.initializeApp(f),this.auth=g.a.auth(),this.db=g.a.database()},x=function(e){var t=function(t){Object(h.a)(n,t);var a=Object(m.a)(n);function n(e){var t;return Object(u.a)(this,n),(t=a.call(this,e)).state={authUser:null},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){t?e.setState({authUser:t}):e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(c.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return w(t)},O=a(40),C=function(e){return function(t){var a=function(a){Object(h.a)(o,a);var n=Object(m.a)(o);function o(){return Object(u.a)(this,o),n.apply(this,arguments)}return Object(d.a)(o,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(c.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),o}(r.a.Component);return Object(O.a)(i.e,w)(a)}},P=w((function(e){var t=e.firebase;return r.a.createElement("button",{onClick:function(){return t.doSignOut()},className:"signout"},"Sign Out")})),S=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/home"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/account"},"Account")),r.a.createElement(P,null)))},j=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Landing"))))},y=function(){return r.a.createElement("div",null,r.a.createElement(c.Consumer,null,(function(e){return e?r.a.createElement(S,null):r.a.createElement(j,null)})))},k=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Landing"))},D=a(21),F=a(23),A=a(134),U=a(132),M=a(129),W=a(131),I=a(135),B=a(136),R=a(30),T=a.n(R),z=a(31),L=a.n(z),H=a(137),N=a(138),_={username:"",email:"",passwordOne:"",passwordTwo:"",showPassword:"",error:""},J=Object(A.a)(M.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:"10px",width:"150px",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),G=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleClickShowPassword=function(){n.setState({showPassword:!n.state.showPassword})},n.handleMouseDownPassword=function(e){e.preventDefault()},n.onChange=function(e){n.setState(Object(F.a)({},e.target.name,e.target.value))},n.onSubmit=function(e){e.preventDefault();var t=n.state,a=(t.username,t.email),r=t.passwordOne;n.props.firebase.doCreateUserWithEmailAndPassword(a,r).then((function(e){n.setState(Object(D.a)({},_)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})}))},n.state=Object(D.a)({},_),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,o=e.passwordTwo,s=e.error,l=n!==o||""===n||""===a||""===t;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit,style:{margin:"10px"}},r.a.createElement("div",null,r.a.createElement(U.a,{name:"username",label:"Full Name",value:t,variant:"outlined",onChange:this.onChange,style:{margin:"10px",width:"250px"}}),r.a.createElement(U.a,{name:"email",label:"Email Address",value:a,variant:"outlined",onChange:this.onChange,style:{margin:"10px",width:"250px"}})),r.a.createElement("div",null,r.a.createElement(B.a,{style:{margin:"10px",width:"250px"},variant:"outlined"},r.a.createElement(H.a,{htmlFor:"outlined-adornment-passwordone"},"Password"),r.a.createElement(I.a,{id:"outlined-adornment-passwordone",name:"passwordOne",type:this.state.showPassword?"text":"password",value:this.state.passwordOne,onChange:this.onChange,endAdornment:r.a.createElement(N.a,{position:"end"},r.a.createElement(W.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,onMouseDown:this.handleMouseDownPassword,edge:"end"},this.state.showPassword?r.a.createElement(T.a,null):r.a.createElement(L.a,null))),labelWidth:70})),r.a.createElement(B.a,{style:{margin:"10px",width:"250px"},variant:"outlined"},r.a.createElement(H.a,{htmlFor:"outlined-adornment-passwordtwo"},"Confirm Password"),r.a.createElement(I.a,{id:"outlined-adornment-passwordtwo",name:"passwordTwo",type:this.state.showPassword?"text":"password",value:this.state.passwordTwo,onChange:this.onChange,endAdornment:r.a.createElement(N.a,{position:"end"},r.a.createElement(W.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,onMouseDown:this.handleMouseDownPassword,edge:"end"},this.state.showPassword?r.a.createElement(T.a,null):r.a.createElement(L.a,null))),labelWidth:70}))),r.a.createElement("div",null,r.a.createElement(J,{disabled:l,size:"large",type:"submit",variant:"contained",color:"secondary"},"Sign Up")),s&&r.a.createElement("p",null,s.message)))}}]),a}(r.a.Component),K=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(l.b,{to:"/signup"},"Sign Up"))},Q=Object(O.a)(i.e,w)(G),Y=function(){return r.a.createElement("center",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(Q,null))},$={email:"",error:null},q=Object(A.a)(M.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:"10px",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),V=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(D.a)({},$))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(F.a)({},e.target.name,e.target.value))},n.state=Object(D.a)({},$),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",null,r.a.createElement(U.a,{name:"email",label:"Email Address",value:t,variant:"outlined",onChange:this.onChange,style:{margin:"10px",width:"250px"}})),r.a.createElement(q,{disabled:n,size:"large",type:"submit",variant:"contained",color:"secondary"},"Reset Password"),a&&r.a.createElement("p",null,a.message))}}]),a}(n.Component),X=function(){return r.a.createElement("p",null,r.a.createElement(l.b,{to:"/resetpassword"},"Forgot Password"))},Z=w(V),ee=function(){return r.a.createElement("center",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(Z,null))},te={email:"",password:"",showPassword:"",error:null},ae=Object(A.a)(M.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:"10px",width:"150px",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),ne=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleClickShowPassword=function(){n.setState({showPassword:!n.state.showPassword})},n.handleMouseDownPassword=function(e){e.preventDefault()},n.onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(D.a)({},te)),n.props.history.push("/home")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(F.a)({},e.target.name,e.target.value))},n.state=Object(D.a)({},te),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,o=""===a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",null,r.a.createElement(U.a,{name:"email",label:"Email Address",value:t,variant:"outlined",onChange:this.onChange,style:{margin:"10px",width:"250px"}})),r.a.createElement("div",null,r.a.createElement(B.a,{style:{margin:"10px",width:"250px"},variant:"outlined"},r.a.createElement(H.a,{htmlFor:"outlined-adornment-password"},"Password"),r.a.createElement(I.a,{id:"outlined-adornment-password",name:"password",type:this.state.showPassword?"text":"password",value:this.state.password,onChange:this.onChange,endAdornment:r.a.createElement(N.a,{position:"end"},r.a.createElement(W.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,onMouseDown:this.handleMouseDownPassword,edge:"end"},this.state.showPassword?r.a.createElement(T.a,null):r.a.createElement(L.a,null))),labelWidth:70}))),r.a.createElement(ae,{disabled:o,size:"large",type:"submit",variant:"contained",color:"secondary"},"Sign In"),n&&r.a.createElement("p",null,n.message))}}]),a}(r.a.Component),re=Object(O.a)(i.e,w)(ne),oe=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(re,null),r.a.createElement(X,null),r.a.createElement(K,null)))},se=C((function(e){return!!e}))((function(){return r.a.createElement("center",null,r.a.createElement("h1",null,"This is Home."),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."))})),le=Object(A.a)(M.a)({background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:"10px",width:"150px",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),ie={passwordOne:"",passwordTwo:"",error:null},ce=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(D.a)({},ie))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(F.a)({},e.target.name,e.target.value))},n.state=Object(D.a)({},ie),n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,o=t!==a||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",null,r.a.createElement(B.a,{style:{margin:"10px",width:"250px"},variant:"outlined"},r.a.createElement(H.a,{htmlFor:"outlined-adornment-passwordone"},"Password"),r.a.createElement(I.a,{id:"outlined-adornment-passwordone",name:"passwordOne",type:this.state.showPassword?"text":"password",value:this.state.passwordOne,onChange:this.onChange,endAdornment:r.a.createElement(N.a,{position:"end"},r.a.createElement(W.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,onMouseDown:this.handleMouseDownPassword,edge:"end"},this.state.showPassword?r.a.createElement(T.a,null):r.a.createElement(L.a,null))),labelWidth:70})),r.a.createElement(B.a,{style:{margin:"10px",width:"250px"},variant:"outlined"},r.a.createElement(H.a,{htmlFor:"outlined-adornment-passwordtwo"},"Confirm Password"),r.a.createElement(I.a,{id:"outlined-adornment-passwordtwo",name:"passwordTwo",type:this.state.showPassword?"text":"password",value:this.state.passwordTwo,onChange:this.onChange,endAdornment:r.a.createElement(N.a,{position:"end"},r.a.createElement(W.a,{"aria-label":"toggle password visibility",onClick:this.handleClickShowPassword,onMouseDown:this.handleMouseDownPassword,edge:"end"},this.state.showPassword?r.a.createElement(T.a,null):r.a.createElement(L.a,null))),labelWidth:70}))),r.a.createElement("div",null,r.a.createElement(le,{disabled:o,size:"large",type:"submit",variant:"contained",color:"secondary"},"Change")),n&&r.a.createElement("p",null,n.message))}}]),a}(n.Component),ue=w(ce),de=C((function(e){return!!e}))((function(){return r.a.createElement(c.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(Z,null),r.a.createElement(ue,null))}))})),me=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),"I can add users here, but i wont.")}}]),a}(n.Component),he=x((function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("hr",null),r.a.createElement(i.a,{exact:!0,path:"/",component:k}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:Y}),r.a.createElement(i.a,{exact:!0,path:"/signin",component:oe}),r.a.createElement(i.a,{exact:!0,path:"/home",component:se}),r.a.createElement(i.a,{exact:!0,path:"/account",component:de}),r.a.createElement(i.a,{exact:!0,path:"/admin",component:me}),r.a.createElement(i.a,{exact:!0,path:"/resetpassword",component:ee})))}));s.a.render(r.a.createElement(E.Provider,{value:new v},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(103)},90:function(e,t,a){},91:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.d47fc865.chunk.js.map
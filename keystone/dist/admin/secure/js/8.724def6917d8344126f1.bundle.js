(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{269:function(t,s,i){"use strict";i.r(s);var e=i(14),a=i(261);i(113),i(176),i(262);class h extends a.a{constructor(...t){super(...t),Object(e.a)(this,"getFilterGraphQL",({type:t,value:s})=>({[`${this.path}_${t}`]:s})),Object(e.a)(this,"getFilterLabel",()=>""+this.label),Object(e.a)(this,"formatFilter",({value:t})=>`${this.label} ${t?"is set":"is not set"}`),Object(e.a)(this,"getQueryFragment",()=>this.path+"_is_set"),Object(e.a)(this,"getFilterTypes",()=>[{type:"is_set",label:"Is Set",getInitialValue:()=>!0}]),Object(e.a)(this,"serialize",t=>t[this.path]?t[this.path].inputPassword:void 0),Object(e.a)(this,"validateInput",({originalInput:t,addFieldValidationError:s})=>{const{minLength:i}=this.config;if(this.isRequired){if(!t[this.path]||!t[this.path].inputPassword)return s("Password is required")}else if(!t[this.path]||!t[this.path].inputPassword)return;return t[this.path].inputPassword.length<i?s(`Password must be at least ${i} characters`):t[this.path].inputPassword!==t[this.path].inputConfirm?s("Passwords do not match"):void 0})}}s.default=h}}]);
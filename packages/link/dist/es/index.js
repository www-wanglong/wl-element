var e={name:"WlLink",props:{href:{type:String},disabled:{type:Boolean,default:!1},underline:{type:Boolean,default:!1}}};function t(e,t,n,o,s,i,a,d,r,l){"boolean"!=typeof a&&(r=d,d=a,a=!1);const c="function"==typeof n?n.options:n;let u;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),o&&(c._scopeId=o),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):t&&(u=a?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),u)if(c.functional){const e=c.render;c.render=function(t,n){return u.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,u):[u]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,t)=>function(e,t){const o=n?t.media||"default":e,a=i[o]||(i[o]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",t.media&&a.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(n),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const e=a.ids.size-1,t=document.createTextNode(n),o=a.element.childNodes;o[e]&&a.element.removeChild(o[e]),o.length?a.element.insertBefore(t,o[e]):a.element.appendChild(t)}}}(e,t)}let s;const i={};const a=t({render:function(){var e=this.$createElement;return(this._self._c||e)("a",{class:[this.disabled&&"disabled",!this.underline&&"no-underline"],attrs:{href:this.disabled?null:this.href}},[this._t("default")],2)},staticRenderFns:[]},(function(e){e&&e("data-v-6a0e1df6_0",{source:".disabled[data-v-6a0e1df6]{cursor:not-allowed}.no-underline[data-v-6a0e1df6]{text-decoration:none}",map:void 0,media:void 0})}),e,"data-v-6a0e1df6",!1,void 0,!1,o,void 0,void 0);a.install=e=>{e.component(a.name,a)};export{a as default};
"use strict";function t(t,e,n,o,i,s,r,a,d,p){"boolean"!=typeof r&&(d=a,a=r,r=!1);const c="function"==typeof n?n.options:n;let l;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),o&&(c._scopeId=o),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):e&&(l=r?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),l)if(c.functional){const t=c.render;c.render=function(e,n){return l.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,l):[l]}return n}const e=t({render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",this._b({attrs:{type:this.type},domProps:{value:this.value},on:{input:this.handleInput}},"input",this.$attrs,!1))])},staticRenderFns:[]},void 0,{name:"WlInput",inheritAttrs:!1,props:{value:{type:String},type:{type:String,default:"text"}},methods:{handleInput(t){this.$emit("input",t.target.value);const e=(t=>{for(;t&&"WlFormItem"!==t.$options.name;)t=t.$parent;return t})(this.$parent);e&&e.$emit("validate")}}},void 0,!1,void 0,!1,void 0,void 0,void 0);e.install=t=>{t.component(e.name,e)},module.exports=e;

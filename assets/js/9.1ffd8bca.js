(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{166:function(t,e,n){},170:function(t,e,n){"use strict";var r=n(166);n.n(r).a},5:function(t,e,n){"use strict";n.r(e);var r={props:{url:{type:String,required:!0},caption:{type:String,required:!0},indicator:String}},i=n(0),s=Object(i.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._v("\n  "+this._s(this.caption)+"\n  "),"true"===this.indicator?e("OutboundLink"):this._e()],1)},[],!1,null,null,null);e.default=s.exports},52:function(t,e,n){"use strict";n.r(e);var r={components:{ExternalLink:n(5).default},computed:{price:function(){var t=this.$page.frontmatter.price;return t&&0!==t?(t+=" €",t):"Free"}}},i=(n(170),n(0)),s=Object(i.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ticket--container"},[e("span",{staticClass:"ticket--price"},[this._v("\n    Cost: "+this._s(this.price)+"\n  ")]),this.$page.frontmatter.tickets?e("span",{staticClass:"button"},[e("ExternalLink",{attrs:{url:this.$page.frontmatter.tickets,caption:"Website",indicator:"true"}})],1):this._e()])},[],!1,null,null,null);e.default=s.exports}}]);
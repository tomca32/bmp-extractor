(window["webpackJsonpbmp-extractor"]=window["webpackJsonpbmp-extractor"]||[]).push([[0],{27:function(e,t,n){e.exports=n(73)},32:function(e,t,n){},36:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(23),c=n.n(r),i=(n(32),n(7)),d=n(8),s=n(10),l=n(9),u=n(11),p=n(6),h=(n(36),n(24)),f=n.n(h),m=n(12),w=n.n(m),v=n(25),b=n.n(v),g=n(26),j=n.n(g),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){if(j()(this.props.decoded))return a.a.createElement("div",null);var e=w()(this.props.decoded.data,4).map(function(e){return 0===b()(e)?0:1}),t=new RegExp(".{".concat(this.props.decoded.width,"}"),"g");console.log(this.props.decoded.width,t);var n=e.join("").replace(t,function(e){return"".concat(e,"\n")}),o=w()(e,8);console.log(o);var r=o.map(function(e){return parseInt(e.join(""),2)}).map(function(e){return e.toString(16).padStart(2,"0")}),c=new RegExp(".{".concat(this.props.decoded.width/4,"}"),"g"),i=r.join("").replace(c,function(e){return"".concat(e,"\n")});return a.a.createElement("div",null,a.a.createElement("pre",{style:{"font-size":"6px"}},n),a.a.createElement("pre",null,i))}}]),t}(a.a.Component),O=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).state={decoded:{}},e}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleFiles",value:function(e){var t=this,n={},o=e.target.files[0];console.log(o),o.arrayBuffer().then(function(e){n=f.a.decode(p.Buffer.from(e)),console.log(n),t.setState({decoded:n})})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("input",{type:"file",id:"input",onChange:this.handleFiles.bind(this)}),a.a.createElement(E,{decoded:this.state.decoded}))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.5f7a6792.chunk.js.map
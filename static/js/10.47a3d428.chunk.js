(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[10],{133:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(11),l=a(0),r=a.n(l),i=a(14),c=a(194),o=a(137),s=a.n(o),u=a(34),m=a(109),p=Object(m.a)((function(e){var t;return{titleContainer:(t={display:"flex",position:"relative"},Object(n.a)(t,e.breakpoints.up("lg"),{flexDirection:"left"}),Object(n.a)(t,e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),t),button:Object(n.a)({},e.breakpoints.down("md"),{position:"absolute",left:"0"})}}));function d(e){var t=e.title,a=p(),n=Object(i.d)();return r.a.createElement("div",{className:a.titleContainer},r.a.createElement(c.a,{className:a.button,onClick:function(){return n.goBack()}},r.a.createElement(s.a,null)),r.a.createElement(u.a,{variant:"h4"},t))}},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),l=a.n(n),r=a(43),i=a(423),c=a(413),o=a(414),s=a(252),u=a.n(s),m=a(253),p=a.n(m);var d=function(e){var t=e.className,a=e.label,s=Object(n.useState)(""),m=Object(r.a)(s,2),d=m[0],f=m[1],b=Object(n.useState)(!1),x=Object(r.a)(b,2),y=x[0],v=x[1],E={endAdornment:l.a.createElement(c.a,null,l.a.createElement(o.a,{onClick:function(){v(!y)}},y?l.a.createElement(u.a,null):l.a.createElement(p.a,null)))};return l.a.createElement(i.a,{className:t,fullWidth:!0,InputProps:E,variant:"outlined",InputLabelProps:{shrink:!0},type:y?"text":"password",label:a,onChange:function(e){f(e.target.value)},value:d})};var f=function(e){var t=e.className,a=e.label,c=e.type,o=Object(n.useState)(""),s=Object(r.a)(o,2),u=s[0],m=s[1];return l.a.createElement(i.a,{className:t,fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},label:a,type:c,onChange:function(e){m(e.target.value)},value:u})};function b(e){var t=e.className,a=e.label,n=e.type;switch(n){case"password":return l.a.createElement(d,{className:t,label:a});default:return l.a.createElement(f,{className:t,label:a,type:n})}}},412:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(0),l=a.n(n),r=a(197),i=a(133),c=a(109),o=a(194),s=a(134),u=a(428),m=a(416),p=Object(c.a)((function(){return{textFieldContainer:{display:"flex",flexDirection:"column",alignItems:"center",margin:"1em 0"},textField:{margin:"0.5em 0"},contentContainer:{margin:"1em"}}}));function d(){var e=p();return l.a.createElement("div",null,l.a.createElement(i.a,{title:"Basic Message"}),l.a.createElement("div",null,l.a.createElement(s.a,null)),l.a.createElement("div",{className:e.contentContainer},l.a.createElement(u.a,{variant:"outlined",severity:"warning"},l.a.createElement(m.a,null,"Warning"),"Once KYC is certified, you ",l.a.createElement("strong",null,"can not")," modify information like name or address by yourself"),l.a.createElement("div",{className:e.textFieldContainer},[{text:"E-mail",type:"text"},{text:"First name",type:"text"},{text:"Last name",type:"text"},{text:"Address",type:"text"},{text:"Postal",type:"text"},{text:"County",type:"text"},{text:"City",type:"text"},{text:"Country",type:"text"},{text:"Phone",type:"text"},{text:"Birthday",type:"date"}].map((function(t,a){return l.a.createElement(r.a,{className:e.textField,label:t.text,type:t.type,key:a})}))),l.a.createElement(o.a,{variant:"contained",color:"primary"},"Submit")))}}}]);
//# sourceMappingURL=10.47a3d428.chunk.js.map
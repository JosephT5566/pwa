(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[7],{133:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var o=t(11),n=t(0),i=t.n(n),r=t(14),l=t(194),c=t(137),d=t.n(c),s=t(34),p=t(109),b=Object(p.a)((function(e){var a;return{titleContainer:(a={display:"flex",position:"relative"},Object(o.a)(a,e.breakpoints.up("lg"),{flexDirection:"left"}),Object(o.a)(a,e.breakpoints.down("md"),{flexDirection:"column",alignItems:"center"}),a),button:Object(o.a)({},e.breakpoints.down("md"),{position:"absolute",left:"0"})}}));function u(e){var a=e.title,t=b(),o=Object(r.d)();return i.a.createElement("div",{className:t.titleContainer},i.a.createElement(l.a,{className:t.button,onClick:function(){return o.goBack()}},i.a.createElement(d.a,null)),i.a.createElement(s.a,{variant:"h4"},a))}},134:function(e,a,t){"use strict";var o=t(1),n=t(3),i=t(0),r=(t(2),t(4)),l=t(5),c=t(27),d=i.forwardRef((function(e,a){var t=e.absolute,l=void 0!==t&&t,c=e.classes,d=e.className,s=e.component,p=void 0===s?"hr":s,b=e.flexItem,u=void 0!==b&&b,m=e.light,h=void 0!==m&&m,v=e.orientation,g=void 0===v?"horizontal":v,f=e.role,x=void 0===f?"hr"!==p?"separator":void 0:f,y=e.variant,S=void 0===y?"fullWidth":y,k=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(p,Object(o.a)({className:Object(r.a)(c.root,d,"fullWidth"!==S&&c[S],l&&c.absolute,u&&c.flexItem,h&&c.light,"vertical"===g&&c.vertical),role:x,ref:a},k))}));a.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(d)},137:function(e,a,t){"use strict";var o=t(22);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t(0)),i=(0,o(t(28)).default)(n.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");a.default=i},194:function(e,a,t){"use strict";var o=t(3),n=t(1),i=t(0),r=(t(2),t(4)),l=t(5),c=t(27),d=t(60),s=t(9),p=i.forwardRef((function(e,a){var t=e.children,l=e.classes,c=e.className,p=e.color,b=void 0===p?"default":p,u=e.component,m=void 0===u?"button":u,h=e.disabled,v=void 0!==h&&h,g=e.disableElevation,f=void 0!==g&&g,x=e.disableFocusRipple,y=void 0!==x&&x,S=e.endIcon,k=e.focusVisibleClassName,C=e.fullWidth,O=void 0!==C&&C,j=e.size,w=void 0===j?"medium":j,z=e.startIcon,E=e.type,N=void 0===E?"button":E,I=e.variant,R=void 0===I?"text":I,L=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),W=z&&i.createElement("span",{className:Object(r.a)(l.startIcon,l["iconSize".concat(Object(s.a)(w))])},z),$=S&&i.createElement("span",{className:Object(r.a)(l.endIcon,l["iconSize".concat(Object(s.a)(w))])},S);return i.createElement(d.a,Object(n.a)({className:Object(r.a)(l.root,l[R],c,"inherit"===b?l.colorInherit:"default"!==b&&l["".concat(R).concat(Object(s.a)(b))],"medium"!==w&&[l["".concat(R,"Size").concat(Object(s.a)(w))],l["size".concat(Object(s.a)(w))]],f&&l.disableElevation,v&&l.disabled,O&&l.fullWidth),component:m,disabled:v,focusRipple:!y,focusVisibleClassName:Object(r.a)(l.focusVisible,k),ref:a,type:N},L),i.createElement("span",{className:l.label},W,t,$))}));a.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},419:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var o=t(0),n=t.n(o),i=t(133),r=t(109),l=t(134),c=t(194),d=Object(r.a)((function(e){return{buttonsContainer:{display:"flex",flexDirection:"column"},button:{display:"flex",padding:"5px 5% 5px 5%",justifyItems:"center",justifyContent:"center"}}}));function s(){var e=d(),a=function(e){console.log(e.target.value)};return n.a.createElement("div",null,n.a.createElement(i.a,{title:"Documents"}),n.a.createElement(l.a,null),n.a.createElement("div",{className:e.buttonsContainer},n.a.createElement("div",{className:e.button},n.a.createElement(c.a,{variant:"contained",fullWidth:!0,value:"basic",onClick:a},"Terms and conditions")),n.a.createElement("div",{className:e.button},n.a.createElement(c.a,{variant:"contained",fullWidth:!0,value:"upload",onClick:a},"Private policy")),n.a.createElement("div",{className:e.button},n.a.createElement(c.a,{variant:"contained",fullWidth:!0,value:"doc",onClick:a},"Anti-fraud policy")),n.a.createElement("div",{className:e.button},n.a.createElement(c.a,{variant:"contained",fullWidth:!0,value:"about",onClick:a},"Income disclaimer")),n.a.createElement("div",{className:e.button},n.a.createElement(c.a,{variant:"contained",fullWidth:!0,value:"about",onClick:a},"consent"))))}}}]);
//# sourceMappingURL=7.4300afe7.chunk.js.map
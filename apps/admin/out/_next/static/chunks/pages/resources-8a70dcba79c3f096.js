(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3584],{68918:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});var n=r(78161),i=r(2784),s=r(87656),a=r(52322);let o=e=>{let{color:t="black",size:r=24,...n}=e;return(0,a.jsxs)(s.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...n,children:[(0,a.jsx)(s.Path,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",stroke:`${t}`}),(0,a.jsx)(s.Polyline,{points:"15 3 21 3 21 9",stroke:`${t}`}),(0,a.jsx)(s.Line,{x1:"10",x2:"21",y1:"14",y2:"3",stroke:`${t}`})]})};o.displayName="ExternalLink";let l=(0,i.memo)((0,n.H)(o))},34085:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return r(26920)}])},26920:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return q}});var n=r(52322),i=r(30195),s=r(75370),a=r(54283);let o=s.V_.object({name:i.z.string().hint("catalog, tutorial, invoice...").search(),description:i.z.string().search(),url:i.z.string().label("url").hint("http://...").static().search(),type:i.z.union([i.z.literal("text"),i.z.literal("video"),i.z.literal("image"),i.z.literal("code"),i.z.literal("youtube"),i.z.literal("pdf")]).search(),tags:i.z.array(i.z.string()).search()}),l=i.z.object({...s.Pp.shape,...o.shape});class u extends a.J{list(e){if(!e)return this.read();if(e.startsWith("tags:")){let t=e.slice(5).split(",").map(e=>e.trim().toLowerCase());if(t.every(e=>this.data.tags.includes(e.toLowerCase())))return this.read()}else{let r=this.objectSchema.is("search").getFields();for(var t=0;t<r.length;t++)if((this.data[r[t]]+"").toLowerCase().includes(e.toLowerCase()))return this.read()}}static _newInstance(e,t){return new u(e,t)}constructor(e,t){super(e,l,t,"Resource")}}var c=r(99361),d=r(13997),h=r(50897),p=r(79562),m=r(1888),g=r(71932),y=r(68918),v=r(78161),x=r(2784),f=r(87656);let j=e=>{let{color:t="black",size:r=24,...i}=e;return(0,n.jsxs)(f.Svg,{width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...i,children:[(0,n.jsx)(f.Path,{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",stroke:`${t}`}),(0,n.jsx)(f.Path,{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",stroke:`${t}`})]})};j.displayName="Link";let k=(0,x.memo)((0,v.H)(j)),w={};var b={resources:{component:e=>{var t;let{pageState:r,initialItems:i,pageSession:s}=e;return(0,n.jsx)(c.D,{title:"Resources",pageSession:s,children:(0,n.jsx)(d.V,{integratedChat:!0,rowIcon:k,enableAddToInitialData:!0,sourceUrl:"/adminapi/v1/resources",initialItems:i,numColumnsForm:1,name:"resource",columns:h.Z.columns(h.Z.column("",()=>"",!1,e=>(0,n.jsx)("a",{href:e.url,target:"_blank",children:(0,n.jsx)(g.z,{Icon:y.d})}),!0,"50px"),h.Z.column("name",e=>e.name,"name",void 0,!0,"250px"),h.Z.column("url",e=>e.url,"url",void 0,!0,"400px"),h.Z.column("type",e=>e.type,"type",e=>(0,n.jsx)(p.A,{text:e.type,color:"$gray5"}),!0,"150px"),h.Z.column("tags",e=>e.tags,"tags",e=>Object.keys(null!==(t=null==e?void 0:e.tags)&&void 0!==t?t:[]).length?Object.keys(e.tags).map((t,r)=>(0,n.jsx)(p.A,{ml:r?"$2":"$0",text:e.tags[t],color:"$color5"},t)):(0,n.jsx)(p.A,{text:"empty",color:"$gray5"}),!0,"200px")),model:u,pageState:r,icons:w})})},getServerSideProps:(0,m.eq)("/adminapi/v1/resources",["admin"],{})}},P=r(97729),_=r.n(P);function q(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_(),{children:(0,n.jsx)("title",{children:"Protofy - Resources"})}),(0,n.jsx)(b.resources.component,{...e})]})}},1888:function(e,t,r){"use strict";r.d(t,{F7:function(){return a},eq:function(){return o}});var n=r(46149),i=r(6429),s=r(48115);let a=e=>n.l.SSR?e:void 0;function o(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return a(async a=>{var o,l,u,c,d,h;let p={itemsPerPage:parseInt(a.query.itemsPerPage)?parseInt(a.query.itemsPerPage):"",page:parseInt(a.query.page,10)?parseInt(a.query.page,10):"",search:null!==(o=a.query.search)&&void 0!==o?o:"",orderBy:null!==(l=a.query.orderBy)&&void 0!==l?l:"",orderDirection:null!==(u=a.query.orderDirection)&&void 0!==u?u:"",view:null!==(c=a.query.view)&&void 0!==c?c:"",item:null!==(d=a.query.item)&&void 0!==d?d:"",editFile:null!==(h=a.query.editFile)&&void 0!==h?h:"",..."function"==typeof r?await r(a):r},m="function"==typeof e?e(a):e;return(0,i.NA)(a,t,{sourceUrl:m,initialItems:await s.bl.get({url:(0,i.VM)(m,a),...p}),itemData:a.query.item?await s.bl.get((0,i.VM)(m+"/"+a.query.item,a)):"",extraData:{..."function"==typeof n?await n(a):n},pageState:{...p}})})}}},function(e){e.O(0,[8641,8081,4733,1335,8873,2859,6313,3950,397,7412,2608,1241,1004,1823,2029,1698,9774,2888,179],function(){return e(e.s=34085)}),_N_E=e.O()}]);
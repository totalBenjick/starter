(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{14:function(e,a,t){e.exports={container:"Loader_container__2UZud",loader:"Loader_loader__2k-qq",load8:"Loader_load8__2oreg","loader--hide":"Loader_loader--hide__3cI7O"}},19:function(e,a,t){e.exports={main_container:"ViewContainer_main_container__2nAb0"}},20:function(e,a,t){e.exports={heart:"SingleView_heart__15s_p"}},21:function(e,a,t){e.exports=t(31)},31:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(17),r=t.n(l),o=t(2),i=t(3),s=t(1),m="#084fa7",d="#d35700",u="#459548",f="#e3ab1c",b="#e5839d",p=function(){return c.a.createElement("header",{style:{backgroundColor:"".concat(m)},className:"sans-serif w-100"},c.a.createElement("div",{className:"w-100 center pa4 pt5-ns"},c.a.createElement("div",{className:"f2  w-100 lh-title mv0 inline-flex justify-between content-center"},c.a.createElement("div",{className:" lh-copy white pa1 tracked-tight"}," ",c.a.createElement(i.b,{to:"/",className:"no-underline white"},c.a.createElement("img",{className:"w2 ",alt:"tv react series app",src:"//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"})," ","TV Series App")))))},v=function(e){var a=e.color,t=e.icon,n=e.cap,l=e.link;return c.a.createElement("div",{style:{backgroundColor:"white"},className:"sans-serif"},c.a.createElement("div",{style:{backgroundColor:"".concat(a)},className:"w-90 mt3 mw9 center pa4 pt5-ns shadow-2"},c.a.createElement(i.b,{to:"".concat(l),className:"no-underline"},c.a.createElement("div",{className:"f2 f1-m f-headline-l measure-narrow lh-title mv0"},c.a.createElement("i",{style:{color:"white"},className:"".concat(t),"aria-hidden":"true"})," ",c.a.createElement("span",{className:" lh-copy white pa1 tracked-tight"},"".concat(n))))))},h=function(){var e=[{color:d,icon:"fa fa-fire",cap:"Most Pop",link:"/mostwatched/1"},{color:u,icon:"fa fa-heart-o",cap:"+ Fans",link:"/topfans/1"},{color:f,icon:"fa fa-clock-o",cap:"Top Now",link:"/trending/1"},{color:b,icon:"fa fa-list-ul",cap:"My List",link:"/favorites"}],a=function(){return e.map((function(e,a){return c.a.createElement(v,{key:a,color:e.color,icon:e.icon,cap:e.cap,link:e.link})}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(a,null))},E=t(8),g=Object(n.createContext)(null),w=function(e){var a=Object(n.useContext)(g).setLoading,t=Object(n.useRef)(!0),c=Object(n.useState)({data:null,loading:!0,error:null}),l=Object(o.a)(c,2),r=l[0],i=l[1];return Object(n.useEffect)((function(){return function(){t.current=!1}}),[]),Object(n.useEffect)((function(){i({data:null,loading:!0,error:null}),a(!0),fetch(e).then((function(e){return e.json()})).then((function(e){t.current&&i({loading:!1,error:null,data:e}),a(!1)}))}),[e]),r},N=c.a.memo((function(e){var a=e.src,t=e.placeholder,l=e.alt,r=void 0===l?"":l,i=Object(n.useState)(!0),s=Object(o.a)(i,2),m=s[0],d=s[1],u=Object(n.useState)(t),f=Object(o.a)(u,2),b=f[0],p=f[1];return Object(n.useEffect)((function(){var e=new Image;e.src=a,e.onload=function(){d(!1),p(a)}}),[a]),c.a.createElement("img",{src:b,style:{opacity:m?.5:1,transition:"opacity 1s linear",width:"90%"},alt:r})})),k=function(e){var a=e.img,t=e.showName,n=e.averageVote,l="https://image.tmdb.org/t/p/w500/".concat(a);return null===a||null===t||null===n||0===n?c.a.createElement("div",null):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"shadow-5 ma3 ba b--black self-center br2 black-70 no-underline grow b inline-flex items-center justify-center mb3 pv2 ph3"},c.a.createElement("div",{className:" sans-serif w-90 flex-column items-center justify-center"},c.a.createElement(i.b,{to:"/tv/".concat(e.id),className:"db link dim tc"},c.a.createElement(N,{src:l,placeholder:"placeholder",alt:"img to moviedb app"}),c.a.createElement("dl",{className:"mt2 f6 lh-copy"},c.a.createElement("dd",{className:"ml0 black truncate w-100"},t),c.a.createElement("dd",{className:"ml0 dark-blue truncate w-100"},n))))))},y=t(19),j=t.n(y),O=function(e){var a=1;return"-"===e[0]&&(a=-1,e=e.substr(1)),function(t,n){return-1===a?n[e].localeCompare(t[e]):t[e].localeCompare(n[e])}},_=function(e){var a=Object(n.useState)([]),t=Object(o.a)(a,2),l=t[0],r=t[1],m=Object(s.g)().page;void 0!==m&&0!==m||(m=1);var d="Trending"===e.title&&"".concat(e.url)||"".concat(e.url).concat(m),u=w(d),f=(u.loading,u.data),b=(null===f||void 0===f?void 0:f.results)||[],p=(null===f||void 0===f?void 0:f.total_pages)||0;Object(n.useEffect)((function(){r(b)}),[f]);var v=Object(E.a)(b).sort(O("name")),h=Object(E.a)(b).sort(O("-name")),g=function(){return l.map((function(e,a){return c.a.createElement(k,{key:a,img:null===e||void 0===e?void 0:e.poster_path,showName:null===e||void 0===e?void 0:e.name,averageVote:null===e||void 0===e?void 0:e.vote_average,id:null===e||void 0===e?void 0:e.id})}))},N=parseInt(m,10),y=window.location.pathname,_=y.substring(0,y.lastIndexOf("/")+1),S=1===N&&"".concat(_,"1")||"".concat(_).concat(N-1),x=N===p&&"".concat(_,"1")||"".concat(_).concat(N+1);return console.log(_,S,x),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex flex-row justify-around h3"},c.a.createElement("div",null,c.a.createElement("span",{className:" lh-copy black pa1 tracked-tight sans-serif ma3 f2 mt1 ma1"},e.title),c.a.createElement("span",{onClick:function(){r(v)},className:" self-center mt1 shadow-hover"},c.a.createElement("i",{className:"fa fa-sort-alpha-asc grow pa3 br2 bg-orange white dib","aria-hidden":"true"})),c.a.createElement("span",{onClick:function(){r(h)},className:" self-center mt1 shadow-hover ma1"},c.a.createElement("i",{className:"fa fa-sort-alpha-desc grow pa3 br2 bg-blue white dib","aria-hidden":"true"})))),c.a.createElement("div",{className:"".concat(j.a.main_container)},c.a.createElement(g,null),c.a.createElement("div",{className:"ma4"},c.a.createElement(i.b,{to:S,className:"fa fa-caret-left grow pa3 br2 bg-blue white dib","aria-hidden":"true"}),c.a.createElement("span",{className:"ma5"},m),c.a.createElement(i.b,{to:x,className:"fa fa-caret-right grow pa3 br2 bg-blue white dib","aria-hidden":"true"}))))},S=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{url:"https://api.themoviedb.org/3/tv/popular?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=",title:"Most Watched"}))},x=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{url:"https://api.themoviedb.org/3/tv/top_rated?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US&page=",title:"Top Rated"}))},C=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(_,{url:"https://api.themoviedb.org/3/trending/tv/week?api_key=1a09dcf42c6c621e5b547c2f53c489b3",title:"Trending"}))},I=t(14),J=t.n(I),L=function(){return c.a.createElement("div",{className:"".concat(J.a.container)},c.a.createElement("div",{className:"".concat(J.a.loader," ba b--black")}))},F=t(20),V=t.n(F),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"add":return[].concat(Object(E.a)(e),[a.payload]);case"delete":return e.filter((function(e){return e!==a.payload}));default:return e}},T=function(){var e=Object(s.g)().id,a="https://api.themoviedb.org/3/tv/".concat(e,"?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US"),t=w(a),l=(t.loading,t.data),r=null===l||void 0===l?void 0:l.genres,i=Object(n.useReducer)(R,[],(function(){return JSON.parse(localStorage.getItem("favorites"))||[]})),m=Object(o.a)(i,2),d=m[0],u=m[1];Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(d))}),[d]);var f=(null===l||void 0===l?void 0:l.backdrop_path)||(null===l||void 0===l?void 0:l.poster_path),b="https://image.tmdb.org/t/p/w400/".concat(f),p=d.includes(e)?"fa fa-heart ":"fa fa-heart-o",v=null===r||void 0===r?void 0:r.map((function(e,a){return e.name})),h=null===v||void 0===v?void 0:v.join(", ");return c.a.createElement("div",null,c.a.createElement("div",{className:" helvetica  w-95 pr2-l pl2-ns mb0-l shadow-3 ma2"},c.a.createElement("div",{className:"pa4"},c.a.createElement("img",{src:"".concat(b),alt:" tv series app",className:"w-100 db black-10 br2"}),c.a.createElement("div",{className:"flex flex-row justify-center"},c.a.createElement("i",{className:"".concat(p," ").concat(V.a.heart," self-center red"),onClick:function(a){a.preventDefault(),d.includes(e)?u({type:"delete",payload:e}):u({type:"add",payload:e})},"aria-hidden":"true"}),c.a.createElement("h1",{className:"f4 f2-l fw7 mt0 pt3 pl3 mid-gray pv3-l dib "},null===l||void 0===l?void 0:l.name)),c.a.createElement("h1",{className:"f5 f2-l fw7 mt0 pv3-l dark-blue"},null===l||void 0===l?void 0:l.number_of_episodes," Episodes"),c.a.createElement("p",{className:"lh-copy mt2 mt3-m mt5-l f6"},c.a.createElement("span",{className:"db-ns f7 fw7 lh-solid mb3 mb0-m mb4-l"},h),c.a.createElement("br",null),c.a.createElement("span",{className:"db-l measure-wide navy"},null===l||void 0===l?void 0:l.overview)))))},U=function(e){var a,t,l=e.id,r=Object(n.useReducer)(R,[],(function(){return JSON.parse(localStorage.getItem("favorites"))||[]})),s=Object(o.a)(r,2),m=s[0],d=s[1];Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(m))}),[m]);var u=Object(n.useState)({}),f=Object(o.a)(u,2),b=f[0],p=f[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/".concat(l,"?api_key=1a09dcf42c6c621e5b547c2f53c489b3&language=en-US")).then((function(e){return e.json()})).then((function(e){p({data:e})}))}),[]);return c.a.createElement("tr",null,c.a.createElement(i.b,{className:" black fw5 no-underline  bb b--black-20 db",to:"/tv/".concat(l)},c.a.createElement("td",{className:"pv3 pr3  w-90"},null===(a=b.data)||void 0===a?void 0:a.name)),c.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},null===(t=b.data)||void 0===t?void 0:t.vote_average),c.a.createElement("td",{className:"pv3 pr3 bb b--black-20"},c.a.createElement("i",{onClick:function(e){e.preventDefault(),d({type:"delete",payload:l}),window.location.href="/favorites"},className:"fa fa-trash red shadow-hover"})))},M=function(){var e=Object(n.useReducer)(R,[],(function(){return JSON.parse(localStorage.getItem("favorites"))||[]})),a=Object(o.a)(e,1)[0];Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(a))}),[a]);var t=function(){return a.map((function(e,a){return c.a.createElement(U,{id:e,key:a})}))};return Object(n.useEffect)((function(){t()}),[a]),c.a.createElement("div",null,0===a.length&&c.a.createElement("span",{className:" lh-copy black pa1 tracked-tight sans-serif ma3 f5 mt1 ml7"},c.a.createElement("div",{className:"ml5 mb3 "},"Please add a show to your favorites  :)")),c.a.createElement("div",{className:"tracked-tight sans-serif ml5 mt3 f3"},"Liked Series"),c.a.createElement("div",{className:"pa4 helvetica"},c.a.createElement("div",{className:"overflow-auto"},c.a.createElement("table",{className:"f6 w-100 mw8 center",cellspacing:"0"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue"},"Name"),c.a.createElement("th",{className:"fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue"},"Average Vote"),c.a.createElement("th",{className:"fw6 bb b--black-20 tl pb3 pr3 bg-white dark-blue"},"Delete"))),c.a.createElement("tbody",{className:"lh-copy"},c.a.createElement(t,null))))))},q=function(){var e=Object(n.useContext)(g).loading;return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"container"},c.a.createElement(s.d,null,c.a.createElement(s.b,{exact:!0,path:"/",component:h}),c.a.createElement(s.b,{exact:!0,path:"/mostwatched/:page",component:S}),c.a.createElement(s.b,{exact:!0,path:"/topfans/:page",component:x}),c.a.createElement(s.b,{exact:!0,path:"/trending/:page",component:C}),c.a.createElement(s.b,{exact:!0,path:"/favorites",component:M}),c.a.createElement(s.b,{path:"/tv/:id",component:T}),c.a.createElement(s.a,{to:"/"}))),e&&c.a.createElement(L,null)))},A=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return c.a.createElement(g.Provider,{value:{loading:t,setLoading:l}},c.a.createElement(q,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3e65c13a.chunk.js.map
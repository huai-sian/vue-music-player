(function(t){function e(e){for(var s,o,l=e[0],r=e[1],c=e[2],d=0,f=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("e0ec"),n=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{ref:"trialModal",staticClass:"modal",class:{"d-block":t.modalShow},attrs:{tabindex:"-1","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-lg"},[a("div",{staticClass:"modal-content p-4"},[a("div",{staticClass:"modal-body text-white d-flex"},[t._m(0),a("div",{staticClass:"order-1 text-start"},[a("h2",{staticClass:"fw-bolder text-success modal__h2 mb-4"},[t._v("只要 NT$19.00")]),a("h3",{staticClass:"text-white modal__h3 mb-2"},[t._v("即享 3 個月熱門音樂")]),a("p",{staticClass:"blockquote-footer mt-0"},[t._v("Premium 可讓你隨時隨地播放喜歡的歌曲，0廣告干擾。")]),a("button",{staticClass:"btn btn-success fw-bolder my-3 btn__close",attrs:{type:"button"},on:{click:function(e){t.modalShow=!1}}},[t._v("關閉")])])])])])]),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order-2 d-none d-md-block"},[s("img",{attrs:{src:a("6b4c"),width:"330"}})])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid px-0 bg-dark"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-2 col-md-3 px-0 position-relative bg-dark"},[a("Sidebar")],1),a("div",{staticClass:"col-lg-10 col-md-9 px-0 overflow-auto",staticStyle:{"background-color":"#212121"}},[a("Playlist")],1)])])},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark sidebar ps-3"},[t._m(0),a("ul",[a("li",{staticClass:"mb-3"},[a("a",{staticClass:"sidebar__link",class:{active:"Home"===t.navbar},on:{click:function(e){return e.preventDefault(),t.changeNav("Home")}}},[t._v("Home")])]),a("li",[a("a",{staticClass:"sidebar__link",class:{active:"Playlist"===t.navbar},on:{click:function(e){return e.preventDefault(),t.changeNav("Playlist")}}},[t._v("Playlist")])])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-2 mb-md-5 pt-3 pt-md-5"},[a("h3",{staticClass:"text-white text-start d-inline-block me-1"},[t._v("La Musica")]),a("i",{staticClass:"fas fa-headphones-alt text-white"})])}],f={data:function(){return{}},methods:{changeNav:function(t){this.$store.dispatch("changeNav",t)}},computed:{navbar:function(){return this.$store.state.navbar}}},m=f,v=a("2877"),p=Object(v["a"])(m,u,d,!1,null,null,null),h=p.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("div",{staticClass:"container-fluid p-0",staticStyle:{"background-color":"#212121"}},[a("div",{staticClass:"h-0"},[a("youtube",{ref:"youtube",staticClass:"youtube",attrs:{"video-id":t.videoId,loop:"isLoop",autoplay:"isAutoPlay"},on:{playing:t.updateDuration,paused:t.paused,ended:t.loopSong}})],1),"Home"==t.navbar?a("Albumlist",{attrs:{album:t.data},on:{getAlbum:t.getSelectedAlbum}}):t._e(),"Playlist"==t.navbar?[a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"playlist__top py-5",style:"background-image: url("+t.albumData.backgroundImg+")"},[a("div",{staticStyle:{"z-index":"3"}},[a("div",{staticClass:"text-center"},[a("small",{staticClass:"text-success"},[t._v(t._s(t.albumData.followers)+" FOLLOWERS")])]),a("h3",{staticClass:"font-weight-bold text-white playlist__top__singer"},[t._v(" "+t._s(t.albumData.singer)+" ")]),a("div",{staticClass:"playlist__top__btns"},[a("button",{staticClass:"playlist__top__play mx-2",on:{click:function(e){return e.preventDefault(),t.togglePlay.apply(null,arguments)}}},[t._v(" "+t._s(t.isPlay?"PAUSE":"PLAY"))]),a("button",{staticClass:"playlist__top__follow mx-2",class:{"text-success":t.albumData.isFollow},on:{click:function(e){return e.preventDefault(),t.followHandler(t.albumData)}}},[t._v(" "+t._s(t.albumData.isFollow?"UNFOLLOW":"FOLLOW"))])])])]),a("div",{staticClass:"col-md-8 mx-auto mt-2"},[a("ul",{staticClass:"d-flex justify-content-center text-secondary playlist__tab mb-5"},[a("li",[a("a",{staticClass:"mx-3 playlist__tab__link text-secondary",class:{active:"Overview"==t.playlistTab},on:{click:function(e){e.preventDefault(),t.playlistTab="Overview"}}},[t._v("OVERVIEW")])]),a("li",[a("a",{staticClass:"mx-3 playlist__tab__link text-secondary",class:{active:"Related Artist"==t.playlistTab},on:{click:function(e){e.preventDefault(),t.playlistTab="Related Artist"}}},[t._v("RELATED ARTISTS")])]),a("li",[a("a",{staticClass:"mx-3 playlist__tab__link text-secondary",class:{active:"About"==t.playlistTab},on:{click:function(e){e.preventDefault(),t.playlistTab="About"}}},[t._v("ABOUT")])])]),a("div",{staticClass:"mt-3"},["Overview"==t.playlistTab?a("div",{staticClass:"text-secondary"},[a("ul",{staticClass:"px-4"},t._l(t.albumData.songs,(function(e,s){return a("li",{key:s,staticClass:"d-flex justify-content-between align-items-center mb-3 playlist__li"},[a("div",{staticClass:"d-flex align-items-center"},[a("small",{staticClass:"playlist__li__num me-2"},[t._v("#"+t._s(s+1))]),a("span",{staticClass:"playlist__li__name",class:{"text-success":s===t.currentIndex},on:{click:function(a){return t.selectSong(s,e)}}},[t._v(t._s(e.song))])]),a("div",{staticClass:"d-flex align-items-center justify-content-around"},[a("small",{staticClass:"playlist__li__duration"},[t._v(t._s(e.duration))]),a("div",{staticClass:"mx-2"},[t.isLiked(e)?a("i",{staticClass:"material-icons text-success",on:{click:function(a){return t.updateFavorite(e)}}},[t._v("favoriter")]):a("i",{staticClass:"material-icons",on:{click:function(a){return t.updateFavorite(e)}}},[t._v("favorite_border")])]),a("div",{staticClass:"position-relative"},[a("i",{staticClass:"material-icons",on:{click:function(e){return t.showPopup(s)}}},[t._v("more_horiz")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.popupIdx===s,expression:"popupIdx === idx"}],staticClass:"playlist__li__youtube",on:{click:function(a){return a.preventDefault(),t.toYoutube(e.videoId)}}},[t._v("Youtube")])])])])})),0),t._m(0)]):t._e(),"Related Artist"==t.playlistTab?a("div",{staticClass:"text-success mt-3"},[a("div",{staticClass:"playlist__artist__list"},[a("div",{staticClass:"row"},t._l(t.sameTypeList,(function(e,s){return a("div",{key:"artist"+s,staticClass:"col-md-6 col-lg-4 mb-4 text-center"},[a("div",{staticClass:"playlist__artist__img mx-auto",style:"background-image: url("+e.img+")",on:{click:function(a){t.getSelectedAlbum(e),t.playlistTab="Overview"}}}),a("small",{staticClass:"playlist__artist__name text-white mt-2 d-inline-block"},[t._v(" "+t._s(e.singer)+" ")])])})),0)])]):t._e(),"About"==t.playlistTab?a("div",{staticClass:"text-success"},[a("h2",{staticClass:"mb-3 text-white",staticStyle:{"line-height":"1.5rem"}},[t._v(t._s(t.albumData.about))]),a("h5",{staticClass:"text-white"},[t._v("The F2E - 前端修練精神時光屋 第三關 - MP3 Player")]),a("small",{staticClass:"text-secondary"},[t._v(" 使用套件 VueYoutube 串流 Youtube 音源，The F2E 練習作品，無商業用途。 ")])]):t._e()])]),a("div",{staticClass:"bottom"})])]:t._e(),a("div",{staticClass:"row footer"},[a("div",{staticClass:"col-12 col-md-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"footer__thumbnail me-2",style:"background-image: url('"+t.albumData.img+"')",on:{click:function(e){return t.updateNavbar("Playlist")}}}),a("div",{staticClass:"footer__txtbox text-start d-flex flex-column"},[a("h3",{staticClass:"text-white"},[t._v(t._s(t.currentSong.song))]),a("p",{staticClass:"text-secondary",on:{click:function(e){return t.updateNavbar("Playlist")}}},[t._v(t._s(t.albumData.singer))])])])]),a("div",{staticClass:"col-12 my-auto col-md-6"},[a("div",{staticClass:"d-flex align-items-center justify-content-around"},[t.isShuffle?a("i",{staticClass:"fas fa-random footer__icon",class:{"text-success":t.isShuffle},on:{click:function(e){t.isShuffle=!t.isShuffle}}}):a("i",{staticClass:"fas fa-random text-white footer__icon",class:{"text-success":t.isShuffle},on:{click:function(e){t.isShuffle=!t.isShuffle}}}),a("i",{staticClass:"fas fa-backward text-white footer__icon",on:{click:function(e){return t.changeSong(-1)}}}),[t.isPlay?a("i",{staticClass:"fas fa-pause text-white footer__icon",on:{click:t.togglePlay}}):t._e(),t.isPlay?t._e():a("i",{staticClass:"fas fa-play text-white footer__icon",on:{click:t.togglePlay}})],a("i",{staticClass:"fas fa-forward text-white footer__icon",on:{click:function(e){return t.changeSong(1)}}}),t.isLoop?a("i",{staticClass:"material-icons footer__icon",class:{"text-success":t.isLoop},on:{click:function(e){t.isLoop=!t.isLoop}}},[t._v("repeat_one")]):a("i",{staticClass:"material-icons text-white footer__icon",class:{"text-success":t.isLoop},on:{click:function(e){t.isLoop=!t.isLoop}}},[t._v("repeat")])],2),a("div",{staticClass:"d-flex align-items-center mt-2"},[a("small",{staticClass:"text-secondary"},[t._v(t._s(t._f("formatTime")(t.currentTime)))]),a("div",{staticClass:"footer__progress d-flex align-items-center justify-content-center"},[a("div",{ref:"progressBar",staticClass:"footer__progressbar",on:{click:t.processBarTime}},[a("div",{staticClass:"footer__progressbar--circle",style:{left:t.timeLine-1+"%"}}),a("div",{staticClass:"footer__progressbar--fill",style:{width:t.timeLine+"%"}})])]),a("small",{staticClass:"text-secondary"},[t._v(t._s(t._f("formatTime")(t.duration)))])])]),a("div",{staticClass:"col-12 col-md-3 d-flex align-items-center justify-content-end"},[a("div",{staticClass:"d-flex justify-content-end align-items-center"},[a("div",{staticClass:"me-1",on:{click:t.changeMute}},[t.isMute?t._e():a("i",{staticClass:"fas fa-volume-down text-white footer__icon"}),t.isMute?a("i",{staticClass:"fas fa-volume-mute text-white"}):t._e()]),a("div",{staticClass:"ms-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],ref:"volume",staticClass:"footer__volumn",style:{background:"linear-gradient(90deg, #26de85,\n                "+t.volume+"%, #6c757d, "+t.volume+"%)"},attrs:{type:"range",name:"volume",min:"0",max:"100"},domProps:{value:t.volume},on:{click:t.changeVolume,__r:function(e){t.volume=e.target.value}}})])])])])],2)])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-secondary text-start mt-4"},[a("small",{staticStyle:{"font-size":"9px"}},[t._v("若音樂無法正常收聽，請至 Youtube 撥放。")])])}],y=a("1da1"),g=a("5530"),x=(a("96cf"),a("99af"),a("4de4"),a("ac1f"),a("5319"),a("bc3a")),C=a.n(x),w=a("130e"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid albumList p-4"},[t._l(t.typeList,(function(e){return a("div",{key:e},[a("h2",{staticClass:"albumList__h2 mb-3"},[t._v(t._s(e))]),a("div",{staticClass:"row mb-4"},t._l(t.album[e],(function(e){return a("div",{key:e.album,staticClass:"col-12 col-md-4 mb-3"},[a("div",{staticClass:"albumList__img mx-auto mb-2",style:"background-image: url("+e.img+")",on:{click:function(a){t.toAlbum(e),t.updateNavbar("Playlist")}}}),a("p",{staticClass:"text-white albumList__name",on:{click:function(a){t.toAlbum(e),t.updateNavbar("Playlist")}}},[t._v(t._s(e.album))])])})),0)])})),a("div",{staticClass:"bottom"})],2)},S=[],I=(a("b64b"),{props:["album"],data:function(){return{listName:null}},computed:{typeList:function(){return Object.keys(this.album)}},methods:{toAlbum:function(t){this.$emit("getAlbum",t)},updateNavbar:function(t){this.$store.dispatch("changeNav",t)}},created:function(){console.log(this.album)}}),T=I,D=Object(v["a"])(T,k,S,!1,null,null,null),O=D.exports;s["a"].use(w["a"],C.a);var P={components:{Albumlist:O},data:function(){return{popupIdx:-1,videoId:"WXOlNBDVt0o",isPlay:!1,data:[],playlistTab:"Overview",albumData:[],relatedArtist:[],volume:20,isMute:!1,timeLine:0,duration:0,newTime:0,processInterval:null,currentTime:0,currentIndex:0,currentSong:{},playerState:-1,isLoop:!1,isShuffle:!1,inBar:!1,isDrag:!1}},filters:{formatTime:function(t){var e=Math.floor(t/60),a=Math.floor(t%60),s="".concat(e<10?0:"").concat(e,":").concat(a<10?0:"").concat(a);return s}},methods:{togglePlay:function(){this.isPlay=!this.isPlay,this.isPlay?this.player.playVideo():this.player.pauseVideo()},getSelectedAlbum:function(t){this.albumData=t,console.log(this.albumData),this.currentSong=this.albumData.songs[this.currentIndex],this.videoId=this.currentSong.videoId,this.player.loadVideoById(this.videoId)},default:function(){this.albumData&&0!==this.albumData.length||(console.log(this.data["Top Hits"][0]),this.albumData=Object(g["a"])({},this.data["Top Hits"][0]),this.currentSong=this.albumData.songs[this.currentIndex],this.videoId=this.currentSong.videoId)},navbarchange:function(t){this.updatedNavbar=t},updateFavorite:function(t){this.$store.dispatch("addToFavorite",t)},isLiked:function(t){var e=this.favorites.filter((function(e){return e.videoId===t.videoId}));return e.length>0},changeVolume:function(){this.player.setVolume(this.volume),this.isMute&&this.volume>0&&(this.isMute=!1,this.player.unMute()),console.log(this.volume)},changeMute:function(){this.isMute=!this.isMute,this.isMute?(this.volume=0,this.player.mute()):(this.volume=20,this.player.unMute())},processBarTime:function(t){var e=this.$refs.progressBar.offsetWidth,a=t.offsetX;this.newTime=a/e*this.duration,this.player.seekTo(this.newTime)},updateDuration:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.player.getDuration();case 2:t.duration=e.sent,console.log(t.duration),t.processInterval=setInterval((function(){t.player.getCurrentTime().then((function(e){t.timeLine=e/t.duration*100,t.currentTime=e,t.getPlayerState(),0===t.playerState||2===t.playerState||5===t.playerState?t.isPlay=!1:t.isPlay=!0}))}),500);case 5:case"end":return e.stop()}}),e)})))()},paused:function(){var t=this;this.$once("hook:beforeDestroy",(function(){clearInterval(t.processInterval)}))},changeSong:function(t){var e=this.albumData.songs.length;this.currentIndex=(this.currentIndex+t+e)%e,this.currentSong=Object(g["a"])({},this.albumData.songs[this.currentIndex]),this.videoId=this.currentSong.videoId,console.log(this.currentSong,this.videoId),this.init(),this.player.loadVideoById(this.videoId),this.$nextTick((function(){this.autoplay()}))},init:function(){var t=this;this.$once("hook:beforeDestroy",(function(){clearInterval(t.processInterval)}))},autoplay:function(){this.isPlay=!0,this.player.playVideo()},selectSong:function(t,e){this.currentIndex=t,this.currentSong=Object(g["a"])({},e),this.videoId=this.currentSong.videoId,console.log(t),console.log(e),this.$nextTick((function(){this.autoplay()}))},showPopup:function(t){var e=this;this.popupIdx=t,setTimeout((function(){e.popupIdx=-1}),3e3)},toYoutube:function(t){window.location.href="https://www.youtube.com/watch?v=".concat(t)},getPlayerState:function(){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.player.getPlayerState();case 2:t.playerState=e.sent;case 3:case"end":return e.stop()}}),e)})))()},loopSong:function(){if(this.isLoop){var t=this.videoId;this.player.loadVideoById(t),this.$nextTick((function(){this.autoplay()}))}if(this.isShuffle){var e=this.albumData.songs.length,a=Math.floor(Math.random()*e);this.currentIndex=a,this.currentSong=Object(g["a"])({},this.albumData.songs[this.currentIndex]),this.videoId=this.currentSong.videoId,this.player.loadVideoById(this.videoId),this.init(),this.$nextTick((function(){this.isPlay=!0,this.player.playVideo()}))}},followHandler:function(t){var e=Object(g["a"])({},t);e.isFollow=!e.isFollow;var a=parseInt(e.followers.replace(/,/g,""),10);e.isFollow?e.followers=(a+1).toLocaleString("en-us"):e.followers=(a-1).toLocaleString("en-us"),this.$set(this.albumData,"isFollow",e.isFollow),this.$set(this.albumData,"followers",e.followers)},updateNavbar:function(t){this.$store.dispatch("changeNav",t)}},computed:{player:function(){return this.$refs.youtube.player},navbar:function(){return this.$store.state.navbar},favorites:function(){return this.$store.state.favorite},sameTypeList:function(){return this.data[this.albumData.type]}},created:function(){var t=this,e=this;this.axios.get("./playlist.json").then((function(a){e.data=a.data,console.log(e.data),t.player.setVolume(30),t.default()}))},mounted:function(){var t=this,e=this.$refs.progressBar;e.addEventListener("mouseover",(function(){t.inBar=!0,t.isDrag=!1})),e.addEventListener("mouseout",(function(){t.inBar=!1,t.isDrag=!1})),e.addEventListener("mouseup",(function(){t.inBar=!1,t.isDrag=!1})),e.addEventListener("mousedown",(function(){t.inBar=!0,t.isDrag=!0})),e.addEventListener("mousemove",(function(){t.isDrag&&t.inBar&&t.processBarTime()}))}},L=P,A=Object(v["a"])(L,_,b,!1,null,null,null),j=A.exports,E={name:"HelloWorld",components:{Sidebar:h,Playlist:j},data:function(){return{}},props:{msg:String},methods:{}},$=E,M=Object(v["a"])($,r,c,!1,null,"0ba05915",null),V=M.exports,N={name:"App",components:{HelloWorld:V},data:function(){return{modalShow:!0}},methods:{}},F=N,R=(a("5c0b"),Object(v["a"])(F,o,l,!1,null,null,null)),B=R.exports,H=(a("a434"),a("159b"),a("2f62"));s["a"].use(H["a"]);var W=new H["a"].Store({state:{navbar:"Home",favorite:[]},mutations:{CHANGENAV:function(t,e){t.navbar=e},ADDTOFAVORITE:function(t,e){t.favorite.push(e)},REMOVEFROMFAVORITE:function(t,e){t.favorite.splice(e,1)}},actions:{changeNav:function(t,e){t.commit("CHANGENAV",e)},addToFavorite:function(t,e){var a=-1;t.state.favorite.length>0&&t.state.favorite.forEach((function(t,s){t.videoId===e.videoId&&(a=s)})),console.log(a),-1===a?t.commit("ADDTOFAVORITE",e):t.commit("REMOVEFROMFAVORITE",a)}}});s["a"].use(n.a),s["a"].config.productionTip=!1,new s["a"]({store:W,render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6b4c":function(t,e,a){t.exports=a.p+"img/sam-mar-OQOKSsj8QME-unsplash.8cd3da51.jpg"},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.c12e790c.js.map
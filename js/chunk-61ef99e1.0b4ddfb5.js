(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61ef99e1"],{"018e":function(e,t,s){"use strict";s("25c9")},"25c9":function(e,t,s){},"29be":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("bc3a"),i=function(){function e(e){var t=this;this.whiteList=["/api/v2/cs-customer/public"],this.config=e,this.cookie_token_key="goeasy.token.".concat(this.config.sso_cookie_suffix),this.cookie_refresh_token_key="goeasy.refreshToken.".concat(this.config.sso_cookie_suffix),this.cookie_expiresAtMillis_key="goeasy.token.expiresAtMillis.".concat(this.config.sso_cookie_suffix),this.call=o.default.create({baseURL:"",timeout:6e4}),this.call.interceptors.request.use((function(e){var s=t.isWhiteList(e.url);if(!s){t.checkAndRefreshToken();var o=t.getAccessToken();o&&(e.headers["Authorization"]="Bearer "+o)}return e}),(function(e){return Promise.reject(e)})),this.call.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}))}return e.prototype.checkAndRefreshToken=function(){var e,t=this;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHttp");var s=this.getExpiresAtMillis(),o=(new Date).getTime();if(e&&s-o<36e5){var i=this.getRefreshToken();e.open("post","".concat(this.config.sso_host,"/refreshtoken"),!0),e.setRequestHeader("content-type","application/x-www-form-urlencoded"),e.send("refreshToken="+i),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var s=JSON.parse(e.responseText),o=s.token,i=s.refreshToken,n=s.expiresAtMillis;t.storeTokens(o,i,n)}}}},e.prototype.isWhiteList=function(e){for(var t=0;t<this.whiteList.length;t++){var s=this.whiteList[t];if(e.includes(s))return!0}return!1},e.prototype.getExpiresAtMillis=function(){return this.getCookie(this.cookie_expiresAtMillis_key)},e.prototype.getAccessToken=function(){return this.getCookie(this.cookie_token_key)},e.prototype.getRefreshToken=function(){return this.getCookie(this.cookie_refresh_token_key)},e.prototype.storeTokens=function(e,t,s){this.setCookie(this.cookie_token_key,e),this.setCookie(this.cookie_refresh_token_key,t),this.setCookie(this.cookie_expiresAtMillis_key,s+"")},e.prototype.setCookie=function(e,t){console.log("will set "+e+"with value: "+t),document.cookie=e+"="+escape(t)+";domain=goeasy.io"},e.prototype.getCookie=function(e){var t,s=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(s))?unescape(t[2]):null},e}();t.default=i},"2f26":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("29be"),i=function(){function e(e){this.url="".concat(e.rest_host,"/api/v2/cs-customer"),this.http=new o.default(e)}return e.prototype.getQRCode=function(e){var t="".concat(this.url,"/public/qrcode?uuid=").concat(e);return this.http.call({method:"get",url:t})},e.prototype.getUserInfo=function(e){var t="".concat(this.url,"/public/contact/").concat(e);return this.http.call({url:t,method:"get"})},e.prototype.getWelcome=function(){var e="".concat(this.url,"/public/welcome");return this.http.call({url:e,method:"get"})},e.prototype.getOTP=function(){var e="".concat(this.url,"/public/otp");return this.http.call({url:e,method:"post"})},e.prototype.saveAccountUser=function(e){var t="".concat(this.url,"/console/contact/").concat(e.openId,"/account");return this.http.call({url:t,method:"POST",data:{accountGuid:e.accountGuid}})},e}();t.default=i},4800:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"consult"}},[t("div",{staticClass:"content"},[t("div",{staticClass:"header"},[t("span",[e._v("GoEasy客服")]),t("img",{attrs:{src:s("ca1e")},on:{click:e.closeConsultBox}})]),t("div",{staticClass:"body"},[e.qrCode.visible?t("div",{staticClass:"qr-code"},[t("div",{staticClass:"mask"}),t("div",{staticClass:"qr-code-content"},[t("span",[e._v("微信扫码，关注后开始沟通~")]),t("div",{staticClass:"qr-code-avatar"},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.qrCode.value,expression:"qrCode.value"}],staticClass:"qr-code-icon",attrs:{src:e.qrCode.value}})]),t("span",[e._v("关掉浏览器，微信也能收到回复!")])])]):e._e(),t("div",{staticClass:"left"},[t("div",{ref:"scrollView",staticClass:"chat",attrs:{id:"scroll"}},[t("div",[t("div",{staticClass:"history"},[e.history.allLoaded?t("div",{staticClass:"history-loaded"},[t("span",[e._v("已全部加载")])]):t("div",{on:{click:function(t){return e.loadHistory(!1)}}},[e.history.loading?t("div",{staticClass:"history-loaded"},[t("img",{attrs:{src:s("4c5f")}})]):t("div",{staticClass:"history-loaded"},[t("img",{attrs:{src:s("7f56")}}),t("span",[e._v("查看更多消息")])])])]),e._l(e.history.messages,(function(o,i){return t("div",{key:i},[e.showTime(i)?t("div",{staticClass:"message-time"},[e._v(" "+e._s(e.formatDate(o.timestamp))+" ")]):e._e(),t("div",{class:[o.senderId===e.currentUser.id?"consult-record-self":"consult-record"]},[o.senderId!==e.currentUser.id?t("img",{staticClass:"avatar",attrs:{src:o.senderData.avatar,alt:"头像"}}):e._e(),t("div",{staticClass:"info"},[o.senderId!==e.currentUser.id?t("span",{staticClass:"name"},[e._v(e._s(o.senderData.name))]):e._e(),t("div",{staticClass:"message"},["text"===o.type?t("div",{staticClass:"text"},[e._v(" "+e._s(o.payload.text)+" ")]):e._e(),"image"===o.type?t("img",{staticClass:"image",style:{height:Math.ceil(100/(o.payload.width/o.payload.height))+"px"},attrs:{src:o.payload.url},on:{click:function(t){return e.showImage(o.payload.url)}}}):e._e(),"file"===o.type?t("a",{staticClass:"downLoad",attrs:{download:"",title:"点击下载文件",href:o.payload.url}},[t("img",{staticClass:"file",attrs:{src:s("a730")}}),t("div",{staticClass:"file-info"},[t("div",{staticClass:"file-info-name"},[e._v(e._s(e._f("fixContent")(o.payload.name))+" ")]),t("div",{staticClass:"file-info-size"},[e._v(e._s(e._f("fixFileSize")(o.payload.size))+" ")])])]):e._e(),"video"===o.type?t("div",{staticClass:"video",on:{click:function(t){return e.showVideo(o.payload.video.url)}}},[t("img",{directives:[{name:"show",rawName:"v-show",value:"failed"!==o.status&&"pending"!==o.status,expression:"message.status !=='failed' && message.status !=='pending'"}],class:"pending"===o.status?"thumbnail_default":"thumbnail",style:{height:Math.ceil(100/(o.payload.video.width/o.payload.video.height))+"px"},attrs:{src:o.payload.thumbnail.url}}),t("img",{staticClass:"play-icon",attrs:{src:s("b5d0")}})]):e._e(),t("img",{directives:[{name:"show",rawName:"v-show",value:"fail"===o.status,expression:"message.status === 'fail'"}],staticClass:"status",attrs:{src:s("c821")}}),t("img",{directives:[{name:"show",rawName:"v-show",value:"sending"===o.status,expression:"message.status === 'sending'"}],staticClass:"status",attrs:{src:s("79d5")}})])])])])})),e.welcome.visible?t("div",[t("div",{staticClass:"consult-record"},[t("img",{staticClass:"avatar",attrs:{src:s("4e86"),alt:"头像"}}),t("div",{staticClass:"info"},[t("div",{staticClass:"message"},[t("div",{staticClass:"text",domProps:{innerHTML:e._s(e.welcome.message)}})])])])]):e._e()],2)]),t("div",{staticClass:"operation-list"},[t("div",{staticClass:"operation-item"},[t("div",{staticClass:"operation-item-box"},[t("emoji-picker",{on:{emoji:e.chooseEmoji},scopedSlots:e._u([{key:"emoji-invoker",fn:function(e){return t("div",{staticClass:"emoji-invoker",on:{click:function(t){return t.stopPropagation(),e.events.click.apply(null,arguments)}}},[t("img",{attrs:{src:s("af01")}})])}},{key:"emoji-picker",fn:function(s){return t("div",{},[t("div",{staticClass:"emoji-picker"},[t("div",e._l(s.emojis,(function(o,i){return t("div",{key:i},["Frequently used"!==i?t("div",{staticClass:"emojis"},e._l(o,(function(o,i){return t("span",{key:i,attrs:{title:i},on:{click:function(e){return s.insert(o)}}},[e._v(e._s(o))])})),0):e._e()])})),0)])])}}])}),t("div",{staticClass:"upload-img"},[t("input",{ref:"files",staticClass:"image-input",attrs:{accept:"image/*",type:"file"},on:{change:e.sendImageMessage}})]),t("div",{staticClass:"upload-video"},[t("input",{ref:"files",staticClass:"image-input",attrs:{accept:"video/mpeg,video/mp4,video/3gpp",type:"file"},on:{change:e.sendVideoMessage}})]),t("div",{staticClass:"upload-file"},[t("input",{ref:"file",staticClass:"image-input",attrs:{type:"file"},on:{change:e.sendFileMessage}})])],1)]),t("div",{staticClass:"input-box"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],staticClass:"consult-input",attrs:{type:"text",placeholder:"请输入消息，按Enter键发送，Shift+Enter键进行换行"},domProps:{value:e.text},on:{paste:e.paste,keydown:e.enterSendMessage,input:function(t){t.target.composing||(e.text=t.target.value)}}})]),t("div",{staticClass:"consult-send-btn",on:{click:function(t){return e.sendTextMessage()}}},[e._v("发送")])])]),t("div",{staticClass:"right"},[e._m(0),t("div",{staticClass:"notice-title"},[e._v("工作时间：09:00~18:00")]),t("div",{staticClass:"notice-title"},[e._v("公告：无")]),t("div",{staticClass:"version"},[e._v(e._s(e.version))])])])])])},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-box"},[t("img",{staticClass:"icon",attrs:{src:s("4e86")}})])}],n=s("669f"),a=s.n(n),r=s("4bac"),c=s.n(r),l=s("2f26"),u=s.n(l),d=s("c7a6"),h=s.n(d),p=s("9224"),g={name:"consult",components:{EmojiPicker:a.a},data(){return{version:p["a"],qrCode:{value:"",visible:!1},welcome:{message:"",visible:!0},currentUser:{id:"",data:{name:"",avatar:""}},team:{id:"goeasy-customer-support",data:{name:"GoEasy Support Team",avatar:""}},history:{messages:[],allLoaded:!1,loading:!1},text:"",to:{},goEasy:null,config:null,api:null}},async created(){this.config=JSON.parse(decodeURIComponent(this.$route.query.cs_customer_config)),this.api=new u.a(this.config),this.goEasy=c.a.getInstance({host:this.config.goEasy_host,appkey:this.config.goEasy_appKey,modules:["im","pubsub"]});let{data:e}=await this.api.getWelcome();this.welcome.message=e,await this.initUserInfoAndConnectGoEasy(),this.to={type:c.a.IM_SCENE.CS,id:this.team.id,data:this.team.data}},computed:{showTime(){return e=>0===e||this.history.messages[e].timestamp-this.history.messages[e-1].timestamp>3e5}},filters:{fixContent:function(e){if(e)return e.length>=20?e.substring(0,10)+"..."+e.substr(-10):e},fixFileSize:function(e){if(0===e)return"1 B";{let t=1e3,s=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(t));return(e/Math.pow(t,o)).toPrecision(3)+" "+s[o]}}},methods:{async initUserInfoAndConnectGoEasy(){let e=new h.a(this.goEasy,this.initUserInfoAndConnectGoEasy,this.qrCode,this.config.accountGuid,this.api),t=await e.isCollected();t?(this.currentUser=e.userInfo(),this.connectGoEasy()):e.collect()},async connectGoEasy(){await this.connect(),this.initListeners(),this.loadHistory(!0),this.markAsRead()},async connect(){let e=await this.api.getOTP();this.goEasy.connect({id:this.currentUser.id,data:this.currentUser.data,otp:e.data,wxmpId:{appid:"wxa812036f6cd4f0c5",openid:this.currentUser.id},onSuccess:function(){console.log("GoEasy connect successfully.")},onFailed:function(e){console.log("Failed to connect GoEasy, code:"+e.code+",error:"+e.content)},onProgress:function(e){console.log("GoEasy is connecting",e)}})},initListeners(){document.addEventListener("visibilitychange",()=>{document.hidden||this.callParentFunction("clearNotificationTitle")}),this.goEasy.im.on(c.a.IM_EVENT.CS_MESSAGE_RECEIVED,this.onMessageReceived)},onMessageReceived(e){"CS_ACCEPT"!==e.type&&"CS_END"!==e.type&&"CS_TRANSFER"!==e.type&&(this.welcome.visible=!1,this.history.messages.push(e),this.scrollToBottom(),this.createNotification(e),this.callParentFunction("showPopup"))},createNotification(e){if("visible"===document.visibilityState)return;const t={title:"GoEasy",body:"您有一条新消息"};this.callParentFunction("createNotification",t)},enterSendMessage(e){e.shiftKey&&13===e.keyCode?(e.preventDefault(),this.text=this.text+"\n"):13===e.keyCode&&(e.preventDefault(),this.sendTextMessage())},paste(e){let t=e.clipboardData.files[0];t&&this.sendImage(t)},sendMessage(e){this.welcome.visible=!1,this.history.messages.push(e),this.scrollToBottom(),this.goEasy.im.sendMessage({message:e,onSuccess:()=>{console.log("发送成功")},onFailed:e=>{console.log("send message err:",e)}})},sendTextMessage(){this.text.trim().length>0&&(this.goEasy.im.createTextMessage({text:this.text,to:this.to,onSuccess:e=>{this.sendMessage(e)},onFailed:e=>{console.log("create text message err:",e)}}),this.text="")},sendFileMessage(e){const t=e.target.files[0],s=this.goEasy.im.createFileMessage({file:t,to:this.to});this.sendMessage(s)},sendImageMessage(e){let t=e.target.files[0];this.goEasy.im.createImageMessage({file:t,to:this.to,onSuccess:e=>{this.sendMessage(e)},onFailed:e=>{console.log("create file message err:",e)}})},sendVideoMessage(e){let t=e.target.files[0];this.goEasy.im.createVideoMessage({file:t,to:this.to,onSuccess:e=>{this.sendMessage(e)},onFailed:e=>{console.log("create video message err:",e)}})},chooseEmoji(e){this.text+=e},showImage(e){this.callParentFunction("showImage",{url:e})},showVideo(e){this.callParentFunction("showVideo",{url:e})},markAsRead(){this.goEasy.im.markMessageAsRead({type:c.a.IM_SCENE.CS,id:this.team.id,onSuccess:function(){console.log("标记已读成功")},onFailed:function(e){console.log("标记已读失败",e)}})},loadHistory(e){let t;this.history.loading=!0;let s=this.history.messages[0];s&&(t=s.timestamp);let o=10;this.goEasy.im.history({type:c.a.IM_SCENE.CS,id:this.team.id,lastTimestamp:t,limit:o,onSuccess:s=>{this.history.loading=!1;let o=s.content.filter(e=>"CS_ACCEPT"!==e.type&&"CS_END"!==e.type&&"CS_TRANSFER"!==e.type);0===o.length?this.history.allLoaded=!0:(this.history.messages=t?o.concat(this.history.messages):o,e&&(this.markAsRead(),this.scrollToBottom()))},onFailed:e=>{this.history.loading=!1,console.log("load history err:",e)}})},scrollToBottom(){this.$nextTick(()=>{let e=document.getElementById("scroll");e.scrollTop=e.scrollHeight})},formatDate(e){e=e||Date.now();let t=new Date(e),s=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1;return s+="-",s+=t.getDate()<10?"0"+t.getDate():t.getDate(),s+=" ",s+=t.getHours(),s+=":",s+=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),s},closeConsultBox(){this.callParentFunction("switchPopup")},callParentFunction(e,t){const s=document.referrer;window.parent.postMessage({function:e,parameters:t},s)}}},_=g,f=(s("018e"),s("2877")),A=Object(f["a"])(_,o,i,!1,null,"4df13069",null);t["default"]=A.exports},"4c5f":function(e,t){e.exports="data:image/gif;base64,R0lGODlhEAAQALMNAD8/P7+/vyoqKlVVVX9/fxUVFUBAQGBgYMDAwC8vL5CQkP///wAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAAANACwAAAAAEAAQAAAEPbDJSau9OOvNew0AEHDA8wCkiW6g6AXHMU4LgizUYRgEZdsUggFAQCgUP+AERggcFYHaDaMgEBQchBNhiQAAIfkECQAADQAsAAAAABAAEAAABDuwyUmrvTYAEDAFzwN4EyiSksaRyHF06GEYBNoQ82EHBwHbCIUCYRMKiwSCYoFALDCIwLDZBFJtTKclAgAh+QQJAAANACwAAAAAEAAQAAAEPrDJGQAIM2vwHtAUcVTdBzaHYRCKip2EepxacBAvjSgKQmc83m+iILCGEkSgh5wsEIhFEwqdUpvPaHPLnUQAACH5BAkAAA0ALAAAAAAQABAAAAQ+sMkZyAkz62MM0ROiKAjRXQCATeOIHEQAPA+QKQShZHOdIQFSRqaSLBCIBQiERC41TcQzc0xOr9isdsvtPiMAIfkECQAADQAsAAAAABAAEAAABD2wyYmUQjNra/VcCLIoBKEExBFkYRtcBGAQbJsdhnFkoMimGI8wAACshBnA4wFAJpdNp4RolFqv2Kx2q4kAACH5BAkAAA0ALAAAAAAQABAAAAQ9sMm5EFoza2u1b5ylKMjXVFdAjGamrEo7IWMpz8QR3A0BGATewWA48BA5mykAAOxugMcDwItOeUwnb9uKAAAh+QQJAAANACwAAAAAEAAQAAAEO7DJSau92C6EVp4c90khMjZbd5KKYo4B0Z4KIZ9I4H7IQQSng8FwwAQAgJgBQMAAHo+kD3h5Rk/HpCUCACH5BAkAAA0ALAAAAAAQABAAAAQ8sMlJq7046827nwuCLJwoliYXjlIAAAGFKApCAc8DULQSTzgd4kCYEQgKigt2MBgOC5rtQnAeOAHilBIBADs="},"4e86":function(e,t,s){e.exports=s.p+"img/logo.897bbe5b.png"},"669f":function(e,t,s){!function(t,s){e.exports=s()}(0,(function(){return function(e){function t(o){if(s[o])return s[o].exports;var i=s[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist-module/",t(t.s=3)}([function(e,t,s){var o=s(4)(s(1),s(5),null,null,null);e.exports=o.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(2),i=function(e){return e&&e.__esModule?e:{default:e}}(o),n=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};t.default={props:{search:{type:String,required:!1,default:""},emojiTable:{type:Object,required:!1,default:function(){return i.default}}},data:function(){return{display:{x:0,y:0,visible:!1}}},computed:{emojis:function(){if(this.search){var e={};for(var t in this.emojiTable){for(var s in e[t]={},this.emojiTable[t])new RegExp(".*"+n(this.search)+".*").test(s)&&(e[t][s]=this.emojiTable[t][s]);0===Object.keys(e[t]).length&&delete e[t]}return e}return this.emojiTable}},methods:{insert:function(e){this.$emit("emoji",e)},toggle:function(e){this.display.visible=!this.display.visible,this.display.x=e.clientX,this.display.y=e.clientY},hide:function(){this.display.visible=!1},escape:function(e){!0===this.display.visible&&27===e.keyCode&&(this.display.visible=!1)}},directives:{"click-outside":{bind:function(e,t,s){if("function"==typeof t.value){var o=t.modifiers.bubble,i=function(s){(o||!e.contains(s.target)&&e!==s.target)&&t.value(s)};e.__vueClickOutside__=i,document.addEventListener("click",i)}},unbind:function(e,t){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},mounted:function(){document.addEventListener("keyup",this.escape)},destroyed:function(){document.removeEventListener("keyup",this.escape)}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={"Frequently used":{thumbs_up:"👍","-1":"👎",sob:"😭",confused:"😕",neutral_face:"😐",blush:"😊",heart_eyes:"😍"},People:{smile:"😄",smiley:"😃",grinning:"😀",blush:"😊",wink:"😉",heart_eyes:"😍",kissing_heart:"😘",kissing_closed_eyes:"😚",kissing:"😗",kissing_smiling_eyes:"😙",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue:"😛",flushed:"😳",grin:"😁",pensive:"😔",relieved:"😌",unamused:"😒",disappointed:"😞",persevere:"😣",cry:"😢",joy:"😂",sob:"😭",sleepy:"😪",disappointed_relieved:"😥",cold_sweat:"😰",sweat_smile:"😅",sweat:"😓",weary:"😩",tired_face:"😫",fearful:"😨",scream:"😱",angry:"😠",rage:"😡",triumph:"😤",confounded:"😖",laughing:"😆",yum:"😋",mask:"😷",sunglasses:"😎",sleeping:"😴",dizzy_face:"😵",astonished:"😲",worried:"😟",frowning:"😦",anguished:"😧",imp:"👿",open_mouth:"😮",grimacing:"😬",neutral_face:"😐",confused:"😕",hushed:"😯",smirk:"😏",expressionless:"😑",man_with_gua_pi_mao:"👲",man_with_turban:"👳",cop:"👮",construction_worker:"👷",guardsman:"💂",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",older_man:"👴",older_woman:"👵",person_with_blond_hair:"👱",angel:"👼",princess:"👸",smiley_cat:"😺",smile_cat:"😸",heart_eyes_cat:"😻",kissing_cat:"😽",smirk_cat:"😼",scream_cat:"🙀",crying_cat_face:"😿",joy_cat:"😹",pouting_cat:"😾",japanese_ogre:"👹",japanese_goblin:"👺",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",skull:"💀",alien:"👽",hankey:"💩",fire:"🔥",sparkles:"✨",star2:"🌟",dizzy:"💫",boom:"💥",anger:"💢",sweat_drops:"💦",droplet:"💧",zzz:"💤",dash:"💨",ear:"👂",eyes:"👀",nose:"👃",tongue:"👅",lips:"👄",thumbs_up:"👍","-1":"👎",ok_hand:"👌",facepunch:"👊",fist:"✊",wave:"👋",hand:"✋",open_hands:"👐",point_up_2:"👆",point_down:"👇",point_right:"👉",point_left:"👈",raised_hands:"🙌",pray:"🙏",clap:"👏",muscle:"💪",walking:"🚶",runner:"🏃",dancer:"💃",couple:"👫",family:"👪",couplekiss:"💏",couple_with_heart:"💑",dancers:"👯",ok_woman:"🙆",no_good:"🙅",information_desk_person:"💁",raising_hand:"🙋",massage:"💆",haircut:"💇",nail_care:"💅",bride_with_veil:"👰",person_with_pouting_face:"🙎",person_frowning:"🙍",bow:"🙇",tophat:"🎩",crown:"👑",womans_hat:"👒",athletic_shoe:"👟",mans_shoe:"👞",sandal:"👡",high_heel:"👠",boot:"👢",shirt:"👕",necktie:"👔",womans_clothes:"👚",dress:"👗",running_shirt_with_sash:"🎽",jeans:"👖",kimono:"👘",bikini:"👙",briefcase:"💼",handbag:"👜",pouch:"👝",purse:"👛",eyeglasses:"👓",ribbon:"🎀",closed_umbrella:"🌂",lipstick:"💄",yellow_heart:"💛",blue_heart:"💙",purple_heart:"💜",green_heart:"💚",broken_heart:"💔",heartpulse:"💗",heartbeat:"💓",two_hearts:"💕",sparkling_heart:"💖",revolving_hearts:"💞",cupid:"💘",love_letter:"💌",kiss:"💋",ring:"💍",gem:"💎",bust_in_silhouette:"👤",speech_balloon:"💬",footprints:"👣"},Nature:{dog:"🐶",wolf:"🐺",cat:"🐱",mouse:"🐭",hamster:"🐹",rabbit:"🐰",frog:"🐸",tiger:"🐯",koala:"🐨",bear:"🐻",pig:"🐷",pig_nose:"🐽",cow:"🐮",boar:"🐗",monkey_face:"🐵",monkey:"🐒",horse:"🐴",sheep:"🐑",elephant:"🐘",panda_face:"🐼",penguin:"🐧",bird:"🐦",baby_chick:"🐤",hatched_chick:"🐥",hatching_chick:"🐣",chicken:"🐔",snake:"🐍",turtle:"🐢",bug:"🐛",bee:"🐝",ant:"🐜",beetle:"🐞",snail:"🐌",octopus:"🐙",shell:"🐚",tropical_fish:"🐠",fish:"🐟",dolphin:"🐬",whale:"🐳",racehorse:"🐎",dragon_face:"🐲",blowfish:"🐡",camel:"🐫",poodle:"🐩",feet:"🐾",bouquet:"💐",cherry_blossom:"🌸",tulip:"🌷",four_leaf_clover:"🍀",rose:"🌹",sunflower:"🌻",hibiscus:"🌺",maple_leaf:"🍁",leaves:"🍃",fallen_leaf:"🍂",herb:"🌿",ear_of_rice:"🌾",mushroom:"🍄",cactus:"🌵",palm_tree:"🌴",chestnut:"🌰",seedling:"🌱",blossom:"🌼",new_moon:"🌑",first_quarter_moon:"🌓",moon:"🌔",full_moon:"🌕",first_quarter_moon_with_face:"🌛",crescent_moon:"🌙",earth_asia:"🌏",volcano:"🌋",milky_way:"🌌",stars:"🌠",partly_sunny:"⛅",snowman:"⛄",cyclone:"🌀",foggy:"🌁",rainbow:"🌈",ocean:"🌊"},Objects:{bamboo:"🎍",gift_heart:"💝",dolls:"🎎",school_satchel:"🎒",mortar_board:"🎓",flags:"🎏",fireworks:"🎆",sparkler:"🎇",wind_chime:"🎐",rice_scene:"🎑",jack_o_lantern:"🎃",ghost:"👻",santa:"🎅",christmas_tree:"🎄",gift:"🎁",tanabata_tree:"🎋",tada:"🎉",confetti_ball:"🎊",balloon:"🎈",crossed_flags:"🎌",crystal_ball:"🔮",movie_camera:"🎥",camera:"📷",video_camera:"📹",vhs:"📼",cd:"💿",dvd:"📀",minidisc:"💽",floppy_disk:"💾",computer:"💻",iphone:"📱",telephone_receiver:"📞",pager:"📟",fax:"📠",satellite:"📡",tv:"📺",radio:"📻",loud_sound:"🔊",bell:"🔔",loudspeaker:"📢",mega:"📣",hourglass_flowing_sand:"⏳",hourglass:"⌛",alarm_clock:"⏰",watch:"⌚",unlock:"🔓",lock:"🔒",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",key:"🔑",mag_right:"🔎",bulb:"💡",flashlight:"🔦",electric_plug:"🔌",battery:"🔋",mag:"🔍",bath:"🛀",toilet:"🚽",wrench:"🔧",nut_and_bolt:"🔩",hammer:"🔨",door:"🚪",smoking:"🚬",bomb:"💣",gun:"🔫",hocho:"🔪",pill:"💊",syringe:"💉",moneybag:"💰",yen:"💴",dollar:"💵",credit_card:"💳",money_with_wings:"💸",calling:"📲","e-mail":"📧",inbox_tray:"📥",outbox_tray:"📤",envelope_with_arrow:"📩",incoming_envelope:"📨",mailbox:"📫",mailbox_closed:"📪",postbox:"📮",package:"📦",memo:"📝",page_facing_up:"📄",page_with_curl:"📃",bookmark_tabs:"📑",bar_chart:"📊",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",scroll:"📜",clipboard:"📋",date:"📅",calendar:"📆",card_index:"📇",file_folder:"📁",open_file_folder:"📂",pushpin:"📌",paperclip:"📎",straight_ruler:"📏",triangular_ruler:"📐",closed_book:"📕",green_book:"📗",blue_book:"📘",orange_book:"📙",notebook:"📓",notebook_with_decorative_cover:"📔",ledger:"📒",books:"📚",book:"📖",bookmark:"🔖",name_badge:"📛",newspaper:"📰",art:"🎨",clapper:"🎬",microphone:"🎤",headphones:"🎧",musical_score:"🎼",musical_note:"🎵",notes:"🎶",musical_keyboard:"🎹",violin:"🎻",trumpet:"🎺",saxophone:"🎷",guitar:"🎸",space_invader:"👾",video_game:"🎮",black_joker:"🃏",flower_playing_cards:"🎴",mahjong:"🀄",game_die:"🎲",dart:"🎯",football:"🏈",basketball:"🏀",soccer:"⚽",baseball:"⚾",tennis:"🎾","8ball":"🎱",bowling:"🎳",golf:"⛳",checkered_flag:"🏁",trophy:"🏆",ski:"🎿",snowboarder:"🏂",swimmer:"🏊",surfer:"🏄",fishing_pole_and_fish:"🎣",tea:"🍵",sake:"🍶",beer:"🍺",beers:"🍻",cocktail:"🍸",tropical_drink:"🍹",wine_glass:"🍷",fork_and_knife:"🍴",pizza:"🍕",hamburger:"🍔",fries:"🍟",poultry_leg:"🍗",meat_on_bone:"🍖",spaghetti:"🍝",curry:"🍛",fried_shrimp:"🍤",bento:"🍱",sushi:"🍣",fish_cake:"🍥",rice_ball:"🍙",rice_cracker:"🍘",rice:"🍚",ramen:"🍜",stew:"🍲",oden:"🍢",dango:"🍡",egg:"🍳",bread:"🍞",doughnut:"🍩",custard:"🍮",icecream:"🍦",ice_cream:"🍨",shaved_ice:"🍧",birthday:"🎂",cake:"🍰",cookie:"🍪",chocolate_bar:"🍫",candy:"🍬",lollipop:"🍭",honey_pot:"🍯",apple:"🍎",green_apple:"🍏",tangerine:"🍊",cherries:"🍒",grapes:"🍇",watermelon:"🍉",strawberry:"🍓",peach:"🍑",melon:"🍈",banana:"🍌",pineapple:"🍍",sweet_potato:"🍠",eggplant:"🍆",tomato:"🍅",corn:"🌽"},Places:{house:"🏠",house_with_garden:"🏡",school:"🏫",office:"🏢",post_office:"🏣",hospital:"🏥",bank:"🏦",convenience_store:"🏪",love_hotel:"🏩",hotel:"🏨",wedding:"💒",church:"⛪",department_store:"🏬",city_sunrise:"🌇",city_sunset:"🌆",japanese_castle:"🏯",european_castle:"🏰",tent:"⛺",factory:"🏭",tokyo_tower:"🗼",japan:"🗾",mount_fuji:"🗻",sunrise_over_mountains:"🌄",sunrise:"🌅",night_with_stars:"🌃",statue_of_liberty:"🗽",bridge_at_night:"🌉",carousel_horse:"🎠",ferris_wheel:"🎡",fountain:"⛲",roller_coaster:"🎢",ship:"🚢",boat:"⛵",speedboat:"🚤",rocket:"🚀",seat:"💺",station:"🚉",bullettrain_side:"🚄",bullettrain_front:"🚅",metro:"🚇",railway_car:"🚃",bus:"🚌",blue_car:"🚙",car:"🚗",taxi:"🚕",truck:"🚚",rotating_light:"🚨",police_car:"🚓",fire_engine:"🚒",ambulance:"🚑",bike:"🚲",barber:"💈",busstop:"🚏",ticket:"🎫",traffic_light:"🚥",construction:"🚧",beginner:"🔰",fuelpump:"⛽",izakaya_lantern:"🏮",slot_machine:"🎰",moyai:"🗿",circus_tent:"🎪",performing_arts:"🎭",round_pushpin:"📍",triangular_flag_on_post:"🚩"},Symbols:{keycap_ten:"🔟",1234:"🔢",symbols:"🔣",capital_abcd:"🔠",abcd:"🔡",abc:"🔤",arrow_up_small:"🔼",arrow_down_small:"🔽",rewind:"⏪",fast_forward:"⏩",arrow_double_up:"⏫",arrow_double_down:"⏬",ok:"🆗",new:"🆕",up:"🆙",cool:"🆒",free:"🆓",ng:"🆖",signal_strength:"📶",cinema:"🎦",koko:"🈁",u6307:"🈯",u7a7a:"🈳",u6e80:"🈵",u5408:"🈴",u7981:"🈲",ideograph_advantage:"🉐",u5272:"🈹",u55b6:"🈺",u6709:"🈶",u7121:"🈚",restroom:"🚻",mens:"🚹",womens:"🚺",baby_symbol:"🚼",wc:"🚾",no_smoking:"🚭",u7533:"🈸",accept:"🉑",cl:"🆑",sos:"🆘",id:"🆔",no_entry_sign:"🚫",underage:"🔞",no_entry:"⛔",negative_squared_cross_mark:"❎",white_check_mark:"✅",heart_decoration:"💟",vs:"🆚",vibration_mode:"📳",mobile_phone_off:"📴",ab:"🆎",diamond_shape_with_a_dot_inside:"💠",ophiuchus:"⛎",six_pointed_star:"🔯",atm:"🏧",chart:"💹",heavy_dollar_sign:"💲",currency_exchange:"💱",x:"❌",exclamation:"❗",question:"❓",grey_exclamation:"❕",grey_question:"❔",o:"⭕",top:"🔝",end:"🔚",back:"🔙",on:"🔛",soon:"🔜",arrows_clockwise:"🔃",clock12:"🕛",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",white_flower:"💮",100:"💯",radio_button:"🔘",link:"🔗",curly_loop:"➰",trident:"🔱",small_red_triangle:"🔺",black_square_button:"🔲",white_square_button:"🔳",red_circle:"🔴",large_blue_circle:"🔵",small_red_triangle_down:"🔻",white_large_square:"⬜",black_large_square:"⬛",large_orange_diamond:"🔶",large_blue_diamond:"🔷",small_orange_diamond:"🔸",small_blue_diamond:"🔹"}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmojiPickerPlugin=t.EmojiPicker=void 0;var o=s(0),i=function(e){return e&&e.__esModule?e:{default:e}}(o),n={install:function(e){e.component("emoji-picker",i.default)}};"undefined"!=typeof window&&(window.EmojiPicker=n),t.EmojiPicker=i.default,t.EmojiPickerPlugin=n,t.default=i.default},function(e,t){e.exports=function(e,t,s,o,i){var n,a=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(n=e,a=e.default);var c,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),o&&(l._scopeId=o),i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=c):s&&(c=s),c){var u=l.functional,d=u?l.render:l.beforeCreate;u?l.render=function(e,t){return c.call(t),d(e,t)}:l.beforeCreate=d?[].concat(d,c):[c]}return{esModule:n,exports:a,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._t("emoji-invoker",null,{events:{click:function(t){return e.toggle(t)}}}),e._v(" "),e.display.visible?s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hide,expression:"hide"}]},[e._t("emoji-picker",null,{emojis:e.emojis,insert:e.insert,display:e.display})],2):e._e()],2)},staticRenderFns:[]}}])}))},"79d5":function(e,t){e.exports="data:image/gif;base64,R0lGODlhEAAQALMMAKqooJGOhp2bk7e1rZ2bkre1rJCPhqqon8PBudDOxXd1bISCef///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAAAMACwAAAAAEAAQAAAET5DJyYyhmAZ7sxQEs1nMsmACGJKmSaVEOLXnK1PuBADepCiMg/DQ+/2GRI8RKOxJfpTCIJNIYArS6aRajWYZCASDa41Ow+Fx2YMWOyfpTAQAIfkEBQAADAAsAAAAABAAEAAABE6QyckEoZgKe7MEQMUxhoEd6FFdQWlOqTq15SlT9VQM3rQsjMKO5/n9hANixgjc9SQ/CgKRUSgw0ynFapVmGYkEg3v1gsPibg8tfk7CnggAIfkEBQAADAAsAAAAABAAEAAABE2QycnOoZjaA/IsRWV1goCBoMiUJTW8A0XMBPZmM4Ug3hQEjN2uZygahDyP0RBMEpmTRCKzWGCkUkq1SsFOFQrG1tr9gsPc3jnco4A9EQAh+QQFAAAMACwAAAAAEAAQAAAETpDJyUqhmFqbJ0LMIA7McWDfF5LmAVApOLUvLFMmlSTdJAiM3a73+wl5HYKSEET2lBSFIhMIYKRSimFriGIZiwWD2/WCw+Jt7xxeU9qZCAAh+QQFAAAMACwAAAAAEAAQAAAETZDJyRCimFqbZ0rVxgwF9n3hSJbeSQ2rCWIkpSjddBzMfee7nQ/XCfJ+OQYAQFksMgQBxumkEKLSCfVpMDCugqyW2w18xZmuwZycdDsRACH5BAUAAAwALAAAAAAQABAAAARNkMnJUqKYWpunUtXGIAj2feFIlt5JrWybkdSydNNQMLaND7pC79YBFnY+HENHMRgyhwPGaQhQotGm00oQMLBSLYPQ9QIASrLAq5x0OxEAIfkEBQAADAAsAAAAABAAEAAABE2QycmUopham+da1cYkCfZ94UiW3kmtbJuRlGF0E4Iwto3rut6tA9wFAjiJjkIgZAYDTLNJgUIpgqyAcTgwCuACJssAdL3gpLmbpLAzEQA7"},"7f56":function(e,t,s){e.exports=s.p+"img/history.a3c10772.svg"},a730:function(e,t,s){e.exports=s.p+"img/file.28935fe1.svg"},af01:function(e,t,s){e.exports=s.p+"img/emoji.26263a0d.svg"},b5d0:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB5VftUcMwDFU4BggTkA0IE5Bu0BHCBHSEMgHdIN2AYwJ3g7JBwwTtBkICmaq+xJFN+MW7e+21lvTkLykB+G8oUowRsaGvB2It9DgRe+IbcVcURQ9zgAWJDu3oiBXkgpxL4qsK6IgrYs1jgR0ntyUexPbItpAKzlgFOcgyW/3WKtkXsCIQ3erZZcawiZPh3ovCLxCIr6aMW7+8MAPkPPg9r2KGPsMKZoLa882YgZ9tFwnylHpd5NQfheWQgRPhJhLE6RNrTYBnKz7t0OBXVhMBtLC/ai1MCy8HV1MdApcorBOoI36V2O3595Ua82vfQx4qIl/DwTur6ncZCs+FpcVIC/fyfQN54A71TLwfGlSnme3gOnBk3EE6dsTHiXbo9/+DP35mTE4nCcCH4BZseCcuyHdh6MENnJO8hKow6zFvuY/JLQ9jFVEqDI5WmEyoiuhiRr7C2PtoXFR3qDpmWKK1ldmEncTaWIxrVZGyxGUCnapqtq1T+4KY3o0avHxsMvv6AHUQoBvbJzw/8DmVsMPcQyqHY4uXOErQTriX//R4C3NAEljheHdiMX4UNtXqpDeJMBH47khc8U6zvT38NT4B7i4KZnxWPwoAAAAASUVORK5CYII="},c7a6:function(e,t,s){"use strict";var o=this&&this.__awaiter||function(e,t,s,o){function i(e){return e instanceof s?e:new s((function(t){t(e)}))}return new(s||(s=Promise))((function(s,n){function a(e){try{c(o.next(e))}catch(t){n(t)}}function r(e){try{c(o["throw"](e))}catch(t){n(t)}}function c(e){e.done?s(e.value):i(e.value).then(a,r)}c((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var s,o,i,n,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return n={next:r(0),throw:r(1),return:r(2)},"function"===typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function r(e){return function(t){return c([e,t])}}function c(n){if(s)throw new TypeError("Generator is already executing.");while(a)try{if(s=1,o&&(i=2&n[0]?o["return"]:n[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[2&n[0],i.value]),n[0]){case 0:case 1:i=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,o=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){a.label=n[1];break}if(6===n[0]&&a.label<i[1]){a.label=i[1],i=n;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(n);break}i[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(r){n=[6,r],o=0}finally{s=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,s,o,i){this.goEasy=e,this.onCollected=t,this.qrCode=s,this.accountGuid=o,this.api=i,this.userCookieInfo=this.getUserFromCookie(),console.log("this.userCookieInfo",this.userCookieInfo),this.tryLinkContactAccount()}return e.prototype.tryLinkContactAccount=function(){this.accountGuid&&this.userCookieInfo&&this.api.saveAccountUser({openId:this.userCookieInfo.openId,accountGuid:this.accountGuid}).then((function(e){console.log("link account user successfully:",e)})).catch((function(e){console.log("link account user failed:",e)}))},e.prototype.isCollected=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return this.userCookieInfo?[4,this.api.getUserInfo(this.userCookieInfo.openId)]:[3,2];case 1:if(e=t.sent().data,console.log("user info:",e),e.followed)return this.followedUser={id:e.officialOpenId,data:{name:e.nickname,avatar:e.avatar}},[2,!0];t.label=2;case 2:return[2,!1]}}))}))},e.prototype.collect=function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e=this.accountGuid?this.accountGuid:this.getAnonymousRandomGuid(),[4,this.showQRCode(e)];case 1:return t.sent(),[4,this.connectPubsub(e)];case 2:return t.sent(),[2]}}))}))},e.prototype.onFollowed=function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return this.saveFollowedUser(e),[4,this.disconnectPubsub()];case 1:return t.sent(),this.onCollected(),this.hideQRCode(),[2]}}))}))},e.prototype.userInfo=function(){return this.followedUser},e.prototype.connectPubsub=function(e){return o(this,void 0,void 0,(function(){var t,s=this;return i(this,(function(o){switch(o.label){case 0:return[4,this.api.getOTP()];case 1:return t=o.sent(),[2,new Promise((function(o,i){s.goEasy.connect({otp:t.data,id:e,onSuccess:function(){console.log("GoEasy pubsub connect successfully.")},onFailed:function(e){console.log("Failed to connect GoEasy pubsub:",e)},onProgress:function(e){console.log("GoEasy pubsub is connecting",e)}}),s.goEasy.pubsub.subscribe({channel:e,onMessage:function(e){s.onFollowed(JSON.parse(e.content))},onSuccess:function(){console.log("subscribe scan qrcode success"),o()},onFailed:function(e){console.log("subscribe scan qrcode error",e),i()}})}))]}}))}))},e.prototype.saveFollowedUser=function(e){this.followedUser={id:e.openId,data:{name:e.name,avatar:e.avatar}},this.saveFollowedUserToCookie(e)},e.prototype.getUserFromCookie=function(){var e,t=new RegExp("(^| )goeasy.desk=([^;]*)(;|$)");if(e=document.cookie.match(t)){var s=unescape(e[2]);return JSON.parse(s)}return null},e.prototype.saveFollowedUserToCookie=function(e){var t=30,s=new Date;s.setTime(s.getTime()+24*t*60*60*1e3),document.cookie="goeasy.desk="+escape(JSON.stringify(e))+";expires="+s.toUTCString()+";path=/;domain=.goeasy.io",this.userCookieInfo=e},e.prototype.showQRCode=function(e){return o(this,void 0,void 0,(function(){var t;return i(this,(function(s){switch(s.label){case 0:return[4,this.api.getQRCode(e)];case 1:return t=s.sent().data,this.qrCode.value=t,this.qrCode.visible=!0,[2]}}))}))},e.prototype.hideQRCode=function(){this.qrCode.visible=!1},e.prototype.disconnectPubsub=function(){var e=this;return new Promise((function(t,s){e.goEasy.disconnect({onSuccess:function(){console.log("GoEasy disconnect successfully"),t()},onFailed:function(e){console.log("Failed to disconnect GoEasy:",e),s(e)}})}))},e.prototype.getAnonymousRandomGuid=function(){var e="-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,s="x"===e?t:3&t|8;return s.toString(16)}));return"anonymous"+e},e}();t.default=n},c821:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAP1BMVEUAAADsWDrvWTrvWTruWjvuWTvsVz3rVEDuWTvuWTvuWDruWjvvWTvvWjruWTv////ygmzwblPvY0f0l4TxeGB8BezSAAAADnRSTlMAYN+v75BQEIDPsM/Pf6ieeMkAAACGSURBVBjTbZDbEoMgDESTgKC9bET7/9/aajBUcV/YnNmZkKVdmYMAr8DUlCKqxPGAP72NjTYtxd5hY2y+qC7m0g+K2Vl1NhczMa4QTKGHD5p6KIQe4h5KNZ8Gn74I6wpfxIBf5F/K8XqRbBXVoGo5gq2kUoPjqSYvycRyoJioicMESOC8T1/VVRDZtVqLEwAAAABJRU5ErkJggg=="},ca1e:function(e,t,s){e.exports=s.p+"img/pull.458ffe2d.svg"}}]);
//# sourceMappingURL=chunk-61ef99e1.0b4ddfb5.js.map
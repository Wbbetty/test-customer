(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f4063ae"],{1567:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"conversation-container"},[e("div",{staticClass:"conversation-list"},[e("div",{staticClass:"conversation-list-item"},[e("div",{staticClass:"conversation-list-title"},[t._v("待接入 "+t._s(t.pendingConversations.length))]),e("div",{staticClass:"conversation-list-body"},t._l(t.pendingConversations,(function(i,a){return e("div",{key:a,staticClass:"conversation-item",class:{checked:i.id===t.$route.query.id},on:{click:function(e){return t.chat(i.id)}}},[e("div",{staticClass:"item-head"},[i.data.avatar?e("img",{staticClass:"item-avatar",attrs:{src:i.data.avatar}}):e("img",{staticClass:"item-avatar",attrs:{src:s("1dee")}})]),e("div",{staticClass:"item-info"},[e("div",{staticClass:"item-info-name"},[t._v(t._s(t.renderCustomerName(i.data)))]),"text"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(t._s(i.lastMessage.payload.text)+" ")]):"image"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [图片消息] ")]):"video"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [视频消息] ")]):"audio"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [语音消息] ")]):"order"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [自定义消息:订单] ")]):t._e()])])})),0)]),e("div",{staticClass:"conversation-list-item"},[e("div",{staticClass:"conversation-list-title"},[t._v("已接入 "+t._s(t.conversations.length))]),t.conversations.length?e("div",{staticClass:"conversation-list-body"},t._l(t.conversations,(function(i,a){return e("div",{key:a,staticClass:"conversation-item",class:{checked:i.id===t.$route.query.id},on:{click:function(e){return t.chat(i.id)},contextmenu:function(e){return e.preventDefault(),e.stopPropagation(),(e=>t.showRightClickMenu(e,i)).apply(null,arguments)}}},[e("div",{staticClass:"item-head"},[i.data.avatar?e("img",{staticClass:"item-avatar",attrs:{src:i.data.avatar}}):e("img",{staticClass:"item-avatar",attrs:{src:s("1dee")}}),i.unread?e("span",{staticClass:"item-unread-num"},[t._v(t._s(i.unread))]):t._e()]),e("div",{staticClass:"item-info"},[e("div",{staticClass:"item-info-top"},[e("div",{staticClass:"item-info-name"},[t._v(t._s(t.renderCustomerName(i.data)))]),e("div",{staticClass:"item-info-time"},[t._v(t._s(t.formatDate(i.lastMessage.timestamp)))])]),e("div",{staticClass:"item-info-bottom"},["sending"===i.lastMessage.status?e("div",{staticClass:"item-info-sending"}):t._e(),"fail"===i.lastMessage.status?e("div",{staticClass:"item-info-failed"}):t._e(),"text"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(t._s(i.lastMessage.payload.text)+" ")]):"image"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [图片消息] ")]):"video"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [视频消息] ")]):"audio"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [语音消息] ")]):"order"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" [自定义消息:订单] ")]):"CS_END"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" 会话已结束 ")]):"CS_ACCEPT"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v("接入成功 ")]):"CS_TRANSFER"===i.lastMessage.type?e("div",{staticClass:"item-info-message"},[t._v(" "+t._s(i.lastMessage.senderId===t.currentAgent.id?"已转接给"+i.lastMessage.payload.transferTo.data.name:"已接入来自"+i.lastMessage.senderData.name+"的转接")+" ")]):e("div",{staticClass:"item-info-message"},[t._v("[未识别内容]")])])])])})),0):t._e()]),t.rightClickMenu.visible?e("div",{staticClass:"action-box",style:{left:t.rightClickMenu.x+"px",top:t.rightClickMenu.y+"px"}},[e("div",{staticClass:"action-item",on:{click:t.topConversation}},[t._v(t._s(t.rightClickMenu.conversation.top?"取消置顶":"置顶"))]),e("div",{staticClass:"action-item",on:{click:t.deleteConversation}},[t._v("删除聊天")])]):t._e()]),e("div",{staticClass:"conversation-main"},[e("router-view",{key:t.$route.query.id})],1)])},a=[],n=s("303d"),o={name:"Conversation",data(){return{pendingConversations:[],conversations:[],rightClickMenu:{conversation:null,visible:!1,x:null,y:null},currentAgent:null}},created(){document.addEventListener("click",()=>{this.hideRightClickMenu()}),this.currentAgent=this.global.currentAgent,this.listenConversationUpdate(),this.loadConversations()},beforeDestroy(){this.global.goEasy.im.off(this.global.GoEasy.IM_EVENT.CONVERSATIONS_UPDATED,this.renderLatestConversations),this.global.goEasy.im.off(this.global.GoEasy.IM_EVENT.PENDING_CONVERSATIONS_UPDATED,this.renderPendingConversations)},methods:{formatDate:n["a"],renderCustomerName(t){return t.mark?t.mark:-1!==t.name.indexOf("游客")&&t.mobileNumber||!t.name?t.mobileNumber:t.mobileNumber||t.name},loadConversations(){this.global.goEasy.im.pendingConversations({onSuccess:t=>{this.renderPendingConversations(t.content)},onFailed:t=>{console.log("获取待接入列表失败, code:"+t.code+"content:"+t.content)}}),this.global.goEasy.im.latestConversations({onSuccess:t=>{this.renderLatestConversations(t.content)},onFailed:t=>{console.log("获取已接入列表失败, code:"+t.code+"content:"+t.content)}})},listenConversationUpdate(){this.global.goEasy.im.on(this.global.GoEasy.IM_EVENT.CONVERSATIONS_UPDATED,this.renderLatestConversations),this.global.goEasy.im.on(this.global.GoEasy.IM_EVENT.PENDING_CONVERSATIONS_UPDATED,this.renderPendingConversations)},renderPendingConversations(t){this.pendingConversations=t.conversations},renderLatestConversations(t){this.conversations=t.conversations},chat(t){this.$router.push({path:"/agent/conversations/chat",query:{id:t}})},showRightClickMenu(t,e){this.rightClickMenu.conversation=e,this.rightClickMenu.visible=!0,this.rightClickMenu.x=t.pageX,this.rightClickMenu.y=t.pageY},hideRightClickMenu(){this.rightClickMenu.visible=!1},topConversation(){let t=this.rightClickMenu.conversation,e=t.top?"取消置顶":"置顶";this.global.goEasy.im.topConversation({top:!t.top,conversation:t,onSuccess:function(){console.log(e,"成功")},onFailed:function(t){console.log(e,"失败：",t)}})},deleteConversation(){let t=confirm("确认要删除这条会话吗？");!0===t&&this.global.goEasy.im.removeConversation({conversation:this.rightClickMenu.conversation,onSuccess:function(){console.log("删除会话成功")},onFailed:function(t){console.log(t)}})}}},r=o,l=(s("fdc7"),s("2877")),c=Object(l["a"])(r,i,a,!1,null,"58bb661c",null);e["default"]=c.exports},"1dee":function(t,e,s){t.exports=s.p+"img/default.f0e98eaa.png"},"303d":function(t,e,s){"use strict";function i(t){t=t||Date.now();let e=new Date(t),s=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1;return s+="-",s+=e.getDate()<10?"0"+e.getDate():e.getDate(),s+=" ",s+=e.getHours(),s+=":",s+=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s}function a(t){t=t||Date.now();let e=new Date(t),s=e.getFullYear();return s+="-",s+=e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1,s+="-",s+=e.getDate()<10?"0"+e.getDate():e.getDate(),s+=" ",s+=e.getHours(),s+=":",s+=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),s+=":",s+=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),s}function n(t){const e=1e3,s=60*e,i=60*s,a=24*i,n=(new Date).getTime(),o=n-t,r=o/e,l=o/s,c=o/i,d=o/a;return d>=1?parseInt(d)+"天":c>=1?parseInt(c)+"小时":l>=1?parseInt(l)+"分钟":r>=1?parseInt(r)+"秒":"0秒"}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return n}))},d534:function(t,e,s){},fdc7:function(t,e,s){"use strict";s("d534")}}]);
//# sourceMappingURL=chunk-8f4063ae.25fc8226.js.map
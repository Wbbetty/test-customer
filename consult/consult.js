//cs_customer_config参数对象由第三方项目传入
let baseUrl = cs_customer_config.cs_frontend_host;
let loaded = false;
let staticResourceUrl = baseUrl + '/consult/';
let csServiceUrl = baseUrl + '/#/customer/';
let notify = null;

function loadCSS(cssPath) {
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssPath;
    head.appendChild(link);
}

function loadJs(jsPath) {
    let head = document.getElementsByTagName('HEAD')[0];
    let js = document.createElement('script');
    js.src = jsPath;
    head.appendChild(js);
}

function switchPopup () {
    requestNotificationPermission();
    let consult = document.getElementsByClassName("box")[0];
    let consultStyle = window.getComputedStyle(consult, null);
    let visibility = consultStyle.getPropertyValue("visibility");
    if (visibility === "visible") {
        consult.style.setProperty("visibility", "hidden");
    } else {
        consult.style.setProperty("visibility", "visible");
    }
}

function buildIcon() {
    let consultButton = document.createElement("div");
    consultButton.className = "cs";
    consultButton.onclick = switchPopup;
    let consultText = document.createElement("span");
    consultText.innerText = "在线咨询";
    consultButton.appendChild(consultText);
    document.body.appendChild(consultButton);
}

function renderPopup() {
    let consultBox = document.createElement("div");
    consultBox.className = "box";

    let iframeElement = document.createElement("iframe");
    iframeElement.className = "window";
    iframeElement.src = csServiceUrl+'?cs_customer_config='+encodeURIComponent(JSON.stringify(cs_customer_config));
    consultBox.appendChild(iframeElement);
    document.body.appendChild(consultBox);
}

function renderMediaPlayer () {
    let mediaPlayer = document.createElement("div");
    mediaPlayer.className = "media-player";
    let button = document.createElement("span");
    button.className="close-player";
    button.innerText="×"
    button.onclick = closeMediaPlayer;
    mediaPlayer.appendChild(button);
    document.body.appendChild(mediaPlayer);
}

function showImage (params) {
    let image = document.createElement("img");
    image.className="image-player";
    image.src = params.url;
    let mediaPlayer = document.getElementsByClassName("media-player")[0];
    mediaPlayer.appendChild(image);
    mediaPlayer.style.visibility = "visible";
}

function showVideo (params) {
    let video = document.createElement("video");
    video.className="video-player";
    video.src = params.url;
    video.setAttribute("controls", "controls");
    video.setAttribute("autoplay", "autoplay");
    let mediaPlayer = document.getElementsByClassName("media-player")[0];
    mediaPlayer.appendChild(video);
    mediaPlayer.style.visibility = "visible";
}

function closeMediaPlayer() {
    let mediaPlayer = document.getElementsByClassName("media-player")[0];
    mediaPlayer.style.visibility = "hidden";
    mediaPlayer.removeChild(mediaPlayer.childNodes[1]);
}

function listenIframeCallFunction(event) {
    window.addEventListener("message",function (event){
        if (event.origin === baseUrl) {
            const data = event.data;
            if (typeof(window[data.function]) == "function") {
                eval(data.function+'(data.parameters)');
            }
        };
    }, false);
}

function requestNotificationPermission() {
    if (window.Notification && window.Notification.permission !== 'granted') {
        window.Notification.requestPermission();
    }
}

function createNotification (notification) {
    if (notify === null) {
        notify = new Notify({
            effect: 'scroll', // flash | scroll, Flashing or scrolling
            interval: 1000,
            disableFavicon: true,
        });
    }
    notify.setTitle(true);
    notify.setTitle("[新消息]");

    notify.notify({
        title: notification.title,
        body: notification.body,
        icon: "https://www.goeasy.io/favicon.ico",
        openurl: "",
        onclick: function () {
            window.focus();
        },
        onshow: function () {
            console.log("on show");
        },
    });
}

function clearNotificationTitle() {
    if (notify) {
        notify.setTitle();
    }
}

function showPopup () {
    let consult = document.getElementsByClassName("box")[0];
    if (consult.style.visibility !== "visible") {
        consult.style.visibility = "visible";
    }
}

window.onload = function () {

    loadCSS(staticResourceUrl + 'consult.css');
    loadJs(staticResourceUrl + "notify@2.1.0.min.js");
    buildIcon();
    renderPopup();
    renderMediaPlayer();
    listenIframeCallFunction()

};
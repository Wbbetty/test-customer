let loaded = false;
let baseUrl = "http://localhost:8080";
let staticResourceUrl = baseUrl+'/consult/';
let csServiceUrl = baseUrl + '/#/customer/';

function loadCSS(cssPath) {
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssPath;
    head.appendChild(link);
}

function switchPopup () {
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
    // accountGuid由外部传入
    if (accountGuid) {
        iframeElement.src = csServiceUrl + "?accountGuid=" + accountGuid;
    } else {
        iframeElement.src = csServiceUrl;
    }
    consultBox.appendChild(iframeElement);
    document.body.appendChild(consultBox);
}

function renderMediaPlayer () {
    let mediaPlayer = document.createElement("div");
    mediaPlayer.className = "media-player";
    let button = document.createElement("span");
    button.className="close-player";
    button.innerText="关闭"
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

window.onload = function () {

    loadCSS(staticResourceUrl + 'consult.css');
    buildIcon();
    renderPopup();
    renderMediaPlayer();
    listenIframeCallFunction()

};
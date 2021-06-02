console.log("background");
function lol() {
    console.log('background')
}
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked(tab) {
    console.log(tab.url);
    chrome.tabs.sendMessage(tab.id, "ucam");
}
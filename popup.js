function senData() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            greeting: "best"
        }, function(response) {
            console.log("send success");
        });
    });
}
document.addEventListener('DOMContentLoaded', function() {
    
    /*Strongly Agree*/
    document.querySelector('#strongly_agree')
        .addEventListener('click', function() {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    greeting: "strongly_agree"
                }, function(response) {
                    console.log("send success");
                });
            });
        });
        
    /*Agree*/
    document.querySelector('#agree')
        .addEventListener('click', function() {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    greeting: "agree"
                }, function(response) {
                    console.log("send success");
                });
            });
        });

    /*Neither Agree nor Disagree*/
    document.querySelector('#neither_agree_nor_disagree')
        .addEventListener('click', function() {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    greeting: "neither_agree_nor_disagree"
                }, function(response) {
                    console.log("send success");
                });
            });
        });

    /*Disagree*/
    document.querySelector('#disagree')
    .addEventListener('click', function() {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                greeting: "disagree"
            }, function(response) {
                console.log("send success");
            });
        });
    });

    /*Strongly Disagree*/
    document.querySelector('#strongly_disagree')
        .addEventListener('click', function() {
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    greeting: "strongly_disagree"
                }, function(response) {
                    console.log("send success");
                });
            });
        });
});
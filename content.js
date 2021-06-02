//content.js
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     console.log(request, sender, sendResponse);
//     sendResponse('我收到你的消息了：'+JSON.stringify("request"));
// });


console.log("uiu rocks");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request, sender, sendResponse);
        sendResponse('response :'+JSON.stringify("request"));
        var x = document.querySelectorAll('select[name="ctl00$MainContainer$ddlExpectedGrade"]')[0].options;
        x[1].selected = true;
        if (request.greeting == 'strongly_agree') {
            fillRadio(0);
        }
        if (request.greeting == 'agree') {
            fillRadio(1);
        }
        if (request.greeting == 'neither_agree_nor_disagree') {
            fillRadio(2);
        }
        if (request.greeting == 'disagree') {
            fillRadio(3);
        }
        if (request.greeting == 'strongly_disagree') {
            fillRadio(4);
        }
        function fillRadio(m) {
            var x = document.querySelectorAll('input[type="radio"]');
            for (i = m; i < x.length;) {
                x[i].checked = true;
                i += 5;
            }

            // var i;
            // var x=1;
            // for(i = 1; i<17;i++){
            // document.getElementById('ctl00_MainContainer_rbtTheory'+x+'_0').checked = true;
            // x++;
        }
        
    });
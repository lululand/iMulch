console.log("background script running");

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Mulching " + tab.url);
  // chrome.scripting.executeScript({
    
  // })
});

// chrome.browserAction.onClicked.addListener(buttonClicked)

// function buttonClicked(tab) {
//   let msg = {
//     txt: "hello"
//   }
//   chrome.tabs.sendMessage(tab.id, msg);
// }
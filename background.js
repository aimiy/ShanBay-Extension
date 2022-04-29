//// background.js ////
function reddenPage() {
    document.body.style.backgroundColor = 'red';
  }
  console.log(chrome)
chrome.action.onClicked.addListener((tab) => {
    if(!tab.url.includes("chrome://")) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
      });
    }
});
chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
  console.log(bookmarkTreeNodes)
});

// chrome.runtime.onInstalled.addListener(async () => {
//     let url = chrome.runtime.getURL("popup.html");
//     let tab = await chrome.tabs.create({ url:"https://www.baidu.com" });
//     console.log(`Created tab ${tab.id}`);
// });
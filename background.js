// Define root context menu
var contextMenuItem = {
  "id": "ParentMenuItem",
  "title": "PhotoSense",
  "contexts": ["image"]
};

// Define sub context menu
var contextSubMenuItem = {
  "id": "SubMenuItem",
  "title": "Censor Image",
  "parentId": "ParentMenuItem",
  "contexts": ["image"]
}

// Create parent context menu
chrome.contextMenus.create(contextMenuItem);

// Create sub context menu and attach a listener
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create(contextSubMenuItem);
});

// Setup listener
chrome.contextMenus.onClicked.addListener(function(img) {
  console.log("HELLO");
  console.log(img);
  console.log("HELLO2");
  chrome.tabs.update({
     url: "localhost:3000/url/" + img.srcUrl
   });
});

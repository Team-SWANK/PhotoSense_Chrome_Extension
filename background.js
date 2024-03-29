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
  chrome.tabs.update({
     url: "https://photosense.app/url/" + img.srcUrl
   });
});

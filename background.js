var contextMenuItem = {
  "id": "ParentMenuItem",
  "title": "PhotoSense",
  "contexts": ["image"]
};

var contextSubMenuItem = {
  "id": "SubMenuItem",
  "title": "Censor Image",
  "parentId": "ParentMenuItem",
  "contexts": ["image"]
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create(contextMenuItem);
  chrome.contextMenus.create(contextSubMenuItem);
});

chrome.contextMenus.onClicked.addListener(function() {
  alert("This is a test!");
});

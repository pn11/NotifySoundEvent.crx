chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	var windowId = tab.windowId;
	if (changeInfo.audible) {
		var opt = {
			type: "basic",
			title: tab.title,
			message: "The tab has sound.",
			//		iconUrl: tab.favIconUrl // doesn't work
			iconUrl: "icon.png",
			isClickable: true
		};

		chrome.notifications.create("999", opt, function (notificationId) {
			chrome.notifications.onClicked.addListener(function (notificationId) {
				var updateInfo = {
					focused: true
				};
				chrome.windows.update(windowId, updateInfo, function (window) {
					var object = {
						active: true
					};
					chrome.tabs.update(tabId, object, function (tab) { });
				});
				chrome.notifications.clear("999", function (wasCleared) { });
			});
		});
	}
});

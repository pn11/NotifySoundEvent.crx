chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.audible) {
		var opt = {
			type: "basic",
			title: tab.title,
			message: "The tab has sound.",
			//		iconUrl: tab.favIconUrl // doesn't work
			iconUrl: "icon.png"
		};

		chrome.notifications.create("999", opt, function (notificationId) { });
	}
});

chrome.contextMenus.create({
        id: "snoosnoopUser",
        title: "Snoosnoop This User",
        contexts: ["link"],
        targetUrlPatterns: ["*://www.reddit.com/user/*"]
    });

    chrome.contextMenus.onClicked.addListener(function(info, tab) {
        if (info.menuItemId === "snoosnoopUser") {
            var username = info.linkUrl.match(/reddit\.com\/user\/([^\/]+)/);
            if (username) {
                chrome.tabs.create({ url: "https://snoosnoop.com/u/" + username[1] });
            }
        }
    });
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "snoosnoopUser",
        title: "Snoosnoop This User",
        contexts: ["link"],
        targetUrlPatterns: [
            "*://reddit.com/user/*",
            "*://www.reddit.com/user/*",
            "*://old.reddit.com/user/*",
            "*://np.reddit.com/user/*",
            "*://private.reddit.com/user/*"
        ]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "snoosnoopUser") {
        var match = info.linkUrl.match(/reddit\.com\/user\/([^\/?]+)/);
        if (match) {
            chrome.tabs.create({ url: "https://snoosnoop.com/u/" + match[1] });
        }
    }
});

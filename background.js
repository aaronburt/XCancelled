chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        const originalUrl = new URL(details.url);
        const newUrl = `https://xcancel.com${originalUrl.pathname}${originalUrl.search}${originalUrl.hash}`;
        return { redirectUrl: newUrl };
    },
    {
        urls: ["*://x.com/*"],
        types: ["main_frame"] 
    },
    ["blocking"]
);
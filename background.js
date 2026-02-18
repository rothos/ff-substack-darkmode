browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.sendMessage(tab.id, { action: "toggle" });
});

browser.commands.onCommand.addListener((command) => {
  if (command === "toggle-dark") {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (tabs[0]) {
        browser.tabs.sendMessage(tabs[0].id, { action: "toggle" });
      }
    });
  }
});

/* eslint-disable no-undef */
function create({ id, title, onclick }) {
    chrome.contextMenus.create({ id, title });
    chrome.contextMenus.onClicked.addListener(onclick);
}

export { create };

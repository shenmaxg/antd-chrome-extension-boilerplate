/* eslint-disable no-undef */
function go(url, callback) {
    const win = window.open(url);

    if (callback) {
        callback(win);
    }
}

export {
    go
};

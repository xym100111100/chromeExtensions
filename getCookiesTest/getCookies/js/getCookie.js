
function getAllCookies() {
    chrome.cookies.getAll({
        url: 'http://test-mljadmin.jqtianxia.com/'
    }, function (cookies) {
        console.log("--------")
        console.log(cookies);
    });

}

function getCookies() {
    chrome.cookies.get({
        url: 'test-mljadmin.jqtianxia.com',
        name: 'dotcom_user'
    }, function (cookie) {
        console.log(cookie.value);
    });
}

document.getElementById("box").onclick = getAllCookies
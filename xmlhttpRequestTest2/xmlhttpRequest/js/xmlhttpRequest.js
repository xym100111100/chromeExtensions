function httpRequest(url, data, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {



        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify(data))
}


let el = document.getElementsByClassName('el-button')

function userLogin() {

    let data = {
        username: 'weibocy',
        password: '123456'
    }

    console.log("请求")
    let url = 'https://mlj-back-api.jqtianxia.com/login/sign'
    httpRequest(url, data, (res) => {

        console.log("请求回来")
        console.log(res)
    })
}

document.getElementsByClassName('el-button')[0].innerHTML = '<div>ddd</div>';
document.getElementsByClassName('el-button')[0].style.background = 'red';
document.getElementsByClassName('el-button')[0].onclick = userLogin


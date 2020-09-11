function httpRequest(url, data,callback){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send(data);
}



function userLogin(){
    
    var data = new FormData();

    data.append('username', 'weibocy');
    
    data.append('password', 'password');
    
  
    console.log("请求")
    let url  = 'https://mlj-back-api.jqtianxia.com/login/sign'
    httpRequest(url,data,(res)=>{
       
        console.log("请求回来")
        console.log(res)
    })
}

document.getElementsByClassName('el-button').onclick = userLogin;

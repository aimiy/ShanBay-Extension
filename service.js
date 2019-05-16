

function getData(url) {
    return new Promise((resolve) => {
        
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // innerText不会给攻击者注入HTML元素的机会.
            resolve(xhr.responseText);
        }
    }
    xhr.send();
    });
}


function getShanbayWord(word) {
    var url = "http://www.shanbay.com/api/v1/bdc/search/?word=" + word;
    getData(url).then((res) => {
        console.log(res)
    })
    // jQuery.ajax({
    //     url: url,
    //     type: 'GET',
    //     dataType: 'JSON',
    //     contentType: "application/json; charset=utf-8",
    //     success: function(data) {
    //         // console.log(data);
    //         if (data.status_code == 0 && data.msg == "SUCCESS") {
    //             callback(word, "OK", data.data);
    //         } else {
    //             callback(word, data.msg);
    //         }
    //     },
    //     error: function() {
    //         callback(word, "查询失败，<br>可能 . . . ");
    //     },
    //     complete: function() {}
    // });
}
getShanbayWord("apple");
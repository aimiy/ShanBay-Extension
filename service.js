let Service = {
    getShanbayWord: function(word) {
        var url = "https://www.shanbay.com/api/v1/bdc/search/?word=" + word;
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
}
function getData(url) {
    return new Promise((resolve) => {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest(); // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // IE6, IE5 浏览器执行代码
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText)
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xmlhttp.send();
    });
}


 

export default Service;
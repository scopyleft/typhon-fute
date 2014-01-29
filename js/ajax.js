(function (global) {
    "use strict";
    var Ajax = function (url, callback) {

        this.get = function (url, callbackSuccess, callbackError) {
            var http = new XMLHttpRequest();
            http.open('GET', url);
            http.send();
            http.onreadystatechange = function () {
                if (http.readyState === 4) {
                    if (callbackSuccess && http.status === 200) {
                        callbackSuccess(JSON.parse(http.responseText));
                    } else if (callbackError) {
                        callbackError(http.status);
                    }
                }
            }
        }
    }
    global.Ajax = Ajax;
})(this);

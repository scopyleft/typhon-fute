(function (global) {
    "use strict";

    /**
    * Clean <p></p> from marked.
    */
    global.markdown = function (str, opt, callback) {
        var ret = marked(str, opt, callback);
        return ret.substr(3, ret.length - 8);
    }

    global.$ = function (element, context) {
        return (context || document).querySelectorAll(element);
    }

    global.$$ = function (element, context) {
        return (context || document).querySelector(element);
    }
})(this);

(function (global) {
    // System conf
    var conf = {
        debug:  location.hash.indexOf('debug') >= 0,
        publishedListId: "52e7cfd2f5f21b1b1033a646",
    };
    conf.url = conf.debug
               ? "/fixture.json"
               : "https://api.trello.com/1/boards/52e7cfd2f5f21b1b1033a645/cards?key=11d0f0ce0e152c29b2fc61031c5fc229";
    }
    global.conf = conf;
})(this);

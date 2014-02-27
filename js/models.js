(function (global) {
    "use strict";
    /**
    * Model can retrieve data and treat it.
    */
    var Model = {
        meta: {
            get: function (callback) {
                Ajax.get(Model.conf.url, function (data) {
                    var filtered = data.filter(function(d) {
                        return d.name.substr(0, 6).toLowerCase() === '__meta';
                    });
                    var prepared = {
                        tendency: filtered[0].desc[0] == '-' ? 'down' : 'up',
                        intensity: filtered[0].desc[1]
                    };
                    callback(prepared);
                });
            }
        },
        news: {
            all: function(callback) {
                Ajax.get(Model.conf.url, function (data) {
                    var filtered = data.filter(function(d) {
                        return d.idList === Model.conf.publishedListId
                            && d.name.substr(0, 6).toLowerCase() !== '__meta'
                            && d.name.substr(0, 6).toLowerCase() !== '__info';
                    });
                    callback(filtered);
                });
            }
        },
        info: {
            get: function(callback) {
                Ajax.get(Model.conf.url, function (data) {
                    var filtered = data.filter(function(d) {
                        return d.name.substr(0, 6).toLowerCase() === '__info';
                    });
                    callback(filtered[0]);
                });
            }
        }
    };
    global.Model = Model;
})(this);

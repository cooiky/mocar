define(function(require, exports) {
    var Brand = require('../model/brand');
    var Series = require('../model/series');
    var Model = require('../model/model');

    var CarModel = require('./common').sub({
        el: $('#car-model'),

        template: 'template-model',

        getData: function(params, callback){
            Model.fetch(params, function(err, data){
                data = $.extend(data, Brand.find(params.brand_id), Series.find(params.series_id));
                callback(null, data);
            });
        }
    });

    return CarModel;
});
'use strict'

var os = require('os');

$(document).ready(function() {
    $('.hostname').append(os.hostname());

    $('.memory').append(
        format[$('.memory').find('.value').data('format')]()
    );

    $('.uptime').find('.value').each(function() {
        $(this).append(
            format[$(this).data('format')](os.uptime())
        )
    });

    //crappy refresh. Make this better
    setTimeout("location.reload(true);", 1000);
});

var format = {

    bytes: function() {
        
   
    },

    kiloBytes: function(n) {

    },

    megaBytes: function(n) {
   
    },

    percent: function(nPercentof, subject) {
        return '%';
    },

    /*
     * Converts n milliseconds(by default) into seconds
     */
    seconds: function(n, nTimeFormat="seconds") {

        var time = {
            seconds: 1
        };

        return Math.floor(n / time[nTimeFormat]);
    },

    /*
     * Converts n milliseconds into seconds
     */
    minutes: function(n, nTimeFormat="seconds") {

        var time = {
            milliseconds: 60000,
            seconds: 60
        };

        return Math.floor(n / time[nTimeFormat]);
    },

    /*
     * Converts n milliseconds into seconds
     */
    hours: function(n, nTimeFormat="seconds") {

        var time = {
            seconds: 3600

        };

        return Math.floor(n / time[nTimeFormat]);
    },

    numeric: function(n) {
   
    }
};

/**
 * jQuery Raspberry PiLite LED Board Display Grid
 * http://forty96.com
 *
 * Dependencies:
 *      jQuery      : http://jquery.com
 *      jQueryUI    : http://jqueryui.com (Selectable Plugin Only)
 *
 * Copyright 2013 Forty96
 * Released under the MIT license
 */
$(function() {

    //Draw Grid
    $( document ).ready(function() {
        //Re-order for PiLite board LED placements
        for (var i = 1; i < 10; i++) {
            for (var j = 1; j < 15; j++ ) {
                $("#selectable").append("<li class='ui-state-default' id="+(((j-1)*9) + i)+"></li>");
            }
        }
    });

    //Filter and display results
    $( "#selectable" ).selectable({

        stop: function() {
            var result = $( "#select-result" ).empty();

            //Sort by ID
            $("#selectable > li").sort(function (a, b) {
                return (~~a.id > ~~b.id) ? 1 : -1;

            }).each(function(){

                var classes = $(this).attr("class");

                if (classes.indexOf("ui-selected") != -1) {
                    result.append("1");
                } else {
                    result.append("0");
                }

            });
        }
    });
});
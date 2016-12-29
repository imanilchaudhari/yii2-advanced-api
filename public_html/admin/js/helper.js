(function ($) {
    'use strict';

    function Helper() {
        var self = this;

        this.removeImojies = function (data) {
            var ranges = [
                "\ud83c[\udf00-\udfff]", // U+1F300 to U+1F3FF
                "\ud83d[\udc00-\ude4f]", // U+1F400 to U+1F64F
                "\ud83d[\ude80-\udeff]"  // U+1F680 to U+1F6FF
            ];
            return data.replace(new RegExp(ranges.join("|"), "g"), "");
        };

        this.actionInit = function () {
             this.removeImojies();
        };

        return this.actionInit();
    }

    $.fn.helper = function () {
        return this.each(function () {
            var helper = new Helper();
        });
    };
}(jQuery));
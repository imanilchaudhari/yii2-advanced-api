!function(e) {
    e.fn.moveToList = function(o, t) {
        var n = e(o + " option:selected");
        e(t).append(e(n).clone());
    }, e.fn.moveAllToList = function(o, t) {
        var n = e(o + " option");
        e(t).append(e(n).clone());
    }, e.fn.moveToListAndDelete = function(o, t) {
        var n = e(o + " option:selected");
        e(n).remove(), e(t).append(e(n).clone());
    }, e.fn.moveAllToListAndDelete = function(o, t) {
        var n = e(o + " option");
        e(n).remove(), e(t).append(e(n).clone());
    };
}(jQuery);

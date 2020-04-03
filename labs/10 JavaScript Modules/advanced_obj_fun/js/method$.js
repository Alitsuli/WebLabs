(function (windows) {
    'use strict'
    //gtElementsbyId method
    function $() {

    }

    //getElementbyId
    $.prototype.id = function (idname) {
        return document.getElementById(idname);
    };
    windows.app = windows.app || {};
    windows.app.$ = $;
})(window);
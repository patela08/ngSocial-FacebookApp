(function () {
    angular.module("myApp")
        .controller("userStatus",["fbFactory",userstats]);
    function userstats(fbFactory) {
        var fvm = this;
        console.log("in status controller")

    }
})();
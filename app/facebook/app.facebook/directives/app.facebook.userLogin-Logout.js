(function () {
    angular.module("myApp")
        .directive("userLogin",userLinOut);
    function userLinOut() {
        var userlio = {
            templateUrl:"./facebook/app.facebook/view/app.facebook.login-logout.html",
            restriction:"E",
            controllerUrl:"./facebook.controller.js",
            //controllerAs:'LogCtrl'
        };
        return userlio;
    }
})();
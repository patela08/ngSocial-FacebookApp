(function () {
    angular.module("myApp")
        .directive("userPosts",userPostDir);
    function userPostDir() {
        var UPD = {
            templateUrl:"./facebook/app.facebook/view/app.facebook.userPosts.html",
            restriction:"E",
            controllerUrl:"./facebook.controller.js"
        };
        return UPD;
    }
})();
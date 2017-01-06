(function (){
    angular.module("myApp")
        .directive("userInfo",userInfoDir);

    function userInfoDir() {
        var uInfo = {
            templateUrl:"./facebook/app.facebook/view/app.facebook.userInfo.html",
            // templateUrl:"./view/app.facebook.userInfo.html",
            restrict:"E",
            controllerUrl:"./facebook.controller.js"
        }
        return uInfo;
    }
})();
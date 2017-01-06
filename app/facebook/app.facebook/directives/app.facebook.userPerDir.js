(function () {
    angular.module("myApp")
        .directive("userPermission",userPermissionDir);
    function userPermissionDir() {
        var userPer = {
            templateUrl:"./facebook/app.facebook/view/app.facebook.userPermission.html",
            restriction:"E",
            controllerUrl:"./facebook.controller.js"
        }
        return userPer;
    }
})();
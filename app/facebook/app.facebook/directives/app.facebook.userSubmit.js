(function () {
    angular.module("myApp")
        .directive("userSubmit",submitDir);

    function submitDir() {
        var userComment ={
            templateUrl:"./facebook/app.facebook/view/app.facebook.submit.html",
            restriction:"E",
            controllerUrl:"./facebook.controller.js",
           // controllerAs:"uStats"
        };
        return userComment;
    }
})();
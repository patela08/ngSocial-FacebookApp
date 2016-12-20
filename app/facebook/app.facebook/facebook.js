/**
 * Created by abpatel on 12/17/2016.
 */
(function () {
    'use strict';

    angular.module('myApp.facebook', ['ngRoute','ngFacebook'])

        .config(['$routeProvider','$facebookProvider', function($routeProvider,$facebookProvider,FacebookCtrl) {
            $routeProvider.when('/facebook', {
                templateUrl: 'facebook/facebook.html',
                controller: 'FacebookCtrl',
                controllerAs: 'fbc'
            });
            $facebookProvider.setAppId('933942726737328');
            $facebookProvider.setPermissions("email,user_likes,public_profile,user_posts,publish_actions,user_photos");
        }])
        
        .run(function ($rootScope) {
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        });

        // .controller('FacebookCtrl', [function() {
        //
        // }]);
})();

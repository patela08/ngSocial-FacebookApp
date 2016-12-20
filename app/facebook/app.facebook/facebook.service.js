/**
 * Created by abpatel on 12/18/2016.
 */
(function (){
    angular.module('myApp.facebook')
        .factory('fbFactory',['$facebook','$q',function ($facebook,$q) {
            var defer = false;
            var FB = $facebook;
            function refreshLogin(response) {
                return defer.resolve(response);
            };
            function refreshErr(err) {
                return defer.reject(err);
            };
            return {
                postData: function postData(data) {

                    defer = $q.defer();
                    FB.api(data).then(refreshLogin,refreshErr);
                    return defer.promise;

                },
                logIn: function logIn() {
                    defer = $q.defer();
                    FB.login().then(refreshLogin,refreshErr);
                    return defer.promise;
                },
                statusPost: function stausPost(data,postdata) {
                    defer = $q.defer();
                    console.log(data + postdata);
                    FB.api(data,'post',postdata).then(refreshLogin,refreshErr);
                    return defer.promise;
                },
                logOut: function logOut() {
                    defer = $q.defer();
                    FB.logout().then(refreshLogin,refreshErr);
                    return defer.promise;
                }
            }
        }])
})();
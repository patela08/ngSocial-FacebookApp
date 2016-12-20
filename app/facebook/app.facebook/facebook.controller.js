(function () {
    'use strict';

    angular.module('myApp.facebook')
        .controller('FacebookCtrl', ['fbFactory',function(fbFactory) {
            var fvm = this;
            fvm.welcomeMsg = "Please LogIn";
            fvm.isLoggedIn = false;//to add/remove login btn

            // for login
            fvm.logIn = function logIn() {
                fbFactory.logIn().then(successLogin,refreshErr);
                function successLogin() {
                    fvm.isLoggedIn = !fvm.isLoggedIn;
                    refresh();
                };
            };
            function refresh() {
                var postUrl = "/me?fields=id,name,picture,email,last_name,gender,locale,posts,link,likes,permissions"
                fbFactory.postData(postUrl).then(refreshLogin,refreshErr);
                function refreshLogin(response){
                    console.log(response);
                    fvm.responseRes = response;
                    // $.each(response.posts.data,postLikes);
                    // function postLikes(index,item) {
                    //     console.log(item);
                    //     fbFactory.postData("/"+item.id+"/likes").then(gettingView,refreshErr);
                    // };
                    //gettingView(response);
                    fvm.welcomeMsg = "Welcome "+ response.name;
                }
            }

            function refreshErr(err) {
                fvm.welcomeMsg = "Login Failed Please Login Again!!";
                console.log("Login Failed Please Login Again!!");
                fvm.isLoggedIn = false;
            }

            fvm.statusPost = function statusPost() {
                var dataPost = {
                    message: fvm.usercomment
                };
                console.log(dataPost);
                fbFactory.statusPost('/me/feed',dataPost).then(function (response) {
                    refresh();
                    fvm.usercomment = "";
                });
            };

            fvm.logOut = function logOut(){
                fbFactory.logOut().then(logOutSuccess,refreshErr);
                function logOutSuccess(){
                    fvm.responseRes = {};
                    fvm.isLoggedIn = !fvm.isLoggedIn;
                    fvm.welcomeMsg = "Please Login";
                   // refresh();
                };
            };
           //refresh();//so that user keeps logged in/out(depending on whether he was logged in or out before refershing the page) if user refreshes the page
        }]);
})();
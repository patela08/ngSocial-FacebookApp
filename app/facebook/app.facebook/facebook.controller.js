(function () {
    'use strict';
    angular.module('myApp.facebook')
        .controller('FacebookCtrl', ['fbFactory',function(fbFactory) {
            var fvm = this;
            fvm.welcomeMsg = "Please LogIn";
            fvm.isLoggedIn = false;//to add/remove login btn
            fvm.counter  = function (count) {
                count++;
            };
            fvm.statusPost = function statusPost() {
                var dataPost = {
                    message: fvm.usercomment
                }
                fbFactory.statusPost('/me/feed',dataPost).then(function (response) {
                    refresh();
                    fvm.usercomment = "";
                })
            };
            var popSpinner = {
                radius: 20,
                height: 20,
                width: 8.5,
                dashes: 20,
                opacity: 0.95,
                padding: 3,
                rotation: 800,
                color: '#000000'
            };
            var fvm = this;
            fvm.welcomeMsg = "Please LogIn";
            fvm.isLoggedIn = false;//to add/remove login btn
            // for login

            fvm.logIn = function logIn() {
                fvm.loadingImg = true;
                fbFactory.logIn().then(successLogin,refreshErr);
                function successLogin() {
                    fvm.isLoggedIn = !fvm.isLoggedIn;
                    refresh();
                }
            };


            function refresh() {
                var postUrl = "/me?fields=id,name,picture,email,last_name,gender,locale,posts.limit(50000){story,comments,message,created_time,id,likes.limit(5000)},link,likes.limit(500),permissions"
                //var gettingLikes = "/me?fields=comments.limit(5){id}";
                var target  = $("#userPost");
                var spinner = Spinners.create(target,popSpinner).play().center();
                spinner.center();
                fbFactory.postData(postUrl).then(refreshLogin,refreshErr);
                function refreshLogin(response){
                    fvm.loadingImg = false;
                    console.log(response);
                    Spinners.get(target).remove();
                    fvm.responseRes = response;
                    fvm.welcomeMsg = "Welcome "+ response.name;
                }
            }

            function refreshErr(err) {
                fvm.welcomeMsg = "Login Failed Please Login Again!!";
                console.log("Login Failed Please Login Again!!");
                fvm.isLoggedIn = false;
            }

            fvm.logOut = function logOut(){
                fbFactory.logOut().then(logOutSuccess,refreshErr);
                function logOutSuccess(){
                    fvm.responseRes = {};
                    fvm.isLoggedIn = !fvm.isLoggedIn;
                    fvm.welcomeMsg = "Please Login";
                    // refresh();
                }
            }



            //refresh();//so that user keeps logged in/out(depending on whether he was logged in or out before refershing the page) if user refreshes the page
            fvm.likePost = function likePost(index) {
                var id = index.data.id;
                var dataPost = {
                    message: "this is a test for liking the post"
                };
                fbFactory.likes("/"+id+"/likes",dataPost).then(function (response) {
                    console.log(response);
                },function (reject) {
                    console.log(reject);
                })
            }
        }]);
})();
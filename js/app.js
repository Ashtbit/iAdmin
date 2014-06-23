// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'IMS8Alert' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'IMS8Alert.services' is found in services.js
// 'IMS8Alert.controllers' is found in controllers.js
angular.module('IMS8Alert', ['ionic', 'IMS8Alert.controllers', 'IMS8Alert.services', 'IMS8Alert.directives'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
         .state('page', {
             url: "/page",
             abstract: true,
             templateUrl: "templates/page.html"
         })
      // Each tab has its own nav history stack:
         .state('page.login', {
             url: '/login',
             templateUrl: 'templates/page-login.html',
             controller: 'LoginCtrl'
         })
         .state('page.home', {
             url: '/home',
             templateUrl: 'templates/page-home.html',
             controller: 'HomeCtrl'
         })
          .state('page.address', {
              url: '/address',
              templateUrl: 'templates/tab-address.html',
              controller: 'AddressCtrl'
          })
            .state('page.visitaddress', {
                url: '/visitaddress',
                templateUrl: 'templates/page-visitaddress.html',
                controller: 'VisitAddressCtrl'
            })
            //.state('page.modal', {
            //    url: '/modal',
            //    templateUrl: 'templates/modal.html',
            //    controller: 'ModalCtrl'
            //})
         .state('page.openinghour', {
             url: '/openinghour',
             templateUrl: 'templates/tab-openinghour.html',
             controller: 'OpeninghourCtrl'
         })
      // setup an abstract state for the tabs directive
      .state('tab', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html"
      })

      .state('tab.dash', {
          url: '/dash',
          views: {
              'tab-dash': {
                  templateUrl: 'templates/tab-dash.html',
                  controller: 'DashCtrl'
              }
          }
      })

      .state('tab.friends', {
          url: '/friends',
          views: {
              'tab-friends': {
                  templateUrl: 'templates/tab-friends.html',
                  controller: 'FriendsCtrl'
              }
          }
      })
      .state('tab.friend-detail', {
          url: '/friend/:friendId',
          views: {
              'tab-friends': {
                  templateUrl: 'templates/friend-detail.html',
                  controller: 'FriendDetailCtrl'
              }
          }
      })

      .state('tab.account', {
          url: '/account',
          views: {
              'tab-account': {
                  templateUrl: 'templates/tab-account.html',
                  controller: 'AccountCtrl'
              }
          }
      }).state('tab.contacts', {
          url: '/contacts',
          views: {
              'tab-contacts': {
                  templateUrl: 'templates/tab-contacts.html',
                  controller: 'ContactCtrl'
              }
          }
      })
        .state('tab.contact-details', {
            url: '/contact-details',
            views: {
                'tab-contacts': {
                    templateUrl: 'templates/tab-contact-details.html',
                    controller: 'DashCtrl'
                }
            }
        }).state('page.edit-contact', {
            url: '/edit-contact',
            templateUrl: 'templates/page-edit-contact.html',
            controller: 'OpeninghourCtrl'
        })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/page/login');

});


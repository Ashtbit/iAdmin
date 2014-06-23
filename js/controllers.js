angular.module('IMS8Alert.controllers', [])

.controller('OpeninghourCtrl', function ($scope) {

})

.controller('ContactCtrl', function ($scope, list, $state) {
    $scope.contacts = list.allContacts();
    $scope.selectedcontact = "";
    $scope.openContact = function () {
        $state.go("page.address");
    };
   
})

.controller('VisitAddressCtrl', function ($scope, $rootScope, $ionicModal, $state, list) {
    $scope.doNext = function () {
        $state.go("page.address");
    }

    //Model for country list
    $scope.countries = list.allCountries();
    $scope.selectedcountry = "";
    $ionicModal.fromTemplateUrl('templates/modal/modal-country.html', {
        scope: $scope,
        animation: 'slide-left-right',//'slide-left-right', 'slide-in-up', 'slide-right-left'
        focusFirstInput: true
    }).then(function (modal) { $scope.mdlcountry = modal; });
    $scope.openModalCountry = function () {
        $scope.mdlcountry.show();
    };
    $scope.applyModalCountry = function (itmcountry) {
        $scope.selectedcountry = itmcountry;
        $scope.mdlcountry.hide();
    };

    // Model for state list
    $scope.states = list.allStates();
    $scope.selectedstate = "";
    $ionicModal.fromTemplateUrl('templates/modal/modal-state.html', {
        scope: $scope,
        animation: 'slide-left-right',//'slide-left-right', 'slide-in-up', 'slide-right-left'
        focusFirstInput: true
    }).then(function (modal) { $scope.mdlstate = modal; });
    $scope.openModalState = function () {
        $scope.mdlstate.show();
    };
    $scope.applyModalState = function (itmstate) {
        $scope.selectedstate = itmstate;
        $scope.mdlstate.hide();

    };
})

.controller('AddressCtrl', function ($scope, $state) {
    $scope.doNext = function () {
        $state.go("page.visitaddress");
    }
})

.controller('HomeCtrl', function ($scope, $rootScope, $ionicModal, $state, list) {
   
    $scope.doNext = function () {
        $state.go("page.address");
    }


     //Model for customer list
    $scope.customers = list.allCustomers();
    $scope.selectedcstomer = "";
    $ionicModal.fromTemplateUrl('templates/modal/modal-customer.html', {
        scope: $scope,
        animation: 'slide-left-right',//'slide-left-right', 'slide-in-up', 'slide-right-left'
            focusFirstInput: true
    }).then(function (modal) { $scope.mdlcust = modal; });
    $scope.openModalCust = function () {
        $scope.mdlcust.show();
    };
    $scope.applyModalCust = function (itmcust) {
        $scope.selectedcstomer = itmcust;
        $scope.mdlcust.hide();
    };

    // Model for Group list
        $scope.groups = list.allGroups();
        $scope.selectedgrp = "";
    $ionicModal.fromTemplateUrl('templates/modal/modal-group.html', {
            scope: $scope,
            animation: 'slide-left-right',//'slide-left-right', 'slide-in-up', 'slide-right-left'
            focusFirstInput: true
        }).then(function (modal) { $scope.mdlgrp = modal; });
        $scope.openModalGrp = function () {
            $scope.mdlgrp.show();
        };
        $scope.applyModalGrp = function (itmgrp) {
            $scope.selectedgrp = itmgrp;
            $scope.mdlgrp.hide();
            
       };
            // Model for Profile list
            $scope.profiles = list.allProfiles();
            $scope.selectedpro = "";
    $ionicModal.fromTemplateUrl('templates/modal/modal-profile.html', {
                scope: $scope,
                animation: 'slide-left-right',//'slide-left-right', 'slide-in-up', 'slide-right-left'
                focusFirstInput: true
            }).then(function (modal) { $scope.mdlpro = modal; });
            $scope.openModalPro = function () {
                $scope.mdlpro.show();
            };
            $scope.applyModalPro = function (itmpro) {
                $scope.selectedpro = itmpro;
                $scope.mdlpro.hide();
            };
    // Model for Language list
            $scope.languages = list.allLanguages();
            $scope.selectedlang = "";
    $ionicModal.fromTemplateUrl('templates/modal/modal-language.html', {
                scope: $scope,
                animation: 'slide-left-right',//'slide-left-right', 'slide-in-up', 'slide-right-left'
                focusFirstInput: true
            }).then(function (modal) { $scope.mdllang = modal; });
                 $scope.openModalLang = function () {
                 $scope.mdllang.show();
            };
            $scope.applyModalLang = function (itmlang) {
                $scope.selectedlang = itmlang;
                $scope.mdllang.hide();
            };
   })

.controller('AccountCtrl', function ($scope) {
})
.controller('MainController', function ($rootScope, $scope, analytics, $location) {
    $scope.isSpecificPage = function () {
        var path;
        return path = $location.path(), _.contains(["/404", "/login", "/signin", "/"], path)
    }
    $rootScope.$on("$routeChangeStart", function () {
        $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function () {
        $rootScope.loading = false;
    });
    $scope.userAgent = navigator.userAgent;
}).controller('LoginCtrl', function ($scope, $state) {
    $scope.doLogin = function () {
        $state.go("page.home");
    }
});
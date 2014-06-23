angular.module('IMS8Alert.directives', [])
.directive('ims8Togale', function () {
    var directive = {};

    directive.restrict = 'E';

    directive.template = "User : {{user.firstName}} {{user.lastName}}";

    directive.scope = {
        user: "=user"
    }

    return directive;
}).directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
}]).value('version', 'iAlert v 1.1.0.1 Databeat.Net 2014');

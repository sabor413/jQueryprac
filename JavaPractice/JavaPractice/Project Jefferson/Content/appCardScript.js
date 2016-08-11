(function () {
    var app = angular.module('app-chart', []);

    app.directive('applicationChart', function () {
        return {
            restrict: 'E',
            templateUrl: 'application-chart.html',
            controller: function () {
                this.cards = chartdata;

                this.exceptions = function (rating) {
                    if (rating > 200) { return "bg-danger"; }
                    if (rating > 100) { return "bg-warning"; }
                    return "bg-success";
                };

                this.dependencyresponsetime = function (rating) {
                    if (rating > 4) { return "bg-danger"; }
                    if (rating > 2) { return "bg-warning"; }
                    return "bg-success";
                };

                this.responsetime = function (rating) {
                    if (rating > 4) { return "bg-danger"; }
                    if (rating > 2 ) { return "bg-warning"; }
                    return "bg-success";
                };

                this.pagehits = function (rating) {
                    if (rating > 1000) { return "bg-success"; }
                    if (rating > 500) { return "bg-warning"; }
                    return "bg-danger";
                };
             },
            controllerAs: 'appCharting'
        };
    });

    var chartdata = [
        {
            name: "App 4",
            link: "appCard.html",
            subtitle: "Transformers.org",
            pagehits: 1290,
            responsetime: 1.2,
            dependencyresponsetime: 3.2,
            exceptions: 209,
            indicator: 50
        },
        {
            name: "App 5",
            link: "appCard.html",
            subtitle: "GIJOE",
            pagehits: 700,
            responsetime: 5.0,
            dependencyresponsetime: 4.7,
            exceptions: 209,
            indicator: 80
        },
        {
            name: "App 6",
            link: "appCard.html",
            subtitle: "Pokemon",
            pagehits: 1500,
            responsetime: 0.5,
            dependencyresponsetime: 1.0,
            exceptions: 20,
            indicator: 20
        }
    ];
})();
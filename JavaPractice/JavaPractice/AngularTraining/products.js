(function () {
    var app = angular.module('store-products', []);

    app.directive('reviewForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'review-form.html',
            controller: function () {
                this.review = {};

                this.addReview = function (product) {
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });
})();


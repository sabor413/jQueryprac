(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gem;
    });

    app.controller("PanelController", function () {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.directive('reviewForm', function () {
        return {
            restrict: 'E',
            templateUrl: 'review-form.html',
            controller: function() {
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

    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Some gems have hidden qualities beyond\n their luster, beyond their shine... Dodeca is\none of those gems.',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Pentagonal gems have five sides',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 2,
                    body: "This product is aww-right!",
                    author: "carlos@theman.com"
                }
            ]
        }];
})();


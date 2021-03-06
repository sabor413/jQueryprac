﻿(function () {
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];
        
        $http.get('products.json').success(function (data) {
            store.products = data;
        });

        //this.products = gem; -- old way without JSON
    }]);

    app.controller("PanelController", function () {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
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


(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gem;
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
    });

    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'Some gems have hidden qualities beyond\n their luster, beyond their shine... Dodeca is\none of those gems.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Pentagonal gems have five sides',
            canPurchase: true,
            soldOut: false
        }];
})();


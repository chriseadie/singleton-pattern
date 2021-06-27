var logger = require('./logger');
var Shopper = require('./shopper');
var Store = require('./store');

logger.log('starting app...');

var alex = new Shopper('alex', 500)
var ski_shop = new Store('Steep and Deep Supplies', [
    {
        item: 'Downhill Skis',
        qty: 5,
        price: 750
    },
    {
        item: 'Knit Hat',
        qty: 20,
        price: 5
    }
])

logger.log('finished config...');

console.log(`${logger.count} logs total`);
console.log(logger.logs)

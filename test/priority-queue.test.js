/* globals describe it beforeEach afterEach */

var should = require('should');
var PriorityQueue = require('../');

describe('Queue Unit Tests', function() {

    var queue;

    beforeEach(function () {
        queue = new PriorityQueue();
    });

    afterEach(function () {
        queue = null;
    });

    it('should have a working test environment', function() {
        true.should.equal(true);
    });

    it('should instantiate a queue instance', function () {
        queue.should.be.ok;
    });

    it('should be empty when first instantiated', function () {
        queue.isEmpty().should.equal(true);
        queue.size().should.equal(0);
    });

    it('should queue up data with the same priority at the back of queue', function () {
        queue.queue('some test data', 1);
        queue.queue('some more test data', 1);
        queue.queue('and yet some more...', 1);
        queue.size().should.equal(3);
    });
});
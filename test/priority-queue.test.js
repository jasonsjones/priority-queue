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
});
/**
 * @fileOverview Implementation of a priority queue data structure
 * @author Jason S. Jones
 * @version 0.1.0
 * @license MIT
 */

(function() {
    'use strict';

    // bring in the one dependency which will be the underlying
    // data structure for this queue implementation
    var LinkedList = require('dbly-linked-list');

    /**
     * Creates a new queue instance and initializes the underlying data
     * structure
     *
     * @constructor
     */
    var PriorityQueue = function() {
        this._list = new LinkedList();
    };

    /* Functions attached to the PriorityQueue prototype.  All queue instances
     * will share these methods, meaning there will NOT be copies made for each
     * instance.  This will be a huge memory savings since there may be several
     * different queue instances.
     */
    PriorityQueue.prototype = {

    };

    module.exports = PriorityQueue;
})();

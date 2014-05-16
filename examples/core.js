/**
 * node-queue-lib
 * Copyright(c) 2014 year Andrey Gromozdov
 * License: MIT
 */

var Queue = require('../lib/core/queue-core');

var queue = new Queue('Queue name', 'broadcast');

// subscribe on 'Queue name' messages
queue.subscribe(function (subscriber) {
    subscriber.on('data', function (data, accept) {
        console.log(data);
        accept(); // accept process message
    });
});

// publish message
queue.publish('test');

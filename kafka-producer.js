'use strict';

var kafka = require('kafka-node');

module.exports = function(Model, options) {
   var canSend = true;
  if (!process.env.KAFKA_URL) {
    console.log('Kafka url not set, events will not be sent, please set KAFKA_URL env variable');
    canSend = false;
  }

  if (canSend) {
    var Producer = kafka.Producer,
      client = new kafka.Client(process.env.KAFKA_URL),
      producer = new Producer(client);

    producer.on('ready', function() {
      console.log('Kafka producer is ready');
    });
  }

  Model.sendEvent = function(model, next) {
    if (canSend) {
      var sentMessage = JSON.stringify(model.messages);
      var payloads = [
        {topic: model.topic, messages: sentMessage, partition: 0},
      ];
      producer.send(payloads, function(err, data) {
        if (next) {
          next(err, data);
        }
      });
    } else {
      if (next) {
        next(null, null);
      }
    }
  };

};

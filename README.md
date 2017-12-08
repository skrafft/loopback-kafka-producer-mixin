[![NPM](https://nodei.co/npm/loopback-kafka-producer-mixin.png?compact=true)](https://nodei.co/npm/loopback-kafka-producer-mixin/)

# loopback-kafka-producer-mixin

Kafka Producer mixin for loopback to add sendEvent method to your models.

INSTALL
=============

```bash
  npm install loopback-kafka-producer-mixin --save
```

SERVER CONFIG
=============

Add the `mixins` property to your `server/model-config.json`:

```json
{
  "_meta": {
    "sources": [
      "loopback/common/models",
      "loopback/server/models",
      "../common/models",
      "./models"
    ],
    "mixins": [
      "loopback/common/mixins",
      "../node_modules/loopback-kafka-producer-mixin",
      "../common/mixins"
    ]
  }
}
```

MODEL CONFIG
=============

To use with your Models add the `mixins` attribute to the definition object of your model config.

```json
  {
    "name": "Widget",
    "properties": {
      "name": {
        "type": "string",
      }
    },
    "mixins": {
      "KafkaProducer" : true
    }
  }
```

CONNEXIONS
=============

To be able to connect to your kafka host or zookeeper host, you have to set the KAFKA_URL env variable

```bash
export KAFKA_URL=192.168.99.100:2181
```

LICENSE
=============
[Apache-2.0] (LICENSE)

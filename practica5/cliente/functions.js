var mongodb = require('mongodb');

module.exports = function() {

    module.exports= function(callback) {

        var MongoClient = mongodb.MongoClient;
        var url = "mongodb+srv://<username>:<password>@<mongo_uri>/?retryWrites=true&w=majority";


        MongoClient.connect(url, function(err, db) {

            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
                return;
            } else {
                console.log('Connection established to', url);
                return callback;
            } //else

        }); //MongoClient.connect

    }; //Connection

}; //constructor
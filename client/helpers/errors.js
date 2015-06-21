/**
 * Created by Steven on 6/21/2015.
 */
// Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
};
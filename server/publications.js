/**
 * Created by Steven on 6/20/2015.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});
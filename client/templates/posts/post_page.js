/**
 * Created by Steven on 6/22/2015.
 */
Template.postPage.helpers({
    comments: function() {
        return Comments.find({postId: this._id});
    }
});
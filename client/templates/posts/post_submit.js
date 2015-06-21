/**
 * Created by Steven on 6/20/2015.
 */
Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();
        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        };
        post._id = Posts.insert(post);
        Router.go('postPage', post);
    }
});
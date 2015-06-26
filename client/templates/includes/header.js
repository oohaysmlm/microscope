/**
 * Created by Steven on 6/26/2015.
 */
// TODO learn more of whats going on here

Template.header.helpers({
    activeRouteClass: function(/* route names */) {
        var args = Array.prototype.slice.call(arguments, 0);
        args.pop();
        var active = _.any(args, function(name) {
            return Router.current() && Router.current().route.getName() === name
        });
        return active && 'active';
    }
});
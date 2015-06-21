/**
 * Created by Steven on 6/21/2015.
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}

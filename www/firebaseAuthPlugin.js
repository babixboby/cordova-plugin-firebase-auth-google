var exec = require('cordova/exec');

function dispatchEvent(event) {

    window.dispatchEvent(new CustomEvent(event.type, {detail: event.data}));
}

function FirebaseAuth() { }

FirebaseAuth.prototype.init = function(options) {
    options = options || {};
    var allowDomains = options.allowDomains ? [].concat(options.allowDomains) : null;
    exec(dispatchEvent, null, 'FirebaseAuthPlugin', 'initialize', [allowDomains]);
};

FirebaseAuth.prototype.getToken = function(success, failure) {
    
    return exec(success, failure, 'FirebaseAuthPlugin', 'getToken', []);
};

FirebaseAuth.prototype.signIn = function () {

    return exec(null, null, 'FirebaseAuthPlugin', 'signIn', []);
};

FirebaseAuth.prototype.signOut = function () {

    return exec(null, null, 'FirebaseAuthPlugin', 'signOut', []);
};

FirebaseAuth.prototype.getUserData = function(success, failure) {
    
    return exec(success, failure, 'FirebaseAuthPlugin', 'getUserData', []);
};

if (typeof module !== undefined && module.exports) {

    module.exports = new FirebaseAuth();
}

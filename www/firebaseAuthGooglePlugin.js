var exec = require('cordova/exec');
var PLUGIN_NAME = 'FirebaseAuthGooglePlugin';

function dispatchEvent(event) {

    window.dispatchEvent(new CustomEvent(event.type, {detail: event.data}));
}

function FirebaseAuth() { }

FirebaseAuth.prototype.init = function(options) {
    options = options || {};
    var allowDomains = options.allowDomains ? [].concat(options.allowDomains) : null;
    exec(dispatchEvent, null, PLUGIN_NAME, 'initialize', [allowDomains]);
};

FirebaseAuth.prototype.getToken = function(success, failure) {
    
    return exec(success, failure, PLUGIN_NAME, 'getToken', []);
};

FirebaseAuth.prototype.signIn = function (silent) {

    return exec(null, null, PLUGIN_NAME, 'signIn', [silent === true]);
};

FirebaseAuth.prototype.signOut = function () {

    return exec(null, null, PLUGIN_NAME, 'signOut', []);
};

FirebaseAuth.prototype.getUserData = function(success, failure) {
    
    return exec(success, failure, PLUGIN_NAME, 'getUserData', []);
};

if (typeof module !== undefined && module.exports) {

    module.exports = new FirebaseAuth();
}

var exec = require('cordova/exec');
var PLUGIN_NAME = 'FirebaseAuthGooglePlugin';

function dispatchEvent(event) {

    window.dispatchEvent(new CustomEvent(event.type, {detail: event.data}));
}

function FirebaseAuthGoogle() { }

FirebaseAuthGoogle.prototype.init = function(options) {
    options = options || {};
    var allowDomains = options.allowDomains ? [].concat(options.allowDomains) : null;
    exec(dispatchEvent, null, PLUGIN_NAME, 'initialize', [allowDomains]);
};

FirebaseAuthGoogle.prototype.getToken = function(success, failure) {
    
    return exec(success, failure, PLUGIN_NAME, 'getToken', []);
};

FirebaseAuthGoogle.prototype.signIn = function (silent) {

    return exec(null, null, PLUGIN_NAME, 'signIn', [silent === true]);
};

FirebaseAuthGoogle.prototype.signOut = function () {

    return exec(null, null, PLUGIN_NAME, 'signOut', []);
};

FirebaseAuthGoogle.prototype.getUserData = function(success, failure) {
    
    return exec(success, failure, PLUGIN_NAME, 'getUserData', []);
};

if (typeof module !== undefined && module.exports) {

    module.exports = new FirebaseAuthGoogle();
}

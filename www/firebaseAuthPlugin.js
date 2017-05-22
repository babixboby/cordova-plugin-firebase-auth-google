var exec = require('cordova/exec');

function FirebaseAuth() {
    
    this.init = function(options) {
        options = options || {};
        var allowDomains = options.allowDomains ? [].concat(options.allowDomains) : null;
        exec(dispatchEvent, null, 'FirebaseAuthPlugin', 'initialize', [allowDomains]);
    }

    this.getToken = function(success, failure) {
        
        return exec(success, failure, 'FirebaseAuthPlugin', 'getToken', []);
    };

    this.signIn = function () {

        return exec(null, null, 'FirebaseAuthPlugin', 'signIn', []);
    };

    this.signOut = function () {

        return exec(null, null, 'FirebaseAuthPlugin', 'signOut', []);
    };
    
    this.getUserData = function(success, failure) {
        
        return exec(success, failure, 'FirebaseAuthPlugin', 'getUserData', []);
    };

    function dispatchEvent(event) {

        window.dispatchEvent(new CustomEvent(event.type, {detail: event.data}));
    }
}

if (typeof module !== undefined && module.exports) {

    module.exports = FirebaseAuth;
}

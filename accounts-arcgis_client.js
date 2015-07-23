Meteor.loginWithArcgis = function(options, callback){
  // support a callback without options
  if (! callback && typeof options === "function") {
    callback = options;
    options = null;
  }

  var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
  Arcgis.requestCredential(options,credentialRequestCompleteCallback);
};

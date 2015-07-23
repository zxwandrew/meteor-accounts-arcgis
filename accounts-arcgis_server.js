Accounts.addAutopublishFields({
  forLoggedInUser:
  //['services.arcgis.access_token', 'services.arcgis.expires_in'],
   _.map(
    Arcgis.whitelistedFields.concat(["access_token", "expires_in"]),
    function (subfield) {return 'services.arcgis.' + subfield; }
  ),

  forOtherUsers:
  //['services.arcgis.email', 'services.arcgis.username']
   _.map(
    _.without(Arcgis.whitelistedFields, "username", "email", "id"),
    function (subfield) {return 'services.arcgis.' + subfield}
  )
});

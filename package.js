Package.describe({
  name: 'zxwandrew:accounts-arcgis',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Meteor login service for ArcGIS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/zxwandrew/meteor-accounts-arcgis',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('underscore', ['client', 'server']);
  api.use('service-configuration', ['server']);
  api.use('zxwandrew:arcgis@1.0.0', ['client', 'server']);

  api.imply('zxwandrew:arcgis@1.0.0', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.imply('service-configuration', ['server']);

  api.addFiles(['arcgis_login_button.css'], 'client');
  api.addFiles('accounts-arcgis.js', ['client', 'server']);
  api.addFiles('accounts-arcgis_client.js', 'client');
  api.addFiles('accounts-arcgis_server.js', 'server');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('zxwandrew:accounts-arcgis');
  api.addFiles('accounts-arcgis-tests.js');
});

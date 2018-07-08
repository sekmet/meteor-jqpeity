Package.describe({
  name: 'skt:jqpeitylines',
  version: '0.1.0',
  summary: 'Charting library Peity jQuery plugin version 3.3.0',
  git: 'https://github.com/sekmet/meteor-jqpeity.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4');
  api.mainModule('jquery.peity.js', 'client');
});

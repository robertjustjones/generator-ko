exports.template = require( 'fs' ).readFileSync( __dirname + '/<%= filename %>.html', 'utf8');

var <%= viewModelClassName %> = exports.viewModel = function <%= viewModelClassName %>(params) {
  var self = this;
  self.message = ko.observable('Hello from the <%= name %> component!');
  
  
  }

// This runs when the component is torn down. Put here any logic necessary to clean up,
// for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
<%= viewModelClassName %>.prototype.dispose = function() { };

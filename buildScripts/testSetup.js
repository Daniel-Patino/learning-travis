// This file isn't transpiled, so we must usee CommonJS and ES5

// Register babel to transpile befoure our tests run.
require('babel-register')();

// Disable webpac features that Mocha doesn't understand.
require.extensions['.css'] = function() {};

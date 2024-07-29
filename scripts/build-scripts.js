'use strict';

const renderScripts = require('./render-scripts');

renderScripts();

var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});
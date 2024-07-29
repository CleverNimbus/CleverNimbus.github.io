'use strict';

const renderAssets = require('./render-assets');

renderAssets();

var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});
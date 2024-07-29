'use strict';

const renderSCSS = require('./render-scss');

renderSCSS();

var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});
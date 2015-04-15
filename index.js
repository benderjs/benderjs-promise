/**
 * Copyright (c) 2015, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 */

'use strict';

var path = require( 'path' ),
	files = [
		path.join( require.resolve( 'es6-promises' ), '../setimmediate/setimmediate.js' ),
		require.resolve( 'es6-promises' )
	];

module.exports = {
	name: 'bender-promise',
	files: files,
	include: files
};

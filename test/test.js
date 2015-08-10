/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	table = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-male-first-names-us-frequency', function tests() {

	it( 'should export an object', function test() {
		expect( table ).to.be.an( 'object' );
	});

	it( 'should retrieve the number of births per first name for any given year', function test() {
		assert.strictEqual( table[ 'John' ][ 1950 ], 79410 );
		assert.strictEqual( table[ 'John' ][ 1990 ], 29067 );
		assert.strictEqual( table[ 'Peter' ][ 2000 ], 3146 );
	});

});

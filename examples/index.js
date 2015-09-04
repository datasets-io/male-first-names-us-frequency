'use strict';

var freq = require( './../lib/herbert.json' ),
	i;

console.log( 'Frequencies for name `Herbert`' );

for( i = 0; i < freq.length; i++ ) {
	console.log( 'Year: ' + freq[ i ][ 0 ] + '; Count: ' + freq[ i ][ 1 ] );
}

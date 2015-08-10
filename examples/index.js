'use strict';

var frequencies = require( './../lib' ),
	i;

console.log( 'Frequencies for name `Herbert` from 1950 to 2000: ' );

for( i = 1950; i <= 2000; i++ ) {
	console.log( 'Year: ' + i + '; Count: ' + frequencies[ 'Herbert' ][ i ] );
}

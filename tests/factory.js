/* global chai */

'use strict';

import factory from '../src/factory';
import SelectorEngine from '../src/SelectorEngine';
import defaultConverterConfig from '../src/converter/defaultConfig';

const expect = chai.expect;

describe('factory', () => {
	it('should be a function', () => {
		expect(factory).to.be.a('function');
	});

	it('return SelectorEngine instance', () => {
		const result = factory();
		expect(result).to.be.an.instanceOf(SelectorEngine);
	});

	it( 'pass default configuration to Converter instance', () => {
		const result = factory();
		expect( result.converter.config ).to.deep.equal( defaultConverterConfig );
	});

	it( 'could alter Converter configuration', () => {
		const config = {
			'hublabubla': true };
		const result = factory( config );
		expect( result.converter.config ).to.deep.equal( config );
	});

});

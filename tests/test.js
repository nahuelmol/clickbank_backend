'use strict';

const assert = require('assert')

const { BaseError, 
		Api404Error, 
		Api500Error } = require('../errors')

describe("Entering at testing...", () => {
	before(() => {
		console.log('once before all')
	})

	after(() => {
		console.log('once after all')
	})

	describe( "error handling", () => {
    	var rand_404err = new Api404Error(`404 error`)
    	var rand_500err = new Api500Error('500 error')
    	var base_rand_err = new BaseError


    	beforeEach(() => {
    	  console.log( "checking" );
    	});

    	it("verifying, is BaseError an object", () => {
    	  	assert.equal(typeof base_rand_err, 'object');
    	});

    	it("Api404Error, is object", () => {
    	  	assert.equal(typeof rand_404err, 'object');
    	});

    	it("Api404Error's properties", () => {

    		var obj = {
    			name:'404 error',
    			statusCode:404,
    			description:'Not found',
    			isOperational:true
    		}
    		try{
    			assert.equal(rand_404err, obj)
    		}catch(err){
    			console.log('err handled')
    		}
    	})

    	it( "verifying Api500Error return value format", () => {
    		var rand_err = new Api500Error(`500 error`)
    	  	assert.equal(typeof rand_500err, 'object');
    	});

    	it("Api500Error's properties", () => {

    		var obj = {
    			name:'500 error',
    			statusCode:404,
    			description:'internal server',
    			isOperational:true
    		}
    		try{
    			assert.equal(rand_500err, obj)
    		}catch(err){
    			console.log('err handled')
    		}
    	})
  	});
})



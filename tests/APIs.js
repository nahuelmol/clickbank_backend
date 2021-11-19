let mongoose = require('mongoose')

const { BookModel,
		CommentSchema,
		UserModel} = require('../db/models')

var chai = require('chai')
var chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp);

describe("Checking APIs", () => {
	it("feed route", (done) => {
		chai.request(server)
			.get('/feed')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})

	it("homepage route", (done) => {
		chai.request(server)
			.get('/homepage')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})

	it("api/description route", (done) => {
		chai.request(server)
			.get('/api/description')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})

	it("api/login route", (done) => {
		chai.request(server)
			.get('/api/description')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})

	it("api/logout route", (done) => {
		chai.request(server)
			.get('/api/logout')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})

	it("api/register route", (done) => {
		chai.request(server)
			.get('/api/register')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})

	it("api/profile route", (done) => {
		chai.request(server)
			.get('/api/profile')
			.end((err,res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			})
	})
})
var should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:8000/contact');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im5hbWUxIiwiaWF0IjoxNjY2NDEyMjg5LCJleHAiOjE2NjcyNzYyODl9.YCwdr_miKM6CPYweGtAFzTiSYx9pcnJS2Xc0H6FhiJE'

describe('Contact', function(){

	it('Get Searching contect with correct contact name 200 response',  function(done){
		api.get('/get/name2')
    .set('Authorization', 'Bearer ' + token)
		.expect(200, done);
	});
	it('Get Searching contect with wrong contact name 200 response',  function(done){
		api.get('/get/wrongname')
    .set('Authorization', 'Bearer ' + token)
		.expect(400, done);
	});
	it('Get getting all contact list 200 response',  function(done){
		api.get('/list')
    .set('Authorization', 'Bearer ' + token)
		.expect(200, done);
	});
	it('Get searching contact from some initials of name 200 response',  function(done){
		api.get('/search/name')
    .set('Authorization', 'Bearer ' + token)
		.expect(200, done);
	});
  it('POST Add contact 200 response',  function(done){
		api.post('/add')
    .set('Authorization', 'Bearer ' + token)
	    .send({
		    name:"johndoe",
        email:"john.doe@gmail.com",
        phone:"123456",
        address:"john doe address",
	    })
	    .expect(200,done);
	});
  it('PUT update contact 200 response',  function(done){
		api.put('/update/johndoe')
    .set('Authorization', 'Bearer ' + token)
	    .send({
		    name:"johndoe",
        email:"john.doe1@gmail.com",
        phone:"1234561",
        address:"john1 doe address",
	    })
	    .expect(200,done);
	});
  it('DELETE delete contact 200 response',  function(done){
		api.delete('/delete/johndoe')
    .set('Authorization', 'Bearer ' + token)
	    .expect(200,done);
	});
})

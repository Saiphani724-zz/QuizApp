// var app = require("../spec/jasmine_examples/jasmine_test1");

var request = require("request");


describe("Sign Up", function () {
	describe("Testing", function () {

		it("Register with existing user", function (done) {
			var username = 'PSP123'
			var mobile = "924646080"
			var password = "1919"
			var email = "saiphani7890@gmail.com"
			var rollNo = "cb.en.u4cse17137"
			var base_url = `http://localhost:5000/register?username=${username}&&password=${password}&&email=${email}&&rollNo=${rollNo}&&mobile=${mobile}`

			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["isRegisterSuccess"]).toBe(true);
				done();
			});
		});

		it("Register with new user", function (done) {
			var d = new Date();
			var username = 'Saiphani1234' + d.getTime();
			var mobile = "924646080"
			var password = "1919"
			var email = "saiphani456@gmail.com"
			var rollNo = "cb.en.u4cse17137"
			var base_url = `http://localhost:5000/register?username=${username}&&password=${password}&&email=${email}&&rollNo=${rollNo}&&mobile=${mobile}`

			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["isRegisterSuccess"]).toBe(true);
				done();
			});
		});


		it("Register with existing user", function (done) {
			var username = 'Saiphani724'
			var mobile = "924646080"
			var password = "1919"
			var email = "saiphani123@gmail.com"
			var rollNo = "cb.en.u4cse17137"
			var base_url = `http://localhost:5000/register?username=${username}&&password=${password}&&email=${email}&&rollNo=${rollNo}&&mobile=${mobile}`

			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["isRegisterSuccess"]).toBe(true);
				done();
			});
		});

		it("Register with new user", function (done) {
			var d = new Date();
			var username = 'Saiphani' + d.getTime();
			var mobile = "924646080"
			var password = "1919"
			var email = "saiphani727@gmail.com"
			var rollNo = "cb.en.u4cse17137"
			var base_url = `http://localhost:5000/register?username=${username}&&password=${password}&&email=${email}&&rollNo=${rollNo}&&mobile=${mobile}`

			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["isRegisterSuccess"]).toBe(true);
				done();
			});
		});


	});
});

var app = require("../spec/jasmine_examples/jasmine_test1");

var request = require("request");

// var  checkLogin = (username, password)=>{
// 	var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
// 	request.get(base_url, function (error, response, body) {
// 		console.log("\n\n\n" + JSON.parse(response.body)["userFound"] + "\n\n");
// 		return JSON.parse(response.body)["userFound"]
// 	});
// }


describe("Hello World Server", function () {
	describe("GET /", function () {

		it("returns status code 200", function (done) {
			var password = 'sachmo'
			var username = 'Sachipo'
			var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["userFound"]).toBe(true);
				done();
			});
		});


		it("returns status code 200", function (done) {
			var username = 'Sachmo'
			var password = 'Sachipo'
			var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["userFound"]).toBe(false);
				done();
			});
		});


	});
});

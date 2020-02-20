var request = require("request");


describe("Login", function () {
	describe("Testing with", function () {

		it("Correct user details1", function (done) {
			var username = 'Saiphani724'
			var password = '1919'
			var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["userFound"]).toBe(true);
				done();
			});
		});

		it("Wrong user details1", function (done) {
			var username = 'Saiphani724'
			var password = '1234'
			var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["userFound"]).toBe(true);
				done();
			});
		});

		it("Correct user details2", function (done) {
			var username = 'Sachipo'
			var password = 'sachmo'
			var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["userFound"]).toBe(true);
				done();
			});
		});


		it("Wrong user details2", function (done) {
			var username = 'Sachmo'
			var password = 'sachipo'
			var base_url = `http://localhost:5000/login?username=${username}&&password=${password}`
			console.log(base_url);

			request.get(base_url, function (error, response, body) {
				expect(JSON.parse(response.body)["userFound"]).toBe(true);
				done();
			});
		});


	});
});

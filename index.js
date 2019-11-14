import $ from 'jquery'

let promise = new Promise((resolve, reject) => {
	$.ajax({
		url: 'http://da2te.jsontest.com/',
		dataType: 'json',
		success: function (response) {
			resolve(response)
		},
		error: function (error) {
			reject('Error')
		}
	})
})

promise
	.then((data) => {
		return data.date
	})
	.then((date) => {
		console.log('Date: ', date)
	})
	.catch((error) => {
		console.info(error)
		
	})

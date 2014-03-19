var net = require('net');
var client = net.connect(8124, '192.168.8.100', function(){
	console.log('conneted');
});

var count = 0;
client.on('data', function(data) {
	client.write('world!\r\n', 'utf8', function(){
		count += 1;
		console.log("count: " + count);
	});

});

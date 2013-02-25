var fs = require('fs');


/*global module:false*/
module.exports = function(grunt) {

	var directoryList = ['./dist', './demo.html', './index.js'];
	var detect = {
		existsFile: function(path) {
			return fs.existsSync(path);
		}
	};
	grunt.registerTask('detect', 'KISSY-gallery', function() {
		for(var i=0,len = directoryList.length;i<len;i++){
			console.log(detect.existsFile(directoryList[i]));
		}
		//console.log(detect.existsFile('./dist/bofang.js'));
	});
};
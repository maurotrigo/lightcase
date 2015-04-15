module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'dist/*',
						'dist/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: 'fonts',
					src: '*.*',
					dest: 'dist/fonts'
				},
				{
					'dist/js/lightcase.js': ['lightcase.js']
				}]
			}
		},

		uglify: {
			dist: {
				options: {
					expand: true
				},
				files: {
					'dist/js/lightcase.min.js': ['lightcase.js']
				}
			}
		},

		cssjoin: {
			dist : {
				options: {
					expand: true,
					paths : ['css/']
				},
				files: {
					'dist/css/lightcase.min.css': ['css/lightcase.css'],
				},
			}
		},

		cssmin: {
			dist: {
				options: {
					shorthandCompacting: false,
					roundingPrecision: -1
				},
				files: {
					'dist/css/lightcase.min.css': ['dist/css/lightcase.min.css']
				}
			}
		},

	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-cssjoin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('build', [
		'clean:dist',
		'copy:dist',
		'uglify:dist',
		'cssjoin:dist',
		'cssmin:dist'
	]);

};
module.exports = function(grunt) {

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
              mangle: false
            },
            minify: {
                src: 'dev/scripts/*.js',
                dest: 'public/js/app.min.js'
            }
        },
        cssmin: {
            minify: {
                files: {
                    'public/css/main.min.css': 'dev/styles/main.css'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);

};
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass
    watch: {
      options: { livereload: false },
      sass: {
        files: ['../public/sass/*.scss'],
        tasks: ['compass:dev']
      } //sass
    } //watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports

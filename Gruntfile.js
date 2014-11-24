'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    uiFramework: {
      
    }
  });

  grunt.loadNpmTasks('uiFramework');
  grunt.loadNpmTasks('grunt-html-include');

  grunt.registerTask('html_include');
}
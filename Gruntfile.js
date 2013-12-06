'use strict';

/**
 * Grunt module
 */
module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
     * Project info
     */
    project: {
      css_src: [
        '_src/css'
      ],
      css_res: [
        'assets/css'
      ],
      js: [
        'src/js/*.js'
      ]
    },

    /**
     * Project banner
     * Inherits text from package.json
     */
    tag: {
      banner: '/*!\n' +
              ' * Name: <%= pkg.name %>\n' +
              ' * Project: <%= pkg.description %>\n' +
              ' * Author: <%= pkg.author %>\n' +
              ' * Version: <%= pkg.version %>\n' +
              ' */\n'
    },

    /**
     * https://npmjs.org/package/grunt-contrib-sass
     */
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= project.css_res %>/style.css': '<%= project.css_src %>/style.scss',
          '<%= project.css_res %>/selectors.css': '<%= project.css_src %>/selectors.scss'
        }
      },
      dist: {
        options: {
          style: 'expanded',
          // banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.css_res %>/style.css': '<%= project.css_src %>/style.scss',
          '<%= project.css_res %>/selectors.css': '<%= project.css_src %>/selectors.scss'
        }
      }
    },

    /**
     * https://npmjs.org/package/grunt-autoprefixer
     */
    autoprefixer: {
      dev: {
        options: {},
          src: '<%= project.css_res %>/*.css'
      },
      dist: {
        options: {},
        multiple_files: {
          src: '<%= project.css_res %>/*.css'
        }
      },
    },

    /**
     * https://npmjs.org/package/grunt-csso
     */
    csso: {
      compress: {
        options: {
          report: 'min'
        },
        files: {
          '<%= project.css_res %>/style.css': ['<%= project.css_res %>/style.css'],
          '<%= project.css_res %>/selectors.css': ['<%= project.css_res %>/selectors.css']
        }
      }
    },

    /**
     * Clean files and folders
     * https://github.com/gruntjs/grunt-contrib-clean
     * Remove generated files for clean deploy
     */
    clean: {
      dev: [
        '_src/css/*.prefixed.css',
        '_src/css/*.unprefixed.css'
      ],
      build: [
        '_site/Gemfile',
        '_site/Gemfile.lock',
        '_site/Gruntfile.js',
        '_site/package.json',
        '_site/node_modules',
        '_src/css/*.prefixed.css',
        '_src/css/*.unprefixed.css'
      ]
    },

    /**
     * https://npmjs.org/package/grunt-contrib-watch
     */
    watch: {
      sass: {
        files: '<%= project.css_src %>{,*/}*.{scss,sass}',
        tasks: ['sass:dev', 'autoprefixer', 'clean:dev'] 
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'watch'
    ]);

  grunt.registerTask('build', [
    'sass:dist',
    'autoprefixer:dist',
    'clean:build'
    ]);


};
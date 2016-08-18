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
      img_src: [
        '_src/img'
      ],
      img_res: [
        'assets/img'
      ],
      js_src: [
        '_src/js/*.js'
      ],
      js_res: [
        'assets/js/*.js'
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
      dist: {
        options: {
          // sourcemap: false,
          style: 'nested',
          banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.css_src %>/style.css': '<%= project.css_src %>/style.scss',
          '<%= project.css_src %>/nth-child.css': '<%= project.css_src %>/demos/nth-child.scss',
          '<%= project.css_src %>/css-and-svg-masks.css': '<%= project.css_src %>/demos/css-and-svg-masks.scss',
          '<%= project.css_src %>/bubble.css': '<%= project.css_src %>/demos/bubble.scss'
        }
      }
    },

    /**
     * https://npmjs.org/package/grunt-autoprefixer
     */
    autoprefixer: {
      // dist: {
      //   options: {},
      //   src: '<%= project.css_src %>/style.unprefixed.css',
      //   dest: '<%= project.css_res %>/style.css'
      // },
      multiple_files: {
        expand: true,
        flatten: true,
        src: '<%= project.css_src %>/*.css', // -> src/css/file1.css, src/css/file2.css
        dest: '<%= project.css_res %>/' // -> dest/css/file1.css, dest/css/file2.css
      },
    },


    svgmin: {
        options: {
            plugins: [{
                removeViewBox: false
            }]
        },
        dist: {                        // Target
            files: [{                // Dictionary of files
                expand: true,        // Enable dynamic expansion.
                cwd: '_src/img',        // Src matches are relative to this path.
                src: ['**/*.svg'],    // Actual pattern(s) to match.
                dest: 'assets/img',        // Destination path prefix.
                ext: '.svg'        // Dest filepaths will have this extension.
                // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
            }]
        }
    },


    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '_src/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/img'
        }]
      }
    },


    /**
     * Clean files and folders
     * https://github.com/gruntjs/grunt-contrib-clean
     * Remove generated files for clean deploy
     */
    clean: {
      dev: [
        '_src/css/*.css'
      ],
      build: [
        '_site/Gemfile',
        '_site/Gemfile.lock',
        '_site/Gruntfile.js',
        '_site/package.json',
        '_site/node_modules',
        '_site/temp/drafts',
        '_site/temp/img',
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
        tasks: ['sass', 'autoprefixer', 'clean:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'watch',
    'svgmin',
    'imagemin'
    ]);

  grunt.registerTask('build', [
    //'sass:dist',
    'clean:build'
    ]);


};
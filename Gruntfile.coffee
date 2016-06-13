###
  Gruntfile.coffee

###

module.exports = (grunt) ->

  require('time-grunt') grunt
  require('load-grunt-tasks') grunt

  grunt.initConfig
    rsync:
      options:
        ssh: true
        port: 18765
        exclude: [
          '.git'
          'package.json'
          'node_modules'
          'Gruntfile.*'
          '.htaccess'
        ]
        args: [
          '--verbose'
        ]
        recursive: true
        delete: true
        src: './'
        host: 'imcv1@imcv.org.au'
      prod:
        options:
          dest: '~/public_html/bazis'

    grunt.registerTask 'deploy:prod', [
      'rsync:prod'
    ]

    grunt.registerTask 'default', [
      'deploy:prod'
    ]

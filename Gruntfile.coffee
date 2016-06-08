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
          'Gruntfile'
        ]
        recursive: true
        delete: true
        host: 'imcv1@imcv.org.au'
      prod:
        dest: '~/public_html/bazis'

    grunt.registerTask 'deploy:prod', [
      'rsync:prod'
    ]

    grunt.registerTask 'default', [
      'deploy:prod'
    ]

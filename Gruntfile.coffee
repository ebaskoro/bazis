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
          'server'
          '.vagrant'
          'web/css/*'
          'web/js/*'
        ]
        args: [
          '--verbose'
        ]
        recursive: true
        delete: true
        src: './'
        host: 'imcv1@imcv.org.au'

      uat:
        options:
          dest: '~/public_html/bazis-uat'

      prod:
        options:
          dest: '~/public_html/bazis'


    grunt.registerTask 'deploy:uat', [
      'rsync:uat'
    ]

    grunt.registerTask 'deploy:prod', [
      'rsync:prod'
    ]

    grunt.registerTask 'default', [
      'deploy:uat'
    ]

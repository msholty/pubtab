module.exports = function(grunt) {
  var rewrite = require('connect-modrewrite');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          keepalive: true,
          base: ['.', 'bower_components'],
          hostname: 'localhost',
          middleware: function(connect, options) {

            var middleware = [];

            // 1. mod-rewrite behavior
            var rules = [
                '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html'
            ];
            middleware.push(rewrite(rules));

            // 2. original middleware behavior
            var base = options.base;
            if (!Array.isArray(base)) {
                base = [base];
            }
            base.forEach(function(path) {
                middleware.push(connect.static(path));
            });

            return middleware;

          }
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          //jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('analyze', ['jshint']);
  grunt.registerTask('serve', ['analyze', 'connect', 'watch']);

};
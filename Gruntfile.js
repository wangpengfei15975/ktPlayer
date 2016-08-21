module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options:{
                stripBanners:true,
                banner:'/* ktPlayer by Scott */\n'
            },
            build:{
                src:'./src/ktPlayer.js',
                dest:'./dist/ktPlayer.min.js'
            }
        },
        sass:{
            dist:{
                options:{
                    style:'compressed'
                },
                files:[{
                    expand:true,
                    cwd:'./src',
                    src:['*.scss'],
                    dest:'./dist',
                    ext:'.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['uglify','sass']);
};
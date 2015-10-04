var env = require('yeoman-env');
var GeneratorERB = require('./app/index');

env.registerStub(GeneratorERB, "erb:app");

env.run("erb:app", done);


'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Entity Generator ' + chalk.red('generator-entity-template') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'someAnswer',
      message: 'What is your entity name?',
      //Defaults to the project's folder name if the input is skipped
      default: "Entity"
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;
      this.log(this.props.someAnswer);
      done();
    }.bind(this));
  },

  writing: function () {
    // Copy templates
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.someAnswer
      }
    );
    this.fs.copyTpl(
      this.templatePath('_index.ts'),
      this.destinationPath('index.ts'), {
        name: this.props.someAnswer
      }
    );
    this.fs.copyTpl(
      this.templatePath('_lib/_EntityModel.ts'),
      this.destinationPath('lib/' + this.props.someAnswer + 'Model.ts'), {
        name: this.props.someAnswer
      }
    );
    this.fs.copyTpl(
      this.templatePath('_lib/_IEntityModel.ts'),
      this.destinationPath('lib/I' + this.props.someAnswer + 'Model.ts'), {
        name: this.props.someAnswer
      }
    );
    
    //Copy static files
    this.fs.copy(
      this.templatePath('_typings/_index.d.ts'),
      this.destinationPath('typings/index.d.ts')
    );
    this.fs.copy(
      this.templatePath('_gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );
    this.fs.copy(
      this.templatePath('_typings.json'),
      this.destinationPath('typings.json')
    );
  },

  install: function () {
    this.installDependencies();
  }
});

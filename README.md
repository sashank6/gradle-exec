# gradle-exec

gradle-exec is a javascript plugin to execute gradle targets by importing build.gradle configuration file. Currently the project is in early stages, I am only providing you the basic features.

NOTE: You should have gradle installed on your machine for gradle-exec to work.

Usage with gulp:
```javascript
var Gradle = require('gradle-exec');
var gulp = require('gulp');
gulp.task('gradle-task',function(){
    var gradle=new Gradle('build.gradle');
    gradle.exec('test-target');
});
```
General Usage:
```javascript
var Gradle = require('gradle-exec');
var gradle=new Gradle('build.gradle');
gradle.exec('test-target');
```

Typings will be available soon.

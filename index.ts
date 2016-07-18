
/**
 * Author: Sashank Alladi
 */

///<reference path="typings/main.d.ts"/>

import fs=require('fs');
import path=require('path');
import shell=require('shelljs');
import child_process=require('child_process');
import spawn=child_process.spawn;
import reference = ts.HighlightSpanKind.reference;
class Gradle {
    private gradlePath:string;
    private fileExists:boolean;
    private validFileExtension:boolean;
    private validFile:boolean;
    private current_dir:string;

    constructor(configFileName:string) {
        if (typeof configFileName === "string") {
            configFileName = path.normalize(configFileName);
            this.gradlePath = path.dirname(configFileName);
        } else {
        }
        try {
            if (fs.statSync(configFileName).isFile()) {
                this.fileExists = true;
            } else {
                this.fileExists = false;
            }
        } catch (e) {
            this.fileExists = false;
        }
        this.validFileExtension = (path.extname(configFileName) === '.gradle');
        this.validFile = (path.basename(configFileName, '.gradle') === 'build' && this.validFileExtension) ? true : false;
        this.current_dir = path.resolve(process.cwd());
        console.log(this.current_dir);
    }

    exec(command:string) {
        process.chdir(this.gradlePath);
        let gradlecheck = shell.exec('gradle --version', {silent: true});
        if (gradlecheck.stderr.length > 0) {
            console.log('No gradle installed');
        } else {
            let cmd = shell.exec('gradle ' + command,function(code:any,stdout:any,stderr:string){
                console.log('Exit code:', code);
                console.log('gradle-exec:', stdout);
            });

        }
        process.chdir(this.current_dir);
    }
}
export=Gradle;



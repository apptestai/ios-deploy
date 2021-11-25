const {exec} = require('teen_process');

// DEFAULT
const PATH = './build/Build/Products/Debug/ios-deploy';
const TIMEOUT = 10; //seconds

/**
 * Wrapper for ios-deploy
 * 
 * @path path for ios-deploy
 * @timeout child process timeout in seconds
 */
class iosDeploy {

    constructor(path=PATH, timeout=TIMEOUT){
        this.path = path;
        this.timeout = timeout*1000
    }

    async getDevices(timeout=1){
        let cmd = ['-c', `-t${timeout}`, '-j'];
        let stdout = await this.executeCmd(cmd);
        return stdout;
    }

    async getUsbDevices(timeout=1){
        let cmd = ['-c', '-W', `-t${timeout}`, '-j'];
        let stdout = await this.executeCmd(cmd);
        return stdout;
    }

    async getPackagesList(udid){
        let cmd = ['-B', `-i${udid}`];
        let stdout = await this.executeCmd(cmd);
        return stdout;
    }

    async executeCmd(cmd){
        try {
            let {stdout, stderr, code} = await exec(this.path, cmd, {timeout: this.timeout});
            if (code==0){
                return stdout;
            }
            console.log(`Command ${this.path}${' '.concat(cmd)} has exited with code ${code}`);
            console.log(`with stdout: ${stdout}`);
            console.log(`with stderr: ${stderr}`);
            console.log(`with message: ${message}`);
        } catch (e){
            console.log(`${this.path}${' '.concat(cmd)} has failed to execute`);
            console.log(`with stdout: ${e.stdout}`);
            console.log(`with stderr: ${e.stderr}`);
            console.log(`with message: ${e.message}`);
        }
        return '';
    }
    
}

exports.iosDeploy = iosDeploy;
exports.defaultPath = PATH;
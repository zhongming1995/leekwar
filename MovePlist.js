var fs = require("fs");
var path = require("path");

let tpsConfig = [
    "/texturepacker/props.tps",
    "/texturepacker/games.tps",
    "/texturepacker/lobby.tps",
    "/texturepacker/signIn.tps",
]

let ttConfig = [

]

let plistConfig = {
    "common": {

        "/texturepacker/props.plist": "/assets/Game/map/props.plist",
        "/texturepacker/props.png": "/assets/Game/map/props.png",

        "/texturepacker/games.plist": "/assets/Lobby/lobby/games.plist",
        "/texturepacker/games.png": "/assets/Lobby/lobby/games.png",

        "/texturepacker/lobby.plist": "/assets/Lobby/lobby/lobby.plist",
        "/texturepacker/lobby.png": "/assets/Lobby/lobby/lobby.png",

        "/texturepacker/signIn.plist": "/assets/Lobby/lobby/signIn.plist",
        "/texturepacker/signIn.png": "/assets/Lobby/lobby/signIn.png",

    },

    "tt": {

    }


}


let PROJECT_DIR = __dirname

var args = process.argv.splice(2);
var command = args.shift();

init(command)

function init(command) { //初始化，入口

    var exec = require('child_process').exec;
    const child_process = require('child_process');


    console.log("---------------------------开始从tps发布图片-----------------------------:")
    for (let i = 0; i < tpsConfig.length; i++) {
        let tpsStr = tpsConfig[i];
        let tpsDir = PROJECT_DIR + tpsStr

        let execStr = "TexturePacker " + tpsDir

        console.log("execStr:", execStr)
        var child = child_process.execSync(execStr);
    }


    if (command) {
        for (let i = 0; i < ttConfig.length; i++) {
            let tpsStr = ttConfig[i];
            let tpsDir = PROJECT_DIR + tpsStr

            let execStr = "TexturePacker " + tpsDir

            console.log("execStr:", execStr)
            var child = child_process.execSync(execStr);
        }
    }

    console.log("---------------------------复制图片到指定位置-----------------------------:")
        // common
    let moveListByType = (type) => {
        let moveList = plistConfig[type]

        for (const key in moveList) {
            let reDir = PROJECT_DIR + key
            let newDir = PROJECT_DIR + moveList[key]
            copyFile(reDir, newDir)
        }
    }

    moveListByType("common")
    if (command) {
        moveListByType(command)
    }

    console.log("---------------------------处理完成-----------------------------:")

}


function copyFile(file, toFile) {
    var pathA = toFile.split("/");
    // console.log(pathA)
    pathA.pop();
    createDirsSync(pathA.join("/"), function() {
        // 写入文件内容的回调函数
        fs.copyFileSync(file, toFile);
    })
}


// 判断有没有当前文件夹，有就查询下一层文件夹，没有就创建
function createDirsSync(dir, callback) {
    // if(fs.existsSync(dir)){

    // }
    // else{
    //     //如果该路径不存在
    //     console.log(dir+"路径不存在")
    //     let tempDir = getFilePathName(dir);      //拿到上级路径
    //     if(tempDir){
    //         console.log(tempDir)
    //         createDirsSync(tempDir)
    //     }
    //     else{

    //     }

    // }
    // let sortDir = sortPath(dir)
    let sortDir = dir
    var dirs = sortDir.split('/');
    if (dirs[0] == '.' || dirs[0] == "..") {
        dirs[1] = dirs[0] + "/" + dirs[1];
        dirs.shift();
    }
    if (dirs[dirs.length - 1] == "") {
        dirs.pop();
    }
    var len = dirs.length;
    var i = 0;
    var url = dirs[i];

    // 逐级检测有没有当前文件夹，没有创建，有就继续检测下一级
    let mkDirs = (url) => {
            if (fs.existsSync(url)) {
                i = i + 1;
                if (len > i) {
                    url = url + "/" + dirs[i];
                    mkDirs(url);
                } else {
                    callback && callback();
                }
            } else {
                mkDir(url)
            }
        }
        // 创建文件
    let mkDir = (url) => {
        // console.log(url,i,len)
        fs.mkdirSync(url);
        i = i + 1;
        if (len > i) {
            url = url + "/" + dirs[i];
            mkDir(url);
        } else {
            callback && callback();
        }
    }

    // 启动递归函数
    mkDirs(url);
}
const Path = require('path');
const Fs = require('fs')
let lesson = {
    url: 'db://assets/resources/edu-lesson.json',
    uuid: 'afc3d92a-d838-4321-b9eb-58cf116251cf',
}
let page = {
    url: 'db://assets/resources/edu-page.json',
    uuid: 'fc060e38-b00e-4acb-bfa6-affb9ead6877'
}
let project = {
    url: 'db://assets/resources/edu-project.json',
    uuid: '3400595a-f8a9-4c4a-a465-fd002295ad09'
}

function getUUID(url) {
    let uuid = Editor.remote.assetdb.urlToUuid(url);
    console.log(uuid)
}

const libraryDir = 'library/imports';

function compare(cfg) {
    const {url, uuid} = cfg;
    let libraryFile = Path.join(__dirname, libraryDir, uuid[0] + uuid[1], `${uuid}.json`);
    let ret = url.split('db://');
    let assetsFile = Path.join(__dirname, ret[1]);
    if (!Fs.existsSync(libraryFile)) {
        return console.log('文件不存在：', libraryFile)
    }
    if (!Fs.existsSync(assetsFile)) {
        return console.log('文件不存在：', assetsFile)
    }
    let libData = JSON.parse(Fs.readFileSync(libraryFile, 'utf-8'))
    let assetData = JSON.parse(Fs.readFileSync(assetsFile, 'utf-8'))
    if (!libData.json) {
        return console.log(`${libraryFile}没有json字段`)
    }

    let str1 = JSON.stringify(libData.json)
    let str2 = JSON.stringify(assetData);
    if (str1 !== str2) {
        return console.log(`配置文件异常:${url}, assets/library数据不同步`)
    }
    return console.log(`check ok: ${url}`)
}

compare(lesson);
// compare(page)
// compare(lesson)

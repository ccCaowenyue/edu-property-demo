const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, './a.html'), 'utf-8');
exports.ActionTestClass = {
    name: '1',
    template,
    props: ['target', 'root'],
    methods: {}
}

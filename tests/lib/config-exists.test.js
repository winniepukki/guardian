const fs = require('fs');

function ok(expr, msg) {
    if (!expr) throw new Error(msg);
}

const paths = {
    lib: '../../lib'
}

test('Check if eslint-rules file exist where expected', () => {
    const { lib } = paths;
    fs.readdirSync(lib).forEach(file => {
        ok(file === 'eslint-rules.js');
    })
});

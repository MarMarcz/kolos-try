const assert = require('assert');
const fs = require('fs');

describe('Simple HTML Test', function() {
    it('should display Hello, World', function() {
        const html = fs.readFileSync('index.html', 'utf8');
        assert(html.includes('<h1>Hello, World!</h1>'));
    });
});

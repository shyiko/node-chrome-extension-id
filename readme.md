# node-chrome-extension-id

A way to get Chromium / Google Chrome Extension ID. 

# Installation

```sh
npm install chrome-extension-id --save
```

# Usage

```javascript
var ceid = require('chrome-extension-id');

var parseCRX = require('crx-parser'); // see https://github.com/shyiko/node-crx-parser

fs.readFile('/tmp/mfabfdnimhipcapcioneheloaehhoggk.crx', function (err, buff) {
    parseCRX(buff, function (err, data) {
        var id = ceid(data.header.publicKey);
        ...
    });
});
```
       
## License

[MIT License](https://github.com/shyiko/node-chrome-extension-id/blob/master/mit.license)

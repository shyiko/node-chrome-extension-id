var assert = require('assert');

var id = require('../src');

var publicKey = [
    "-----BEGIN PUBLIC KEY-----",
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8vj7SK0NZ6ak7K6m6KEA",
    "kfGaNfKUahqFFms6W8rq+voaW7nETrpsMqNyhmBQ+ea0KkyI/S5XIrDQPqDcNpve",
    "sYlg9lsmi7CQBZjJw7zNqKkvn0oYaP4SNtWZfZopBumqFbzFi5cst2PT+XU9CBit",
    "xXNtocRtcjOsa44W1gPA5xanmtlF258N6Nann+rSOAdhIWqSo/J6fj72cxTNfmqL",
    "kwAvhdS4Zyux4F87vxp4YTSwElfYXFsHZWi7h66uuuMzqyOyJz5grhCJ24rtTshM",
    "QUCxQWyhO2XT2J1tVfUN1YVw6xdKUz3aGyKZeXCuql5klHmlqE9PTlbKj/1VMiIg",
    "CQIDAQAB",
    "-----END PUBLIC KEY-----"
    ].filter(function (l) { return l.indexOf('-'); }).join('');

assert.equal(id(publicKey), 'mfabfdnimhipcapcioneheloaehhoggk');

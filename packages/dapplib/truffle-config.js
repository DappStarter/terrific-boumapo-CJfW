require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remain evil install help foster ten'; 
let testAccounts = [
"0xe95bc62158fb86b3d969f1454a0b2385169f22ac5bac3ec85ee30097fc6516c4",
"0x7a8cbda596656463b73aa756be7081ed1920a972cfcc78f257c33e4f8c55d1dd",
"0xa27b7d08ba3aaa61232645d938ac5c08b7aa02eda79b5757458e688df4261d2e",
"0x5c413fd29461c6260977f953ebbca69bfcbd8a66f2d3ddd3a4a7047a69d03d4f",
"0xec1564128401db328233e88838943b3b394c6be4aaa02d9f61b0db04bf42a2be",
"0xecaf81022990b1cde7764e4e92b1ad6f5dc25e3c99beaf608a62dfebc239ab2b",
"0xa82cf413d822d4cf1a031a9b593d61e854c83275c7e62d13cc0f9cca9a1dbb56",
"0xa912764bf1023992b3dbe4f0c52116a8cc6b7898f2d6043c1146c99c7bee533c",
"0x78736461b2ec674c08ef53510f3bd32c50ef62be852861eeef132e7879c4ba82",
"0x4a5d2fa17dd09f87e9f5859f5649190261ae4cd63207174573808e6adc968389"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



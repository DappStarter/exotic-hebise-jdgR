require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy reflect night essay inflict civil army genuine'; 
let testAccounts = [
"0x9bf95f30fc758fb6eda80497880da79bacea985c05a948f33eba72aefda9087c",
"0x01939741b6ed1a731eec219f7084b0e49235fdb76b77b7c974afb679204ccd41",
"0x56a4d5e93bd0aaa240a372a8fe5b54ca1684de84816e97961c963584b1430ab8",
"0x8ae5705d2a1a082014bf89baf5f76a685c70b341fbb8f6d3ebc6bd06ac392502",
"0xf54b3da28526e4feca8226175b6bbb74c58566c4435c3fdf7e8537c0d1da3476",
"0xcce57e8752c892551e2a22794ec2b093d2b388368fb6ffa8df3e8f789ed8fc81",
"0x1a425b8b15148ccdad22728f90dbb472f7cf138d44e4f1419e38d5af209b79de",
"0xdb471305b2cebb0d3bc4669fed8b06b28119e86041c50149e889fb29baffa27c",
"0x1e2199fef6043d754b4d0e2349818e47d0af03c97044c40a18171fab64a3f1d9",
"0x91224adab769a8d74a297facbfe15d645a2514d42f2eeca94d2a8381c0c5fff6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


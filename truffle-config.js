/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
const HDWalletProvider = require('@truffle/hdwallet-provider');
const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  throw result.error;
}


exports.networks = {
  // Useful for testing. The `development` name is special - truffle uses it by default
  // if it's defined here and no other network is specified at the command line.
  // You should run a client (like ganache-cli, geth or parity) in a separate terminal
  // tab if you use this network and you must also set the `host`, `port` and `network_id`
  // options below to some value.
  //
  // development: {
  //  host: "127.0.0.1",     // Localhost (default: none)
  //  port: 8545,            // Standard Ethereum port (default: none)
  //  network_id: "97",       // Any network (default: none)
  // },
  // Another network with more advanced options...
  // advanced: {
  // port: 8777,             // Custom port
  // network_id: 1342,       // Custom network
  // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
  // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
  // from: <address>,        // Account to send txs from (default: accounts[0])
  // websockets: true        // Enable EventEmitter interface for web3 (default: false)
  // },
  // Useful for deploying to a public network.
  // NB: It's important to wrap the provider as a function.
  bsc: {
    provider: () => new HDWalletProvider(
      process.env.MNEMONIC,
      `https://data-seed-prebsc-1-s1.binance.org:8545`
    ),
    network_id: 97,
    gas: 5500000,
    confirmations: 4,
    timeoutBlocks: 20000,
    skipDryRun: true,
  },
  mumbai: {
    provider: () => new HDWalletProvider(`word word word word word word word word word`, `https://rpc-mumbai.maticvigil.com`),
    network_id: 80001,
    confirmations: 3,
    timeoutBlocks: 200,
    skipDryRun: true
  },
  matic: {
    provider: () => new HDWalletProvider(`word word word word word word word word word`, `https://rpc-mainnet.matic.network`),
    network_id: 137,
    confirmations: 4,
    timeoutBlocks: 200,
    skipDryRun: true
  },
  bscmainnet: {
    provider: () => new HDWalletProvider(`word word word word word word word word word`, `https://bsc-dataseed.binance.org/`),
    network_id: 56,
    confirmations: 4,      // # of confs to wait between deployments. (default: 0)
    timeoutBlocks: 10000,  // # of blocks before a deployment times out  (minimum/default: 50)
    gasPrice: 20000000000,
    skipDryRun: true       // Skip dry run before migrations? (default: false for public nets )
  },
  plugins: [
    'truffle-plugin-verify',
  ],
  api_keys: {
    bscscan:``,
	polygonscan:``
  },
  
};
exports.mocha = {
  // timeout: 100000
};
exports.compilers = {
  solc: {
    version: '0.5.12',
    settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 200
      }
  
    }
  },
};

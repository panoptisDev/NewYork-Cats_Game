# New York Cats Game

[![Netlify Status](https://api.netlify.com/api/v1/badges/d238c635-4041-4d7a-a441-1db017cc3c31/deploy-status)](https://app.netlify.com/sites/newyorkcatgame/deploys)

### Contracts
Deployed on Binance Smart Chain (TESTNET)

Kitties: https://testnet.bscscan.com/address/0xa674aFd39b6aAf4e6a85fE49d7b705fbD0d110Fa

Marketplace: https://testnet.bscscan.com/address/0xc1006554aE254f7396787aa19f031f7ada760877

Deployed on Binance Smart Chain (MAINNET)

Kitties: https://bscscan.com/token/0x6cc98285cc105aeec33dd99d0d148afa9cd31db4

Marketplace: https://bscscan.com/address/0xff72c92ae45c9f559620be52e1a4f17cd6699d1f


### Tech Stack

Contracts: solidity, truffle, ganache

Front End: react, redux, html, CSS, javascript, react-bootstrap, styled-components, redux-sagas

Testing: mocha, chai, truffle-assertions

### Usage

1. Requires an Etherem based wallet like <a href="https://metamask.io/" target="_blank">MetaMask</a>


2. You'll need some test BNB on the BSC (testnet) network. Visit a <a href="https://testnet.binance.org/faucet-smart" target="_blank">faucet</a> to get some free test BNB. Make sure you've set your wallet network to `BSC Testnet`.


3. Visit the <a href="https://newyorkcatgame.netlify.app/" target="_blank">New York Cat Game</a> website.

4. Make sure your wallet is on the `BSC` test network. Press the "Connect" button. This will connect the wallet to the app so it can query the blockchain for your kitties.

5. Head over to the Marketplace to get some kitties! Once you have 2 kitties you can breed them and have kittens.


### Academy Kitties DNA

The DNA structure is a 16 digit number with the following breakdown. The Kitten DNA is a random combination of the parent DNA with a chance for a completely random value.

| DNA Digits | Cattribute | Values |
|---|---|---|
|00-01 | Body Color | 10-99 |
|02-03 | Accent Color | 10-99 |
|04-05 | Eye Color | 10-99 |
|06-07 | Ear Color | 10-99 |
| 08 | Eye Shape | 0-7 |
| 09 | Pattern | 0-3 |
| 10-11 | Pattern Color|  10-99 |
| 12-13 | Pattern Accent Color | 10-99 |
| 14 | Animation | 0-4 |
| 15 | Mysterious | 0-7 |

### Cooldown

When parent kitties breed they need time to rest before breeding again. Breed cooldowns are defined below.

https://guide.cryptokitties.co/guide/cat-features/cooldown-speed

| Generation  | Cooldown Name  | Cooldown Time  |
|---|---|---|
| 0, 1 | fast  | 1 minute  |
| 2, 3 | swift | 2 minutes |
| 4, 5 | swift | 5 minutes |
| 6, 7 | snappy | 10 minutes |
| 8, 9 | snappy | 30 minutes |
| 10, 11 | brisk | 1 hour |
| 12, 13 | brisk | 2 hours |
| 14, 15 | plodding | 4 hours |
| 16, 17 | plodding | 8 hours |
| 18, 19 | slow | 16 hours |
| 20, 21 | slow | 24 hours |
| 22, 23 | sluggish | 2 days |
| 24, 25 | sluggish | 4 days |
| 26+ | catatonic | 1 week |

## Running the project locally

1. Have node `12.x` installed
2. Install the Truffle suite globally via `npm install -g truffle`
3. `npm install` to install the project dependencies
4. You'll need a local ETH blockchain like Ganache. Can use either the <a href="https://www.trufflesuite.com/ganache" target="_blank">graphical interface</a> or the CLI (`npm install -g ganache-cli`). If using the graphical app create a new workspace and link the truffle config file `/truffle-config.js` to the workspace.
5. Deploy the contracts
   1. `truffle console`
   2. `migrate`
6. Copy the `KittyContract` and `KittyMarketPlace` contract deployed addresses into `/src/components/js/service.js` into the `static chainIdToAddress` variable with ID `0x539` (this is the chain ID for Ganache)
7. Run the app with `npm start` and open a browser to `http://localhost:3000`

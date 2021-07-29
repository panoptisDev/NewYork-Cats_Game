import Web3 from 'web3';
import KittyService from './kitty.service';
import KittyMarketPlaceService from './kittyMarketPlace.service';
import WalletService from './walletService';

export default class Service {
  static chainIdToAddress = {
    // '0x38': // Binance MainNet
    '0x61': {
      // Binance Test'
      kitty: '0xa674aFd39b6aAf4e6a85fE49d7b705fbD0d110Fa',
      market: '0xc1006554aE254f7396787aa19f031f7ada760877',
    },
    '0x38': {
      // Binance MainNet
      kitty: '0x6cc98285cc105aeec33dd99d0d148afa9cd31db4',
      market: '0xff72c92ae45c9f559620be52e1a4f17cd6699d1f',
    },
  };

  static web3;
  static kitty;
  static market;
  static wallet;

  static web3ProviderAvailable = () => Boolean(Web3.givenProvider);

  static initServices = () => {
    if (!Service.web3ProviderAvailable()) {
      throw new Error('No web 3 provider available. Please install Metamask');
    }

    this.web3 = new Web3(Web3.givenProvider);
    this.kitty = new KittyService(Service.web3);
    this.market = new KittyMarketPlaceService(Service.web3);
    this.wallet = new WalletService(Service.web3);
  }

  static initContracts = async (chainId) => {
    const contractAddresses = this.chainIdToAddress[chainId];
    if (!contractAddresses) {
      throw new Error(`Contract init error. Unsupported chainId: ${chainId}`);
    }

    Service.kitty.init(contractAddresses.kitty);
    Service.market.init(contractAddresses.market, Service.kitty);
  }
}

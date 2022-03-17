const { network } = require('hardhat')

const configs = {
  1: {
    usdc: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  },
  4: {
    usdc: "0xE491A18E0338e7C9edc806F951AE4948f302360F"
  },
  137: {
    usdc: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    wbtc: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    wbtcUsdChainlinkOracle: '0xDE31F8bFBD8c84b5360CFACCa3539B938dd78ae6',
    governance: '0x0768A75F616B98ee0937673bD83B7aBF142236Ea',
    oneBTC_gov: '0x50114c0B0EE1eB0D6e534f76eB3e9C5408dEF663'
  },
  80001: {
    usdc: "0x0FA8781a83E46826621b3BC094Ea2A0212e71B23",
    wbtc: "0x13EDD87281803AF4178E7b30631ab7Cbb6819441", // this is actuall TestToken6
    wbtcUsdChainlinkOracle: '0x007A22900a3B98143368Bd5906f8E17e9867581b',
    governance: '0x6D41E0096f332Af1Fab2ba21936ce120dE9244f2'
  },
}

const getCurrentConfig = () =>
  configs[network.config.chainId]

module.exports = { configs, getCurrentConfig }

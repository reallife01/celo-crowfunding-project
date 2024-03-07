/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'Celo Alfajores',
    networks: {
      hardhat: {},
      alfajores: {
        url: "https://alfajores-forno.celo-testnet.org",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };


require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const INFURA_PROJECT_ID = "8a3938c449b446e8976a6187c704e2cb";
const PRIVATE_KEY = "e816593d8fe551a1cdfe28175576e010d8836a38de19e06f3ec31aba7908817f";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  
  // solidity: "0.8.0",
  networks: {
    mumbai: {
      // url: `https://rpc-mumbai.maticvigil.com/v1/${INFURA_PROJECT_ID}`,
      url: "https://polygon-mumbai.infura.io/v3/8a3938c449b446e8976a6187c704e2cb",
      accounts: [PRIVATE_KEY]
    }
  }
};

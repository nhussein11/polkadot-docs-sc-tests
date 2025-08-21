require("@nomicfoundation/hardhat-toolbox");
require("@parity/hardhat-polkadot");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  resolc: {
    compilerSource: "npm",
  },
  networks: {
    hardhat: {
      polkavm: true,
      nodeConfig: {
        nodeBinaryPath: "../binaries/revive-dev-node",
        dev: true,
        rpcPort: 8000,
      },
      adapterConfig: {
        adapterBinaryPath: "../binaries/eth-rpc",
        dev: true,
      },
    },
  },
};

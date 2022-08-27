require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.9",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/SMb8WgygXfwiJwSrRDHjRKD7FrNzaZtN",
			accounts: ["74c20bd72f2a79fb994733dc01c9a1b750ba77456c5d3e54de45bbf640a2ed99"]
		}
	}
};

const StarNotary = artifacts.require("StarNotary");

const starName = "Best Star Notary";
const symbol = "BSN";

module.exports = function(deployer) {
  deployer.deploy(StarNotary, starName, symbol);
};

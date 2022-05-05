const StarNotary = artifacts.require("StarNotary");

const starName = "minfoy sofuj -gos";
const symbol = "BSN";

module.exports = function(deployer) {
  deployer.deploy(StarNotary, starName, symbol);
};

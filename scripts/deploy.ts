import { ethers } from 'hardhat';
const fs = require('fs');
const path = require('path');

async function main() {
  const [deployer] = await ethers.getSigners();
  const provider = ethers.provider;
  const bal = await provider.getBalance(deployer.address);
  const ntwrk = await provider.getNetwork();

  console.log(`Network: ${ntwrk.name}, chainId: ${ntwrk.chainId}`);
  console.log('Deployer account:', deployer.address);
  console.log(`Balance: ${ethers.formatEther(bal)}`);

  console.log('Deploying contract...');
  const Lock = await ethers.getContractFactory('Lock');
  const lock = await Lock.deploy(); // Example unlock time (60 seconds from now)
  const res = await lock.waitForDeployment();
  console.log('Contract deployed to address:', res.target);

  const filePath = path.resolve(__dirname, 'lock-address.json');
  fs.writeFileSync(filePath, JSON.stringify({ address: res.target }, null, 2));

  const cid = await lock.getChainId();
  console.log('Chain ID from contract:', cid.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// mainnet: 295
// testnet: 296

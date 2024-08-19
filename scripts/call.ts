import { ethers } from 'hardhat';
const fs = require('fs');
const path = require('path');

async function main() {
  const [deployer] = await ethers.getSigners();
  const provider = ethers.provider;
  const ntwrk = await provider.getNetwork();
  console.log(`Network: ${ntwrk.name} chainId: ${ntwrk.chainId}`);

  const filePath = path.resolve(__dirname, 'lock-address.json');
  const data = fs.readFileSync(filePath);
  const { address } = JSON.parse(data);

  console.log('Contract address:', address);
  const lock = await ethers.getContractAt('Lock', address, deployer);

  const cid = await lock.getChainId();
  console.log('Chain ID from contract:', cid.toString());

  const cidp1 = await lock.getChainIdPlusOne();
  console.log('Chain ID + 1 from contract:', cidp1.toString());

  const greeting = await lock.getGreetingWithChainId();
  console.log('Greeting from contract:', greeting);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// mainnet: 295
// testnet: 296

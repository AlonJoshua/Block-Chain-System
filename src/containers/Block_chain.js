import React, { Fragment } from 'react';
import Block from '../components/Block';

const BlockChain = () => {
	class blockChain {
		constructor(){
			this.chain = [this.createGenesisBlock()];
			this.difficulty = 4;
		}

		createGenesisBlock() {
			return new Block(0, Date(), 'Genesis block', '0');
		}

		getLatestBlock() {
			return this.chain[this.chain.length -1];
		}

		addBlock(newBlock) {
			newBlock.previousHash = this.getLatestBlock().hash;
			newBlock.mineBlock(this.difficulty);
			this.chain.push(newBlock);
		}

		isChainValid() {
			for (let i = 1; i < this.chain.length; i++) {
				const currentBlock = this.chain[i];
				const previousBlock = this.chain[i - 1];

				if (currentBlock.hash !== currentBlock.calculateHash()) {
					return false;
				}

				if (currentBlock.previousHash !== previousBlock.hash) {
					return false;
				}
			}

			return true;
		}
	}

let pandaCurrency = new blockChain();

console.log('mining block 1...');
pandaCurrency.addBlock(new Block(1, Date(), {amount: 5}));
console.log('mining block 2...');
pandaCurrency.addBlock(new Block(1, Date(), {amount: 3}));


	return (
		<Fragment>
		<h1>hey2</h1>
		</Fragment>
		)
}

export default BlockChain;
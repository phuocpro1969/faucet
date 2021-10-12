const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { mnemonic, rpc, gasLimit, gasPrice } = require("./config");
const JSBI = require("jsbi");
const web3 = new Web3(new HDWalletProvider(mnemonic, rpc));

const sendMaticWithPrivateKey = async (from, to, amount, privateKey) => {
	const balance = await web3.eth.getBalance(from);
	const amountSend = await web3.utils.toWei(amount.toString(), "ether");
	const feeGas = await JSBI.multiply(
		JSBI.BigInt(gasPrice),
		JSBI.BigInt(gasLimit)
	);

	if (
		!JSBI.lessThanOrEqual(
			JSBI.subtract(JSBI.BigInt(balance), JSBI.BigInt(feeGas)),
			JSBI.BigInt(amountSend)
		)
	) {
		const rawTransaction = {
			from: from,
			gasPrice: web3.utils.toHex(gasPrice),
			gasLimit: web3.utils.toHex(gasLimit),
			to: to,
			value: amountSend,
			chainId: 80001, //remember to change this
		};

		const signature = await web3.eth.accounts.signTransaction(
			rawTransaction,
			privateKey
		);

		await web3.eth.sendSignedTransaction(signature.rawTransaction);
		console.log(`Transfer from ${from} to ${to} with ${amount} MATIC`);
	}
};

module.exports = {
	sendMaticWithPrivateKey,
};

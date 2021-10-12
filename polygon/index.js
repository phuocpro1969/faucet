const axios = require("axios");
const addresses = require("./address.js");
const privateKey = require("./privateKey");
const { sendMaticWithPrivateKey } = require("./sendMatic");
const { base, money } = require("./config");

const matic = axios.create({
	baseURL: "https://api.faucet.matic.network",
});

const beggingMoney = (address) => {
	matic.post("/transferTokens", {
		address,
		network: "mumbai",
		token: "maticToken",
	});
};

const begginForFamily = () => {
	addresses.map((address, index) => {
		try {
			setTimeout(() => beggingMoney(address), 55000);
		} catch (err) {
			console.log(`begging ${index} money failed`);
		}
		if (index === addresses.length - 1) console.log(`finish begging money`);
	});
};

const transferToBase = () => {
	addresses?.map((address, index) => {
		try {
			sendMaticWithPrivateKey(address, base, money, privateKey[index]);
		} catch (err) {
			console.log("send to base failed");
		}
		if (index === addresses.length - 1) console.log(`finish transfer`);
	});
};

const transferToThoseBitches = () => {
	// begginForFamily();
	transferToBase();
};

transferToThoseBitches();

setInterval(() => {
	transferToThoseBitches();
}, 300000);

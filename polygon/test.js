const addresses = [
	"0x2AcB4E63d5DDe72EF65031aefD4BB9EaA482d262",
	"0x5187212b8dC3Ce075aCF03Ec33974d3540E566AD",
	"0x0385458c6A639c61B69b2C1d10994624FD1cE47E",
	"0x2502cB8c138BA4263b9Dc17F0C64be55942CE0ed",
	"0x384D90D1134eB0A985b7b5288BBdd3dB979A06e4",
	"0xAc84C3Cc5F85Ef5410B0AAb3f0C6749428F780c2",
	"0x7C5d7998AECe2C43f82D6aEa842A2407b50228D8",
	"0x2eA3A45b141BC2821447982373f91a3f6E45dB1F",
	"0x2FB8bE2D3C0eBEDdf0B5C0C636a04b5f842C39fa",
	"0x877ba9145BD6a6CfE7af9e94d4Eb3295a868c815",
	"0x499d0Da25F7b6A5eF13E544DE222E54ABcc8b578",
	"0xb296f68897637ec98bD3Dd0D27D1c3c93d89bA7B",
	"0xa16510C4B9178a1846449a1CEDfD29A5Bce7f93a",
	"0x175497240df883573BEe1e3c29C815Ee9b2377Dc",
	"0x4E0FcDCDE0FAd35ec1dB0962dbF05e1071Bb5D52",
	"0x754d04165c0B1ABB8Ec365380aEFDBdbcd2C9043",
	"0x4055a19BC99feE1c6A04224F746f112c61DE5198",
	"0x64A809Bc6f0b73Da93Ac6cC50d8c0F0B8E736734",
	"0xD95AB2EC8ba3cE6fc5e41Ef6A9D634f4e3cDA605",
	"0x9DF69ca88c17059f169083301b0D11E25D79Aa49",
];

const func = () => {
	for (const address of addresses)
		try {
			fetch("/transferTokens", {
				method: "POST",
				body: JSON.stringify({
					address: address,
					network: "mumbai",
					token: "maticToken",
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					"Access-Control-Allow-Origin": "*",
					"User-Agent": `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4545.168 Safari/537.36`,
					"sec-ch-ua": `"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"`,
					Accept: "application/json, text/plain, */*",
					"sec-ch-ua-mobile": "?0",
				},
			})
				.then(async (res) => await res.json())
				.then(console.log);
		} catch (err) {}
};

const run = () =>
	setTimeout(() => {
		func();
	}, 61000);

func();
run();

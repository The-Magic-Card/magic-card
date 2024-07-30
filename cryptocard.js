const cryptoData = [
  {id: 0, name: "Bitcoin", logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025" },
  {id: 1, name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025" },
  {id: 2, name: "Binance Coin", logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=025" },
  {id: 3, name: "Cardano", logo: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025" },
  {id: 4, name: "Dogecoin", logo: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=025" },
  {id: 5, name: "XRP", logo: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025" },
  {id: 6, name: "Polkadot", logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=025" },
  {id: 7, name: "USD Coin", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=025" },
  {id: 8, name: "Uniswap", logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png?v=025" },
  {id: 9, name: "Litecoin", logo: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=025" },
  {id: 10, name: "Chainlink", logo: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=025" },
  {id: 11, name: "Bitcoin Cash", logo: "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png?v=025" },
  {id: 12, name: "Stellar", logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=025" },
  {id: 13, name: "VeChain", logo: "https://cryptologos.cc/logos/vechain-vet-logo.png?v=025" },
  {id: 14, name: "Theta", logo: "https://cryptologos.cc/logos/theta-theta-logo.png?v=025" },
  {id: 15, name: "Filecoin", logo: "https://cryptologos.cc/logos/filecoin-fil-logo.png?v=025" },
  {id: 16, name: "TRON", logo: "https://cryptologos.cc/logos/tron-trx-logo.png?v=025" },
  {id: 17, name: "Monero", logo: "https://cryptologos.cc/logos/monero-xmr-logo.png?v=025" },
  {id: 18, name: "EOS", logo: "https://cryptologos.cc/logos/eos-eos-logo.png?v=025" },
  {id: 19, name: "Aave", logo: "https://cryptologos.cc/logos/aave-aave-logo.png?v=025" },
  {id: 20, name: "Cosmos", logo: "https://cryptologos.cc/logos/cosmos-atom-logo.png?v=025" },
  {id: 21, name: "Crypto.com Coin", logo: "https://cryptologos.cc/logos/crypto-com-coin-cro-logo.png?v=025" },
  {id: 22, name: "Tezos", logo: "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=025" },
  {id: 23, name: "IOTA", logo: "https://cryptologos.cc/logos/iota-miota-logo.png?v=025" },
  {id: 24, name: "FTX Token", logo: "https://cryptologos.cc/logos/ftx-token-ftt-logo.png?v=025" },
  {id: 25, name: "Neo", logo: "https://cryptologos.cc/logos/neo-neo-logo.png?v=025" },
  {id: 26, name: "Maker", logo: "https://cryptologos.cc/logos/maker-mkr-logo.png?v=025" },
  {id: 27, name: "Kusama", logo: "https://cryptologos.cc/logos/kusama-ksm-logo.png?v=025" },
  {id: 28, name: "Algorand", logo: "https://cryptologos.cc/logos/algorand-algo-logo.png?v=025" },
  {id: 29, name: "Compound", logo: "https://cryptologos.cc/logos/compound-comp-logo.png?v=025" },
  {id: 30, name: "Dash", logo: "https://cryptologos.cc/logos/dash-dash-logo.png?v=025" },
  {id: 31, name: "Waves", logo: "https://cryptologos.cc/logos/waves-waves-logo.png?v=025" },
  {id: 32, name: "Zcash", logo: "https://cryptologos.cc/logos/zcash-zec-logo.png?v=025" },
  {id: 33, name: "Elrond", logo: "https://cryptologos.cc/logos/elrond-egld-egld-logo.png?v=025" },
  {id: 34, name: "Decred", logo: "https://cryptologos.cc/logos/decred-dcr-logo.png?v=025" },
  {id: 35, name: "Synthetix", logo: "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.png?v=025" },
  {id: 36, name: "Yearn.finance", logo: "https://cryptologos.cc/logos/yearn-finance-yfi-logo.png?v=025" },
  {id: 37, name: "Zilliqa", logo: "https://cryptologos.cc/logos/zilliqa-zil-logo.png?v=025" },
  {id: 38, name: "Qtum", logo: "https://cryptologos.cc/logos/qtum-qtum-logo.png?v=025" },
  {id: 39, name: "Ontology", logo: "https://cryptologos.cc/logos/ontology-ont-logo.png?v=025" },
  {id: 40, name: "Siacoin", logo: "https://cryptologos.cc/logos/siacoin-sc-logo.png?v=025" },
  {id: 41, name: "ICON", logo: "https://cryptologos.cc/logos/icon-icx-logo.png?v=025" },
  {id: 42, name: "DigiByte", logo: "https://cryptologos.cc/logos/digibyte-dgb-logo.png?v=025" },
  {id: 43, name: "0x", logo: "https://cryptologos.cc/logos/0x-zrx-logo.png?v=025" },
  {id: 44, name: "Nano", logo: "https://cryptologos.cc/logos/nano-nano-logo.png?v=025" },
  {id: 45, name: "Ravencoin", logo: "https://cryptologos.cc/logos/ravencoin-rvn-logo.png?v=025" },
  {id: 46, name: "Avalanche", logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025" },
  {id: 47, name: "Loopring", logo: "https://cryptologos.cc/logos/loopring-lrc-logo.png?v=025" },
  {id: 48, name: "Nexo", logo: "https://cryptologos.cc/logos/nexo-nexo-logo.png?v=025" },
  {id: 49, name: "Golem", logo: "https://cryptologos.cc/logos/golem-glm-logo.png?v=025" },
  {id: 50, name: "IOST", logo: "https://cryptologos.cc/logos/iostoken-iost-logo.png?v=025" },
  {id: 51, name: "Horizen", logo: "https://cryptologos.cc/logos/horizen-zen-logo.png?v=025" },
  {id: 52, name: "Arweave", logo: "https://cryptologos.cc/logos/arweave-ar-logo.png?v=025" },
  {id: 53, name: "Enjin Coin", logo: "https://cryptologos.cc/logos/enjin-coin-enj-logo.png?v=025" },
  {id: 54, name: "Steem", logo: "https://cryptologos.cc/logos/steem-steem-logo.png?v=025" },
  {id: 55, name: "Lisk", logo: "https://cryptologos.cc/logos/lisk-lsk-logo.png?v=025" },
  {id: 56, name: "Stratis", logo: "https://cryptologos.cc/logos/stratis-strax-logo.png?v=025" },
  {id: 57, name: "Augur", logo: "https://cryptologos.cc/logos/augur-rep-logo.png?v=025" },
  {id: 58, name: "Sushi", logo: "https://cryptologos.cc/logos/sushiswap-sushi-logo.png?v=025" },
  {id: 59, name: "Curve DAO Token", logo: "https://cryptologos.cc/logos/curve-dao-token-crv-logo.png?v=025" },
  {id: 60, name: "NEM", logo: "https://cryptologos.cc/logos/nem-xem-logo.png?v=025" },
  {id: 61, name: "Bancor", logo: "https://cryptologos.cc/logos/bancor-bnt-logo.png?v=025" },
  {id: 62, name: "Holo", logo: "https://cryptologos.cc/logos/holo-hot-logo.png?v=025" },
  {id: 63, name: "NEAR Protocol", logo: "https://cryptologos.cc/logos/near-protocol-near-logo.png?v=025" },
  {id: 64, name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025" },
  {id: 65, name: "Terra", logo: "https://cryptologos.cc/logos/terra-luna-luna-logo.png?v=025" },
  {id: 66, name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=025" },
  {id: 67, name: "Pancakeswap", logo: "https://cryptologos.cc/logos/pancakeswap-cake-logo.png?v=025" },
  {id: 68, name: "THORChain", logo: "https://cryptologos.cc/logos/thorchain-rune-logo.png?v=025" },
  {id: 69, name: "Harmony", logo: "https://cryptologos.cc/logos/harmony-one-logo.png?v=025" },
  {id: 70, name: "Celsius", logo: "https://cryptologos.cc/logos/celsius-cel-logo.png?v=025" },
  {id: 71, name: "The Graph", logo: "https://cryptologos.cc/logos/the-graph-grt-logo.png?v=025" },
  {id: 72, name: "Fantom", logo: "https://cryptologos.cc/logos/fantom-ftm-logo.png?v=025" },
  {id: 73, name: "Decentraland", logo: "https://cryptologos.cc/logos/decentraland-mana-logo.png?v=025" },
  {id: 74, name: "Basic Attention Token", logo: "https://cryptologos.cc/logos/basic-attention-token-bat-logo.png?v=025" },
  {id: 75, name: "BitTorrent", logo: "https://cryptologos.cc/logos/bittorrent-btt-logo.png?v=025" },
  {id: 76, name: "Amp", logo: "https://cryptologos.cc/logos/amp-amp-logo.png?v=025" },
  {id: 77, name: "Chiliz", logo: "https://cryptologos.cc/logos/chiliz-chz-logo.png?v=025" },
  {id: 78, name: "Flow", logo: "https://cryptologos.cc/logos/flow-flow-logo.png?v=025" },
  {id: 79, name: "Helium", logo: "https://cryptologos.cc/logos/helium-hnt-logo.png?v=025" },
  {id: 80, name: "Hedera Hashgraph", logo: "https://cryptologos.cc/logos/hedera-hashgraph-hbar-logo.png?v=025" },
  {id: 81, name: "TrueUSD", logo: "https://cryptologos.cc/logos/trueusd-tusd-logo.png?v=025" },
  {id: 82, name: "Theta Fuel", logo: "https://cryptologos.cc/logos/theta-fuel-tfuel-logo.png?v=025" },
  {id: 83, name: "Celo", logo: "https://cryptologos.cc/logos/celo-celo-logo.png?v=025" },
  {id: 84, name: "Paxos Standard", logo: "https://cryptologos.cc/logos/paxos-standard-pax-logo.png?v=025" },
  {id: 85, name: "Huobi Token", logo: "https://cryptologos.cc/logos/huobi-token-ht-logo.png?v=025" },
  {id: 86, name: "Kava", logo: "https://cryptologos.cc/logos/kava-kava-logo.png?v=025" },
  {id: 87, name: "Audius", logo: "https://cryptologos.cc/logos/audius-audio-logo.png?v=025" },
  {id: 88, name: "Ankr", logo: "https://cryptologos.cc/logos/ankr-ankr-logo.png?v=025" },
  {id: 89, name: "OMG Network", logo: "https://cryptologos.cc/logos/omg-network-omg-logo.png?v=025" },
  {id: 90, name: "Ren", logo: "https://cryptologos.cc/logos/ren-ren-logo.png?v=025" },
  {id: 91, name: "Swipe", logo: "https://cryptologos.cc/logos/swipe-sxp-logo.png?v=025" },
  {id: 92, name: "Reserve Rights", logo: "https://cryptologos.cc/logos/reserve-rights-rsr-logo.png?v=025" },
  {id: 93, name: "Ocean Protocol", logo: "https://cryptologos.cc/logos/ocean-protocol-ocean-logo.png?v=025" },
  {id: 94, name: "Nervos Network", logo: "https://cryptologos.cc/logos/nervos-network-ckb-logo.png?v=025" },
  {id: 95, name: "SKALE Network", logo: "https://cryptologos.cc/logos/skale-network-skl-logo.png?v=025" },
  {id: 96, name: "Serum", logo: "https://cryptologos.cc/logos/serum-srm-logo.png?v=025" },
  {id: 97, name: "Fetch.ai", logo: "https://cryptologos.cc/logos/fetch-ai-fet-logo.png?v=025" },
  {id: 98, name: "Numeraire", logo: "https://cryptologos.cc/logos/numeraire-nmr-logo.png?v=025" },
  {id: 99, name: "Balancer", logo: "https://cryptologos.cc/logos/balancer-bal-logo.png?v=025" },
  {id: 100, name: "Verge", logo: "https://cryptologos.cc/logos/verge-xvg-logo.png?v=025" },
  {id: 101, name: "1inch", logo: "https://cryptologos.cc/logos/1inch-1inch-logo.png?v=025" },
  {id: 102, name: "Mina", logo: "https://cryptologos.cc/logos/mina-protocol-mina-logo.png?v=025" },
  {id: 103, name: "Livepeer", logo: "https://cryptologos.cc/logos/livepeer-lpt-logo.png?v=025" },
  {id: 104, name: "Injective Protocol", logo: "https://cryptologos.cc/logos/injective-protocol-inj-logo.png?v=025" },
  {id: 105, name: "Conflux Network", logo: "https://cryptologos.cc/logos/conflux-network-cfx-logo.png?v=025" },
  {id: 106, name: "Wazirx", logo: "https://cryptologos.cc/logos/wazirx-wrx-logo.png?v=025" },
  {id: 107, name: "MVL", logo: "https://cryptologos.cc/logos/mvl-mvl-logo.png?v=025" },
  {id: 108, name: "Cartesi", logo: "https://cryptologos.cc/logos/cartesi-ctsi-logo.png?v=025" },
  {id: 109, name: "Origin Protocol", logo: "https://cryptologos.cc/logos/origin-protocol-ogn-logo.png?v=025" },
  {id: 110, name: "Orbs", logo: "https://cryptologos.cc/logos/orbs-orbs-logo.png?v=025" },
];

const gridContainer = document.getElementById('crypto-grid');
const selectedCountDisplay = document.getElementById('selected-count');
const totalCostDisplay = document.getElementById('total-cost');
const remainingCardsDisplay = document.getElementById('remaining-cards');
const buyButton = document.getElementById('buy-button');
const winnersList = document.getElementById('winners-list');

let selectedCount = 0;
let totalCost = 0;
const CARD_COST = 0.01; // Coût par carte en Ether
let recentWinners = []; // Liste des 10 derniers gagnants

// Adresse du contrat et ABI
const contractAddress = '0x1442453fCB18D5BDC431C9e4E7D163581F4eF5eD';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "cardIds",
				"type": "uint256[]"
			}
		],
		"name": "buyCards",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "cardIds",
				"type": "uint256[]"
			}
		],
		"name": "CardPurchased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winningCard",
				"type": "uint256"
			}
		],
		"name": "GameCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "GameReset",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cardOwners",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cardPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cardsSold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWinners",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mainWallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "secondaryWallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "soldCards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalCards",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "winners",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

async function init() {
    console.log('Initialisation...');
    if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' }); // Demande d'accès à MetaMask
            setupButtons(contract);
            await generateCards(contract); // Générer les cartes après l'initialisation
            await displayRecentWinners(contract); // Afficher les récents gagnants
        } catch (error) {
            console.error('Accès à MetaMask refusé:', error);
        }
    } else {
        console.error('MetaMask n\'est pas installé!');
    }
}

function setupButtons(contract) {
    buyButton.addEventListener('click', () => buyCards(contract));
    console.log('Bouton configuré.');
}

async function generateCards(contract) {
    console.log('Génération des cartes...');
    const cardElements = cryptoData.map((crypto, index) => {
        const card = document.createElement('div');
        card.className = 'crypto-card';
        card.setAttribute('data-id', crypto.id);
        card.innerHTML = `
            <img class="crypto-logo" src="${crypto.logo}" alt="${crypto.name} logo">
            <span class="crypto-name">${crypto.name}</span>
        `;
        card.addEventListener('click', function() {
            if (!this.classList.contains('purchased')) {
                this.classList.toggle('selected');
                updateSelectedCount(this.classList.contains('selected'));
            }
        });
        return card;
    });

    const cardsOwned = await Promise.all(cardElements.map(card => 
        contract.methods.cardOwners(card.getAttribute('data-id')).call()
    ));

    cardsOwned.forEach((owner, index) => {
        if (owner !== '0x0000000000000000000000000000000000000000') {
            const card = cardElements[index];
            card.classList.add('purchased');
            card.style.pointerEvents = 'none'; // Désactiver les interactions
        }
        gridContainer.appendChild(cardElements[index]);
    });

    console.log('Cartes générées et ajoutées à la grille.');
}

function updateSelectedCount(isSelected) {
    selectedCount += isSelected ? 1 : -1;
    totalCost = selectedCount * CARD_COST;
    selectedCountDisplay.textContent = selectedCount;
    totalCostDisplay.textContent = `${totalCost.toFixed(2)} ETH`;
    buyButton.disabled = selectedCount === 0;
    console.log(`Count mis à jour: ${selectedCount}, Coût total: ${totalCost}`);
}

async function buyCards(contract) {
    const selectedCards = document.querySelectorAll('.crypto-card.selected');
    const cardIds = Array.from(selectedCards, card => Number(card.dataset.id));

    if (cardIds.length === 0) {
        alert('Veuillez sélectionner au moins une carte.');
        return;
    }

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const value = web3.utils.toWei((CARD_COST * cardIds.length).toString(), 'ether');

    console.log('Tentative d\'achat de cartes avec les IDs :', cardIds);
    console.log('Compte :', account);
    console.log('Valeur de la transaction :', value);

    try {
        const gasEstimate = await contract.methods.buyCards(cardIds).estimateGas({ from: account, value });
        console.log('Estimation de gaz :', gasEstimate);

        contract.methods.buyCards(cardIds).send({ from: account, value, gas: gasEstimate })
            .on('transactionHash', function(hash) {
                console.log('Hash de la transaction:', hash);
            })
            .on('confirmation', function(confirmationNumber, receipt) {
                console.log('Confirmation:', confirmationNumber);
                if (receipt) {
                    console.log('Réception:', receipt);
                    updateUIAfterPurchase(cardIds);
                } else {
                    console.error('Réception de la transaction indisponible.');
                }
            })
            .on('receipt', function(receipt) {
                if (receipt) {
                    console.log('Réception:', receipt);
                } else {
                    console.error('Réception de la transaction indisponible.');
                }
            })
            .on('error', function(error, receipt) {
                console.error('Échec de la transaction:', error);
                if (receipt) {
                    console.error('Détails de la transaction:', receipt);
                } else {
                    console.error('Réception de la transaction indisponible.');
                }
            });
    } catch (error) {
        console.error('Erreur lors de l\'estimation du gaz :', error);
    }
}

function updateUIAfterPurchase(cardIds) {
    cardIds.forEach(id => {
        const cardElement = document.querySelector(`.crypto-card[data-id="${id}"]`);
        cardElement.classList.remove('selected');
        cardElement.classList.add('purchased');
        cardElement.style.pointerEvents = 'none';
    });
    remainingCards -= cardIds.length;
    remainingCardsDisplay.textContent = remainingCards;
    selectedCount = 0;
    totalCost = 0;
    selectedCountDisplay.textContent = selectedCount;
    totalCostDisplay.textContent = `${totalCost.toFixed(2)} BNB`;
    buyButton.disabled = true;
    console.log('UI mise à jour après l\'achat.');
}

async function displayRecentWinners(contract) {
    try {
        const winners = await contract.methods.getWinners().call();
        console.log('Winners:', winners);
        updateWinnersList(winners);
    } catch (error) {
        console.error('Erreur lors de la récupération des gagnants:', error);
    }
}

function updateWinnersList(winners) {
    winnersList.innerHTML = ''; // Effacer la liste actuelle
    winners.forEach(winner => {
        const listItem = document.createElement('li');
        listItem.textContent = `Winner: ${winner}`;
        winnersList.appendChild(listItem);
    });
}

window.addEventListener('DOMContentLoaded', init);


//import Web3 from 'web3';
//<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
//<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
//<script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>

//const Web3 = require('web3');
App = {
    load: async () => {
        console.log("app loading...")
        await App.loadWeb3()
        await App.loadAccount()
    },
    loadWeb3: async() => {
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider
            web3 = new Web3(web3.currentProvider)
        } else {
            window.alert("Please connect to metamask.")
        }
        //modern dapp browsers..
        if(window.ethereum) {
            window.web3 = new Web3(ethereum)
            try {
                //request  account access if needed
                await ethereum.enable()
                //accounts now exposed
                web3.eth.sendTransactions({ /*... */})
            } catch (error) {
                //user denied account access
            }
        }
        //legacy dapp browser
        else if(window.web3) {
            App.web3Provider = web3.currentProvider
            window.web3 = new Web3(web3.currentProvider)
            //accounts always exposed
            web3.eth.sendTransactions({ /*... */})
        }
        //non dapp browser
        else{
            console.log('Non ethereum  browser detected')
        }
    },
    loadAccount: async () => {
        App.account = web3.eth.accounts[0]
        console.log(App.account)
    }
}
$(() => {
    $(window).load(() => {
        App.load()
    })
}) 

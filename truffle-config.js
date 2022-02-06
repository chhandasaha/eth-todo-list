
module.exports = {
  networks: {
    development: {
      //here the development network is connected to ganach network
      host: "127.0.0.1",
      port: 7545, //localhost port, according to utube vdo port was 7545
      network_id: "*" //match any network id
    }
  },
  // Configure your compilers
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
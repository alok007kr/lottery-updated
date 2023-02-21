const fs = require('fs')
const solc = require('solc')
const path = require('path')

const lotteryPath = path.resolve(__dirname, "contract", "Lottery.sol")
const source = fs.readFileSync(lotteryPath,"utf-8")

const input = {
    language: "Solidity",
    sources: {
        "Lottery.sol": {
            content: source,
        },
    },

    settings: {
        outputSelection: {
            "*": {
                "*": ["*"],
            },
        },
    },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts["Lottery.sol"].Lottery;



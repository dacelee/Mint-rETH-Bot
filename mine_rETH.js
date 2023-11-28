const { ethers } = require('ethers');

// 设置 Infura 提供的 RPC 服务提供商
const provider = new ethers.providers.JsonRpcProvider('自己填RPC');

// 设置您的以太坊账户地址和私钥
const account = '0x';
const privateKey = '0x';
const wallet = new ethers.Wallet(privateKey, provider);

// 当前计算字符串
const currentChallenge = ethers.utils.formatBytes32String('rETH');

// 希望增加的 Gas Price 百分比
const gasPriceIncreasePercentage = 5; // 这里是 5%，可以根据需要修改这个值

// 找到满足特定条件的解决方案
async function findSolution() {
    while (true) {
        const randomValue = ethers.utils.randomBytes(32);
        const potentialSolution = ethers.utils.hexlify(randomValue);
        const hashedSolution = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(["bytes32", "bytes32"], [potentialSolution, currentChallenge]));
        console.log(hashedSolution);

        if (hashedSolution.startsWith('0x77777')) {
            return potentialSolution;
        }
    }
}

// 构建并发送交易以挖掘 rETH
async function mine_rETH(solution) {
    const jsonData = {
        "p": "rerc-20",
        "op": "mint",
        "tick": "rETH",
        "id": solution,
        'amt': "10000"
    };

    const dataHex = ethers.utils.hexlify(ethers.utils.toUtf8Bytes('data:application/json,' + JSON.stringify(jsonData)));

    const nonce = await provider.getTransactionCount(account);
    let gasPrice = await provider.getGasPrice();

    // 根据设置的百分比增加 Gas Price
    gasPrice = gasPrice.add(gasPrice.mul(gasPriceIncreasePercentage).div(100));

    const gasLimit = ethers.BigNumber.from("25000"); 

    const tx = {
        from: account,
        to: account, // 自转
        nonce: nonce,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
        data: dataHex,
    };

    const signedTx = await wallet.signTransaction(tx);
    const receipt = await provider.sendTransaction(signedTx);
    console.log('Transaction Receipt:', receipt);
}


async function main() {
    try {
        const solution = await findSolution();
        await mine_rETH(solution);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();

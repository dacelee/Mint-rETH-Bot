# Mint-rETH-Bot 安装说明 

     node 版本 20.10.0  
     win系统请安装nvm
     之后执行nvm install 20.10.0 即可
     执行 npm install 安装依赖包
     npm install

# 设置 RPC 服务提供商  （推荐使用infura.io 的RPC）
const provider = new ethers.providers.JsonRpcProvider('自己填RPC');

# 设置您的以太坊账户地址和私钥
const account = '0x';  自己填自己的公钥

const privateKey = '0x';  私钥 

# 希望增加的 Gas Price 百分比
const gasPriceIncreasePercentage = 5; // 这里是 5%，可以根据需要修改这个值，加速gas比例 

# 设置难度数值,当前0x77777 不用修改
 if (hashedSolution.startsWith('0x77777'))

# rERC20原理说明

1.生成随机值:  ethers 库的 randomBytes 函数生成一个32字节的随机值。

2.随机值转换为十六进制: 将上一步生成的随机字节值转换为十六进制字符串。

3.随机字节值转换的十六进制字符串和另一个变量 rETH 编码为ABI格式
  ethers.utils.keccak256 用于计算上面编码的keccak256哈希值。 如果哈希值是0x77777开头就是成功
  简单解释为rERC，不在ID和txhash中显示0x77777，而是把随机字节值+rETH的名字重新编码计算哈希值（这个不是链上显示出来0x77777）
  
4.检查条件并返回结果:检查哈希值是否以特定的字符串（ '0x77777'）开始。

# rERC20的引索反向验证解决方案 

1.创建验证函数：首先，创建一个新的函数，比如 verifySolution，这个函数将接受 findSolution 返回的解决方案作为输入。

2.执行哈希运算：在这个函数中，需要使用与 findSolution 函数中相同的哈希运算逻辑来处理输入的解决方案。

3.检查条件：完成哈希运算后，检查生成的哈希值是否符合您的条件，是否以 '0x77777' 开头。

4.返回验证结果：如果哈希值满足条件，则返回 true，表示解决方案有效；否则返回 false。

demo代码如下

```javascript

function verifySolution(solution) {
    const hashedSolution = ethers.utils.keccak256(
        ethers.utils.defaultAbiCoder.encode(["bytes32", "bytes32"], [solution, currentChallenge])
    );
return hashedSolution.startsWith('0x77777');
}

async function main() {
    const solution = await findSolution();
    const isValid = verifySolution(solution);

    if (isValid) {
        console.log("找到有效0x77777: ", solution);
        
    } else {
        console.log("无效");
    }
}

main();
//

    







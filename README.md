# Mint-rETH-Bot 安装说明 


    mkdir mine_rETH  && cd mine_rETH

    npm install

    node 版本 20.10.0  

# 设置 Infura 提供的 RPC 服务提供商
const provider = new ethers.providers.JsonRpcProvider('自己填RPC');

# 设置您的以太坊账户地址和私钥
const account = '0x';  自己填自己的公钥
const privateKey = '0x';  私钥 

# 希望增加的 Gas Price 百分比
const gasPriceIncreasePercentage = 5; // 这里是 5%，可以根据需要修改这个值，加速gas比例 

# 设置难度数值,当前0x77777 不用修改
 if (hashedSolution.startsWith('0x77777'))


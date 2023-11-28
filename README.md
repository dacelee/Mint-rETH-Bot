# Mint-rETH-Bot 安装说明 

     node 版本 20.10.0  
     win系统请安装nvm
     之后执行nvm install 20.10.0 即可
     执行 npm install 安装依赖包
     npm install

# 设置 RPC 服务提供商
const provider = new ethers.providers.JsonRpcProvider('自己填RPC');

# 设置您的以太坊账户地址和私钥
const account = '0x';  自己填自己的公钥

const privateKey = '0x';  私钥 

# 希望增加的 Gas Price 百分比
const gasPriceIncreasePercentage = 5; // 这里是 5%，可以根据需要修改这个值，加速gas比例 

# 设置难度数值,当前0x77777 不用修改
 if (hashedSolution.startsWith('0x77777'))


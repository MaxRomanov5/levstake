import { Typography } from "@mui/material";
import LiquidityPool from "../../components/LiquidityPool/LiquidityPool.jsx";
import api from '../../API/levstake.js'
import { useState,useEffect } from "react";
const LiquidityPoolSection = () => {
    // const [pools, setPools] = useState([]);
    // useEffect(() => {
    //     api.getPools().then(data=>setPools(data))
    
    // }, []);
    const pools = [{
        "id": 36,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:19.487144",
          "close_date": "2023-12-05T02:25:19.487154",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:19.577294",
        "end_date": "2023-12-12T02:25:19.577322",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },
      {
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },{
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },{
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },{
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },{
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },{
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      },{
        "id": 37,
        "pool_conditions": {
          "open_date": "2023-12-04T02:25:36.981268",
          "close_date": "2023-12-05T02:25:36.981277",
          "max_amount": "1000000000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_amount": "1000000000000000000.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
          "min_leverage": 1,
          "max_leverage": 100
        },
        "start_date": "2023-12-05T02:25:37.058195",
        "end_date": "2023-12-12T02:25:37.058224",
        "profit_rate": "77.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "metadata": {},
        "commission": "2.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "asset": {
          "name": "test - levUSDT",
          "address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92",
          "blockchain": {
            "name": "TestChain - mumbai",
            "chain_id": "80001",
            "currency_name": "test MATIC",
            "scan_api_url": "https://api-testnet.polygonscan.com/api",
            "scan_api_key": "TestKey",
            "rpc_url": "https://api.zan.top/node/v1/polygon/mumbai/public",
            "abi_url": "https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92&format=raw",
            "master_contract_address": "0x9a0dcDcD2e92b588909DCCe1351F78549d3cAE92"
          },
          "decimal": 18,
          "ticker": "ETHUSDT",
          "multiplicator": 1000000000000000000,
          "picture": "https://44x.short.gy/4fIFpO"
        }
      }]

    return (
        <div style={{paddingBottom:'72px'}}>
             <Typography sx={{marginBottom:'16px',textAlign:'center'}} color='primary.main' variant="h2">Asset liquidity pool</Typography> 
           <Typography sx={{marginBottom:'64px',textAlign:'center'}} variant="subtitle1" color='#CACBCB'>Some great description about how it works and what it does.</Typography>
           { pools &&<LiquidityPool pools={pools} type='home'></LiquidityPool>}
            
        </div>
    );
}

export default LiquidityPoolSection;

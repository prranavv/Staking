import { abi } from "./abi";
import { useAccount, useWriteContract } from "wagmi";


export function Unstake(){
    const {writeContract} =  useWriteContract()
    const {address} =useAccount()
    return(
        <button onClick={()=>{
            writeContract({
                abi,
                address:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
                functionName:'unstake',
                args:[BigInt(10000000000000000)],
                account:address,
            })
        }}>
            Unstake
        </button>
    )
}
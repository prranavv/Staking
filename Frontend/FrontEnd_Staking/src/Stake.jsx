import { abi } from "./abi";
import { useWriteContract } from "wagmi";

export function Stake(){
    const {writeContract} =  useWriteContract()

    return(
        <button onClick={()=>{
            writeContract({
                abi,
                address:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
                functionName:'stake',
                args:[BigInt(10000000000)],
                value:BigInt(10000000000)
            })
        }}>
            Transfer
        </button>
    )

}
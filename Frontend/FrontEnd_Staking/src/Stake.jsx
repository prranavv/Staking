import { abi } from "./abi";
import { useAccount, useWriteContract } from "wagmi";

export function Stake(){
    const {writeContract} =  useWriteContract()
    const {address} = useAccount()
    return(
        <button onClick={()=>{
            writeContract({
                abi,
                address:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
                functionName:'stake',
                args:[BigInt(10_000_000_000_000_000)],
                value:BigInt(10_000_000_000_000_000),
                account:address,
            })
        }}>
            Stake
        </button>
    )

}
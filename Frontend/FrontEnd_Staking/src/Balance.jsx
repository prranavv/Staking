import { useReadContract } from "wagmi";
import { abi } from "./abi";
import { useState } from "react";

export function TotalBalance(){
    const [enabled,setEnabled] = useState(false)
    const {data,isLoading,error}=useReadContract({
        abi:abi,
        address:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
        functionName:'total',
        
    })
    console.log(data,error)

    return (
        <>
            {/* <button onClick={()=>{setEnabled(!enabled)}} disabled={isLoading}>
                Total Staked
            </button>
            {} */}
            {data?.toString()}
        </>
    )
    if(isLoading){
        return <div>Loading...</div>
      }

      if (error)
        return (
          <div>
            Error: {(error).shortMessage || error.message}
          </div>
        )
      return <div>
        Total Supply is {data?.toString()}
      </div>
    // console.log(data)
    // return <div>
    //     You have staked {(data?.toString())}  ETH
    // </div>
}
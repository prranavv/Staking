import { useReadContract } from "wagmi";
import { abi } from "./abi";
import { useState } from "react";

export function TotalBalance(){
    const [enabled,setEnabled] = useState(false)
    const {data,isLoading}=useReadContract({
        abi:abi,
        address:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
        functionName:'total',
    })

    const handleclick=()=>{
        setEnabled(!enabled)
    }

    return (
        <>
            <button onClick={handleclick} disabled={isLoading}>Total Staked in Contract</button>
            {enabled && <div>{data?.toString()}</div>}
        </>
    )
}
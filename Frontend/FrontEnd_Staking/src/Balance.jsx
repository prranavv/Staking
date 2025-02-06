import { useAccount, useReadContract } from "wagmi";
import { abi } from "./abi";
import { anvil } from "wagmi/chains";

export function GetStaked(){
    const {address} = useAccount()
    const {data,isLoading,error}=useReadContract({
        abi,
        address:"0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
        functionName:'total',
        account:address,
        chainId:anvil.id,
    })
    console.log(data,error)
    if(isLoading){
        return <div>Loading...</div>
      }
      return <div>
        Total Supply is {data}
      </div>
    // console.log(data)
    // return <div>
    //     You have staked {(data?.toString())}  ETH
    // </div>
}
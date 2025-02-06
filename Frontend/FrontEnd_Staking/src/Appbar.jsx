import { useAccount, useConnect, useConnectors, useDisconnect } from "wagmi";
import { Stake } from "./Stake";
import { TotalBalance } from "./Balance";


export function Appbar(){
    const connectors=useConnectors()
    const {address} = useAccount()
    const {connect} = useConnect()
    const {disconnect} = useDisconnect()
    if(address){
        return <div>
            You are connected {address}
            <button onClick={()=>disconnect()}>
                Disconect
            </button>
           <Stake />

            <TotalBalance />

           
        </div>
    }

    return <div>
        {
        connectors.map(c=> <button key={c.id} onClick={()=>{
            connect({connector:c})
        }}>
            Connect via {c.name}
        </button>)
        }
    </div>
}
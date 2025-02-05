import { useAccount, useConnect, useConnectors, useDisconnect } from "wagmi";

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
        </div>
    }

    return <div>
        {connectors.map(c=> <button onClick={()=>{
            connect({connector:c})
        }}>
            Connect via {c.name}
        </button>)}
    </div>
}
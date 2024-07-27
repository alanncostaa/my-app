import Image from "next/image"
import Entradas from "../entradas"

export function Conjuntos(){

    return <div className="mx-auto w-[1120px] flex flex-row -mt-16">

        <Entradas type="entrada" title="Entradas" valor={15000}/>
        <Entradas type="saida" title="Saidas" valor={8000}/>
        <Entradas type="total" title="Total" valor={7000}/>
        
    </div>
}
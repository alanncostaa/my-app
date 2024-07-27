import Image from "next/image"

export interface iEntradas {
    title: string
    valor: number
    type: "entrada" | "saida" | "total"
}

export function Entradas({type, title, valor}:iEntradas){
    let bgColor
    let textColor
    let titleColor

    const img = type === "entrada" ? "/images/Entradas.png" : type === "saida" ? "/images/Saidas.png" : "/images/Total.png";

    if(type == "entrada" || type == "saida"){
        bgColor = "mx-auto bg-white w-[352px] h-[136px] rounded-md p-8"
        titleColor = "text-title text-[16px]"
        textColor = "text-title text-[32px]"
    }else{
        bgColor = "mx-auto bg-color-green w-[352px] h-[136px] rounded-md p-8"
        titleColor = "text-white text-[16px]"
        textColor = "text-white text-[32px]"
    }

    return <div className={bgColor}>

        <div className="flex justify-between">

            <h3 className={titleColor}>{title}</h3>
            <Image className="max-h-10" src={img} alt={title} width={32} height={32}/>
         
        </div>
        <div className={textColor}>
            <h1>R$ {valor}</h1>
        </div>

        
    </div>
}

export default Entradas
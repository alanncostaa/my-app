export interface iItens {
    title: string
    valor: number
    categoria: string
    data: string
    esc: "entrada" | "saida" 
}

export function ItensTitle(){


    return <div className="mx-auto bg-fundo w-[1120px] h-[64px] rounded-md flex flex-row items-center m-2">

        <div className="p-8 basis-1/2" >

            <h3 className="text-text text-[16px]">Título</h3>
         
        </div>
        <div className="p-8 basis-1/4" >

            <h3 className="text-text text-[16px]">Preço</h3>
         
        </div>
        <div className="p-8 basis-1/4">

            <h3 className="text-text text-[16px]">Categoria</h3>
         
        </div>
        <div className="p-8 basics basis-1/4" >

            <h3 className="text-text text-[16px]">Data</h3>
         
        </div>
        
    </div>
}

export function Itens({title, valor, categoria, data, esc}:iItens){

    let colorText 

    if(esc == "entrada"){
        colorText = "text-color-green text-[16px]"
    }else if(esc == "saida"){
        colorText = "text-red text-[16px]"
    }

    

    return <div className="mx-auto bg-principal w-[1120px] h-[64px] rounded-md flex flex-row items-center m-2">

        <div className="p-8 basis-1/2" >

            <h3 className="text-title text-[16px]">{title}</h3>
         
        </div>
        <div className="p-8 basis-1/4" >

            <h3 className={colorText}>R$ {valor}</h3>
         
        </div>
        <div className="p-8 basis-1/4">

            <h3 className="text-title text-[16px]">{categoria}</h3>
         
        </div>
        <div className="p-8 basics basis-1/4" >

            <h3 className="text-title text-[16px]">{data}</h3>
         
        </div>
        
    </div>
}

export default Itens
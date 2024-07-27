import Itens, { ItensTitle } from "../itens"

export function Lista(){

    return <div className="mx-auto w-[1120px] mt-16">
        <ItensTitle />
        <Itens title="Desenvolvimento de Site" valor={12000} categoria="Venda" data="26/07/2024" esc="entrada"/>
        <Itens title="Hamburguer" valor={59} categoria="Alimentação" data="26/07/2024" esc="saida"/>
        <Itens title="Aluguel do Apartamento" valor={1200} categoria="Casa" data="26/07/2024" esc="saida"/>
        <Itens title="Computador" valor={5400} categoria="Venda" data="26/07/2024" esc="entrada"/>
    </div>
}
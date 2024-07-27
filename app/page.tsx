import Image from "next/image";
import { Header } from "./components/header";
import { Entradas } from "./components/entradas";
import { Conjuntos } from "./components/conjunto";
import { Itens } from "./components/itens";
import { Lista } from "./components/lista";

export default function Home() {
  return (
    <>
        <Header />
        <Conjuntos />
        <Lista />
    </>
  );
}

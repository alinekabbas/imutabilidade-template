import React from "react";
import Carro from "./Carro";
import { Button, EstilizacaoDaGaragem } from "./styledGaragem";
import { useState } from "react";

function Garagem(props) {
  const [automovel, setAutomovel] = useState({ cor: "vermelho", ano: 2002, flex: "sim" })
  const [automovel2, setAutomovel2] = useState({ cor: "verde", ano: 2020, flex: "não" })
  const [automovel3, setAutomovel3] = useState({ cor: "amarelo", ano: 2009, flex: "não" })
  const [automovel4, setAutomovel4] = useState({ cor: "rosa", ano: 2022, flex: "sim" })
 
  const mudaNomeGaragem = () => {
    props.setNome("Ammal")
  }

  const trocaCarro1 = () => {
    const novoCarro = {
      ...automovel,
      ano: 2022,
    }
    setAutomovel(novoCarro)
  }

  const trocaCarro2 = () => {
    const novoCarro2 = {
      ...automovel2,
      cor: "Azul"
    }
    setAutomovel2(novoCarro2)
  }

  const trocaCarro3 = () => {
    const novoCarro3 = {
      ...automovel3,
      ano: 2021,
    }
    setAutomovel3(novoCarro3)
  }

  const trocaCarro4 = () => {
    const novoCarro4 = {
      ...automovel4,
      cor: "Branco",
    }
    setAutomovel4(novoCarro4)
  }

  return (
    <EstilizacaoDaGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Button onClick={props.mensagemAprentacao}>Mensagem</Button>
      <button onClick={mudaNomeGaragem}>Muda Nome</button>
      <Carro
        adicionadoPor={props.nome}
        cor={automovel.cor}
        ano={automovel.ano}
        flex={automovel.flex}
        trocaCarro={trocaCarro1}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel2.cor}
        ano={automovel2.ano}
        flex={automovel2.flex}
        trocaCarro={trocaCarro2}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel3.cor}
        ano={automovel3.ano}
        flex={automovel3.flex}
        trocaCarro={trocaCarro3}
      />
      <Carro
        adicionadoPor={props.nome}
        cor={automovel4.cor}
        ano={automovel4.ano}
        flex={automovel4.flex}
        trocaCarro={trocaCarro4}
      />
    </EstilizacaoDaGaragem>
  );
}

export default Garagem;

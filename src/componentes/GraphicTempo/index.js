import React from 'react'
import {AiOutlinePrinter, AiOutlineDiff } from 'react-icons/ai';
import { Bar} from '@ant-design/charts'
import './style.css'

function GraphicTempo  ()  {

  var data = [
      {
        assunto: "NOTA FISCAL - SELAGEM",
        type: "Mínimo",
        num_processo: 620148,
        valueTempo: 0.00,
        med_duracao_processo: 53.17,
        max_duracao_processo: 1158.92,
        ano:  2021,
        num_eventos: 4029140,
        min_num_eventos:1,
        med_num_eventos:6.50,
        max_num_eventos:1280,
        responsavel:
          "Governo",
      },
      {
        assunto: "NOTA FISCAL - SELAGEM",
        type: "Médio",
        num_processo: 620148,
        min_duracao_processo: 0.00,
        valueTempo: 53.17,
        max_duracao_processo: 1158.92,
        ano:  2021,
        num_eventos: 4029140,
        min_num_eventos:1,
        med_num_eventos:6.50,
        max_num_eventos:1280,
        responsavel:
          "Governo",
      },
      {
        assunto: "NOTA FISCAL - SELAGEM",
        type: "Máximo",
        num_processo: 620148,
        min_duracao_processo: 0.00,
        med_duracao_processo: 53.17,
        valueTempo: 1158.92,
        ano:  2021,
        num_eventos: 4029140,
        min_num_eventos:1,
        med_num_eventos:6.50,
        max_num_eventos:1280,
        responsavel:
          "Governo",
      },
      {
      assunto: "NOTA FISCAL - CORREÇÃO",
      type: "Mínimo",
      num_processo: 230047,
      valueTempo: 0,
      med_duracao_processo: 161.89,
      max_duracao_processo: 1492.00,
      ano:  2021,
      num_eventos: 1584757,
      min_num_eventos:1,
      med_num_eventos:6.89,
      max_num_eventos:347,
      responsavel:
        "Governo",
    },
    {
      assunto: "NOTA FISCAL - CORREÇÃO",
      type: "Médio",
      num_processo: 230047,
      med_duracao_processo: 0.00,
      valueTempo: 161.89,
      max_duracao_processo: 1492.00,
      ano:  2021,
      num_eventos: 1584757,
      min_num_eventos:1,
      med_num_eventos:6.89,
      max_num_eventos:347,
      responsavel:
        "Governo",
    },
    {
      assunto: "NOTA FISCAL - CORREÇÃO",
      type: "Máximo",
      num_processo: 230047,
      med_duracao_processo: 0.00,
      med_duracao_processo: 161.89,
      valueTempo: 1492.00,
      ano:  2021,
      num_eventos: 1584757,
      min_num_eventos:1,
      med_num_eventos:6.89,
      max_num_eventos:347,
      responsavel:
        "Governo",
    },
    {
      assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
      type: "Mínimo",
      num_processo: 20793,
      valueTempo: 0.00,
      med_duracao_processo: 35.59,
      max_duracao_processo: 498.59,
      ano:  2021,
      num_eventos: 160689,
      min_num_eventos:3,
      med_num_eventos:7.75,
      max_num_eventos:34,
      responsavel:
        "Governo",
    },
    {
      assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
      type: "Médio",
      num_processo: 20793,
      min_duracao_processo: 0.00,
      valueTempo: 35.59,
      max_duracao_processo: 498.59,
      ano:  2021,
      num_eventos: 160689,
      min_num_eventos:3,
      med_num_eventos:7.75,
      max_num_eventos:34,
      responsavel:
        "Governo",
    },
    {
      assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
      type: "Máximo",
      num_processo: 20793,
      min_duracao_processo: 0.00,
      med_duracao_processo: 35.59,
      valueTempo: 498.59,
      ano:  2021,
      num_eventos: 160689,
      min_num_eventos:3,
      med_num_eventos:7.75,
      max_num_eventos:34,
      responsavel:
        "Governo",
    },
    {
      assunto: "NOTA FISCAL - SELAGEM",
      type: "Mínimo",
      num_processo: 620148,
      valueTempo: 0.00,
      med_duracao_processo: 53.17,
      max_duracao_processo: 1158.92,
      ano:  2021,
      num_eventos: 4029140,
      min_num_eventos:1,
      med_num_eventos:6.50,
      max_num_eventos:1280,
      responsavel:
        "Governo",
    },
    {
      assunto: "NOTA FISCAL - SELAGEM",
      type: "Médio",
      num_processo: 620148,
      min_duracao_processo: 0.00,
      valueTempo: 53.17,
      max_duracao_processo: 1158.92,
      ano:  2021,
      num_eventos: 4029140,
      min_num_eventos:1,
      med_num_eventos:6.50,
      max_num_eventos:1280,
      responsavel:
        "Governo",
    },
    {
      assunto: "NOTA FISCAL - SELAGEM",
      type: "Máximo",
      num_processo: 620148,
      min_duracao_processo: 0.00,
      med_duracao_processo: 53.17,
      valueTempo: 1158.92,
      ano:  2021,
      num_eventos: 4029140,
      min_num_eventos:1,
      med_num_eventos:6.50,
      max_num_eventos:1280,
      responsavel:
        "Governo",
    },
    {
    assunto: "NOTA FISCAL - CORREÇÃO",
    type: "Mínimo",
    num_processo: 230047,
    valueTempo: 0,
    med_duracao_processo: 161.89,
    max_duracao_processo: 1492.00,
    ano:  2021,
    num_eventos: 1584757,
    min_num_eventos:1,
    med_num_eventos:6.89,
    max_num_eventos:347,
    responsavel:
      "Governo",
  },
  {
    assunto: "NOTA FISCAL - CORREÇÃO",
    type: "Médio",
    num_processo: 230047,
    med_duracao_processo: 0.00,
    valueTempo: 161.89,
    max_duracao_processo: 1492.00,
    ano:  2021,
    num_eventos: 1584757,
    min_num_eventos:1,
    med_num_eventos:6.89,
    max_num_eventos:347,
    responsavel:
      "Governo",
  },
  {
    assunto: "NOTA FISCAL - CORREÇÃO",
    type: "Máximo",
    num_processo: 230047,
    med_duracao_processo: 0.00,
    med_duracao_processo: 161.89,
    valueTempo: 1492.00,
    ano:  2021,
    num_eventos: 1584757,
    min_num_eventos:1,
    med_num_eventos:6.89,
    max_num_eventos:347,
    responsavel:
      "Governo",
  },
  {
    assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
    type: "Mínimo",
    num_processo: 20793,
    valueTempo: 0.00,
    med_duracao_processo: 35.59,
    max_duracao_processo: 498.59,
    ano:  2021,
    num_eventos: 160689,
    min_num_eventos:3,
    med_num_eventos:7.75,
    max_num_eventos:34,
    responsavel:
      "Governo",
  },
  {
    assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
    type: "Médio",
    num_processo: 20793,
    min_duracao_processo: 0.00,
    valueTempo: 35.59,
    max_duracao_processo: 498.59,
    ano:  2021,
    num_eventos: 160689,
    min_num_eventos:3,
    med_num_eventos:7.75,
    max_num_eventos:34,
    responsavel:
      "Governo",
  },
  {
    assunto: "AUTORIZAÇÃO EMISSÃO NFC - ELIMITE 250.000,00",
    type: "Máximo",
    num_processo: 20793,
    min_duracao_processo: 0.00,
    med_duracao_processo: 35.59,
    valueTempo: 498.59,
    ano:  2021,
    num_eventos: 160689,
    min_num_eventos:3,
    med_num_eventos:7.75,
    max_num_eventos:34,
    responsavel:
      "Governo",
  },
     
    ];
        
  var config = {
    data: data,
    isStack: true,
    isGroup: true,
    xField: 'valueTempo',
    yField: 'assunto',
    seriesField: 'type',
    marginRatio: 0,
    color:['#FFAF85','#FFF199','#87C878'],
    assunto: {
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return(
    <>
    <Bar {...config} />
    <div className="component-graph">
      <div>
        <AiOutlinePrinter/>
        <AiOutlineDiff/>
      </div>
    </div>
    </>
  )

  
};

export default GraphicTempo;
export interface Recording {
  name: string;
  date: string;
  notes: string;
  uri: string;
}

export const MOCK_DATA: Recording[] = [
  {
    name: "Progressão de Acordes",
    date: "2025-10-01",
    notes:
      "Gravação de teste com sequência de acordes em Dm - G - C - F. Som limpo e ritmo constante.",
    uri: "file:///mock/progressao_acordes.m4a",
  },
  {
    name: "Melodia em Lá Menor",
    date: "2025-10-03",
    notes:
      "Linha melódica tocada com guitarra solo, explorando escalas menores harmônicas.",
    uri: "file:///mock/melodia_la_menor.m4a",
  },
  {
    name: "Riff Principal da Música Nova",
    date: "2025-10-05",
    notes:
      "Ideia inicial para o riff da nova composição. Gravação com distorção leve.",
    uri: "file:///mock/riff_principal.m4a",
  },
  {
    name: "Bateria e Baixo - Groove Teste",
    date: "2025-10-07",
    notes:
      "Ensaio de groove entre baixo e bateria. BPM 92, foco no encaixe rítmico.",
    uri: "file:///mock/groove_teste.m4a",
  },
  {
    name: "Voz Guia - Refrão",
    date: "2025-10-08",
    notes:
      "Primeira gravação da voz guia para o refrão, com backing vocal experimental.",
    uri: "file:///mock/voz_guia_refrao.m4a",
  },
];

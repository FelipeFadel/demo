export interface Recording {
  name: string;
  date: string;
  notes: string;
  uri: string;
}

export const MOCK_DATA: Recording[] = [
  {
    name: "Gravação de Teste 1",
    date: "2025-10-01",
    notes: "Áudio de teste inicial, sem alterações.",
    uri: "file:///mock/audio1.m4a",
  },
  {
    name: "Gravação de Entrevista",
    date: "2025-10-03",
    notes: "Trecho de entrevista com cliente.",
    uri: "file:///mock/audio2.m4a",
  },
  {
    name: "Gravação Reunião Projeto",
    date: "2025-10-05",
    notes: "Reunião sobre o projeto X, anotações incluídas.",
    uri: "file:///mock/audio3.m4a",
  },
  {
    name: "Gravação Aula Matemática",
    date: "2025-10-07",
    notes: "Explicação de conceitos básicos de álgebra.",
    uri: "file:///mock/audio4.m4a",
  },
  {
    name: "Gravação Voz Teste",
    date: "2025-10-08",
    notes: "Testando microfone e volume.",
    uri: "file:///mock/audio5.m4a",
  },
];

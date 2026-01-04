
import React from 'react';

export const MOZ_COLORS = {
  primary: '#005596', // Azul clássico SIGAA
  secondary: '#f1f1f1',
  warning: '#fff9c4',
  green: '#009739',
  red: '#D40000',
  black: '#000000',
  yellow: '#FFD700',
};

export const NAV_LINKS = [
  { id: 'ensino', label: 'Ensino', icon: <i className="fas fa-graduation-cap"></i> },
  { id: 'pesq', label: 'Pesquisa', icon: <i className="fas fa-microscope"></i> },
  { id: 'ext', label: 'Extensão', icon: <i className="fas fa-hands-helping"></i> },
  { id: 'monit', label: 'Monitoria', icon: <i className="fas fa-user-friends"></i> },
  { id: 'assoc', label: 'Ações Associadas', icon: <i className="fas fa-project-diagram"></i> },
  { id: 'bib', label: 'Biblioteca', icon: <i className="fas fa-book"></i> },
  { id: 'aux', label: 'Auxílios/Bolsas', icon: <i className="fas fa-wallet"></i> },
  { id: 'estagio', label: 'Estágio', icon: <i className="fas fa-briefcase"></i> },
  { id: 'ambientes', label: 'Ambientes Virtuais', icon: <i className="fas fa-desktop"></i> },
  { id: 'outros', label: 'Outros', icon: <i className="fas fa-ellipsis-h"></i> },
];

export const MOCK_FORUM = [
  { title: 'Link do Grupo de Engenharia', author: 'albanonr', replies: 1, date: '14/11/2025 18:54:21' },
  { title: 'Linguística: uma janela para entender o cérebro', author: 'aliubalde', replies: 0, date: '02/09/2025 22:43:20' },
  { title: 'Divulgação de formulários oficiais', author: 'janainaalmada', replies: 0, date: '14/04/2025 10:41:15' },
  { title: 'PARA REFLEXÃO: O papel do engenheiro em MZ', author: 'alfredomuchanga', replies: 2, date: '30/10/2022 20:53:35' },
];

export const MOCK_USER_DATA = {
  name: 'ALFREDO GABRIEL MUCHANGA',
  course: 'ENGENHARIA DE INFORMÁTICA / ISTM - Maputo',
  matricula: '2024202856',
  level: 'GRADUAÇÃO',
  status: 'ATIVO',
  email: 'alfredo.muchanga@istm.ac.mz',
  bio: 'Estudante de engenharia apaixonado por resolver problemas complexos e criar soluções tecnológicas que impactam positivamente Moçambique.',
  indices: {
    mc: '14.2500',
    ira: '13.8075',
    iech: '0.4500',
    iea: '0.4200',
    ide: '12.50',
    mcn: '850.40',
    iepl: '0.1500',
    iean: '45.20'
  },
  integralizacao: {
    obrigatoria: 2800,
    optativa: 120,
    complementar: 60,
    eletiva: 0,
    total: 3500,
    percentual: 38
  }
};

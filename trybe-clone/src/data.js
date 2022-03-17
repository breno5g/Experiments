import fundamentosImg from './assets/icons/fundamentos.svg';
import frontendImg from './assets/icons/frontend.svg';
import backendImg from './assets/icons/backend.svg';
import cienciasImg from './assets/icons/ciencias-da-computacao.svg';
import softSkillsImg from './assets/icons/soft-skills.svg';
import liveLecturesImg from './assets/icons/live-lectures.svg';
import realLifeEnginerImg from './assets/icons/real-life-enginer.svg';
import carrerImg from './assets/icons/carrer.svg';

export const contentOfContent = {
  modules: [
    {
      logo: fundamentosImg,
      title: 'Fundamentos',
      module: 'Módulo 1',
    },
    {
      logo: frontendImg,
      title: 'Front-end',
      module: 'Módulo 2',
    },
    {
      logo: backendImg,
      title: 'Back-end',
      module: 'Módulo 3',
    },
    {
      logo: cienciasImg,
      title: 'Ciencias da computação',
      module: 'Módulo 4',
    },
  ],
  extras: [
    {
      logo: softSkillsImg,
      title: 'Soft Skills',
      text: 'Aprenda e desenvolva as habilidades socioemocionais mais requisitadas para a carreira de Desenvolvimento Web.',
    },
    {
      logo: liveLecturesImg,
      title: 'Live Lectures',
      module:
        'Reveja as gravações de aulas ao vivo da sua turma ou aprofunde seus estudos assistindo aulas de outras turmas. A escolha é sua!',
    },
  ],
  complementares: [
    {
      logo: realLifeEnginerImg,
      title: 'Desenvolvimento Web: Vida Real',
      text: 'Aprenda metodologias e práticas para resolver problemas reais do mercado de trabalho.',
    },
    {
      logo: carrerImg,
      title: 'Sua Carreira',
      module:
        'Veja conteúdos criados em parceria com empresas referência em recrutamento, conheça as empresas parceiras da Trybe e acesse vagas do mercado que selecionamos especialmente para trybers.',
    },
  ],
};

// All page copy, one entry per language. Both pages render the same Home component.

const github = 'https://github.com/stardustlil';

export const links = {
  email: 'lixiang.stu@yangtzeu.edu.cn',
  github,
  repositories: `${github}?tab=repositories`,
  cv: '/uploads/resume.pdf',
  paper: 'https://arxiv.org/abs/2606.22776',
  code: `${github}/GeoRouteNet`,
};

export const content = {
  en: {
    htmlLang: 'en',
    name: 'Xiang Li',
    description: 'Xiang Li: neural combinatorial optimization, deep reinforcement learning, natural language processing.',
    affiliation: 'Incoming MPhil student, HKUST(GZ)',
    otherLanguage: { label: '中文', href: '/zh/', hreflang: 'zh-CN' },
    labels: {
      github: 'GitHub',
      cv: 'CV (PDF)',
      interests: 'Research interests',
      publication: 'Preprint',
      projects: 'Projects',
      experience: 'Experience & education',
      awards: 'Awards',
      paper: 'Paper',
      code: 'Code',
      allRepositories: 'All repositories on GitHub',
    },
    interests: ['Neural combinatorial optimization', 'Deep reinforcement learning', 'Natural language processing'],
    publication: {
      title: 'GeoRouteNet: Geometry-Enhanced Neural Solver for Euclidean TSP',
      citation: 'Xiang Li. arXiv preprint, 2026.',
      method:
        'A non-autoregressive solver that injects geometric inductive bias into node, edge, and attention representations, trained with multi-candidate self-comparison reinforcement learning.',
    },
    projects: [
      { name: 'poetryGPT', text: 'Decoder-only Transformer for classical Chinese poetry, built from scratch in PyTorch.' },
      { name: 'tsp_benchmark', text: 'Plug-in training and benchmark framework for neural TSP solvers.' },
      { name: '408-local-judge', text: 'Local online judge with Docker sandboxing (FastAPI, React).' },
      { name: 'errorbook-mcp', text: 'MCP server for mistake notebooks with FSRS review scheduling.' },
    ],
    experience: [
      { date: '2027.09 –', text: 'MPhil, HKUST(GZ)' },
      { date: '2025.11 – 2026.06', text: 'Undergraduate thesis: GeoRouteNet' },
      { date: '2022.09 – 2026.06', text: 'B.Eng. in Software Engineering, Yangtze University' },
      { date: '2024.10 – 2026.06', text: 'University competitive programming team' },
    ],
    awards: [
      { year: '2026', items: ['Outstanding Graduation Thesis, Yangtze University'] },
      {
        year: '2025',
        items: [
          'National First Prize, Mati Cup Programming Contest',
          'National Second Prize, RAICOM Robot Developer Competition (CAIP track)',
          'National Second Prize, Lanqiao Cup (C/C++)',
        ],
      },
    ],
  },
  zh: {
    htmlLang: 'zh-CN',
    name: '李响',
    description: '李响：神经组合优化、深度强化学习、自然语言处理。',
    affiliation: '香港科技大学（广州）MPhil',
    otherLanguage: { label: 'English', href: '/', hreflang: 'en' },
    labels: {
      github: 'GitHub',
      cv: '简历 (PDF)',
      interests: '研究兴趣',
      publication: '预印本',
      projects: '项目',
      experience: '科研与教育',
      awards: '荣誉奖项',
      paper: '论文',
      code: '代码',
      allRepositories: 'GitHub 上的全部仓库',
    },
    interests: ['神经组合优化', '深度强化学习', '自然语言处理'],
    publication: {
      title: 'GeoRouteNet：面向欧几里得 TSP 的几何增强神经求解器',
      citation: '李响. arXiv 预印本, 2026.',
      method: '将几何归纳偏置注入节点、边与注意力表示的非自回归求解器，采用多候选自比较强化学习训练。',
    },
    projects: [
      { name: 'poetryGPT', text: '从零实现的 Decoder-only Transformer，用于古诗词生成（PyTorch）。' },
      { name: 'tsp_benchmark', text: '神经 TSP 求解器的插件化训练与评测框架。' },
      { name: '408-local-judge', text: '基于 Docker 沙箱的本地 OJ（FastAPI + React）。' },
      { name: 'errorbook-mcp', text: '支持 FSRS 复习调度的错题本 MCP 服务。' },
    ],
    experience: [
      { date: '2027.09 –', text: '香港科技大学（广州）MPhil' },
      { date: '2025.11 – 2026.06', text: '本科毕业论文：GeoRouteNet' },
      { date: '2022.09 – 2026.06', text: '长江大学 软件工程 工学学士' },
      { date: '2024.10 – 2026.06', text: '校算法竞赛集训队' },
    ],
    awards: [
      { year: '2026', items: ['长江大学校级优秀毕业论文'] },
      {
        year: '2025',
        items: [
          '码蹄杯程序设计大赛 全国一等奖',
          'RAICOM 机器人开发者大赛（CAIP 赛道）全国二等奖',
          '蓝桥杯程序设计竞赛（C/C++ 组）全国二等奖',
        ],
      },
    ],
  },
};

export type Lang = keyof typeof content;

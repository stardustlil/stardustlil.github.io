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

// Projects shown before the "show more" toggle.
export const featuredProjects = 2;

export const content = {
  en: {
    htmlLang: 'en',
    name: 'Xiang Li',
    description: 'Xiang Li: neural combinatorial optimization, deep reinforcement learning, graph neural networks.',
    affiliation: 'Yangtze University',
    otherLanguage: { label: '中文', href: '/zh/', hreflang: 'zh-CN' },
    labels: {
      github: 'GitHub',
      cv: 'CV (PDF)',
      interests: 'Research interests',
      publication: 'Publication',
      projects: 'Projects',
      experience: 'Experience & education',
      awards: 'Awards',
      paper: 'Paper',
      code: 'Code',
      showMore: (n: number) => `Show ${n} more`,
      showFewer: 'Show fewer',
      allRepositories: 'All repositories on GitHub',
    },
    interests: ['Neural combinatorial optimization', 'Deep reinforcement learning', 'Graph neural networks'],
    publication: {
      title: 'GeoRouteNet: Geometry-Enhanced Neural Solver for Euclidean TSP',
      citation: 'Xiang Li. arXiv preprint, 2026.',
      result: '0.32% and 1.26% optimality gap on TSP50 and TSP100.',
    },
    projects: [
      { name: 'poetryGPT', text: 'Decoder-only Transformer for classical Chinese poetry, built from scratch in PyTorch.' },
      { name: 'tsp_benchmark', text: 'Plug-in training and benchmark framework for neural TSP solvers.' },
      { name: 'Actor_Critic', text: 'A2C and QAC for discrete action spaces.' },
      { name: 'flappy_bird_REINFORCE', text: 'Flappy Bird agent trained with REINFORCE and a baseline.' },
      { name: '408-local-judge', text: 'Local online judge with Docker sandboxing (FastAPI, React).' },
      { name: 'errorbook-mcp', text: 'MCP server for mistake notebooks with FSRS review scheduling.' },
      { name: 'algorithm-templates', text: 'C++ templates and notes for competitive programming.' },
    ],
    experience: [
      { date: '2025.11 – 2026.06', text: 'Undergraduate researcher', note: 'Thesis: GeoRouteNet' },
      { date: '2022.09 – 2026.06', text: 'B.Eng. in Software Engineering, Yangtze University' },
      { date: '2022 – 2026', text: 'ICPC training team member' },
    ],
    awards: [
      { year: '2026', items: ['Outstanding Graduation Thesis, Yangtze University'] },
      {
        year: '2025',
        items: [
          'National First Prize, Mati Cup Programming Contest',
          'National Second Prize, RAICOM Robot Developer Competition (CAIP track)',
          'National Second Prize, Lanqiao Cup (C/C++)',
          'Provincial Third Prize, Group Programming Ladder Tournament',
          'PAT Advanced Level, 89/100',
        ],
      },
    ],
  },
  zh: {
    htmlLang: 'zh-CN',
    name: '李响',
    description: '李响：神经组合优化、深度强化学习、图神经网络。',
    affiliation: '长江大学',
    otherLanguage: { label: 'English', href: '/', hreflang: 'en' },
    labels: {
      github: 'GitHub',
      cv: '简历 (PDF)',
      interests: '研究兴趣',
      publication: '论文',
      projects: '项目',
      experience: '科研与教育',
      awards: '荣誉奖项',
      paper: '论文',
      code: '代码',
      showMore: (n: number) => `展开其余 ${n} 个`,
      showFewer: '收起',
      allRepositories: 'GitHub 上的全部仓库',
    },
    interests: ['神经组合优化', '深度强化学习', '图神经网络'],
    publication: {
      title: 'GeoRouteNet：面向欧几里得 TSP 的几何增强神经求解器',
      citation: '李响. arXiv 预印本, 2026.',
      result: 'TSP50 / TSP100 最优性差距 0.32% / 1.26%。',
    },
    projects: [
      { name: 'poetryGPT', text: '从零实现的 Decoder-only Transformer，用于古诗词生成（PyTorch）。' },
      { name: 'tsp_benchmark', text: '神经 TSP 求解器的插件化训练与评测框架。' },
      { name: 'Actor_Critic', text: '面向离散动作空间的 A2C 与 QAC 实现。' },
      { name: 'flappy_bird_REINFORCE', text: '用 REINFORCE（含 baseline）训练 Flappy Bird 智能体。' },
      { name: '408-local-judge', text: '基于 Docker 沙箱的本地 OJ（FastAPI + React）。' },
      { name: 'errorbook-mcp', text: '支持 FSRS 复习调度的错题本 MCP 服务。' },
      { name: 'algorithm-templates', text: '算法竞赛 C++ 模板与笔记。' },
    ],
    experience: [
      { date: '2025.11 – 2026.06', text: '本科科研', note: '毕业论文：GeoRouteNet' },
      { date: '2022.09 – 2026.06', text: '长江大学 软件工程 工学学士' },
      { date: '2022 – 2026', text: 'ICPC 集训队队员' },
    ],
    awards: [
      { year: '2026', items: ['长江大学校级优秀毕业论文'] },
      {
        year: '2025',
        items: [
          '码蹄杯程序设计大赛 全国一等奖',
          'RAICOM 机器人开发者大赛（CAIP 赛道）全国二等奖',
          '蓝桥杯程序设计竞赛（C/C++ 组）全国二等奖',
          '团体程序设计天梯赛 省级三等奖',
          'PAT 甲级 89 分',
        ],
      },
    ],
  },
};

export type Lang = keyof typeof content;

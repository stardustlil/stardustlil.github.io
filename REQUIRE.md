- 教育经历那里加入相关课程，不用写成绩
- 获奖是否需要提供证书展示？
- 再添加一个板块展示项目经历 : https://github.com/stardustlil/poetryGPT


我的CV:
% !TEX TS-program = xelatex
% !TEX encoding = UTF-8 Unicode

\documentclass{resume}
\usepackage{linespacing_fix}
\usepackage{cite}
\usepackage{enumitem}
\usepackage{hyperref}

\setlist[itemize]{topsep=1pt, itemsep=1pt, parsep=0pt, partopsep=0pt}

% 如果编译时发现页面还是略微超出一两行，可以取消注释下方 geometry 这行代码来微调页边距
% \usepackage[top=0.6in, bottom=0.6in, left=0.6in, right=0.6in]{geometry}

\begin{document}
\pagenumbering{gobble}

\name{Li Xiang}

\basicInfo{
  \email{lixiang.stu@yangtzeu.edu.cn} \textperiodcentered\
  \phone{(+86) 18040423672} \textperiodcentered\
  \github[stardustlil]{https://github.com/stardustlil} \textperiodcentered\
  \faHome\ \href{https://stardustlil.github.io}{stardustlil.github.io}
}

% ==========================================================
\section{\faMortarBoard\ Education}
\datedsubsection{\textbf{Yangtze University}, Jingzhou, China}{Sep 2022 -- Jun 2026}
\textit{B.Eng. in Software Engineering} \hfill \textbf{GPA:} 3.11 / 4.0

\vspace{2pt}
{\small \textbf{Relevant Coursework:} Discrete Mathematics, Probability \& Statistics, Machine Learning, Algorithm Design \& Analysis, Linear Algebra}

% ==========================================================
\section{\faFlask\ Research Experience}

\textbf{GeoRouteNet: Geometry-Enhanced Neural Solver for Euclidean TSP} (\textit{Undergraduate Thesis}) \hfill Nov 2025 -- Jun 2026

Built upon reproduction and ablation studies of NAR4TSP, motivating a geometry-aware architecture for Euclidean TSP.
\begin{itemize}
  \item Proposed \textbf{GeoRouteNet}, a non-autoregressive neural solver that injects geometric inductive biases into GNN node, edge, and attention representations.
  \item Designed a multi-candidate self-comparative reinforcement learning strategy to improve training stability and solution quality.
  \item Achieved \textbf{0.32\% / 1.26\% optimality gap on TSP50 / TSP100 (Beam-1000)}; on 27 TSPLIB EUC\_2D instances, reduced average gap from \textbf{17.12\% to 3.60\%} against the NAR4TSP baseline.
  \item Awarded \textbf{University-Level Outstanding Graduation Thesis}. Preprint available on \href{https://arxiv.org/abs/2606.22776}{arXiv:2606.22776}.
\end{itemize}

% ==========================================================
\section{\faTrophy\ Competitive Programming \& Awards}

\datedsubsection{\textbf{University ACM Team Member}}{Oct 2024 -- Jun 2026}
\role{C++}{Algorithm Training}
\begin{itemize}
  \item Solved 2000+ algorithmic problems across Codeforces, AtCoder, and LeetCode; focused on dynamic programming, graph algorithms, and combinatorics.
\end{itemize}

\datedline{\textbf{National First Prize (Rank 219/2520)}, Mati Cup Programming Contest}{Aug 2025}
\datedline{\textbf{National Second Prize}, RAICOM Robot Competition (CAIP Track)}{Aug 2025}
\datedline{\textbf{National Second Prize}, Lanqiao Cup Programming Contest (C/C++)}{Jun 2025}
\datedline{\textbf{Provincial Third Prize}, Group Programming Ladder Tournament (GPLT)}{May 2025}
\datedline{\textbf{Top 15\%}, Programming Ability Test (PAT Advanced)}{Sep 2025}

% ==========================================================
\section{\faCode\ Selected Projects}

\datedsubsection{\textbf{poetry-GPT: Decoder-only Transformer for Chinese Poetry Generation}}{May 2025 -- Jun 2025}
\role{PyTorch, CUDA}{Independent Project}
\begin{itemize}
  \item Built a 7-layer decoder-only Transformer ($\sim$14M parameters) in PyTorch for classical Chinese poetry generation.
  \item Developed a character-level preprocessing pipeline over 2.2M Chinese characters and implemented temperature, top-k, and nucleus sampling for autoregressive decoding.
\end{itemize}

% ==========================================================
\section{\faInfoCircle\ Skills \& Languages}
\begin{itemize}
  \item \textbf{Programming:} Python, C/C++, Java, SQL
  \item \textbf{Research \& ML:} Literature reading and paper reproduction; proficient in implementing deep learning models in PyTorch; familiar with reinforcement learning concepts
  \item \textbf{Algorithms:} Strong foundation in data structures and algorithms, with extensive practice in dynamic programming, graph algorithms, and combinatorics
  \item \textbf{Languages:} Chinese (Native), English (CET-6)
\end{itemize}

\end{document}
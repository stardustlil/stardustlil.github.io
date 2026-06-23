---
title: "GeoRouteNet：面向欧几里得 TSP 的几何增强神经求解器"
authors:
- me
date: "2026-06-01T00:00:00Z"
publishDate: "2026-06-01T00:00:00Z"

publication_types: ["preprint"]

peer_reviewed: false
open_access: true

abstract: |
  我们提出 GeoRouteNet，一种非自回归神经求解器，将几何归纳偏置注入 GNN 节点、
  边和注意力表示中，用于求解欧几里得旅行商问题。我们设计了一种多候选自比较
  强化学习策略，以提高训练稳定性和解的质量。GeoRouteNet 在 TSP50/TSP100
  （Beam-1000）上分别实现了 0.32%/1.26% 的最优性差距，并在 27 个 TSPLIB
  EUC_2D 实例上将平均差距从 NAR4TSP 基线的 17.12% 降低至 3.60%。

summary: |
  一种面向欧几里得 TSP 的几何感知非自回归神经求解器，在 TSP50/TSP100 上
  实现了 0.32%/1.26% 的最优性差距。

tags:
- 神经组合优化
- 旅行商问题
- 图神经网络
- 强化学习

featured: true

hugoblox:
  ids:
    arxiv: "2606.22776"

links:
- type: preprint
  provider: arxiv
  id: "2606.22776"
- type: code
  url: https://github.com/stardustlil/GeoRouteNet

projects: []
slides: ""
---

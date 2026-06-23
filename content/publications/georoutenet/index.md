---
title: "GeoRouteNet: Geometry-Enhanced Neural Solver for Euclidean TSP"
authors:
- me
date: "2026-06-01T00:00:00Z"
publishDate: "2026-06-01T00:00:00Z"

translationKey: georoutenet
publication_types: ["preprint"]

peer_reviewed: false
open_access: true

abstract: |
  We propose GeoRouteNet, a non-autoregressive neural solver that injects geometric
  inductive biases into GNN node, edge, and attention representations for the Euclidean
  Traveling Salesman Problem. A multi-candidate self-comparative reinforcement learning
  strategy is designed to improve training stability and solution quality. GeoRouteNet
  achieves 0.32%/1.26% optimality gap on TSP50/TSP100 (Beam-1000), and on 27 TSPLIB
  EUC_2D instances reduces the average gap from 17.12% to 3.60% against the NAR4TSP
  baseline.

summary: |
  A geometry-aware non-autoregressive neural solver for Euclidean TSP, achieving
  0.32%/1.26% optimality gap on TSP50/TSP100.

share: false
featured: true

hugoblox:
  ids:
    arxiv: "2606.22776"

links:
- type: code
  url: https://github.com/stardustlil/GeoRouteNet
---

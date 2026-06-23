---
title: ''
summary: ''
date: 2022-10-24
type: landing
translationKey: home

sections:
  - block: resume-biography-3
    id: bio
    content:
      username: me
      text: ''
      button:
        text: 下载简历
        url: uploads/resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: markdown
    content:
      title: '研究方向'
      subtitle: ''
      text: |-
        我对神经组合优化、深度学习和强化学习充满热情。我的本科毕业论文 GeoRouteNet 探索了针对欧几里得旅行商问题的几何增强神经求解器。

        目前我正在寻求研究助理（RA）职位，希望能够在组合优化与深度学习领域做出贡献。

        欢迎联系交流。
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: 论文发表
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: resume-experience
    id: experience
    content:
      username: me
    design:
      date_format: '2006年1月'
      is_education_first: false
  - block: resume-awards
    content:
      title: 获奖
      username: me
  - block: cta-card
    id: contact
    content:
      title: '寻求RA机会'
      text: |-
        我正在积极寻找神经组合优化、深度学习和强化学习方向的研究助理职位。

        lixiang.stu@yangtzeu.edu.cn
      button:
        text: 下载简历
        url: uploads/resume.pdf
    design:
      card:
        css_class: 'bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl'
        css_style: ''
---

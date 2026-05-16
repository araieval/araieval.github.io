---
layout: arguard-task
title: Task 2 | Textual Harmful Prompt Detection
heading: "Task 2: Textual Harmful Prompt Detection"
description: ArGuard Task 2 covers harmful Arabic prompt detection for LLM safety evaluation.
og_title: ArGuard Task 2 | Textual Harmful Prompt Detection
og_description: Harmful Arabic prompt detection for the ArabicNLP 2026 ArGuard shared task.
og_url: https://araieval.github.io/ArGuard2026/task2/
og_image: https://araieval.github.io/ArGuard2026/assets/images/arguard-hero.png
canonical_url: https://araieval.github.io/ArGuard2026/task2/
permalink: /ArGuard2026/task2/
favicon: /ArGuard2026/favicon.ico
stylesheet: /ArGuard2026/assets/css/styles.css
script: /ArGuard2026/assets/js/main.js
header_data: true
brand_label: ArGuard home
brand_title: ArGuard
brand_subtitle: ArAIEval
task_label: ArabicNLP 2026 Shared Task
summary: Systems receive Arabic prompts directed at LLMs and detect unsafe prompts across binary and harm-category settings.
repository_url: https://github.com/araieval/ArGuard-2026
nav:
  - label: Overview
    url: /ArGuard2026/
  - label: Tasks
    url: /ArGuard2026/#tasks
    children:
      - label: Task 1
        url: /ArGuard2026/task1/
      - label: Task 2
        url: /ArGuard2026/task2/
  - label: Timeline
    url: /ArGuard2026/#timeline
  - label: Resources
    url: /ArGuard2026/#resources
  - label: Organizers
    url: /ArGuard2026/#organizers
  - label: Archive
    url: https://araieval.github.io/
footer_text: "&copy; 2026 ArAIEval. Hosted on GitHub Pages."
---

## Definition

Task 2 focuses on textual harmful prompt detection for Arabic LLM safety evaluation. Given an Arabic prompt directed at an LLM, systems determine whether the prompt is safe or unsafe and, when unsafe, identify the harm category.

The task targets Arabic safety risks in prompts, including direct harmful requests, indirect or disguised unsafe requests, dialectal phrasing, and prompts that require careful interpretation of intent.

## Subtasks

- **Subtask 2A:** Given an Arabic prompt, classify it as **Safe** or **Unsafe**.
- **Subtask 2B:** Given an unsafe Arabic prompt, classify it into the relevant harm domain.

Harm domains include self-harm, harm to others, harassment, adult content, bullying, hate speech, and fraud or illegal activities.

## Leaderboard

The leaderboard will be linked here when the official submission platform is released.

## Datasets

The dataset contains Arabic prompts annotated for safety evaluation. The proposal reports 25,071 prompts overall; the released data will be the authoritative source for final split sizes and labels.

| Category | Train | Development | Test | Total |
| --- | ---: | ---: | ---: | ---: |
| Safe | 2,789 | 348 | 350 | 3,487 |
| Unsafe | 17,267 | 2,158 | 2,161 | 21,586 |

## Evaluation

The official metric is **macro-F1**. Accuracy, macro-precision, macro-recall, and weighted F1 may also be reported for analysis.

Subtask 2A is evaluated as binary classification. Subtask 2B is evaluated as harm-category classification.

## Submission

### Scorers, Format Checkers, and Baselines

Scorer scripts, format checkers, baseline systems, and starter-kit material will be released in the [ArGuard repository](https://github.com/araieval/ArGuard-2026).

### Guidelines

The submission process will include a system development phase using the development set and a final evaluation phase using the blind test set.

- Each team should maintain a single submission account.
- The most recent valid submission before the deadline will be considered the final submission.
- Output filenames and archive formats will be specified with the starter kit.
- Teams should include their team name and a short method description with each submission.

### Submission Site

The official submission site will be linked when the competition is opened.

---
layout: arguard-task
title: Task 1 | Multimodal Hateful Meme Detection
heading: "Task 1: Multimodal Hateful Meme Detection"
description: ArGuard Task 1 covers hateful content detection in Arabic memes.
og_title: ArGuard Task 1 | Multimodal Hateful Meme Detection
og_description: Hateful content detection in Arabic memes for the ArabicNLP 2026 ArGuard shared task.
og_url: https://araieval.github.io/ArGuard2026/task1/
og_image: https://araieval.github.io/ArGuard2026/assets/images/arguard-hero.png
canonical_url: https://araieval.github.io/ArGuard2026/task1/
permalink: /ArGuard2026/task1/
favicon: /ArGuard2026/favicon.ico
stylesheet: /ArGuard2026/assets/css/styles.css
script: /ArGuard2026/assets/js/main.js
header_data: true
brand_label: ArGuard home
brand_title: ArGuard
brand_subtitle: ArAIEval
task_label: ArabicNLP 2026 Shared Task
summary: Systems receive Arabic meme images with extracted text and predict hateful content labels across binary and fine-grained settings.
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

Task 1 focuses on multimodal harmful content detection in Arabic memes. Given a meme image and its extracted Arabic text, systems identify whether the meme is hateful and, when applicable, predict the fine-grained hateful content categories.

The task is designed for Arabic-specific multimodal challenges, including dialectal language, code-switching, sarcasm, image-text interaction, cultural references, and visually implied targets.

## Subtasks

- **Subtask 1A:** Given an Arabic meme, classify it as **Hateful** or **Not Hateful**.
- **Subtask 1B:** Given an Arabic hateful meme, assign the relevant fine-grained hateful content categories.

Fine-grained labels include mocking, incitement, dehumanization, slurs, contempt, inferiority, exclusion, stereotyping, extremism, threat, insults, historical references, humor, sarcasm, and other categories.

## Leaderboard

The leaderboard will be linked here when the official submission platform is released.

## Datasets

The dataset contains Arabic memes annotated for hateful content detection. Each item includes the meme image, extracted text, and the task labels. The released training, development, and test splits will be the authoritative source for all counts and labels.

| Split | Hateful labels | Not hateful labels | Total label assignments |
| --- | ---: | ---: | ---: |
| Train | 1,717 | 2,177 | 3,894 |
| Development | 263 | 312 | 575 |
| Test | 493 | 761 | 1,254 |

Counts are label assignments because a meme may have more than one fine-grained label.

## Evaluation

The official metric is **macro-F1**. Accuracy, macro-precision, macro-recall, and weighted F1 may also be reported for analysis.

Subtask 1A is evaluated as binary classification. Subtask 1B is evaluated as fine-grained category prediction.

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

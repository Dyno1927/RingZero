# Ring 0 — Refined Project Brief

Project name: **Ring 0** (RingZero / Ring0)

## What it is

A static documentation site for C and C++ systems programming, built with Astro + Starlight, deployed to Cloudflare Pages. A long-term technical reference, not a product: no accounts, no LMS, no backend. Content accuracy and depth over page count.

## What changed from the original spec

The original brief (20 sections) asks for the full, mature state of the project — complete standard library docs, POSIX/Win32/Vulkan/CUDA API references, and hidden reference implementations for expert-tier projects like a JIT compiler and garbage collector. That is correct as a **north star**, but treating it as a v1 checklist guarantees either months of silent work or a site padded with shallow pages to look complete — which the spec itself explicitly forbids.

This refinement keeps every constraint and quality bar from the original, but separates **scope** from **sequence**:

- **North star** (unchanged): the full IA in the original spec — all language areas, all library/API categories, projects from beginner to expert.
- **v1 slice** (new): a small, real, fully-finished cross-section that proves the architecture and content bar, rather than a wide shallow pass.
- **Visibly planned, not pretended**: sidebar sections that exist in the IA but have no content yet are marked "planned" rather than omitted or faked. This satisfies the original spec's own rule — "do not present placeholder as complete" — while still showing the full intended shape.

## v1 slice (concrete, buildable in one real pass)

- **C**: Fundamentals through Pointers, Arrays, Structures (not the full language)
- **C++**: Fundamentals through Classes and RAII (not templates/concurrency yet)
- **1 roadmap**: Learning C, beginner to intermediate
- **1 library doc**: libcurl (as the template for the library-doc structure)
- **1 API doc**: POSIX file I/O (as the template for the API-doc structure)
- **2 projects fully implemented end to end**, each with the full 12-part structure and a real, buildable, hidden-by-default reference solution:
  - Beginner: command-line task manager
  - Intermediate: thread pool
- Full theme, layout, search, nav, and code presentation (these are infrastructure, not content, and are needed for every later page)

Everything else from the original spec's IA appears in navigation as "planned," never as empty pages dressed up as finished ones.

## Unchanged constraints (carried over verbatim in spirit)

- Astro + Starlight + TypeScript + MDX + Shiki, static output, Cloudflare Pages
- No LMS, no accounts, no quizzes, no gamification, no online code execution
- Technical accuracy over volume; label UB/implementation-defined/compiler-specific explicitly; never invent library signatures
- Hidden-by-default reference solutions with progressive disclosure
- Three-column desktop layout, collapsing gracefully through tablet/mobile
- Dark (graphite/teal) and light (paper/teal) themes
- GitHub as source of truth; CONTRIBUTING.md, style guide, PR/issue templates; owner retains editorial approval

## Why this refinement is worth doing before writing code

Building against the original spec literally, section by section, invites scope creep into a multi-month content project before anything ships. Building the v1 slice first gives you a real, inspectable site today, with the component and content architecture already proven to extend cleanly — adding the next language section or library doc later is then a content task, not an architecture task.

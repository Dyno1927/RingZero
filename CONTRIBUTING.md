# Contributing to [name]

Thanks for wanting to contribute to [name].

This project is a high-accuracy, zero-fluff technical reference for C and C++ systems programming. Because readers rely on these guides for production systems, kernel interfaces, and hardware interactions, the editorial and correctness bar is strict.

## Editorial Principles

1. **Owner Editorial Control**: I (Dyno) retain final editorial approval on all content, page additions, and architectural decisions.
2. **Precision Over Volume**: I will reject PRs that pad word count with generic intros or introductory fluff. Every sentence must convey technical mechanisms, machine models, or standards compliance.
3. **Explicit Behavior Labeling**:
   - Never describe undefined behavior (UB) as "it might crash" without stating clearly that it is Undefined Behavior per the ISO standard (cite the section when possible, e.g., C17 §6.5.6).
   - Distinguish strictly between **Undefined Behavior**, **Implementation-Defined Behavior**, and **Compiler Extensions** (GCC/Clang/MSVC).
4. **No Synthetic Signatures**: Never invent or approximate standard library or POSIX function signatures. Copy them verbatim from the ISO C/C++ standards or POSIX.1-2017/2024 specifications.
5. **No LMS or Gamification**: No quizzes, badges, accounts, or fake interactive widgets. Code examples must be complete, buildable, and testable on real hardware with standard toolchains.

## Code Standards for Examples

- **C Standards**: Modern ISO C17 default. Must compile cleanly with:
  ```bash
  clang -std=c17 -Wall -Wextra -Wpedantic -Werror -fsanitize=address,undefined
  ```
- **C++ Standards**: ISO C++20 default. Must compile cleanly with:
  ```bash
  clang++ -std=c++20 -Wall -Wextra -Wpedantic -Werror -fsanitize=address,undefined
  ```
- **Error Handling**: Every system call (`open`, `read`, `write`, `malloc`, `pthread_create`) must check return values and handle `errno` / `EINTR` where applicable.
- **Sanitizers**: Examples must run with zero AddressSanitizer, UndefinedBehaviorSanitizer, or ThreadSanitizer warnings.

## Submitting Changes

1. **Corrections & Errata**: If you find an error in code or an incorrect claim about undefined behavior, open an issue using the **Content Correction** template or submit a focused PR.
2. **Proposing New Pages**: Before writing an entire article for a planned section, open an issue using the **New Topic Proposal** template to discuss the scope, technical depth, and outline.
3. **Local Verification**: Run the build and formatting checks before committing:
   ```bash
   npm run build
   npm run format
   ```

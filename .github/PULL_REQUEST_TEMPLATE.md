## Description

Summary of the changes made and the technical rationale behind them.

## Technical Accuracy Checklist

- [ ] All C code conforms to ISO C17 and builds cleanly with `-Wall -Wextra -Wpedantic -Werror`.
- [ ] All C++ code conforms to ISO C++20 and adheres to RAII and the Rule of Five/Zero.
- [ ] Any undefined behavior, implementation-defined behavior, or compiler extensions are explicitly labeled.
- [ ] No simulated or approximate library signatures; verified against official standards/manpages.
- [ ] Run through AddressSanitizer and/or ThreadSanitizer with zero runtime violations.

## Build & Formatting Verification

- [ ] `npm run build` completed with zero errors and generated valid static output.
- [ ] `npm run format` (Prettier) passed cleanly without unformatted files.

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  ...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
  output: "static",
  integrations: [
    starlight({
      title: "Ring 0",
      description:
        "Systems programming, explained from the metal up. C and C++ internals, memory, and OS interfaces.",
      favicon: "/favicon.svg",
      disable404Route: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Dyno1927/Ring0",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      pagination: true,
      expressiveCode: {
        themes: ["github-dark", "github-light"],
        defaultProps: {
          wrap: false,
        },
      },
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      sidebar: [
        {
          label: "Start here",
          items: [
            { label: "Ring 0 overview", slug: "" },
            { label: "Learning C", slug: "roadmaps/learning-c" },
            { label: "Modern C++ for Systems", slug: "roadmaps/modern-cpp" },
          ],
        },
        {
          label: "C",
          collapsed: true,
          items: [
            {
              label: "Fundamentals",
              collapsed: true,
              items: [
                {
                  label: "Variables & Types",
                  slug: "c/fundamentals/variables-and-types",
                },
                {
                  label: "Operators & Expressions",
                  slug: "c/fundamentals/operators-and-expressions",
                },
                {
                  label: "Control Flow & Loops",
                  slug: "c/fundamentals/control-flow",
                },
                {
                  label: "Functions & Linkage",
                  slug: "c/fundamentals/functions",
                },
                { label: "Pointers", slug: "c/fundamentals/pointers" },
                { label: "Arrays", slug: "c/fundamentals/arrays" },
                { label: "Strings", slug: "c/fundamentals/strings" },
                { label: "Structures", slug: "c/fundamentals/structures" },
                {
                  label: "Enums & Unions",
                  slug: "c/fundamentals/enums-and-unions",
                },
                {
                  label: "Preprocessor & Macros",
                  slug: "c/fundamentals/preprocessor-and-macros",
                },
              ],
            },
            {
              label: "Memory",
              collapsed: true,
              items: [
                { label: "The malloc Family", slug: "c/memory/malloc-family" },
                {
                  label: "Dangling Pointers & UAF",
                  slug: "c/memory/dangling-pointers",
                },
              ],
            },
          ],
        },
        {
          label: "C++",
          collapsed: true,
          items: [
            {
              label: "Fundamentals",
              collapsed: true,
              items: [
                {
                  label: "Moving from C to C++",
                  slug: "cpp/fundamentals/c-to-cpp",
                },
                {
                  label: "Classes & Objects",
                  slug: "cpp/fundamentals/classes",
                },
                { label: "RAII & Lifetimes", slug: "cpp/fundamentals/raii" },
                {
                  label: "Smart Pointers",
                  slug: "cpp/fundamentals/smart-pointers",
                },
                {
                  label: "Templates & Metaprogramming",
                  slug: "cpp/fundamentals/templates",
                },
              ],
            },
            {
              label: "Concurrency",
              collapsed: true,
              items: [
                { label: "Threads & Mutexes", slug: "cpp/concurrency/threads" },
                {
                  label: "Atomics & Memory Models",
                  slug: "cpp/concurrency/atomics",
                },
              ],
            },
          ],
        },
        {
          label: "Roadmaps",
          collapsed: true,
          items: [
            { label: "Learning C", slug: "roadmaps/learning-c" },
            { label: "Modern C++ for Systems", slug: "roadmaps/modern-cpp" },
          ],
        },
        {
          label: "Libraries",
          collapsed: true,
          items: [
            { label: "libcurl", slug: "libraries/libcurl" },
            { label: "zlib", slug: "libraries/zlib" },
          ],
        },
        {
          label: "APIs & SDKs",
          collapsed: true,
          items: [
            { label: "POSIX File I/O", slug: "apis/posix-file-io" },
            { label: "POSIX Berkeley Sockets", slug: "apis/posix-sockets" },
            { label: "Linux epoll", slug: "apis/epoll" },
          ],
        },
        {
          label: "Projects",
          collapsed: true,
          items: [
            { label: "CLI Task Manager", slug: "projects/cli-task-manager" },
            { label: "Thread Pool", slug: "projects/thread-pool" },
            { label: "Arena Allocator", slug: "projects/arena-allocator" },
          ],
        },
        {
          label: "Architecture Roadmap",
          slug: "planned",
        },
      ],
    }),
  ],
});

import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    starlight({
      title: "[name]",
      description:
        "Systems programming, explained from the metal up. C and C++ internals, memory, and OS interfaces.",
      social: {
        github: "https://github.com/Dyno1927/[name]",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "C",
          items: [
            {
              label: "Fundamentals",
              collapsed: false,
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
                { label: "Structures", slug: "c/fundamentals/structures" },
              ],
            },
            {
              label: "Memory",
              collapsed: false,
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
          items: [
            {
              label: "Fundamentals",
              collapsed: false,
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
              ],
            },
            {
              label: "Concurrency",
              collapsed: false,
              items: [
                { label: "Threads & Mutexes", slug: "cpp/concurrency/threads" },
              ],
            },
          ],
        },
        {
          label: "Roadmaps",
          items: [
            { label: "Learning C", slug: "roadmaps/learning-c" },
            { label: "Modern C++ for Systems", slug: "roadmaps/modern-cpp" },
          ],
        },
        {
          label: "Libraries",
          items: [{ label: "libcurl", slug: "libraries/libcurl" }],
        },
        {
          label: "APIs & SDKs",
          items: [
            { label: "POSIX File I/O", slug: "apis/posix-file-io" },
            { label: "POSIX Berkeley Sockets", slug: "apis/posix-sockets" },
          ],
        },
        {
          label: "Projects",
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

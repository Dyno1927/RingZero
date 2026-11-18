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
                { label: "Classes", slug: "cpp/fundamentals/classes" },
                { label: "RAII & Lifetimes", slug: "cpp/fundamentals/raii" },
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
          items: [{ label: "Learning C", slug: "roadmaps/learning-c" }],
        },
        {
          label: "Libraries",
          items: [{ label: "libcurl", slug: "libraries/libcurl" }],
        },
        {
          label: "APIs & SDKs",
          items: [{ label: "POSIX File I/O", slug: "apis/posix-file-io" }],
        },
        {
          label: "Projects",
          items: [
            { label: "CLI Task Manager", slug: "projects/cli-task-manager" },
            { label: "Thread Pool", slug: "projects/thread-pool" },
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

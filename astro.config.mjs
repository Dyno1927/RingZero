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
              badge: { text: "Planned", variant: "caution" },
              collapsed: true,
              items: [
                { label: "Malloc Family (Planned)", link: "/planned" },
                { label: "Dangling Pointers (Planned)", link: "/planned" },
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
              badge: { text: "Planned", variant: "caution" },
              collapsed: true,
              items: [
                { label: "Threads & Mutexes (Planned)", link: "/planned" },
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

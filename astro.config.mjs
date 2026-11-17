import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    starlight({
      title: '[name]',
      description: 'Systems programming, explained from the metal up. C and C++ internals, memory, and OS interfaces.',
      social: {
        github: 'https://github.com/Dyno1927/[name]',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'C',
          items: [
            {
              label: 'Fundamentals',
              collapsed: false,
              items: [
                { label: 'Pointers', link: '/c/fundamentals/pointers' },
                { label: 'Arrays', link: '/c/fundamentals/arrays' },
                { label: 'Structures', link: '/c/fundamentals/structures' },
              ],
            },
            {
              label: 'Memory (Planned)',
              badge: 'Planned',
              collapsed: true,
              items: [
                { label: 'Malloc Family', link: '/c/memory/malloc-family' },
                { label: 'Dangling Pointers', link: '/c/memory/dangling-pointers' },
              ],
            },
          ],
        },
        {
          label: 'C++',
          items: [
            {
              label: 'Fundamentals',
              collapsed: false,
              items: [
                { label: 'Classes', link: '/cpp/fundamentals/classes' },
                { label: 'RAII', link: '/cpp/fundamentals/raii' },
              ],
            },
            {
              label: 'Concurrency (Planned)',
              badge: 'Planned',
              collapsed: true,
              items: [
                { label: 'Threads & Mutexes', link: '/cpp/concurrency/threads' },
              ],
            },
          ],
        },
        {
          label: 'Roadmaps',
          items: [
            { label: 'Learning C (Beginner to Intermediate)', link: '/roadmaps/learning-c' },
          ],
        },
        {
          label: 'Libraries',
          items: [
            { label: 'libcurl', link: '/libraries/libcurl' },
          ],
        },
        {
          label: 'APIs & SDKs',
          items: [
            { label: 'POSIX File I/O', link: '/apis/posix-file-io' },
          ],
        },
        {
          label: 'Projects',
          items: [
            { label: 'CLI Task Manager (Beginner)', link: '/projects/cli-task-manager' },
            { label: 'Thread Pool (Intermediate)', link: '/projects/thread-pool' },
          ],
        },
      ],
    }),
  ],
});

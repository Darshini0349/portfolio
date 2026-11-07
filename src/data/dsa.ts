/**
 * DSA & PROBLEM SOLVING
 * The LeetCode link lives in profile.ts → links.leetcode.
 *
 * TODO: edit `topics` so it lists only what you have actually studied.
 * status: 'comfortable' | 'practicing' | 'next'
 */
export type DsaTopic = { name: string; status: 'comfortable' | 'practicing' | 'next' }

export const dsa = {
  intro:
    'I practise data structures and algorithms in C++ to sharpen how I think about problems: breaking them down, weighing trade-offs, and writing code that is correct and efficient.',
  language: 'C++',
  topics: [
    { name: 'Arrays', status: 'practicing' },
    { name: 'Strings', status: 'practicing' },
    { name: 'Recursion', status: 'practicing' },
    { name: 'Sorting & Searching', status: 'practicing' },
    { name: 'Linked Lists', status: 'next' },
    { name: 'Stacks & Queues', status: 'next' },
    { name: 'Trees', status: 'next' },
    { name: 'Dynamic Programming', status: 'next' },
  ] as DsaTopic[],
  approach: [
    'Understand the problem and its constraints first',
    'Start with brute force, then optimise',
    'Analyse time and space complexity',
    'Revisit problems I got wrong',
  ],
}

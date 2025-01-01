# Next.js 15 App Router: Fetch within useEffect Data Inconsistency

This repository demonstrates a subtle bug in Next.js 15's App Router when using `fetch` within a `useEffect` hook, and how to fix it. The problem involves inconsistent data rendering during server-side rendering (SSR) due to the asynchronous nature of `fetch`.

## Problem

The `fetch` call inside the `useEffect` hook doesn't guarantee data availability before the component renders on the server. This can lead to the component rendering with stale data (or loading state) and subsequent client-side updates appearing delayed or out of sync.

## Solution

The solution involves using `react-query` or a similar data fetching library, as it's best-suited to handle these asynchronous operations in a more robust and reliable way during SSR.  See `bugSolution.js` for an implementation using `react-query`.
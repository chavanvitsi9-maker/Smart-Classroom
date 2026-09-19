## 2024-09-19 - Firebase Optimization Patterns
**Learning:** This codebase uses Firebase Realtime Database heavily.
1. `once('value')` calls can create a waterfall if nested sequentially. Concurrency via `Promise.all` dramatically speeds up UI loading.
2. Nesting `.on('value')` listeners (creating one inside the callback of another) results in exponential memory leaks and UI re-rendering because every change to the outer path attaches a new duplicate listener to the inner path.

**Action:**
- When fetching multiple independent Firebase paths once, use `Promise.all([db.ref(A).once(), db.ref(B).once()])`.
- When listening to multiple Firebase paths, declare them side-by-side (`A.on()`, `B.on()`), save results to local variables, and call a centralized update/render function once both have data.

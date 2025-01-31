# React 18+ useEffect Cleanup Bug: Missing Return Statement Leading to Memory Leaks

This repository demonstrates a common, yet easily missed, bug in React 18 and higher related to the `useEffect` hook.  If an effect uses an `AbortController` to cancel network requests, it's essential to include a cleanup function (returned from the useEffect) that correctly calls `controller.abort()` before the component unmounts.  Failing to do so may result in unnecessary network requests and potential memory leaks, especially in situations involving numerous components or long-running operations.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npm start` to start the development server.
4. Observe that the browser console may display warnings or errors, or the browser memory usage will significantly increase and won't decrease after unmounting. 

## Solution

The solution is to always include the appropriate cleanup logic within the returned function from `useEffect`.

## Lessons Learned

- Always include a cleanup function in your `useEffect` hooks if they perform asynchronous operations.
- Properly clean up resources (like AbortControllers) when a component unmounts to avoid memory leaks.
- Thoroughly test your React components to identify potential memory leaks.
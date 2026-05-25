# React Hooks & Redux — Expense Manager Workshop

A progressive 14-branch workshop that builds an Expense Manager app from scratch using React hooks and Redux. Each branch introduces a new concept with `TODO` comments marking the exercises.

## Prerequisites

- Node.js 18+
- Yarn

## Getting started

```bash
yarn install
yarn dev        # Start Vite dev server (HMR)
yarn build      # Typecheck + production build (run after every exercise)
yarn lint       # ESLint
```

Start on branch `01-useState` and work forward:

```bash
git checkout 01-useState
```

Each branch is a checkpoint. Check out the next one before each exercise begins.

## How to do each exercise

1. **Check out the branch** — each one starts at a pre-exercise state with `TODO` comments
2. **Search for `TODO:`** in `src/` — these are your implementation targets
3. **Implement the exercise** — follow the prompt in each TODO comment
4. **Run `yarn build`** — typecheck for correctness
5. **Run `yarn dev`** — verify the result in the browser (Vite HMR)
6. **Move to the next branch**

Some branches carry solutions forward; others reset to a fresh starting state. When in doubt, diff the relevant files between branches to check.

## Branch overview

| Branch | Concept | Type |
|--------|---------|------|
| `01-useState` | `useState`, component props | Hands-on |
| `02-useEffect` | `useEffect`, localStorage persistence | Hands-on |
| `03-useRef` | `useRef`, debounced search | Hands-on |
| `04-useMemo` | `useMemo`, memoized derived values | Hands-on |
| `05-useCallback` | `useCallback`, `React.memo` | Hands-on |
| `06-useReducer` | `useReducer`, form state consolidation | Hands-on |
| `07-useContext` | `useContext`, prop-drilling elimination | Hands-on |
| `08-expenses-in-context` | `useReducer` + `useContext` combined | Pre-built |
| `09-custom-hooks` | Custom hooks, `useAppContext` guard | Pre-built |
| `10-redux-expenses` | Vanilla Redux store setup | Pre-built |
| `11-redux-filters` | Redux filters slice | Hands-on |
| `12-redux-ui-async` | Async Redux, UI slice | Pre-built |
| `13-rtk-refactor` | Redux Toolkit `createSlice` migration | Hands-on |
| `14-final` | Complete RTK solution | Pre-built (reference) |

## Structure

The app lives entirely in `src/`:

```
src/
  components/   — UI components (added as branches progress)
  store/        — Redux store (from branch 10 onward)
  types/        — TypeScript types
  hooks/        — Custom hooks (from branch 09)
  context/      — React context (branches 07–09)
```

## Key tools

| Command | Purpose |
|---------|---------|
| `yarn dev` | Vite dev server with HMR |
| `yarn build` | `tsc -b && vite build` — typecheck + bundle |
| `yarn lint` | ESLint with React hooks plugin |

No test runner is configured. `yarn build` is the only verification gate.

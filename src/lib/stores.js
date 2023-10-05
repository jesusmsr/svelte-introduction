import { derived, readable, writable } from "svelte/store";

const start = new Date();

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 1),
    decrement: () => update((n) => n - 1),
    reset: () => set(0),
  };
}

export const count = createCount();

// Writable stores
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

// Derived stores
export const elapsed = derived(time, ($time) =>
  Math.round(($time.getTime() - start.getTime()) / 1000)
);

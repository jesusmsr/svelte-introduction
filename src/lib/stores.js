import { derived, readable, writable } from "svelte/store";

export const count = writable(0);
const start = new Date();

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

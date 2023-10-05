import { readable, writable } from "svelte/store";

export const count = writable(0);

// Writable stores
export const time = readable(new Date(), function (set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

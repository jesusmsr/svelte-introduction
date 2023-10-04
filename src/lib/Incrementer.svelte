<script>
    import { count } from "./stores";

    function increment() {
        count.update((n) => n + 1);
    }
</script>

<main>
    <button on:click={increment}>+</button>
</main>

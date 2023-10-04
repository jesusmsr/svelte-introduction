<script>
    import { count } from "./stores";

    function reset() {
        count.set(0);
    }
</script>

<main>
    <button on:click={reset}>Reset</button>
</main>

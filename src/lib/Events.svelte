<script>
    import {createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function sendMessage(){
        dispatch('message', {
            text: 'Hello world'
        })
    }
</script>

<button on:click={sendMessage}>Dispatch component event</button>
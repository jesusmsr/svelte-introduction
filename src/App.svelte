<script>
  import Events from "./lib/Events.svelte";
import Pointer from "./lib/Pointer.svelte";
  let name = 'Jesus';

  let button = '<button>Click me</button>';

  let counter = 0;
  $: doubledCounter = counter * 2

  $: {
    console.log(counter);
    if (counter > 10) alert('GREATER THAN 10')
  }

  function increment(){
    counter += 1;
  }
  function decrement(){
    counter -= 1;
  }

  // Reactivity (arrays)
  let todos = ['clean', 'learn svelte', 'love life'];

  $: console.log(todos);

  function addTodo(){
    todos = [...todos, 'new value'];
  }

  // Keyed each blocks
  const users = [
    {
      name: 'jesus',
      id: 1
    },
    {
      name: 'david',
      id: 2
    },
    {
      name: 'laura',
      id: 3
    }
  ];

  // Promises

  const promise = null;

  // Component events
  function onMessage(e){
    alert(e.detail.text)
  }
</script>

<h1 >Hello {name.toUpperCase()}</h1>
<hr>

<h3>{counter}</h3>
<h3>Double counter: {doubledCounter}</h3>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>

<hr>
<Pointer x={0} y={0} />

<p>{@html button}</p>
<hr>
<h1>Reactivity: updating arrays and objects</h1>
<button on:click={addTodo}>Add new todo</button>

<hr>
<h1>Conditionals</h1>
{#if counter > 5}
  <p>Counter greater than 5</p>
{:else}
  <p>Havent reached 5 yet</p>
{/if}

<hr>
<h1>Keyed each blocks</h1>
{#each users as user (user.id)}
  <p>user {user.name}</p>
{/each}

<hr>
<h1>Await blocks</h1>
{#await promise}
  <p>Data is coming</p>
{:then result}
  <p>Data loaded: {result}</p>
{:catch error}
  <p>{error.message}</p>
{/await}

<hr>
<Events on:message={onMessage} />
<style>
  h1{
    color: lightblue
  }
</style>
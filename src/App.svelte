<script>
  import Decrementer from "./lib/Decrementer.svelte";
  import Events from "./lib/Events.svelte";
  import Incrementer from "./lib/Incrementer.svelte";
  import Pointer from "./lib/Pointer.svelte";
  import { onMount } from "svelte";
  import Resetter from "./lib/Resetter.svelte";
  import { count, time, elapsed, nameStore, greeting} from "./lib/stores.js";

  let name = "Jesus";

  let button = "<button>Click me</button>";

  let counter = 0;
  $: doubledCounter = counter * 2;

  $: {
    console.log(counter);
    if (counter > 10) alert("GREATER THAN 10");
  }

  function increment() {
    counter += 1;
  }
  function decrement() {
    counter -= 1;
  }

  // Reactivity (arrays)
  let todos = ["clean", "learn svelte", "love life"];

  $: console.log(todos);

  function addTodo() {
    todos = [...todos, "new value"];
  }

  // Keyed each blocks
  let users = [
    {
      name: "jesus",
      id: 1,
    },
    {
      name: "david",
      id: 2,
    },
    {
      name: "laura",
      id: 3,
    },
  ];

  // Promises

  const promise = null;

  // Component events
  function onMessage(e) {
    alert(e.detail.text);
  }

  // Text inputs
  let nameText = "Jesus";
  let checked = false;

  // Lifecycles
  onMount(() => {
    alert("component mounted");
  });

  let newUser = "";

  function addUser() {
    users = [...users, { name: newUser, id: 9 }];
    newUser = "";
  }
  // Stores

  const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);


</script>

<h1>Hello {name.toUpperCase()}</h1>
<hr />

<h3>{counter}</h3>
<h3>Double counter: {doubledCounter}</h3>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>

<hr />
<Pointer x={0} y={0} />

<p>{@html button}</p>
<hr />
<h1>Reactivity: updating arrays and objects</h1>
<button on:click={addTodo}>Add new todo</button>

<hr />
<h1>Conditionals</h1>
{#if counter > 5}
  <p>Counter greater than 5</p>
{:else}
  <p>Havent reached 5 yet</p>
{/if}

<hr />
<h1>Keyed each blocks</h1>
{#each users as user (user.id)}
  <p>user {user.name}</p>
{/each}

<hr />
<h1>Await blocks</h1>
{#await promise}
  <p>Data is coming</p>
{:then result}
  <p>Data loaded: {result}</p>
{:catch error}
  <p>{error.message}</p>
{/await}

<Events on:message={onMessage} />

<hr />
<h1>Text inputs</h1>

<input type="text" bind:value={nameText} />
<h4>Hello {nameText}</h4>
<input type="checkbox" bind:checked />
{#if checked}
  <p>checked</p>
{/if}

<hr />
<h1>Lifecycles</h1>
<input type="text" bind:value={newUser} />
<button on:click={addUser}>Add new user</button>

<hr />
<h1>Stores</h1>
<!-- Auto-subscriptions -->
<h4>Count is: {$count}</h4>

<!-- Writable stores -->
<p>The time is: {formatter.format($time)}</p>
<p>This page has been open for: {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}</p>


<!-- Custom stores -->
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>Reset</button>

<!--
<Incrementer />
<Decrementer />
<Resetter />
-->

<input type="text" bind:value={$nameStore}>
<p>{$greeting}</p>

<style>
  h1 {
    color: lightblue;
  }
</style>

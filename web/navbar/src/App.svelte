<script>
  import { onMount, onDestroy } from 'svelte';
  import { Link, navigate, Router } from "svelte-routing";
  import { globalHistory } from 'svelte-routing/src/history';
  import { jsonWebToken } from './stores.js'

  export let name;
  $: isAuthenticated = $jsonWebToken;

  let pathname = window.location.pathname;
  let unsub;

  const redirect = () => {
    if(pathname !== '/' && !isAuthenticated) {
      console.warn("This users isn't authenticated...are you sure they should see this page??")
      // navigate("/", { replace: true })
    }
  }
  onMount(() => {
      redirect();

      unsub = globalHistory.listen(({ location, action }) => {
        console.log(location, action);
        pathname = location.pathname;        
        redirect()
      });
  });

  onDestroy(() => {
      unsub();
  });
</script>

<style>
  section {
    font-size: 1.5rem;
  }
</style>

{#if pathname !== '/'}
  <Router url="">
    <section>{name} is ready for navigation!</section>
    <div>
    {#if !pathname.includes('/home') }
      <span>
        <Link to="/home">Home</Link>
      </span>  
    {/if}
    {#if !pathname.includes('/profile') }
      <span>
        <Link to="/profile">Profile</Link>
      </span>  
    {/if}
      <span>
        <Link to="/">Login</Link>
      </span>  
    </div>
  </Router>
{/if}
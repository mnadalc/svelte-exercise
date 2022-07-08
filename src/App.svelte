<script lang="ts">
  import SearchBar from "./lib/SearchBar.svelte";
  import Table from "./lib/Table.svelte";

  let ships: [];

  const onSearch = async (value: string): Promise<void> => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/ships?value=${value}`,
        {
          headers: {
            Accept: "application/json",
            Origin: "http://localhost:3000",
          },
        }
      );
      const data = await res.json();
      console.log("data", data);
      ships = data;
    } catch (e) {
      throw new Error("Error fetching data", e);
    }
  };
</script>

<main>
  <SearchBar {onSearch} />
  {#if ships}
    <Table {ships} />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  :global(.visually-hidden) {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  :global(.visually-hidden:focus) {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
  }
</style>

<script lang="ts">
  import DownArrow from "../assets/DownArrow.svelte";

  export let heading: string;
  export let pax: string;
  export let facilitiesList: [string];
  export let body: string;

  let isShown = false;
</script>

<tr class={`${isShown ? "no-border-bottom" : ""}`}>
  <td>
    <DownArrow
      aria-hidden="true"
      aria-role="img"
      data-testid="down-arrow"
      on:click={() => (isShown = !isShown)}
      {isShown}
    />
    <span class="visually-hidden">Show more info</span>
  </td>
  <th scope="row" class="th-inner">
    {heading}
  </th>
  <td>{pax || "n/a"}</td>
  <td>{facilitiesList.join(", ")}</td>
</tr>

{#if isShown}
  <tr>
    <td colspan={4}>
      <h3 class="ship-info-header-row">{heading}</h3>
      <div class="ship-info-content-row">{@html body}</div>
    </td>
  </tr>
{/if}

<style>
  td,
  th {
    text-align: left;
    padding: 0.5rem;
  }

  .down-arrow-icon {
    transition: all 0.25s linear;
  }

  .down-arrow-icon:hover {
    cursor: pointer;
  }

  .no-border-bottom {
    border-bottom: none;
  }

  .ship-info-header-row {
    display: inherit;
  }

  .ship-info-content-row {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 5;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  .th-inner {
    font-weight: normal;
  }
</style>

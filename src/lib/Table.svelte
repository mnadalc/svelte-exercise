<script lang="ts">
  import TableRow from "./TableRow.svelte";
  export let ships;
</script>

<div class="table-scroller">
  <table class="ships-table">
    <caption class="visually-hidden">Ships information</caption>
    <thead>
      <tr>
        <th />
        <th scope="col">Name</th>
        <th scope="col">PAX</th>
        <th scope="col">Facilities</th>
      </tr>
    </thead>

    <tbody>
      {#each ships as ship}
        <TableRow
          heading={ship.heading}
          pax={ship.pax}
          facilitiesList={ship.facilities}
          body={ship.body}
        />
      {/each}
    </tbody>
  </table>
</div>

<style>
  .ships-table {
    margin-top: 2rem;
    width: 100%;
    border-collapse: collapse;
  }

  tr {
    border-bottom: 1px solid #ccc;
  }

  th {
    text-align: left;
    padding: 0.5rem;
  }

  /* TODO */
  /* tbody > tr:last-child {
    border-bottom: none;
  } */

  @media screen and (max-width: 480px) {
    .table-scroller {
      overflow-x: auto;
      width: 320px;
    }
  }
</style>

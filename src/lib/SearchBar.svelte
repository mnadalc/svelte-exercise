<script lang="ts">
  import cross from "../assets/cross.svg";
  import loupe from "../assets/magnifying-glass.svg";

  export let onSearch: (value: string) => void;
  let value = "";
  let inputState = "Inactive";
</script>

<div class="content">
  <span>{inputState}</span>

  <div class="input-wrapper">
    <input
      type="text"
      placeholder="Search"
      aria-label="Search bar"
      bind:value
      on:focus={() => {
        if (value) {
          inputState = "Focused + populated";
        } else {
          inputState = "Focused";
        }
      }}
      on:keydown={(event) => {
        if (event.key === "Enter") {
          onSearch(value);
        }
      }}
    />

    <div class="button-wrapper">
      {#if value}
        <button
          class={`${value ? "visible" : "hidden"}`}
          on:click={() => {
            value = "";
          }}
        >
          <img src={cross} alt="Clear field" aria-hidden="true" />
          <span class="visually-hidden">Clear</span>
        </button>
      {/if}

      <button
        class={`${value ? "button-focused" : ""}`}
        on:click={() => {
          if (value) {
            onSearch(value);
          }
        }}
      >
        <img src={loupe} alt="Search" aria-hidden="true" />
        <span class="visually-hidden">Search</span>
      </button>
    </div>
  </div>
</div>

<style>
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
  }

  .input-wrapper {
    display: flex;
    position: relative;
    flex-grow: 1;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    max-width: 500px;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: none;

    flex-grow: 1;
    text-indent: 0.5rem;
    border: solid 1.5px #e3e3e3;
    border-radius: 0;
    box-shadow: 0 3px 10pt 0 #e3e3e3;
  }

  input:focus,
  input:focus-visible {
    border: 2px solid #005fcc;
    outline: none;
  }

  button {
    border: none;
    background-color: transparent;
    height: 100%;
  }

  button:hover {
    cursor: pointer;
  }

  .button-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }

  .button-focused {
    background-color: #0349fc;
    border-color: transparent;
    outline: none;
  }

  .button-focused > img {
    filter: invert(1);
  }
</style>

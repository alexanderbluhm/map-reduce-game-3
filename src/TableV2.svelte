<script>
  export let data = [];
  export let highlight;
  export let classes = "";
</script>

<div class={classes}>
  <table class="table w-full border-separate [border-spacing:0px]">
    <thead
      class="header-row rounded bg-white text-left text-app-blue-900 shadow-lg"
    >
      <tr
        class="first-child:rounded-l first-child:pl-6 last-child:rounded-r last-child:pr-6 children:border-[1px] children:border-white children:pt-3 children:pb-2"
      >
        <slot name="headerColumns" />
      </tr>
    </thead>
    <!-- We need a spacing tr here -->
    <tr class="h-4 w-full" />
    <tbody class="text-sm text-app-blue-900">
      {#each data as row, index}
        <tr
          class:active={index === highlight}
          class="{index === 0
            ? 'first-child:rounded-tl last-child:rounded-tr'
            : ''}
            {index === data.length - 1
            ? 'first-child:rounded-bl last-child:rounded-br'
            : ''} text-sm odd:bg-gray-100 even:bg-white first-child:pl-6 last-child:pr-6 children:border-[1px] children:py-2 even-children:border-white odd-children:border-gray-100"
        >
          <slot name="columns" dataAtColumn={row} {index} />
        </tr>
      {/each}
    </tbody>
  </table>
</div>

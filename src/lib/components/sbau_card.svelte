<script>
    import CardBodyImg from "./sbau_body_card.svelte";
    import sbau_mockup from "$lib/img/sbau_mockup.png";
  </script>
  
  <div class="rounded-3xl shadow-3xl relative overflow-hidden group card">
    <img
      src={sbau_mockup}
      placeholder="blur"
      alt="sbau_mockup"
      class="w-[25rem] object-cover object-center m-0"
    />
    <div
      class="absolute inset-0 from-stone-900/90 via-stone-900/60 to-stone-900/5 bg-gradient-to-t backdrop-blur-[2px] transition-all duration-300"
    ></div>
    <slot>
      <CardBodyImg
        class="absolute pb-0.5 px-4 md:pb-10 inset-x-0 bottom-2 flex flex-col justify-end size-full"
      />
    </slot>
  </div>
  
<style>
  .card {
    transition: all 0.3s;
    filter: grayscale(100%);
  }
  .card:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
</style>

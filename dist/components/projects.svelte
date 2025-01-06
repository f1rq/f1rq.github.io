<script>
    import BlurFade from "./BlurFade.svelte";
    import NexoCard from "./nexo_card.svelte";
    import SbauCard from "./sbau_card.svelte";
</script>

<div class="h-screen flex flex-col items-center justify-center">
    <BlurFade delay={0.10}>
    <h1 class="text-4xl mb-12 text-center">Projects I've worked on:</h1>
    </BlurFade>
    <BlurFade delay={0.10 * 2}>
    <div class="siatka grid gap-8 items-center justify-center">
            <NexoCard />
            <SbauCard />
    </BlurFade>
</div>

<style>
   .siatka {
    grid-template-columns: repeat(2, minmax(0, 1fr));
   }
   @media screen and (max-width: 540px)  {
    .siatka {
        grid-template-columns: none;
    }
   }
</style>
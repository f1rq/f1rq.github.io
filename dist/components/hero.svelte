<svelte:head>
  <link rel="stylesheet" href="node_modules/simple-icons-font/font/simple-icons.css">
</svelte:head>
<script>
  import BlurFade from "./BlurFade.svelte";
</script>
<style>
  .hero p {
    width: 40rem;
  }
  @media screen and (max-width: 540px)  {
    .hero p {
      width: 21rem;
    }
  }
  .hero i {
    transition: transform 0.2s;
  }
  .hero i:hover {
    transform: scale(1.15);
  }
</style>


<div class="hero min-h-screen text-right">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div>
        <BlurFade delay={0.10}>
        <h1 class="text-5xl">Hi, I'm <span class="text-accent">f1rq</span></h1>
        </BlurFade>
        <BlurFade delay={0.10 * 2}>
        <p class="py-6">
            I'm a programmer, passionate gamer and high school student from Poland. I'm currently focused on Svelte, Python (discord.py) and planning to learn C# or C++. I'm also learning Japanese and would like to learn Spanish in the future.
        </p>
        </BlurFade>
        <BlurFade delay={0.10 * 3}>
        <a href="https://github.com/f1rq" target="_blank" aria-label="github"><i class="fa-brands fa-github text-2xl"></i></a>
        <a href="https://buymeacoffee.com/f1rq" target="_blank" aria-label="coffe"><i class="fa-solid fa-mug-saucer text-2xl"></i></a>
        <a href="https://discord.gg/YU5yWFt7vB" target="_blank" aria-label="discord"><i class="fa-brands fa-discord text-2xl"></i></a>
        <a href="https://open.spotify.com/user/dcfv3p5qxwa0sfdimxgyqabri" target="_blank" aria-label="spotify"><i class="fa-brands fa-spotify text-2xl"></i></a>
        <a href="https://www.youtube.com/@_f1rq_" target="_blank" aria-label="youtube"><i class="fa-brands fa-youtube text-2xl"></i></a>
        <a href="https://myanimelist.net/profile/f1rq" target="_blank" aria-label="mal"><i class="si si-myanimelist text-2xl"></i></a>
        </BlurFade>
      </div>
    </div>
  </div>


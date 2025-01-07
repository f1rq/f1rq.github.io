<script>
    import MagicCard from "./MagicCard.svelte";
    import BlurFade from "./BlurFade.svelte";
    let isModalOpen = false;
    let isModalOpen2 = false;
</script>

<div class="container flex flex-col min-h-screen justify-center items-center place-self-center">
  <BlurFade delay={0.10}>
  <h1 class="text-5xl mb-4">Contact me</h1>
  </BlurFade>
  <BlurFade delay={0.10 * 2}>
  <button on:click={()=>isModalOpen = true} class="mr-8 w-[13.5rem]">
    <MagicCard class="m-4 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl group hover:border-[#7289DAAA] transition-all duration-300" gradientColor="#425082" gradientSize={200}>
      <div class="group-hover:text-[#7289DA] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold">
        <i class="fa-brands fa-discord"></i>
        Discord
      </div>
    </MagicCard></button>
  </BlurFade>
  <BlurFade delay={0.10 * 3}>
    <a href="https://t.me/f1rqq" target="_blank">
      <MagicCard class="mr-8 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl group hover:border-[#24A1DEAA] transition-all duration-300" gradientColor="#0b5980" gradientSize={200}>
      <div class="group-hover:text-[#24A1DE] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold">
        <i class="fa-brands fa-telegram text-3xl"></i>
        Telegram
      </div>
    </MagicCard></a>
  </BlurFade>
  <BlurFade delay={0.10 * 4}>
    <button on:click={()=>isModalOpen2 = true} class="mr-8 w-[13.5rem]">
      <MagicCard class="m-4 cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-3xl group hover:border-[#bf0404AA] transition-all duration-300" gradientColor="#5e0000" gradientSize={200}>
        <div class="group-hover:text-[#bf0404] transition-all duration-500 flex gap-1.5 justify-center items-center font-semibold">
          <i class="fa-solid fa-envelope"></i>
          E-Mail
        </div>
      </MagicCard></button>
    </BlurFade>
</div>


  <dialog class="modal modal-bottom sm:modal-middle" class:modal-open={isModalOpen}>
    <div class="modal-box">
      <h3 class="text-lg font-bold">Discord</h3>
      <p class="py-4">To contact me via Discord, add me: <span class="text-[#7289DA]">f1rq</span></p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn" on:click={()=>isModalOpen = false}>Close</button>
        </form>
      </div>
    </div>
  </dialog>

  <dialog class="modal modal-bottom sm:modal-middle" class:modal-open={isModalOpen2}>
    <div class="modal-box">
      <h3 class="text-lg font-bold">E-Mail</h3>
      <p class="py-4">To contact me via E-Mail, send message at:<br>
        <a href="mailto:contact@f1rq.ovh"><span class="text-[#bf0404] hover:text-[#ff0303] transition-colors">contact@f1rq.ovh</span></a></p>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn" on:click={()=>isModalOpen2 = false}>Close</button>
        </form>
      </div>
    </div>
  </dialog>
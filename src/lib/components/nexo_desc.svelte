<script>
    import BlurFade from "./BlurFade.svelte";
    import nexo_screenshot from "$lib/img/nexo_screenshot.png"
</script>

<BlurFade delay={0.10}>
    <div class="cheight1 flex flex-col items-center justify-center">
        <h1 class="ctext1 text-4xl mb-8 text-center">Nexo bot for Discord</h1>
        <BlurFade delay={0.10 * 2}>
            <div class="siatka grid gap-8">
                <div class="mwp  ">
                    <div class=" flex justify-center px-4 py-4">
                        <img src={nexo_screenshot} alt="nexo bot screenshot" class="w-[32rem] rounded-2xl shadow-2xl border">
                    </div>
                </div>

            <div class="mwm">
                <div class="flex justify-center px-4 py-4">
                    <img src={nexo_screenshot} alt="nexo bot screenshot" class="rounded-2xl shadow-2xl border">
                </div>
            </div> 

                <div class="flex flex-col justify-center items-center sm:block mb-24">
                    <p class="ctext2 max-w-96 text-xl">My own personal bot for Discord, written in Python using the discord.py library. It's purpose is to use on my own <a href="https://discord.gg/YU5yWFt7vB" class="text-[#7289DA] hover:text-[#425082] transition-colors">Discord server</a>, and it has or will have a lot of features, such as: moderation, fun, and more. It's still under development, but it's already usable.
                        It contains commands such as: </p>
                        <ul class="list-disc list-inside my-2 ml-4">
                            <li>/mute</li>
                            <li>/warn</li>
                            <li>/warnlist</li>
                            <li>/clear</li>
                            <li>/ping</li>
                            <li>/kick</li>
                            <li>/ban</li>
                        </ul>
                    <p class="ctext2 max-w-96 text-xl">and much more, also I'm still adding new features. Suggestions are welcome.</p>
                </div>
            </div>
        </BlurFade>
    </div>
</BlurFade>

<style>
   .siatka {
    grid-template-columns: repeat(2, minmax(0, 1fr));
   }

   @media screen and (min-width: 540px)  {
    .cheight1 {
        height: 100vh;
    }
    .mwm {
        display: none;
    }
   }

   @media screen and (max-width: 540px)  {
    .mwp {
        display: none;
    }
    .siatka {
        grid-template-columns: none;
        gap: 1rem;
    }
    .ctext1 {
        margin-top: 3rem;
    }
    .ctext2 {
        text-align: center;
    }
   }
</style>
<script>
    import BlurFade from "./BlurFade.svelte";
    import MagicCard from "./skillsMagicCard.svelte";
    import svelte_logo from "$lib/img/Svelte_Logo.svg";
    import python_logo from "$lib/img/Python_Logo.svg";
    import tailwind_logo from "$lib/img/Tailwind_Logo.svg";
    import Html_Logo from "$lib/img/Html_Logo.svg";
    import CSS_Logo from "$lib/img/CSS_Logo.svg";
    import JS_Logo from "$lib/img/Javascript_Logo.svg";
    import Mysql_Logo from "$lib/img/Mysql_Logo.svg";
    import discordpy_logo from "$lib/img/discordpy_logo.png";
</script>

<div class="h-screen flex flex-col items-center justify-center">
    <BlurFade delay={0.10}>
    <h1 class="text-4xl mb-12 text-center">Skills or technologies I'm familiar with:</h1>
    </BlurFade>
    <BlurFade delay={0.10 * 2}>
    <div class="gapphone grid grid-cols-4 gap-4">
        <a href="https://svelte.dev" target="_blank">
            <MagicCard
            class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ff770094] transition-all duration-300"
            gradientColor="#4D2506"
            gradientSize={100}>
            <div
            class="transition-all duration-500 flex gap-1.5 justify-center items-center">
            <img src={svelte_logo} alt="svelte_logo" class="size-12" />
            </div>
            </MagicCard>
        </a>

        <a href="https://tailwindcss.com/" target="_blank">
            <MagicCard
            class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#a5f3fcaa] transition-all duration-300"
            gradientColor="#007c91"
            gradientSize={100}>
            <div
            class="transition-all duration-500 flex gap-1.5 justify-center items-center">
            <img src={tailwind_logo} alt="tailwind_logo" class="size-12" />
            </div>
            </MagicCard>
        </a>

        <a href="https://www.python.org/" target="_blank">
            <MagicCard
                class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ffde57aa] transition-all duration-300"
                gradientColor="#8a7830"
                gradientSize={100}>
                <div
                class="transition-all duration-500 flex gap-1.5 justify-center items-center">
                <img src={python_logo} alt="python_logo" class="size-12" />
                </div>
            </MagicCard>
        </a>

        <a href="https://discordpy.readthedocs.io/en/stable/" target="_blank">
            <MagicCard
                class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ffde57aa] transition-all duration-300"
                gradientColor="#8a7830"
                gradientSize={100}>
                <div
                class="transition-all duration-500 flex gap-1.5 justify-center items-center">
                <img src={discordpy_logo} alt="discordpy_logo" class="size-12" />
                </div>
            </MagicCard>
        </a>
        
        
        <a href="https://www.mysql.com/" target="_blank">
            <MagicCard
                class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#00758F] transition-all duration-300"
                gradientColor="#01414f"
                gradientSize={100}>
                <div
                class="transition-all duration-500 flex gap-1.5 justify-center items-center">
                <img src={Mysql_Logo} alt="mysql_logo" class="size-12" />
                </div>
            </MagicCard>
        </a>

        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
            <MagicCard
                class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#ff770094] transition-all duration-300"
                gradientColor="#4D2506"
                gradientSize={100}>
                <div
                class="transition-all duration-500 flex gap-1.5 justify-center items-center">
                <img src={Html_Logo} alt="html_logo" class="size-12" />
                </div>
            </MagicCard>
        </a>

        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
            <MagicCard
                class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#264de4] transition-all duration-300"
                gradientColor="#13297d"
                gradientSize={100}>
                <div
                class="transition-all duration-500 flex gap-1.5 justify-center items-center">
                <img src={CSS_Logo} alt="css_logo" class="size-12" />
                </div>
            </MagicCard>
        </a>

        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
            <MagicCard
                class="cursor-pointer shadow-2xl whitespace-nowrap group hover:border-[#F0DB4F] transition-all duration-300"
                gradientColor="#80742a"
                gradientSize={100}>
                <div
                class="transition-all duration-500 flex gap-1.5 justify-center items-center">
                <img src={JS_Logo} alt="javascript_logo" class="size-12" />
                </div>
            </MagicCard>
        </a>

        
    </div>
</BlurFade>
</div>

<style>
    @media screen and (max-width: 540px)  {
        .gapphone {
            gap: 0.5rem;
        }
    }

/*    a {
        filter: grayscale(100%);
        transition: all 0.2s;
    }

    a:hover {
        filter: grayscale(0%);
    }
*/
</style>
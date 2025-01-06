<script>
  import { cn } from "../utils";

  let className = "";
  export { className as class };
  let card = {
    title: "Nexo bot for Discord",
    desc: "My own personal bot for Discord, written in Python using the discord.py library.",

  };
</script>

<div class={cn("px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left", className)}>
  <h3 class="text-lg font-semibold tracking-tighter mt-3 mb-1">
    {card.title}
  </h3>
  <p class="text-sm leading-5">{card.desc}</p>
</div>

<!--
It's purpose is to use on my own server (linked on homepage), and it has or will have a lot of features, such as: moderation, fun, and more. It's still under development, but it's already usable.
-->
<script>
    import { cn } from "../utils";
  
    let className = "";
    export { className as class };
    let card = {
      title: "Website for my uncle's business",
      desc: "A website for my uncle's business. It's purpose is to be like a business card, but on the internet.",
  
    };
  </script>
  
  <div class={cn("px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left", className)}>
    <h3 class="text-lg font-semibold tracking-tighter mt-3 mb-1">
      {card.title}
    </h3>
    <p class="text-sm leading-5">{card.desc}</p>
  </div>
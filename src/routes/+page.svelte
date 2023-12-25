<script>
    import Hero from "$lib/components/Hero.svelte";
    import CardsContact from "$lib/components/cards-contact.svelte";
    import CardsFindme from "$lib/components/cards-findme.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "../lib/components/footer.svelte";
</script>

<NavBar />

<section id="home">
    <Hero />
</section>

<!--<section id="findme">
    <div class="hero min-h-screen">
        <CardsFindme />
    </div>
</section>
-->

<section id="contact">
    <div class="hero min-h-screen">
        <CardsContact />
    </div>
</section>


<Footer />
<script>
    import Hero from "$lib/components/Hero.svelte";
    import CardsContact from "$lib/components/cards-contact.svelte";
    import NavBar from "$lib/components/NavBar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import Hobbys from "$lib/components/hobbys.svelte";
</script>

<NavBar />

<section id="home">
    <Hero />
</section>

<section id="hobbys">
    <div class="hero min-h-screen">
        <Hobbys />
    </div>
</section>


<section id="contact">
    <div class="hero min-h-screen">
        <CardsContact />
    </div>
</section>


<Footer />
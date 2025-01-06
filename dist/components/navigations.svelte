<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

<style>
    a {
        transition: background-color 0.2s;
        border-radius: 20%;
        i {
            transition: transform 0.2s;

        }
        
    }
    a:hover {
        i {
            transform: scale(1.15);
        }
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>

<div class="btm-nav max-w-[16rem] max-h-[4rem] place-self-center mb-3 rounded-lg text-xl shadow-2xl bg-primary ">
    <a aria-label="Home" href="/">
        <i class="fa-solid fa-house"></i>
    </a>
    <a aria-label="Contact" href="/contact">
        <i class="fa-solid fa-address-book"></i>
    </a>
    <a aria-label="Skills" href="/skills">
        <i class="fa-solid fa-tools"></i>
    </a>
    <a aria-label="Projects" href="/projects">
        <i class="fa-solid fa-suitcase"></i>
    </a>
</div>
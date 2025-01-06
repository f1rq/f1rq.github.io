<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import { base } from '$app/paths';
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
    <a aria-label="Home" href="{base}/">
        <i class="fa-solid fa-house"></i>
    </a>
    <a aria-label="Contact" href="{base}/contact">
        <i class="fa-solid fa-address-book"></i>
    </a>
    <a aria-label="Skills" href="{base}/skills">
        <i class="fa-solid fa-tools"></i>
    </a>
    <a aria-label="Projects" href="{base}/projects">
        <i class="fa-solid fa-suitcase"></i>
    </a>
</div>
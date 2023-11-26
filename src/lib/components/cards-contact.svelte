<script>
  import { copy } from 'svelte-copy';
  import Saos from 'saos';
</script>

<style>
  .shadow-effect:hover {
    box-shadow: -6px 6px 0 0 #1f2c47;
  }
</style>

<div class="flex flex-wrap max-w-[85vw]">
<Saos animation={"swing-in-top-fwd 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
<div class="card w-96 bg-base-100 shadow-xl mx-5 mt-5 mb-5">
    <div class="card-body">
      <h2 class="card-title text-3xl font-bold">E-Mail</h2>
      <p>If you want to contact me via E-Mail, send it to <span class="text-accent">f1rq@duck.com</span></p>
      <div class="card-actions justify-end">
        <button use:copy={'f1rq@duck.com'} class="btn btn-primary shadow-effect">click to copy</button>
      </div>
    </div>
</div>
</Saos>
<Saos animation={"swing-in-top-fwd 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
<div class="card w-96 bg-base-100 shadow-xl mx-5 mt-5 mb-5">
  <div class="card-body">
    <h2 class="card-title text-3xl font-bold">Matrix</h2>
    <p>If you want to contact me via Matrix, send message to <span class="text-accent">@f1rq@matrix.com</span></p>
    <div class="card-actions justify-end">
      <button use:copy={'@f1rq@matrix.com'} class="btn btn-primary shadow-effect">click to copy</button>
    </div>
  </div>
</div>
</Saos>
</div>
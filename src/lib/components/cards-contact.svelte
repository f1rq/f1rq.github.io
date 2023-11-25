<script>
  import { copy } from 'svelte-copy';
  import Saos from 'saos';
</script>

<div class="grid gap-4 grid-cols-2">
<Saos animation={"slide-in-blurred-top 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
<div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-3xl">E-Mail</h2>
      <p>If you want to contact me via E-Mail, send it to <span class="text-accent">f1rq@duck.com</span></p>
      <div class="card-actions justify-end">
        <button use:copy={'f1rq@duck.com'} class="btn btn-primary">click to copy</button>
      </div>
    </div>
</div>
</Saos>
<Saos animation={"slide-in-blurred-top 1s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
<div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-3xl">Matrix</h2>
    <p>If you want to contact me via Matrix, send message to <span class="text-accent">@f1rq@matrix.com</span></p>
    <div class="card-actions justify-end">
      <button use:copy={'@f1rq@matrix.com'} class="btn btn-primary">click to copy</button>
    </div>
  </div>
</div>
</Saos>
</div>
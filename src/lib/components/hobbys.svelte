<script>
    import guitarimg from "$lib/img/1guitar.jpg";
    import codingimg from "$lib/img/coding.jpg";
    import gamingimg from "$lib/img/gaming.jpg";
    import Saos from "saos";
</script>

<div class="flex flex-wrap justify-center">

    <Saos animation={"swing-in-top-fwd 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>  
    <div class="card w-96 bg-base-100 shadow-xl mx-5 mt-[10vh] mb-5 h-[67.5vh]">
      <figure><img src="{gamingimg}" alt="gamingimg"/></figure>
      <div class="card-body">
        <h2 class="card-title">Gaming</h2>
        <p>There's not much to say. I just enjoy gaming like typical teenager.</p>
      </div>
    </div>
  </Saos>


<Saos animation={"swing-in-top-fwd 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>  
  <div class="card w-96 bg-base-100 shadow-xl mx-5 mt-5 mb-5">
    <figure><img src="{guitarimg}" alt="guitarimg"/></figure>
    <div class="card-body">
      <h2 class="card-title">Music & playing guitar</h2>
      <p>I can't live without music. I listen mainly to rock and different subgenres of metal. My favorite bands are Linkin Park, Metallica, Rammstein etc. That's why I decided to start playing guitar. I bought my first guitar in April 2023. I'm not really good at it but I like just playing. It makes me kinda happy. I currently have Cort CR100 and Marshall MG15G but I'm using Focusrite Solo 3rd gen. and FL Studio with Amplitube as an amplifier.</p>
    </div>
  </div>
</Saos>

<Saos animation={"swing-in-top-fwd 1.0s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>  
    <div class="card w-96 bg-base-100 shadow-xl mx-5 mt-[10vh] mb-5">
      <figure><img src="{codingimg}" alt="codingimg"/></figure>
      <div class="card-body">
        <h2 class="card-title">Coding</h2>
        <p>This is why that website even exists. I started coding some simple things in something like batch or vbs when I somewhere between 2nd or 3rd class in primary school. Later, I started with web-dev. I of course learned HTML5 and CSS3. I'm trying to understand something from JavaScript because I don't really know it. Now I'm learning coding in high school. I recently learned Svelte by myself and I love it. I prefer web-dev from front-end site.</p>
      </div>
    </div>
  </Saos>

</div>
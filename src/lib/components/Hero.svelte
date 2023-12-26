<script>
  import Saos from "saos";
  import GithubLogo from "$lib/img/github-mark.svg";
  import XLogo from "$lib/img/xlogo.svg";
  import IGLogo from "$lib/img/iglogo.svg";
  import YTLogo from "$lib/img/ytlogo.svg";
  import Spotifylogo from "$lib/img/spotifylogo.svg";
  import steamLogo from "$lib/img/steamlogo.svg";
  import malLogo from "$lib/img/mallogo.svg";
</script>

<style>
  .shadow-effect:hover {
    box-shadow: -6px 6px 0 0 #1f2c47;
  }
  .shadow-effect2:hover {
    box-shadow: -4px 4px 0 0 #182238;
  }
  .badge-github {
    background-color: #0e0d0d;
  }
  .badge-twitter {
    background-color: #363636;
  }
  .badge-ig {
    background-image: linear-gradient(to right bottom, #515BD4, #DD2A7B);
  }
  .badge-yt {
    background-color: #a30000;
  }
  .badge-spotify {
    background-color: #1baf4f;
  }
  .badge-steam {
    background-image: linear-gradient(to right bottom, #171a21, #2a475e);
  }
  .badge-mal {
    background-color: #254286;
  }


  .badge-github:hover {
    background-color: #1c1a1a;
  }
  .badge-twitter:hover {
    background-color: #474747;
  }
  .badge-ig:hover {
    background-image: linear-gradient(to right bottom, #5965eb, #f22f87);
  }
  .badge-yt:hover {
    background-color: #c60000;
  }
  .badge-spotify:hover {
    background-color: #20cf5e;
  }
  .badge-steam:hover {
    background-image: linear-gradient(to right bottom, #1e222b, #31526d);
  }
  .badge-mal:hover {
    background-color: #2e53a8;
  }
</style>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <Saos animation={"swing-in-top-fwd 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <h1 class="text-5xl font-bold">Hi, I'm <span class="text-accent">f1rq</span></h1>
      <p class="py-6">I'm a beginner programmer, passionate gamer and high school student from Poland.</p>
      </Saos>
      <Saos animation={"swing-in-top-fwd 0.8s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
      <div class="space-x-5">
      <a class="btn btn-primary shadow-effect w-[20vh]" href="#contact">Contact me</a>
      <a class="btn btn-primary shadow-effect w-[20vh]" href="#hobbys">My hobbys</a>
    </div> 
    </Saos>
    <div class="collapse collapse-arrow bg-base-200 mt-8">
      <input type="checkbox" /> 
      <div class="collapse-title text-xl font-medium bg-primary shadow-effect">
        Socials
      </div>
          <div class="collapse-content bg-primary"> 
                  <a href="https://github.com/f1rq" class="badge badge-github gap-2 shadow-effect2 m-1">
                    <img src="{GithubLogo}" alt="githublogo" width="15px" height="15px">
                    Github
                  </a>
                  <a href="https://x.com/_f1rq_" class="badge badge-twitter gap-2 shadow-effect2 m-1">
                    <img src="{XLogo}" alt="xlogo" width="15px" height="15px">
                    Twitter
                  </a>
                  <a href="https://www.instagram.com/_f1rq_/" class="badge badge-ig gap-2 shadow-effect2 m-1">
                    <img src="{IGLogo}" alt="IGlogo" width="15px" height="15px">
                    Instagram
                  </a>
                  <a href="https://youtube.com/@_f1rq_" class="badge badge-yt gap-2 shadow-effect2 m-1">
                    <img src="{YTLogo}" alt="YTlogo" width="15px" height="15px">
                    YouTube
                  </a>
                  <a href="https://open.spotify.com/user/dcfv3p5qxwa0sfdimxgyqabri" class="badge badge-spotify gap-2 shadow-effect2 m-1">
                    <img src="{Spotifylogo}" alt="Spotifylogo" width="15px" height="15px">
                    Spotify
                  </a>
                  <a href="https://steamcommunity.com/id/f1rq/" class="badge badge-steam gap-2 shadow-effect2 m-1">
                    <img src="{steamLogo}" alt="steamlogo" width="15px" height="15px">
                    Steam
                  </a>
                  <a href="https://myanimelist.net/profile/f1rq" class="badge badge-mal gap-2 shadow-effect2 m-1">
                    <img src="{malLogo}" alt="mallogo" width="15px" height="15px">
                    MyAnimeList
                  </a>
          </div>
    </div>
    <p class="mt-5 text-xs">I will fix website on mobile devices soon.</p>  
    </div>
  </div>
</div>

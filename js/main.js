(() => {
  // variables & constants
  const iconImage = document.querySelectorAll(".icon img"),
    dropZones = document.querySelectorAll(".dropItem"),
    loading = document.querySelectorAll(".loading"),
    vibes = document.querySelectorAll(".vibeCheck .vibe"),
    videoBox = document.querySelector(".mainMusic"),
    allAudio = document.querySelectorAll("audio"),
    masterStop = document.querySelector("#masterStop"),
    stop = document.querySelectorAll(".stop");

  //Functions

  //Loop Contnually playing
  setInterval(playTrack, 10666);

  function vibeStart() {
    let tracks = this.parentNode.querySelectorAll("audio");
    tracks.forEach(track => track.parentNode.removeChild(track));
    console.log(tracks);

    let currentVibe = this.id;

    videoBox.classList.remove("squiggle", "rain", "sun");
    videoBox.classList.add(currentVibe);

    let audio = document.createElement("audio");
    this.appendChild(audio);

    let audioSource = `audio/${currentVibe}.mp3`;
    audio.src = audioSource;
    audio.play();
  }

  function startDrag(event) {
    console.log("started a drag");
    event.dataTransfer.setData("text/plain", this.id);
    console.log();

    /* takes away musi when you start drag but may be too buggy
		let audio = event.target.parentNode.querySelector('audio');
			if (event.target.parentNode.children.length > 1)
				{audio.parentNode.removeChild(audio)};*/
  }

  function allowDragOver(event) {
    event.preventDefault();
    console.log("you drug me");
  }

  function songDrop(event) {
    event.preventDefault();
    if (this.children.length > 2) {
      return;
    }
    console.log("you dropped me");
    let currentIcon = event.dataTransfer.getData("text/plain");
    let audio = document.createElement("audio");
    console.log(event.target);

    event.target.classList.add("loading");
    event.target.appendChild(audio);
    event.target.appendChild(document.querySelector(`#${currentIcon}`));

    let audioSource = `audio/${currentIcon}.mp3`;
    audio.src = audioSource;
  }

  function playTrack() {
    dropZones.forEach(zone => zone.classList.remove("loading"));
    let songs = document.querySelectorAll("audio");
    songs.forEach((track, index) => {
      songs[index].currentTime = 0;
      songs[index].play();
    });
  }

  function stopTrack() {
    let track = this.parentNode.querySelector("audio");
    track.parentNode.removeChild(track);

    let icon = this.parentNode.querySelector("img").id;
    console.log(icon);

    let iconBox = document.querySelectorAll(".icon");
    iconBox.forEach(box => {
      if (box.children.length < 1) {
        box.appendChild(document.querySelector(`#${icon}`));
        let trackBox = this.parentNode;
        trackBox.classList.remove("loading");
      }
    });
  }

  function stopAll() {
    let tracks = document.querySelectorAll("audio");
    tracks.forEach(track => track.parentNode.removeChild(track));
    videoBox.classList.remove("squiggle", "rain", "sun");
  }

  // Event handlers

  iconImage.forEach(icon => icon.addEventListener("dragstart", startDrag));

  dropZones.forEach(zone => zone.addEventListener("dragover", allowDragOver));

  dropZones.forEach(zone => zone.addEventListener("drop", songDrop)); //

  vibes.forEach(vibe => vibe.addEventListener("click", vibeStart)); //

  stop.forEach(x => x.addEventListener("click", stopTrack));

  masterStop.addEventListener("click", stopAll);
})();

// creates audio element and plays until it ends
//then removes element

//            let audio = document.createElement('audio');
//            audio.src = "audio/explode.mp3";
//            audio.addEventListener("ended", function(){
//              document.body.removeChild(audio);
//           });
//            document.body.appendChild(audio);
//            audio.play();

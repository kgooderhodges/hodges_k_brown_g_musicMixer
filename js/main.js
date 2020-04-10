(() => {
  // variables & constants
  const iconImage = document.querySelectorAll(".gallery .icon img"),
    dropZones = document.querySelectorAll(".dropItem"),
    vibes = document.querySelectorAll(".vibeCheck .vibe"),
    videoBox = document.querySelector(".mainMusic"),
    masterStop = document.querySelector("#masterStop"),
    stop = document.querySelectorAll(".stop");

  //Functions

  //Loop Contnually playing
  setInterval(playTrack, 10666);

  function playTrack() {
    dropZones.forEach(zone => zone.classList.remove("loading"));    
    let songs = document.querySelectorAll("audio");
    songs.forEach((track, index) => {
      track.currentTime = 0;
      songs[index].play();
    });
  }

  function vibeStart() {
    let tracks = this.parentNode.querySelectorAll("audio");
    tracks.forEach(track => track.parentNode.removeChild(track));
    console.log(tracks);

    let currentVibe = this.id;
    videoBox.classList.remove("squiggle", "rain", "sun");
    videoBox.classList.add(currentVibe);

    let audio = document.createElement("audio");
    this.appendChild(audio);

    audio.src = `audio/${currentVibe}.mp3`;
    audio.play();
  }

  function startDrag(event) {
    console.log('you picked',(this.id))
    event.dataTransfer.setData("text/plain", this.id);
  }
  function allowDragOver(event) {
    event.preventDefault();
  }
  function songDrop(event) {
    event.preventDefault();
    if (this.children.length > 2) {
      return;
    }
    console.log("Analysing Choice");
    
    let currentIcon = event.dataTransfer.getData("text/plain");
    let audio = document.createElement("audio");

    event.target.classList.add("loading");
    event.target.appendChild(audio);
    event.target.appendChild(document.querySelector(`#${currentIcon}`));
    audio.src = `audio/${currentIcon}.mp3`;
    audio.load()

   this.querySelector("img").draggable = false;
  }

  function stopTrack() {
    let track = this.parentNode.querySelector("audio");
    track.parentNode.removeChild(track);

    let trackBox = this.parentNode;
      trackBox.classList.remove("loading");

    let icon = this.parentNode.querySelector("img");
    icon.draggable = true;
    console.log((icon.id), 'stopped');

    let iconBox = document.querySelectorAll(".gallery .icon");
      iconBox[icon.dataset.index].appendChild(icon);
    
  }

  function stopAll() {    
    videoBox.classList.remove(1);
    //"squiggle", "rain", "sun"
    let tracks = document.querySelectorAll("audio");
    tracks.forEach(track => {
      track.parentNode.classList.remove("loading");
      track.parentNode.removeChild(track);
    });  
    
    let iconBoxes = document.querySelectorAll(".gallery .icon");
	  let currentIcons = document.querySelectorAll(".dropItem img");
	  currentIcons.forEach(icon => {
      icon.draggable = true;
      iconBoxes[icon.dataset.index].appendChild(icon);
    });    
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

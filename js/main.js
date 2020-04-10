(() => {
  //! variables & constants
  const iconImage = document.querySelectorAll(".gallery .icon img"),
    dropZones = document.querySelectorAll(".dropItem"),
    vibes = document.querySelectorAll(".vibeCheck .vibe"),
    videoBox = document.querySelector(".mainMusic"),
    masterStop = document.querySelector("#masterStop"),
    stop = document.querySelectorAll(".stop");


// !Loop Contnually playing
  setInterval(playTrack, 10666);

  function playTrack() {
    // *remove loading screen
    dropZones.forEach(zone => zone.classList.remove("loading"));    
    
    // *reset all songs to start and play
    let songs = document.querySelectorAll("audio");
    songs.forEach((track, index) => {
      track.currentTime = 0;
      songs[index].play();
    });
  }
  

// !Click on the Vibes at the top, play background ambience, and initiate video  
  function vibeStart() {
  // *remove old the audio
    let tracks = this.parentNode.querySelectorAll("audio");
    tracks.forEach(track => track.parentNode.removeChild(track));
  
    // *switch video
    let currentVibe = this.id;
    videoBox.classList.remove("squiggle", "rain", "sun");
    videoBox.classList.add(currentVibe);

    // *switch new audio and play
    let audio = document.createElement("audio");
    this.appendChild(audio);
    audio.src = `audio/${currentVibe}.mp3`;
    audio.play();
  }


  // ! drag and drop Funtions 
  function startDrag(event) {
    console.log('you picked',(this.id))
    event.dataTransfer.setData("text/plain", this.id);
  }

  function allowDragOver(event) {
    event.preventDefault();
  }

  function songDrop(event) {
    event.preventDefault(); // *FireFox Fix
    
    // *only allow one song per box
    if (this.children.length > 2) {
      return;
    }
    console.log("Analysing Choice");
    
    // *create audio tag and src
    let currentIcon = event.dataTransfer.getData("text/plain");
    let audio = document.createElement("audio");
    event.target.classList.add("loading");
    event.target.appendChild(audio);
    event.target.appendChild(document.querySelector(`#${currentIcon}`));
    audio.src = `audio/${currentIcon}.mp3`;
    audio.load()

    // *disallow drags
    this.querySelector("img").draggable = false;
  }


// !Stop this specific Track  
  function stopTrack() {
    // *remove the audio
    let track = this.parentNode.querySelector("audio");
    track.parentNode.removeChild(track);
    
    // *remove loading screen
    let trackBox = this.parentNode;
      trackBox.classList.remove("loading");
    
      // *make draggable again
    let icon = this.parentNode.querySelector("img");
    icon.draggable = true;
    
    console.log((icon.id), 'stopped');

    // *return to original container
    let iconBox = document.querySelectorAll(".gallery .icon");
      iconBox[icon.dataset.index].appendChild(icon);
  }

// !Stop all audio and   
  function stopAll() {
    // *Stop video player    
    videoBox.classList.remove(1);
    
    // *remove all audio tags   
    let tracks = document.querySelectorAll("audio");
    tracks.forEach(track => {
      track.parentNode.classList.remove("loading");
      track.parentNode.removeChild(track);
    });  
    
    // *return all original container
    let iconBoxes = document.querySelectorAll(".gallery .icon");
	  let currentIcons = document.querySelectorAll(".dropItem img");
	  currentIcons.forEach(icon => {
      icon.draggable = true;
      iconBoxes[icon.dataset.index].appendChild(icon);
    });
    console.log("All Tracks Stopped");    
  }

  // !Event handlers
  vibes.forEach(vibe => vibe.addEventListener("click", vibeStart)); 

  iconImage.forEach(icon => icon.addEventListener("dragstart", startDrag));
  dropZones.forEach(zone => zone.addEventListener("dragover", allowDragOver));
  dropZones.forEach(zone => zone.addEventListener("drop", songDrop)); 

  stop.forEach(x => x.addEventListener("click", stopTrack));
  masterStop.addEventListener("click", stopAll);
})();

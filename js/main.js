(() => {

	// variables & constants
	const 
		iconBox = document.querySelectorAll(".icon"),	
		iconImage = document.querySelectorAll(".icon img"),
		dropZones = document.querySelectorAll('.dropItem'),
		loading = document.querySelectorAll('.loading'),
		vibes = document.querySelectorAll('.vibeCheck .vibe'),
		sqiggleVibe = document.querySelector('#squiggle'),
		rainVibe = document.querySelector('#rain'),
		sunVibe = document.querySelector('#sun'),
		videoBox = document.querySelector('.mainMusic'),
		allAudio = document.querySelectorAll("audio");

//Functions

//Loop Contnually playing
	setInterval(playTrack, 10666);


	sqiggleVibe.addEventListener('click', function(){
		videoBox.classList.add("squiggle");
	});


	function vibeStart() {
		
		let oldAudio = document.querySelector('.vibe audio');
		console.log(oldAudio);
			this.removeChild(oldAudio);

		let currentVibe = this.id;

		videoBox.classList.add(currentVibe);		
				
		let audio = document.createElement('audio');	
		this.appendChild(audio);
		
		let audioSource = `audio/${currentVibe}.mp3`;	
			audio.src = audioSource;
			audio.play();	
	};

			
	function startDrag(event) {	
		console.log('started a drag');
		event.dataTransfer.setData("text/plain", this.id);
		console.log(this.id);
	};


	function allowDragOver(event) {
		event.preventDefault();
		console.log('you drug me');
	};


	function songDrop(event) {
		if (this.children.length > 2){return}
			console.log('you dropped me');
			let currentIcon = event.dataTransfer.getData("text/plain");	
			let audio = document.createElement('audio');
			
/*			let p = document.querySelector('.dropItem p');
			p.classList.add('loading');*/

			event.target.classList.add('loading');		
			
			event.target.appendChild(audio);
			event.target.appendChild(document.querySelector(`#${currentIcon}`));
			
			let audioSource = `audio/${currentIcon}.mp3`;	
			audio.src = audioSource;		
	};


	function playTrack() {
		dropZones.forEach(zone => zone.classList.remove('loading'));
		let songs = document.querySelectorAll('audio'); 
		songs.forEach((track, index) => {
			songs[index].currentTime = 0;
			songs[index].play();
		});
	};

	function StopTrack() {

	}



// Event handlers
	

	iconImage.forEach(icon => icon.addEventListener('dragstart', startDrag));

	dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

	dropZones.forEach(zone => zone.addEventListener('drop', songDrop));//

	vibes.forEach(vibe => vibe.addEventListener('click', vibeStart));//


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
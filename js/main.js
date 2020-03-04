(() => {

	// variables & constants
	const colors = ["#211830", "#FF71CE", "#FFFB96", "#05FFA1", "#9D0FFD", "#22EAE0"],
	iconStyle = document.querySelectorAll(".cls-1"),
	colorPicker = document.querySelectorAll(".colorPicker div"),
	
	iconBox = document.querySelectorAll(".icon"),
	iconImage = document.querySelectorAll(".icon img"),
	dropZones = document.querySelectorAll('.dropItem')


//Functions

	// color Changer
	const changeColor = (index) => { iconStyle.forEach((icon) => {
		icon.style.fill = colors[index]; });
	};

	function startDrag(event) {
		console.log('started a drag');
		event.dataTransfer.setData("text/plain", this.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('you drug me');
	}

	function allowDrop(event) {
		if (!this.hasChildNodes()) {
			console.log('you dropped me');
			let currentIcon = event.dataTransfer.getData("text/plain");
			event.target.appendChild(document.querySelector(`#${currentIcon}`));
		}
	}



// Event handlers
	
	// color Changer
	colorPicker.forEach((pick, index) => {
		pick.addEventListener('click', function () {
			changeColor(index);
		});
	});

	iconImage.forEach(icon => icon.addEventListener('dragstart', startDrag));

	dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));//
 
})();



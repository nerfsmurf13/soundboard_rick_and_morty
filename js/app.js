let test = "Javascript Loaded";
console.log(test);

soundClips = [];
const dir = "../sounds/";

const sound = new Audio();
var el = document.getElementById("oh-man");

el.addEventListener("click", playSound);

function playSound(clip) {
	console.log("sound playing");
	sound.src = "../sounds/" + clip;
	sound.play();
}

const charactors = [
	(rick = {
		name: "Rick",
		class: "rick",
		img: "../images/rick.png",
		clips: {
			0: {
				title: "Tiny Rick",
				class: "tiny-rick",
				filename: "tiny_rick.wav",
			},
			1: {
				title: "Wubba Lubba Dub Dub",
				class: "wldd",
				filename: "wubba_lubba_dub_dub.wav",
			},
		},
	}),
	(morty = {
		name: "Morty",
		class: "morty",
		img: "../images/morty.jpg",
		clips: {
			0: {
				title: "Oh Man",
				class: "oh-man",
				filename: "oh_man.wav",
			},
		},
	}),
	(meeseeks = {
		name: "Mr. Meeseeks",
		class: "meeseeks",
		img: "../images/meeseeks.png",
		clips: {
			0: {
				title: "Oh Yea Can Do",
				class: "can-do",
				filename: "o_yeah_can_do.wav",
			},
			1: {
				title: "Hi, I'm Mr. Meeseeks",
				class: "mr-meeseeks",
				filename: "Hi_I'm_mr_meeseeks_look_at_me.wav",
			},
		},
	}),
];
const char_num = charactors.length;

//Works with click listener to compare clicked element vs sound
const audioGet = (arr, val) => {
	for (x = 0; x < char_num; x++) {
		console.log("Checking " + charactors[x].name);
		for (y = 0; y < Object.keys(arr[x].clips).length; y++) {
			console.log("Checking " + arr[x].clips[y].class);
			if (Object.values(arr[x].clips[y]).includes(val)) {
				console.log("Match Found " + arr[x].clips[y].class + " vs " + val);
				console.log(y, x);
				return {
					char: x,
					clip: y,
				};
			}
		}
	}
};

const audioCheck = (arr, val) => {
	var values = audioGet(arr, val);
	filename = arr[values.char].clips[values.clip].filename;
	playSound(filename);
	//return parseFloat(values.char) + parseFloat(values.clip);
};

loadedClip = (x, y) => {
	playSound(clip);
};

const loadClips = () => {
	for (x = 0; x < char_num; x++) {
		for (y = 0; y < Object.keys(charactors[x].clips).length; y++) {
			soundClips.push(charactors[x].clips[y]);
		}
	}
};

var init_cards = () => {
	let char_num = charactors.length;
	let card_zero = document.querySelector(".jscontainer");

	for (x = 0; x < char_num; x++) {
		let card = document.createElement("div");
		let titlearea = document.createElement("div");
		let title = document.createElement("H2");
		let list = document.createElement("UL");

		title.textContent = charactors[x].name;
		//titlearea.classList.add += ;
		titlearea.className += "soundcardtitle " + charactors[x].class;
		titlearea.style.backgroundImage = "url(" + charactors[x].img + ")";
		card.appendChild(titlearea);
		card.appendChild(list);
		for (y = 0; y < Object.keys(charactors[x].clips).length; y++) {
			let soundButton = document.createElement("LI");
			soundButton.id = charactors[x].clips[y].class;
			soundButton.textContent = charactors[x].clips[y].title;
			list.appendChild(soundButton);
			addEventListener("click", e => {
				if (e.target.id === soundButton.id) {
					console.log(e.target.id);
					audioCheck(charactors, e.target.id);
					// console.log(audioCheck(soundClips, soundButton.id));
					// pos = soundClips
					// 	.map(e => {
					// 		console.log(e.clips);
					// 		return e.clips;
					// 	})
					// 	.indexOf(e.target.id);
					// console.log(pos);
					//e.playSound(charactors[x].clips[y].filename);
				}
			});
		}
		titlearea.appendChild(title);
		// let titletext = document.createTextNode(charactors[x].name)
		//titlearea.appendChild(titletext)
		card_zero.after(card);
		card.className = "soundcard";
		//card.div.soundcard.appendChild('soundcardtitle')
		//card.appendChild('soundcardtitle ' + charactors[x].name.toLowerCase())
		// card.className +=
		//document.getElementById('soundcard').appendChild(soundcard)
	}
};

init_cards();

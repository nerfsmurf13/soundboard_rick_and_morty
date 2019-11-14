var soundClips = [];
const dir = "../sounds/";
const onlineResource = "http://edwardwilliams.me/resources/"

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
    (scaryterry = {
        name: "Scary Terry",
        class: "scary-terry",
        img: "../images/scary_terry.jpg",
        clips: {
            0: {
                title: "Awww Bitch",
                class: "aw-bitch",
                filename: "Awww_Bitch.wav",
            },
            1: {
                title: "Scary Terry",
                class: "scary-terry",
                filename: "scary_terry.mp3",
            },
        },
    }), (armagheadon = {
        name: "Armagheadon",
        class: "armagheadon",
        img: "../images/armagheadon.png",
        clips: {
            0: {
                title: "Show me what you got!",
                class: "show-me",
                filename: "show_me_what_you_got.wav",
            },
        },
    }),
    (other = {
        name: "Other",
        class: "other",
        img: "../images/mailman.jpg",
        clips: {
            0: {
                title: "My Man!",
                class: "my-man",
                filename: "my_man.wav",
            },
            1: {
                title: "Ants in my eyes",
                class: "ants-in-my-eyes",
                filename: "I'm_ants_in_my_eye_johnson.wav",
            },
        },
    }),
];
const char_num = charactors.length;

//Works with click listener to compare clicked element vs sound
const audioGet = (arr, val) => {
    for (x = 0; x < char_num; x++) {
        for (y = 0; y < Object.keys(arr[x].clips).length; y++) {
            if (Object.values(arr[x].clips[y]).includes(val)) {
                return {
                    char: x,
                    clip: y,
                };
            }
        }
    }
};

const sound = new Audio();

// Audio Step 2 == Filename taken from step 1 and depending if ran locally, points to local sound location or hosted sound)
function playSound(clip) {
    if (document.URL.includes('127.0.0')) {
        sound.src = "../sounds/" + clip;
    } else {
        sound.src = onlineResource + "sounds/" + clip;
    }
    sound.play();
}
// Audio Step 1 == Works with click listener to get clip name from dom id (mistakenly called class in clips object)
const audioCheck = (arr, val) => {
    var values = audioGet(arr, val);
    filename = arr[values.char].clips[values.clip].filename;
    playSound(filename);
};

var init_cards = () => {
    let char_num = charactors.length;
    let container = document.querySelector("#container")

    for (x = 0; x < char_num; x++) {
        let card = document.createElement("div");
        let titlearea = document.createElement("div");
        let title = document.createElement("H2");
        let list = document.createElement("UL");

        title.textContent = charactors[x].name;
        titlearea.className += "soundcardtitle " + charactors[x].class;
        if (document.URL.includes('127.0.0')) {
            titlearea.style.backgroundImage = "url(" + charactors[x].img + ")";
        } else {
            titlearea.style.backgroundImage = "url(" + onlineResource + charactors[x].img.substring(1) + ")";
        }

        card.appendChild(titlearea);
        card.appendChild(list);
        for (y = 0; y < Object.keys(charactors[x].clips).length; y++) {
            let soundButton = document.createElement("LI");
            soundButton.id = charactors[x].clips[y].class;
            soundButton.innerHTML = charactors[x].clips[y].title + ` <i class="icofont-play-alt-1"></i>`;
            list.appendChild(soundButton);
            addEventListener("click", e => {
                if (e.target.id === soundButton.id) {
                    audioCheck(charactors, e.target.id);
                }
            });
        }
        titlearea.appendChild(title);
        container.appendChild(card);
        card.className = "soundcard";
    }
};

init_cards();
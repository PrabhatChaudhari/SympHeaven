//collection of all the data cards
const collection = [
    {
        name: "Rain",
        url: "tunes/rain.mp3",
        icon: "fa-solid fa-cloud-rain",
        id: "rain"
    },
    {
        name: "Wind",
        url: "tunes/wind.mp3",
        icon: "fa-solid fa-wind",
        id: "wind"
    },
    {
        name: "Thunder",
        url: "tunes/thunder.mp3",
        icon: "fa-solid fa-cloud-bolt",
        id: "thunder"
    },
    {
        name: "River",
        url: "tunes/river.mp3",
        icon: "fa-solid fa-bridge-water",
        id: "river"
    },
    {
        name: "Waterfall",
        url: "tunes/waterfall.mp3",
        icon: "fa-solid fa-droplet",
        id: "waterfall"
    },
    {
        name: "Fire",
        url: "tunes/fire.mp3",
        icon: "fa-solid fa-fire",
        id: "fire"
    },
    {
        name: "Ocean Waves",
        url: "tunes/waves.mp3",
        icon: "fa-solid fa-water",
        id: "waves"
    },
    {
        name: "Whales",
        url: "tunes/whale.mp3",
        icon: "fa-solid fa-fish",
        id: "whale"
    },
    {
        name: "Cafe",
        url: "tunes/cafe.mp3",
        icon: "fa-solid fa-mug-saucer",
        id: "cafe"
    },
    {
        name: "Radio",
        url: "tunes/radio.mp3",
        icon: "fa-solid fa-radio",
        id: "radio"
    },
    {
        name: "Jazz",
        url: "tunes/jazz.mp3",
        icon: "fa-solid fa-music",
        id: "jazz"
    },
    {
        name: "Birds",
        url: "tunes/birds.mp3",
        icon: "fa-solid fa-dove",
        id: "birds"
    },
    {
        name: "Footsteps",
        url: "tunes/walk.mp3",
        icon: "fa-solid fa-shoe-prints",
        id: "footsteps"
    },
    {
        name: "Metro",
        url: "tunes/metro.mp3",
        icon: "fa-solid fa-train-subway",
        id: "metro"
    },
    {
        name: "City",
        url: "tunes/city.mp3",
        icon: "fa-solid fa-city",
        id: "city"
    }


]


console.log(collection);


//loading the cards on e by one on the window onload
window.onload = function () {


    //loading all 15 items
    for (i = 0; i < 15; i++) {
        let card = document.createElement("li");
        card.setAttribute("class", "card");
        card.id = `${collection[i].id}Card`;
        //html of the card
        card.innerHTML = `
                        <div class="insideCard" id="insideCardId">
                            <div class="iconContainer" id="iconContainerId">
                                <div class="icon" id="iconId">
                                    <button class="overlayBtn" id="${collection[i].id}Overlay" >
                                        <audio src="${collection[i].url}" id="${collection[i].id}Audio" class="paused"></audio>
                                        <i class="fa fa-play"></i>
                                    </button>
                                    <i class="${collection[i].icon} cardIcon"></i>
                                </div>
                            </div>
                            
                            <p>${collection[i].name}</p>
                            <div class="volumeSlider" id="volumeSliderId"><input type="range" min="1" max="100" value="50" class="slider" id="myRange"></div>
                        </div>`


        document.getElementById("cardList").appendChild(card);

    }




    /* ---------------------------JQUERY----------------------------------*/


    //using jquery when document ready
    $(document).ready(() => {




        //for the sliding toggle of hamburger navbar
        $('#hamburger').click(function () {
            $('#options2').slideToggle(800);
        })

        //for bringing the play button on clicking icon
        $('.icon').hover(function () {
            $(this).children('.overlayBtn').css("display", "block");
            $(this).children('.cardIcon').css("color", "rgba(255, 255, 255, 0.2)");

        }, function () {
            $(this).children('.overlayBtn').css("display", "none");
            $(this).children('.cardIcon').css("color", "rgba(255, 255, 255, 0.746)");
        })


        //on hovering the card changing color of icon and slider
        $('.card').hover(function () {
            // over
            $(this).children('#insideCardId').children('#iconContainerId').children('#iconId').children('.cardIcon').css('color', 'white');
            $(this).children('#insideCardId').children("#volumeSliderId").children(".slider").css({
                'background': 'white',
                'opacity': '1'
            });
        }, function () {
            // out
            $(this).children('#insideCardId').children('#iconContainerId').children('#iconId').children('.cardIcon').css('color', ' rgba(255, 255, 255, 0.746)');
            $(this).children('#insideCardId').children("#volumeSliderId").children(".slider").css({
                'background': '#d3d3d3',
                'opacity': '0.7'
            });
        }
        );

    })
    //end of jquery







    /*-------------------------PLAY-PAUSE-------------------------------*/



    /*All about playing and pausing the songs*/


    //collection of the playing songs
    const playing = [

    ]
    const playingTemp=[];

    let flag = 0;
    // for all the button classes
    for (i = 0; i < 15; i++) {


        // if (document.querySelector("#playMain").classList.contains('playing')) {
        let id = collection[i].id;
        let card = document.querySelector(`#${collection[i].id}Overlay`);
        let audio = card.children[0];

        //click event on the button
        card.addEventListener('click', function () {
            if (audio.className == 'paused') {

                //giving card border if song is playing
                if (audio.id != 'waterfallAudio' && audio.id != 'whaleAudio' && audio.id != 'radioAudio' && audio.id != 'jazzAudio') {
                    card.parentElement.parentElement.parentElement.parentElement.style.border = 'solid rgba(255, 255, 255, 0.5) 1px';

                }


                // play the specific song
                audio.play();
                audio.className = 'playing';
                audio.loop = true;
                card.children[1].className = "fa-solid fa-pause";

                //displaying hidden cards
                if (audio.id == 'riverAudio') {
                    $('#waterfallCard').slideToggle(1000);
                }
                if (audio.id == 'wavesAudio') {
                    $('#whaleCard').slideToggle(1000);
                }
                if (audio.id == 'cafeAudio') {
                    $('#radioCard').slideToggle(1000);
                    $('#jazzCard').slideToggle(1000);
                }
                //pushing the playing song in playing collection
                if(playing.includes(id) == false)
                {
                    playing.push(id);
                }

                const playBtn = document.querySelector('#playMain');
                if(playBtn.className == "controlsBtn paused")
                {
                    console.log('inside');
                    playBtn.className == "controlsBtn playing";
                    flag = 1;
                    playBtn.children[0].className = "fa fa-pause"
                    for(i=0;i<playingTemp.length;i++)
                    {
                        $('#'+playingTemp[i]+'Overlay').click();
                    }
                    playingTemp.length = 0;
                }

                
            }
            else {
                //setting border to none when song is not playing
                card.parentElement.parentElement.parentElement.parentElement.style.border = 'solid rgba(140, 29, 29, 0) 1px';

                //pausing the song
                audio.pause();
                audio.className = 'paused';
                card.children[1].className = "fa-solid fa-play";

                //vanishing the hidden cards
                if (audio.id == 'riverAudio') {
                    $('#waterfallCard').slideToggle(1000);
                    let element = document.querySelector(`#waterfallOverlay`).children[0];
                    element.pause();
                    element.className = 'paused';
                    document.querySelector(`#waterfallOverlay`).children[1].className = "fa-solid fa-play";

                }
                if (audio.id == 'wavesAudio') {
                    $('#whaleCard').slideToggle(1000);
                    let element = document.querySelector(`#whaleOverlay`).children[0];
                    element.pause();
                    element.className = 'paused';
                    document.querySelector(`#whaleOverlay`).children[1].className = "fa-solid fa-play";

                }

                let cafe = [
                    {
                        id: 'radio'
                    },
                    {
                        id: 'jazz'
                    }
                ]

                if (audio.id == 'cafeAudio') {
                    for (i = 0; i < 2; i++) {
                        $(`#${cafe[i].id}Card`).slideToggle(1000);
                        let element = document.querySelector(`#${cafe[i].id}Overlay`).children[0];
                        element.pause();
                        element.className = 'paused';
                        document.querySelector(`#${cafe[i].id}Overlay`).children[1].className = "fa-solid fa-play";
                    }


                }


                //removing the playing card from playing collection
                playing.splice(playing.indexOf(id), 1);

            }
            console.log(playing);



        })
        //------------------


        //for the volume slider adjusting volume of card
        let slider = card.parentElement.parentElement.nextElementSibling.nextElementSibling.children[0];

        slider.addEventListener('click', function () {
            audio.volume = 0.01 * (this.value)
        })



    }
    //for function end



    const playMain = document.getElementById("playMain");
    const record = document.getElementById("record");
    const shuffle = document.getElementById("shuffle");



    /*------------------------CONTROLS--------------------------*/



    //PLAY
    playMain.addEventListener('click', function () {
        if(flag==1)
        {
            this.className = "controlsBtn playing";
            flag = 0;
        }
        if(this.className == "controlsBtn playing")
        {
            console.log('1');
            for(i=0;i<playing.length;i++)
            {
                playingTemp.push(playing[i]);
            }
            for(i=0;i<playingTemp.length;i++)
            {
                $('#'+playing[0]+'Overlay').click();
            }
            this.className = "controlsBtn paused";
            this.children[0].className = "fa fa-play"
        }
        else
        {
            console.log(this.className);
            this.className = "controlsBtn playing";
            this.children[0].className = "fa fa-pause"
            if(playingTemp.length!=0)
            {
                for(i=0;i<playingTemp.length;i++)
                {
                    $('#'+playingTemp[i]+'Overlay').click();
                }
                playingTemp.length = 0;
            }
        }




    })


}



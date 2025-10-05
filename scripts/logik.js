const dialogWindowElement = document.getElementById("dialog-pages");

const windowBodyElement = document.getElementById("window-body");

const cardOneElement = document.getElementById("card-1");
const cardTwoElement = document.getElementById("card-2");
const cardThreeElement = document.getElementById("card-3");

const leftPerson = document.querySelector("#person-left-id");
const raghtPerson = document.querySelector("#person-right-id");

const leftPersonName = document.querySelector("#person-left");
const raghtPersonName = document.querySelector("#person-right");

const restartWindow = document.querySelector(".lose-window");
const restartBtn = document.getElementById("btn-restart");

cardOneElement.hidden = true;
cardTwoElement.hidden = true;
cardThreeElement.hidden = true;

restartWindow.hidden = true;

const ChangeSelector = () => {
    cardOneElement.hidden = !cardOneElement.hidden;
    cardTwoElement.hidden = !cardTwoElement.hidden;
    cardThreeElement.hidden = !cardThreeElement.hidden;
}

//Зміна bg
const ChangeBg = (num) => {
    if (num === 38) {
        document.body.style.backgroundImage = 'url("./img/Bg/v6.896Z.png")';
    } else if (num === 98) {
        document.body.style.backgroundImage = 'url("./img/Bg/Stantion.525Z.png")';
    }
}

//Зміна персонажу
const ChangePerson = (num) => {
    if (num === 7) {
        raghtPersonName.textContent = "Granny";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Granny.png";
    }else if (num === 9) {
        raghtPersonName.textContent = "Man";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Man.png";
    }else if (num === 11) {
        raghtPersonName.textContent = "Granny";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Granny.png";
    }else if (num === 13) {
        raghtPersonName.textContent = "Man";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Man.png";
    }else if (num === 30) {
        raghtPersonName.textContent = "Granny";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Granny.png";
    }else if (num === 32) {
        raghtPersonName.textContent = "Man";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Man.png";
    }else if (num === 38) {
        raghtPersonName.textContent = "Fermer";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 45) {
        raghtPersonName.textContent = "Cow";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 46) {
        raghtPersonName.textContent = "Fermer";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 49) {
        raghtPersonName.textContent = "Cow";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 50) {
        raghtPersonName.textContent = "Fermer";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 55) {
        raghtPersonName.textContent = "Cow";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 56) {
        raghtPersonName.textContent = "Fermer";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 61) {
        raghtPersonName.textContent = "Cow";
        leftPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 62) {
        raghtPersonName.textContent = "Fermer";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 65) {
        raghtPersonName.textContent = "Cow";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 66) {
        raghtPersonName.textContent = "Fermer";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 79) {
        raghtPersonName.textContent = "Cow";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 80) {
        raghtPersonName.textContent = "Fermer";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Fermer.png";
    }else if (num === 97) {
        raghtPersonName.textContent = "Cow";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Cow.png";
    }else if (num === 98) {
        raghtPersonName.textContent = "Astronaut";
        raghtPerson.src = "./person/Vili.png";
        raghtPerson.src = "./person/Spacer.png";
    }
}

// Показує активний діалог та персонажа
const SeeActivPerson = () => {
    if (dialogArr[dialogCounter][0] === "left") {
        leftPersonName.className = "person-name-activ";
        raghtPersonName.className = "person-name";
        
        leftPerson.className = "person-activ";
        raghtPerson.className = "person";
    }else if (dialogArr[dialogCounter][0] === "right") {
        leftPersonName.className = "person-name";
        raghtPersonName.className = "person-name-activ";

        leftPerson.className = "person";
        raghtPerson.className = "person-activ";
    }else {
        leftPersonName.className = "person-name";
        raghtPersonName.className = "person-name";    
    
        leftPerson.className = "person";
        raghtPerson.className = "person";
    }
}

// Змінює після правильного вибору картинки на селекторі
const ChangeImgItems = () => {
    cardOneElement.firstElementChild.remove();
    cardTwoElement.firstElementChild.remove();
    cardThreeElement.firstElementChild.remove();

    cardOneElement.insertAdjacentHTML("afterbegin", itemSelectorImg[itemsSelectorStage][0]);
    cardTwoElement.insertAdjacentHTML("afterbegin", itemSelectorImg[itemsSelectorStage][1]);
    cardThreeElement.insertAdjacentHTML("afterbegin", itemSelectorImg[itemsSelectorStage][2]);

    itemsSelectorStage++;
}

// Масив діалогів (1 - хто розмовляє, 2 - сам діалог)
const dialogArr = [ 
                    ["", "(He flies to the nearest city, and stands in line at the coffee shop)"],
                    ["right", "How long can you wait!"],
                    ["right", "I've been standing in line for coffee for ages."],
                    ["right", "And the queue doesn't move at all."],
                    ["", "(Granny in front of Man, suddenly falls)"],
                    ["", "(Man picks her up, Vili flies closer)"],
                    ["left", "Are you OK."],
                    ["right", "I felt dizzy."],
                    ["left", "It's probably because of the heat."],
                    ["right", "What can be done to help her?"],
                    ["", "What can help with dizziness in Granny's head?"],
                    ["right", "Thank you, I'm relieved."],
                    ["right", "I wasn't feeling well this morning, but the promotions in the store won't wait."],
                    ["right", "Yesterday, there was a warning about coronal mass ejections on the sun."],
                    ["left", "Coronal ejections cause geomagnetic storms, which are harmful, especially to the elderly."],
                    ["right", "Hmm, maybe that's why I'm so irritated."],
                    ["left", "It is possible that high air temperatures caused by solar flares could also be a factor in increased irritability."],
                    ["left", "Which are accompanied by coronal mass ejections."],
                    ["", "(The queue for the coffee shop has already reached Man)"],
                    ["right", "Maybe I should skip coffee today?"],
                    ["", "What should I choose Men?"],
                    ["right", "A cooling drink that really helped me."],
                    ["right", "I'm less angry now."],
                    ["left", "Cool drinks, and preferably plain clean water, are the most helpful in overcoming the effects of space weather."],
                    ["right", "I never thought that the heat could affect my mental health."],
                    ["left", "Space weather, especially geomagnetic storms and solar activity, has a significant impact on mental health."],
                    ["left", "For example: sleep disturbances, anxiety, headache."],
                    ["right", "And how can I protect myself from this?"],
                    ["", "What can help overcome the effects of space weather?"],
                    ["left", "Yes, lowering the temperature helps protect against the effects of space weather."],
                    ["", "(Grandma approaches Willy and the much more cheerful husband)"],
                    ["right", "Be healthy, guys!"],
                    ["right", "And the same to you!"],
                    ["left", "Come on!"],
                    ["", "(Man gives Willie a farewell gesture and also walks away)"],
                    ["", "(The queue for the coffee shop reaches Willy)"],
                    ["", "What does Willy want to order?"],
                    ["", "(The cafe doesn't sell engine oil)"],


                    ["", "(Willie calmly flies to the spaceport)"],
                    ["", "(Saw a confused farmer)"],
                    ["left", "What happened Mr. Farmer?"],
                    ["", "(The farmer turns his head to Willy in confusion)"],
                    ["right", "Everything is gone!"],
                    ["right", "The apocalypse is approaching!"],
                    ["right", "All my rye will wither!"],
                    ["right", "Moooo"],
                    ["", "(Willie looks at the farmer in surprise)"],
                    ["left", "Is everything so bad?"],
                    ["right", "Yes!"],
                    ["right", "Mo"],
                    ["left", "Can you be a little more specific?"],
                    ["right", "My spray fields don't listen to me!"],
                    ["left", "Maybe I can help with something?"],
                    ["right", "How can you help me? You're not a robot."],
                    ["left", "..."],
                    ["right", "Moooo"],
                    ["right", "You are a robot!"],
                    ["right", "Help me. Please!"],
                    ["right", "My brand new sprayers have been working properly all the time, all the time, until this moment."],
                    ["right", "And today. That's the trouble. Today is the hottest day of the season."],
                    ["right", "My fields need to be watered, otherwise I will be left without a harvest!"],
                    ["right", "Mo-Mo"],
                    ["left", "Okay, give me a tour of their control center."],
                    ["right", "They don't have a control center."],
                    ["left", "..."],
                    ["right", "Mo"],
                    ["left", "And how do you manage them?"],
                    ["right", "I have a modern farm! It is as automated as possible, I control it via GPS."],
                    ["left", "Maybe there is a connection problem?"],
                    ["right", "No. I've checked everything 100 times already."],
                    ["right", "And there is no signal!"],
                    ["left", "Maybe something is muffling the signal?"],
                    ["right", "Why would anyone want to jam my signal?"],
                    ["left", "Maybe these are natural factors."],
                    ["", "(Fremer looks at Willy in surprise)"],
                    ["right", "Can nature affect the GPS signal? It's sunny and very hot today."],
                    ["left", "Clear and sunny weather can also affect the GPS signal."],
                    ["left", "Solar activity changes the ionosphere, the layer of the atmosphere through which GPS signals pass."],
                    ["left", "In March 2024, during a severe geomagnetic storm, many farmers around the world reported RTK, GPS, and autopilot failures."],
                    ["right", "Mo-Mo-Mo"],
                    ["right", "My sprinklers are not picking up the signal due to possible increased solar activity."],
                    ["left", "Maybe you can switch to manual control of the sprayers."],
                    ["", "Vili and Fermer approach the sprayers and see the following items:"],
                    ["right", "What you won't do for the sake of the harvest."],
                    ["", "(The farmer sits at the controls and begins to manually water the field)"],
                    ["", "(After the field is completely watered, the Farmer returns to Willie)"],
                    ["right", "And who would have thought that the Sun affects not only plants, but also technology."],
                    ["left", "Yes, that's why you need to be prepared for such events."],
                    ["right", "What would you recommend to do to prevent such incidents?"],
                    ["left", "It is impossible to prevent the impact on the equipment, but you can be prepared for it and reduce the negative consequences."],
                    ["right", "For example, how?"],
                    ["", "How can you find out about increased solar activity in advance?"],
                    ["left", "So that's a good way."],
                    ["right", "Thank you!"],
                    ["right", "You saved my harvest)"],
                    ["left", "I was glad to help)"],
                    ["right", "Have a good trip."],
                    ["right", "Mo-Baby"],


                    ["", "(Vili arrives at the space station)"],
                    ["", "(He enters the control cabin, the Astronaut does"],
                    ["left", "Hallo"],
                    ["right", "Oh, Mr. Vili."],
                    ["", "(A red light on the panel lights up)"],
                    ["", "(A warning about the solar wind begins to sound from the loudspeakers)"],
                    ["left", "The solar wind urgently needs to be protected from radiation!"],
                    ["right", "We must act quickly!"],
                    ["", "Where should you hide to protect yourself from the solar wind?"],
                    ["", "(Willie and the astronaut wait for the solar wind to end)"],
                    ["left", "The solar wind has already passed us by."],
                    ["right", "Yes, the Sun's activity has increased recently."],
                    ["left", "I wonder why the plasma carried by the solar wind doesn't affect people on Earth."],
                    ["right", "Earth's magnetosphere - it rejects most charged particles, preventing them from reaching the Earth's surface."],
                    ["left", "Logically, the Earth's magnetosphere acts weakly here, and offers almost no protection to us in space."],
                    ["", "(The Astronaut returns to the cockpit)"],
                    ["", "(He stares blankly at the screen, which is flashing red)"],
                    ["right", "Alas, we have lost satellite signals!"],
                    ["left", "Apparently it was because of the solar wind that some devices failed."],
                    ["right", "I urgently needed to send data about the magnetic field."],
                    ["left", "This data will be useful for determining the location of magnetic storms."],
                    ["right", "Yes, and now we can't contact the satellites that have this information."],
                    ["left", "I think I need to recalibrate during the reception."],
                    ["right", "Yes, but I don't have a spacesuit to go into outer space."],
                    ["", "What can help fix receivers?"],
                    ["", "(Vili flies into outer space)"],
                    ["", "(He fixes the receivers and returns to the station)"],
                    ["left", "I fixed the receivers, can you contact the satellites now?"],
                    ["right", "So I'm receiving data now, and I'm getting ready to send it to Earth."],
                    ["right", "That a powerful magnetic storm is approaching the North."],
                    ["left", "Thanks to us, people will be ready for it!"],
                    ["right", "Yes, because that's our task here."],
                    ["right", "To care for those below."],
                    ["", "Thank you for reading"],
                    ];

// Масив діалогів при парвильній відповіді
const TrueDialog = [
    "The answer is correct",
]

// Правильні відповіді False - правильна True - неправильна
const LoseLogic = [
    [false, true, true],
    [true, false, true],
    [false, true, true],
    [true, false, true],

    [true, true, false],
    [false, true, true],

    [true, true, false],
    [true, false, true],

]

// Змінна що відповідає за активні зображення при поразці
let losVar = 0;

// Картинки при поразці
const loseImg = [
    [`<img src="./lose-img/Lose-win.141Z.png" alt="" style="width: 350px; margin-top: 10px">`,
        `<img src="./lose-img/Lose-win.141Z.png" alt="" style="width: 350px; margin-top: 10px">`,
        `<img src="./lose-img/Lose-win.141Z.png" alt="" style="width: 350px; margin-top: 10px">`,
    ]
    ];

// Масив малюнків селекторів 
const itemSelectorImg = [   
                            [
                            `<img src="./img/Items/Cofe.png" alt="card-1" width="160px">`, 
                            `<img src="./img/Items/Mohito.png" alt="card-2" width="160px">`,
                            `<img src="./img/Items/Pizza.png" alt="card-3" width="160px">`
                            ],
                            [
                            `<img src="./img/Items/Sky.png" alt="card-1" width="160px">`, 
                            `<img src="./img/Items/Smartfon.png" alt="card-2" width="160px">`,
                            `<img src="./img/Items/IceCream.png" alt="card-3" width="160px">`
                            ],
                            [
                            `<img src="./img/Items/Cofe.png" alt="card-1" width="160px">`, 
                            `<img src="./img/Items/Gas.png" alt="card-2" width="160px">`,
                            `<img src="./img/Items/Chok.png" alt="card-3" width="160px">`
                            ],


                            [
                            `<img src="./img/Items/lopata.png" alt="card-1" width="160px">`, 
                            `<img src="./img/Items/Funnel.png" alt="card-2" width="160px">`,
                            `<img src="./img/Items/Draw.png" alt="card-3" width="160px">`
                            ],
                            [
                            `<img src="./img/Items/Wether.png" alt="card-1" width="160px">`, 
                            `<img src="./img/Items/Card.png" alt="card-2" width="160px">`,
                            `<img src="./img/Items/Kompas.png" alt="card-3" width="160px">`
                            ],


                            [
                            `<img src="./img/Items/Table.png" alt="card-1" width="160px">`, 
                            `<img src="./img/Items/Smi.png" alt="card-2" width="160px">`,
                            `<img src="./img/Items/Box.png" alt="card-3" width="160px">`
                            ],
                            [
                            `<img src="./img/Items/Pen.png" alt="card-1" width="160px">`, 
                            `<img src="./person/Vili.png" alt="card-2" width="110px">`,
                            `<img src="./img/Items/Plunger.png" alt="card-3" width="160px">`
                            ],
                            

                            

                        ];
let itemsSelectorStage = 0;

let dialogCounter = 0;

let dialogWork = false;

const HideSelector = () => {
    if (dialogCounter == 11 || dialogCounter == 21 || dialogCounter == 29 || dialogCounter == 36 || dialogCounter == 84 || dialogCounter == 92 || dialogCounter == 107 || dialogCounter == 123) {
        ChangeSelector();
        dialogWork=false;
    }  
}

const DialogCounterActiv = () => {
    if (dialogCounter >= 132) {
        dialogWork = false;
    }
}

document.addEventListener("keydown", (event)=> {
    if (event.code === "Space") {
        if (dialogWork) {
            ChangeBg(dialogCounter);
            ChangePerson(dialogCounter);
            SeeActivPerson();
            dialogWindowElement.textContent = dialogArr[dialogCounter][1];
            dialogCounter++;
            HideSelector();
            DialogCounterActiv();
        }
    }
} )


dialogWindowElement.onclick = function() {
    if (dialogWork) {
        ChangeBg(dialogCounter);
        ChangePerson(dialogCounter);
        SeeActivPerson();
        dialogWindowElement.textContent = dialogArr[dialogCounter][1];
        dialogCounter++;
        HideSelector();
        DialogCounterActiv();
        console.log(dialogCounter);
    }
}

cardOneElement.onclick = function() {
    ChangeSelector();
    if (LoseLogic[losVar][0]) {
        SeeLoseWindow(0)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
        ChangeImgItems();
        losVar++;
    }
}

cardTwoElement.onclick = function() {
    ChangeSelector();
    if (LoseLogic[losVar][1]) {
        SeeLoseWindow(1);
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
        ChangeImgItems();
        losVar++;
    }
}

cardThreeElement.onclick = function() {
    ChangeSelector();
    if (LoseLogic[losVar][2]) {
        SeeLoseWindow(2)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
        ChangeImgItems();
        losVar++;
    }
}

restartBtn.onclick = function() {
    dialogWork = true;
    restartWindow.hidden = true;
    restartWindow.firstElementChild.remove();
    dialogCounter -= 2;

    SeeActivPerson();
    dialogWindowElement.textContent = dialogArr[dialogCounter][1];
    dialogCounter++;
}

const SeeLoseWindow = (numberImg) => {
    restartWindow.insertAdjacentHTML("afterbegin", loseImg[0][numberImg])
    restartWindow.hidden = false;
}


// Частина що відповідає за старт

const tutorialPages = document.querySelector(".tuorial-pages");
const compleatTutorial = document.getElementById("read-tutorial");

compleatTutorial.onclick = () => {
    tutorialPages.remove();
    dialogWork = true;
}
const gradient = require('gradient-string');

function startUp() {
    let welcomeMessages =   [  
                                gradient.mind('I\'d woken up early, and I took a long time getting ready to exist. - Fernando Pessoa'),
                                gradient.retro.multiline('I suffer from life and other people. I can\'t look at reality face to face. Even the sun discourages and depresses me. - Fernando Pessoa'),
                                gradient.instagram.multiline('Being tired of all illusions and of everything about illusions – the loss of illusions, the uselessness of having them, the prefatigue of having to have them in order to lose them, the sadness of having had them, the intellectual shame of having had them knowing that they would have to end this way. - Fernando Pessoa'),
                            ];

    let randomWelcomeMsg = welcomeMessages[Math.floor(Math.random() * (welcomeMessages.length))];

    setTimeout(() => {
        console.log(`\n${randomWelcomeMsg}\n`);
    }, 3000);

    setTimeout(() => {
        console.log(gradient.cristal("Good luck on your quest"));
    }, 4000);
};

exports.startUp = startUp;


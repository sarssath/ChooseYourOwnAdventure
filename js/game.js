// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Vertigo.mp3",
    background_image: "kites.jpg",
    levels: {

        start: {
            message: "You see a kite",
            choices: [
                {
                    text: "Chase it",
                    nextLevel: "desert",
                },

                {
                    text: "Walk away",
                    nextLevel: "lifestyle",
                },
            ]
        },

        desert: {
            background_image: "abandoned-desert.jpg",
            music: "Test Drive.mp3",
            message: "You end up in an unknown desert",
            choices: [
                {
                    text: "You scream for help",
                    nextLevel: "stranger",
                },
                {
                    text: "You continue following the kite",
                    nextLevel: "fortune",
                },
            ]
        },

        lifestyle: {
            background_image: "bored.gif",
            message: "Go back to your mundane lifestyle",
            music: "My Bad.mp3",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
    
        stranger: {
            background_image: "stranger.jpg",
            music: "Waves.mp3",
            message: "A stranger finds you and asks you for a favor in return for helping you",
            choices: [
                {
                    text: "You ignore them and run away",
                    nextLevel: "punishment",
                },
                {
                    text: "You help them",
                    nextLevel: "heaven",
                },
            ]
        },
        
        punishment: {
            background_image: "fires.gif",
            music: "Let Me Down Slowly.mp3",
            message: "You get punished",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        heaven: {
            background_image: "heaven.jpg",
            music: "Home.mp3",
            message: "You get rewarded and go to heaven",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        fortune: {
            background_image: "fortune.jpeg",
            music: "Talk.mp3",
            message: "You catch the kite and get a fortune",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
    }
};

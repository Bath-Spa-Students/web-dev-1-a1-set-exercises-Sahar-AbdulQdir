//This is a function to convert text to speach
function textToAudio() {
    // get the text from the user & storing it in a variable named msg
    let msg = document.getElementById("txt_to_speech").value;
    // Creating a new SpeechSynthesisUtterance object
    let speech = new SpeechSynthesisUtterance();
    //Setting the language to English-United States
    speech.lang = "en-US";
    //Setting the text to be spoken
    speech.text = msg;
    //Setting the Volume,Rate & Pitchof the speech
    speech.volume = 1;
    speech.rate= 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
//Creating new object & setting their source URLs
type="text/javascript"
            const audio9 = new Audio();
            audio9.src = "Audio2/can-we-talk-about-me.mp3" ;
            audio9.load();

            type="text/javascript"
            const audio10 = new Audio();
            audio10.src = "Audio2/chipmunks-hehehei.mp3" ;
            audio10.load();

            type="text/javascript"
            const audio11 = new Audio();
            audio11.src = "Audio2/funny-stories.mp3" ;
            audio11.load();

            type="text/javascript"
            const audio12 = new Audio();
            audio12.src = "Audio2/ha-ha-ha-unbelieveable.mp3" ;
            audio12.load();

            type="text/javascript"
            const audio13 = new Audio();
            audio13.src = "Audio2/haha-oh-no-haha.mp3" ;
            audio13.load();

            type="text/javascript"
            const audio14 = new Audio();
            audio14.src = "Audio2/im-leaving-you-you-cow.mp3" ;
            audio14.load();

            type="text/javascript"
            const audio15 = new Audio();
            audio15.src = "Audio2/what-is-it-all-about.mp3" ;
            audio15.load();

            type="text/javascript"
            const audio16 = new Audio();
            audio16.src = "Audio2/you-couldnt-present-a-cat.mp3" ;
            audio16.load();

            type="text/javascript"
            const audio17 = new Audio();
            audio17.src = "Audio2/youre-not-in-the-army-anymore-101soundboards.mp3" ;
            audio17.load();


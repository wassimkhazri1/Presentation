var presentationsArray = [
    {
		"image" : "./img/presentation1.png",
        "name": "Hello, my name is ilhem mecherrgui.It’s nice to meet you. I have great experience as a biology technician at the Regional Hospital of Jandouba. Working for over 12 years is impressive! my job of doing important lab tests and helping doctors with accurate patient diagnoses is very important. It’s great that I have adapted to new lab tools and taught new technicians. Here are some tasks that match my experience as a biology technician: Running lab tests on blood and other samples. Keeping lab equipment clean and working properly. Recording test results and sharing them with doctors. Following safety rules to protect yourself and others. Teaching new staff how to do tests correctly. Using new lab technology and learning new methods. Thank you for your attention.",
        "voice": "./audio/presentation1.mp3"
    },
    {
		"image" : "./img/presentation2.png",
        "name": "Hello everyone, my name is Ilhem. I am a biology technician with over 12 years of experience at the Regional Hospital of Jandouba. In my role, I perform important lab tests and ensure high-quality results that help doctors make accurate patient diagnoses. Throughout my career, I have adapted to new lab technologies and trained new technicians to follow best practices. Some of my main tasks include running tests on blood and other samples, maintaining lab equipment, recording and reporting test results, following safety rules, and mentoring new staff. My work is driven by precision, dedication, and a passion for supporting effective healthcare.Thank you for your attention.",
        "voice": "./audio/presentation2.mp3"
    }
];
let currentAudio = null;

function playAudioPresentation(i) {
    // Stop the currently playing audio if it exists
    if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset playback to the start
    }

    // Get the new audio URL and play it
    var url = presentationsArray[i]["voice"];
    currentAudio = new Audio(url);
    currentAudio.play();
}

function displayPresentations(t){
	$('#div4').html('');
	var $title = $('<h1 class = "titleh2">Pick a presentation and learn how to spell it</h1>')
	$('#div4').append($title);
	var $presentations =  $('<div id="colors" class="row animalslist"></div>');
	var index = t;

		var $presentation = $('<div class=" column"><img id="'+index+'" onclick="playAudioPresentation(this.id)" style="background-color : white" class=" imggame animal" src="'+presentationsArray[index]["image"]+'" alt="Colors" ></div>');
		var $text = $('<h2 class="animalname">'+presentationsArray[index]["name"]+'</h2>');
		$presentation.append($text);
		$presentations.prepend($presentation);
	$('#div4').append($presentations);

}
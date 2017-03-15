// JavaScript Document
//Created by Michael Woo

//Toggleable Music
function play() {
    var audio = document.getElementById("elevator-music");
    if (audio.paused) {
        audio.play();
		document.getElementById("speaker").src = "speakericon.png";
		document.getElementById("speaker").className = "musicbtngreen";
    }
	else{
        audio.pause();
        audio.currentTime = 0;
		document.getElementById("speaker").src = "muteicon.png";
		document.getElementById("speaker").className = "musicbtnred";
    }
}

//Configures the Settings
var correctPinNumber = "82022572020";
var url = "http://www.bcp.org";
var rekturl = "";

//OTHER
var totalAttempts = 0;


function addNumber(value)
{
	var pin = document.getElementById("pinNumber");
	pin.value += value;
}

function clearPad()
{
	document.getElementById("pinNumber").value = "";
}

function  checkPinNumber()
{
	//get values from doc.
	var formArea= document.getElementById("formArea");
	var errorArea = document.getElementById("errorMessage"); 
	var pinNumber = document.getElementById("pinNumber").value;
}
	//validate PIN.
	if (pinNumber === correctPinNumber)
	{
		errorArea.innerHTML = "Congratulations! You will be redirected soon...";
		setTimeout(function(){
    		document.location.href = url;
			return;
		}, 2000);
	}
	else
	{
		errorArea.innerHTML = "Incorrect Pin, please try again";
		clearPad();
	}
	//add one more access attempt;
	totalAttempts++;

	if( totalAttempts === 8 )
	{
		formArea.style.display = "none";
		errorArea.innerHTML = "Too many attempts.. sorry.";
			clearPad();
		setTimeout(function(){
			document.location.href = rekturl;		
		}, 2000);	
	}
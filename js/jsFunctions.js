function testAlert()
{
	
	alert("jsFunctions.js successfully loaded");
	
};

/***********NUMBERS*************/

/*Find PI to the Nth Digit*/
var piCountSubmit = document.getElementById("piCountSubmit");
var piInput = document.getElementById("piInput");
var piOutput = document.getElementById("piOutput");
var pi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

piCountSubmit.onclick = function piCount()
{
	
	if (piInput.value > 0 && piInput.value < 101)
	{
		piOutput.value = "3." + pi.substring(0,piInput.value);
	}
	else
	{
		alert("n must be a number between 1 and 100");
	}
	
};


/*Find e to the Nth Digit*/
var eCountSubmit = document.getElementById("eCountSubmit");
var eInput = document.getElementById("eInput");
var eOutput = document.getElementById("eOutput");
var e = "7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274";

eCountSubmit.onclick = function eCount()
{
	
	if (eInput.value > 0 && eInput.value < 101)
	{
		eOutput.value = "2." + e.substring(0,eInput.value);
	}
	else
	{
		alert("n must be a number between 1 and 100");
	}
	
};
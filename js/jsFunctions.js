function testAlert()
{
	
	alert("jsFunctions.js successfully loaded");
	
};

/***********NUMBERS*************/

/*Find PI to the Nth Digit*/
var piInput = document.getElementById("piInput");
var piOutput = document.getElementById("piOutput");
var pi = "1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

piInput.oninput = function piCount()
{
	
	if (piInput.value > 0 && piInput.value < 101)
		piOutput.innerHTML = "3." + pi.substring(0,piInput.value);
	else
		piOutput.innerHTML = "n must be a number between 1 and 100";
	
};


/*Find e to the Nth Digit*/
var eInput = document.getElementById("eInput");
var eOutput = document.getElementById("eOutput");
var e = "7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274";

eInput.oninput = function eCount()
{
	
	if (eInput.value > 0 && eInput.value < 101)
		eOutput.innerHTML = "2." + e.substring(0,eInput.value);
	else
		eOutput.innerHTML = "n must be a number between 1 and 100";
	
};


/*Display Fibonacci sequence up to the Nth number*/
var fibInput = document.getElementById("fibInput");
var fibOutput = document.getElementById("fibOutput");

fibInput.oninput = function fib()
{
	var seq = "";
	var n = fibInput.value;
	var s = 0;
	var t1 = 0;
	var t2 = 1;
	
	if (fibInput.value > 0 && fibInput.value < 10001)
	{
		
		if (n < 2)
		{
			seq = "0 1 ";
		}
		else
		{
			do
			{
				seq = seq + s + " ";
				s = t1 + t2;
				t1 = t2;
				t2 = s;
			} while (s < n);
		};
		
		fibOutput.innerHTML = seq;
	}
	else
	{
		fibOutput.innerHTML = "n must be a number between 1 and 10,000";
	};
};



/*Find all prime factors in a number*/
var primeInput = document.getElementById("primeInput");
var primeOutput = document.getElementById("primeOutput");

primeInput.oninput = function prime()
{
	
	if (primeInput.value > 0 && primeInput.value < 100000001)
	{
		primeOutput.innerHTML = primeFactorization(primeInput.value);
	}
	else
	{
		primeOutput.innerHTML = "n must be a number between 1 and 100,000,000";
	};
};

//primeFactorization function from: http://www.coderenaissance.com/2011/06/finding-prime-factors-in-javascript.html
function primeFactorization(num){
  var root = Math.sqrt(num),  
  result = arguments[1] || [],
  x = 2; 
  
  if(num % x)
  {
	x = 3;
	while((num % x) && ((x = x + 2) < root))
	{
	}
  }

  x = (x <= root) ? x : num;
  result.push(x);

  return (x === num) ? result : primeFactorization(num/x, result) ;
}


/*Find the next prime number*/
var nextPrimeButton = document.getElementById("nextPrimeButton");
var nextPrimeOutput = document.getElementById("nextPrimeOutput");

nextPrimeButton.onclick = function nextPrime()
{
	if (nextPrimeOutput.value > 0 && nextPrimeOutput.value < 100000001)
	{
		do 
		{		
		nextPrimeOutput.value++;
		} while (isPrime(nextPrimeOutput.value) == false)
	}
};

//isPrime function from: http://www.javascripter.net/faq/numberisprime.htm
function isPrime(n)
{
	if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
	if (n%2==0) return (n==2);
	if (n%3==0) return (n==3);
	var m=Math.sqrt(n);
	for (var i=5;i<=m;i+=6) {
	if (n%i==0)     return false;
	if (n%(i+2)==0) return false;
 }
 return true;
}

/*Find Cost of Tile to Cover W x H Floor*/
var tileCostInput = document.getElementById("tileCostInput");
var tileYInput = document.getElementById("tileYInput");
var tileXInput = document.getElementById("tileXInput");
var tileSubmitButton = document.getElementById("tileSubmitButton");
var tileOutput = document.getElementById("tileOutput");

tileSubmitButton.onclick = function tileCost()
{
	if (tileCostInput.value < 0 || tileYInput.value < 0 || tileXInput.value < 0)
	{
		alert("All values must be greater than 0");
	}
	else
	{
		tileOutput.innerHTML = (tileCostInput.value * tileYInput.value * tileXInput.value).toFixed(2);
	}
};

/*Mortgage Calculator*/
var mortgageAmount = document.getElementById("mortgageAmount");
var mortgageInterest = document.getElementById("mortgageInterest");
var mortgageTerm = document.getElementById("mortgageTerm");
var mortgageSubmit = document.getElementById("mortgageSubmit");
var mortgageOutput = document.getElementById("mortgageOutput");

mortgageSubmit.onclick = function mortgage()
{
	if (mortgageAmount.value < 0 || mortgageInterest.value < 0 || mortgageTerm.value < 0)
	{
		alert("All values must be greater than 0");
	}
	else
	{
		mortgageOutput.innerHTML = (((mortgageInterest.value/10) * mortgageTerm.value + mortgageAmount.value / mortgageTerm.value) / 12).toFixed(2);
	}
}

var changeSubmit = document.getElementById("changeSubmit");

changeSubmit.onclick = function change()
{	
	var changeCost = document.getElementById("changeCost");
	var changeMoney = document.getElementById("changeMoney");
	var changeDollars = document.getElementById("changeDollars");
	var changeQuarters = document.getElementById("changeQuarters");
	var changeDimes = document.getElementById("changeDimes");
	var changeNickels = document.getElementById("changeNickels");
	var changePennies = document.getElementById("changePennies");
    
    changeCost.value = (changeCost.value * 1).toFixed(2);  //*1 added, otherwise it attempts to execute changeCost.value.toFixed() -- not a function
    changeMoney.value = (changeMoney.value * 1).toFixed(2);

	if (changeCost.value > changeMoney.value)
	{
		alert("Money given must be more than the cost.");
	}
	else
	{
        //Add code
	}
}

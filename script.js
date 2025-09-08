function firstWord(s) {
  // your code here
s = s.trim();
	
	let match = s.match(/^\S+/);

 return match ? match[0] : "";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

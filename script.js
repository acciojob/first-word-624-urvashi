function firstWord(s) {
  // your code here
	let match = s.match(/^\S+/);

 return match ? match[0] : "";
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));

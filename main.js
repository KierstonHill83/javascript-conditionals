var phoneNumber = prompt("Please enter your phone number with dashes.")

if(phoneNumber.charAt(3) == "-" && phoneNumber.charAt(7) == "-") {
  alert("The phone number is valid.");
}
else {
  alert("The phone number is not valid.");
}

var birthDate = prompt("Please enter your birth date with forward slashes.")

if(birthDate.charAt(2) == "/" && birthDate.charAt(5) == "/") {
  alert("The birth date is valid.");
}
else {
  alert("The birth date is not valid.")
}

var postalCode = prompt("Please enter your postal code.")

if(postalCode.length == 5 || (postalCode.length == 10 && postalCode.charAt(5) == "-")) {
  alert("The postal code is valid");
}
else {
  alert("The postal code is not valid.")
}

var stateAbb = prompt("Please enter your state abbreviation.")

if(stateAbb.upperCase == stateAbb) {
  alert("The state abbreviation is valid.")
}
else {
  alert("The state abbreviation is not valid.")
}

var married = prompt("Are you married?")

if(married == "yes" ||
   married == "YES" ||
   married == "Yes" ||
   married == "no" ||
   married == "NO" ||
   married == "No") {
  alert("You answer is valid.")
}
else {
  alert("Your answer is not valid.")
}

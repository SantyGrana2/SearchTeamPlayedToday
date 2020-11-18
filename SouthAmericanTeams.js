process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
var userCountryRaw = "BRAZIL";
var userCountry = userCountryRaw.toLowerCase();

if (userCountry == "brazil" || userCountry == "uruguay") {
    console.log("The result of the match was 0-2");
} else if (userCountry.toLowerCase() === "colombia" || userCountry.toLowerCase() === "ecuador") {
    console.log("The result of the match was 6-1");
} else if (userCountry.toLowerCase() === "paraguay" || userCountry.toLowerCase() === "bolivia") {
   console.log("The result of the match was 2-2");
} else if (userCountry.toLowerCase() === "venezuela" || userCountry.toLowerCase() === "chile") {
    console.log("The result of the match was 2-1");
} else if (userCountry.toLowerCase() === "argentina" || userCountry.toLowerCase() === "perú") {
    console.log("The result of the match was 0-2");
} else {
    console.log("The country you search, doesn't play today.");
}

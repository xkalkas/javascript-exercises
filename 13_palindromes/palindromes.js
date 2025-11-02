const palindromes = function (str) { 
    let finalString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
	let length = finalString.length-1;
    let reverse = "";
    for(let i=length; i>=0; i--){
        reverse = reverse + finalString.at(i);

    }
    return (finalString===reverse);
};

// Do not edit below this line
module.exports = palindromes;

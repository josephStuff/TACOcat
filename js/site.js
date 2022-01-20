


// ----------PULL USER INPUT----------

function getResults() {
    document.getElementById("alert").classList.add("invisible");    
    let userString = document.getElementById("theInput").value;
    let isPalindrome = checkForPalindrome(userString);
    displayData(isPalindrome);
    
}

// -------------------THIS GENERATES DATA -------------

// function isPalindrome (userString) {
//   let revString = "";

//   for (let i = userString.length - 1; i >= 0; i--) {
//     revString += userString[i];
//   }

//   return revString;
// }

function checkForPalindrome(userString) {
  userString = userString.toLowerCase();

  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let revString = "";
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];

  }

  if (revString !== userString) {
    return false;
  } else {
    return true;
  }


}

// ------------------------ DISPLAY THE REVERSED STRING TO PAGE --------

function displayData(isPalindrome) {

        // document.getElementById("alert").classList.remove("alert-success")
        // document.getElementById("alert").classList.remove("alert-danger");

    if (isPalindrome == true) {

        document.getElementById("msg").innerHTML = `Your string reversed is a Palindrome!`;
        document.getElementById("alertHeader").innerHTML = "Well Done!" ;
        document.getElementById("msg").innerHTML = `Your phrase is a Palendrome!` ;
    }
    else {

        document.getElementById("msg").innerHTML = `Your string reversed is NOT  a Palindrome!`;
        document.getElementById("alertHeader").innerHTML = "OH NO!";
        document.getElementById("msg").innerHTML =  `Your string is NOT a Palindrome` ;
    }

    
    //   document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //   document.getElementById("alert").classList.remove("d-none");
}


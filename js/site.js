// ----------PULL USER INPUT----------

function getResults() {
  document.getElementById("alert").classList.add("d-none");
  let userString = document.getElementById("theInput").value;
  let returnObj = checkForPalindrome(userString);

  displayData(returnObj);
}

// -------------------THIS GENERATES DATA -------------

function checkForPalindrome(userString) {
  userString = userString.toLowerCase();
  let isPalindrome = false;
  let returnObj = {};
  

  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  let revString = "";
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  if (revString !== userString) {
    isPalindrome = false;
  } else {
    isPalindrome = true;
  }

  returnObj["isPalindrome"] = isPalindrome;
  returnObj["revString"] = revString;

  return true;

}

// ------------------------ DISPLAY THE REVERSED STRING TO PAGE --------

function displayData(returnObj) {

  document.getElementById("alert").classList.add("alert-success")
  document.getElementById("alert").classList.add("alert-danger");

  if (returnObj(["isPalindrome"]) == true) {
    document.getElementById("msg").innerHTML = `Your string reversed is a Palindrome!`;
    document.getElementById("alertHeader").innerHTML = "Well Done!";
    document.getElementById("msg").innerHTML = `Your phrase is a Palendrome!<br>Your reversed string is:${returnObj["revString"]}`;
  } else {
    document.getElementById("msg").innerHTML = `Your string reversed is NOT  a Palindrome!`;
    document.getElementById("alertHeader").innerHTML = "OH NO!";
    document.getElementById("msg").innerHTML = `Your string is NOT a Palindrome<br>Your reversed string is:${returnObj["revString"]};`;
  }


  document.getElementById("alert").classList.remove("d-none");
}

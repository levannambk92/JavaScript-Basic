
// TESTING ONE BY ONE I DID, PLEASE USE THIS '/* */'
// UPDATE  16.03.2020

var score = 7.2;

// 1ST WAY :
if (score >= 5) 
    alert('Pass');

if (score < 5) 
    alert('fail');

// 2RD WAY :
if (score >= 5)
    alert ('pass');
else
    alert('fail');

// 3TH WAY :
if (score >= 8.5)
    alert ('A+ : Excellent');

if (score >= 7.5 && score < 8.5)
    alert ('A : Good');

if (score >= 6 && score < 7.5)
    alert ('B+');

if (score >=5 && score < 6)
    alert ('B');

if (score < 5)
    alert ('fail');

// 4TH WAY :
if (score >=0 && score <= 10) {
    if (score >= 8.5)
        alert ('A+ : Excellent');
    else if (score >= 7.5 && score < 8.5)
        alert ('A : Good');
    else if (score >= 6 && score < 7.5)
        alert ('B+');
    else if (score >= 5 && score < 6)
        alert ('B');
    else 
        alert('fail');
}
else
    alert ('Score should be from 0 to 10');

// 5TH WAY :
if (score >=0 && score <= 10) {
    if (score >= 8.5)
        alert ('A+ : Excellent');
    else if (score >= 7.5)
        alert ('A : Good');
    else if (score >= 6)
        alert ('B+');
    else if (score >= 5)
        alert ('B');
    else 
        alert('fail');
}
else
    alert ('Score should be from 0 to 10');



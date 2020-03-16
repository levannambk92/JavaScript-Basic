// QUARTER = Q
// 1ST QUARTER = Q1....

var month = 10;

//1ST WAY
switch (month) {
    case 1: alert ('Q1');break;
    case 2: alert ('Q1');break;
    case 3: alert ('Q1');break;
    case 4: alert ('Q2');break;
    case 5: alert ('Q2');break;
    case 6: alert ('Q2');break;
    case 7: alert ('Q3');break;
    case 8: alert ('Q3');break;
    case 9: alert ('Q3');break;
    case 10: alert ('Q4');break;
    case 11: alert ('Q4');break;
    case 12: alert ('Q4');
}

// 2RD WAY
switch (month) {
    case 1:
    case 2:
    case 3: alert ('Q1');break;
    case 4: 
    case 5: 
    case 6: alert ('Q2');break;
    case 7: 
    case 8: 
    case 9: alert ('Q3');break;
    case 10: 
    case 11: 
    case 12: alert ('Q4');break;
    default: alert ('Month must be from 1 to 12');
}

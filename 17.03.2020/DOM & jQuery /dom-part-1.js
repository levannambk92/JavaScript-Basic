function changeDiv() {
    // Select :
//    let a = document.getElementById('d1');
    let a = document.querySelectorAll('.card');


    // Change HTML :
//    a.innerHTML = '<h1>New content</h1>';
//    a.innerHTML = a.innerHTML + '23';

    // Change CSS :
//    a.classList.toggle('changeText');
//    a.style.color = 'red';
//   a.style.border = '5px solid green';

    
    // Change attribute :
//    a.className = 'deck card';
//    a.title = 'More desc';
//    a.classList.toggle('deck');

//    let b = document.getElementById('pass');
//    alert(b.value); // get
//    b.value = '12345'; // set

    // querySelector 
//    let c = document.querySelector('#d2');
//    let c = document.querySelector('.card');
//    c.classList.toggle('deck');


    let len = a.length;
    for(let i = 0 ; i < (len - 0); i++) {
        a[i].classList.toggle('deck');
    }
}


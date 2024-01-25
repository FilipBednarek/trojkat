const btn = document.querySelector('#btn');

let arr = [];

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const first = document.querySelector('#first');
  const second = document.querySelector('#second');
  const third = document.querySelector('#third');
  const display = document.querySelector('#display');


  if (Number.isNaN(Number(first.value)) == false && first.value != "" && Number.isNaN(Number(second.value)) == false && second.value != ""  && Number.isNaN(Number(third.value)) == false && third.value != "" ) {

    const arr = [first.value, second.value,third.value];
      
    const [a, b, c] = arr.sort((a, b) => a - b);
    console.log(a, b, c);

    if ( a**2 + b**2 > c**2) {
        display.innerHTML = `<a href="/img/ostry.jpg"></a>`
        console.log('1')
    } if (a**2+ b**2 == c**2) {
        display.innerHTML = `<a href="/img/prosty.jpg"></a>`
        console.log('2')
    } else {
        display.innerHTML = `<a href="/img/rozwarty.jpg"></a>`
        console.log('3')
    }

    console.log('jest liczba');
  } else {
    display.innerHTML = `Wpisz poprawnie liczby`;
    console.log('nie ma');
  }


});

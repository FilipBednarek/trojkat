const btn = document.querySelector('#btn');
const display = document.querySelector('#display');

let arr = [];

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const first = document.querySelector('#first');
  const second = document.querySelector('#second');
  const third = document.querySelector('#third');

  if (
    Number.isNaN(Number(first.value)) == false &&
    first.value != '' &&
    Number.isNaN(Number(second.value)) == false &&
    second.value != '' &&
    Number.isNaN(Number(third.value)) == false &&
    third.value != ''
  ) {
    const arr = [
      parseInt(first.value),
      parseInt(second.value),
      parseInt(third.value),
    ];

    const [a, b, c] = arr.sort((a, b) => a - b);
    // console.log(a + b + c);

    let h = (a + b + c) * 0.5;
    console.log(h);

    let aa = a.toFixed(2);
    let bb = b.toFixed(2);
    let cc = c.toFixed(2);

    let P = Math.sqrt(h * (h - a) * (h - b) * (h - c));
    if (Math.pow(a, 2) + Math.pow(b, 2) > Math.pow(c, 2)) {
      display.innerHTML = `<img src="/img/ostry.jpg"/>
        <p>Pole trójkąta wynosi: ${P}  </p>`;
      // console.log('1')
    }
    if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
      display.innerHTML = `<img src="/img/prosty.jpg"/>
        <p>Pole trójkąta wynosi: ${P}  </p>`;
      // console.log('2')
    } else if (Math.pow(a, 2) + Math.pow(b, 2) < Math.pow(c, 2)) {
      display.innerHTML = `<img src="/img/rozwarty.jpg"/>
        <p>Pole trójkąta wynosi: ${P}  </p>`;
      // console.log('3')
    }
    // console.log('jest liczba');
  } else {
    display.innerHTML = `Wpisz poprawnie liczby`;
    // console.log('nie ma');
  }
});

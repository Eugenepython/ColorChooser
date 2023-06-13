const dropdownMenu = document.getElementById('dropdownMenu');
let color = ''
let colorMode = ''

let firstColor = window.getComputedStyle(document.getElementById('first')).getPropertyValue('background-color');
let hexCode = firstColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('').toUpperCase();
one.innerHTML = `#${hexCode}`


let secondColor = window.getComputedStyle(document.getElementById('second')).getPropertyValue('background-color');
let hexCode2 = secondColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('').toUpperCase();
two.innerHTML = `#${hexCode2}`

let thirdColor = window.getComputedStyle(document.getElementById('third')).getPropertyValue('background-color');
let hexCode3 = thirdColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('').toUpperCase();
three.innerHTML = `#${hexCode3}`

let fourthColor = window.getComputedStyle(document.getElementById('fourth')).getPropertyValue('background-color');
let hexCode4 = fourthColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('').toUpperCase();
four.innerHTML = `#${hexCode4}`

let fifthColor = window.getComputedStyle(document.getElementById('fifth')).getPropertyValue('background-color');
let hexCode5 = fifthColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('').toUpperCase();
five.innerHTML = `#${hexCode5} `


colorPicker.addEventListener('input', (event) => {
  color = event.target.value.slice(1);
  //console.log(color)
  //console.log("the name of the chosen color is " + color + " now let us try and find it on this API")
})


dropdownMenu.addEventListener('change', function() {
  let selectedOption = dropdownMenu.value;
  colorMode = selectedOption
  //console.log(colorMode)
});

getScheme.addEventListener('click', function() {
    let colors = [];
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorMode}&count=5`)
    .then(res => res.json())
    .then(data => {
    data.colors.forEach(col => {
      colors.push(col.hex.value);
    });
    console.log(colors); 
    first.style.backgroundColor = colors[0];
    second.style.backgroundColor = colors[1];
    third.style.backgroundColor = colors[2];
    fourth.style.backgroundColor = colors[3];
    fifth.style.backgroundColor = colors[4];
    one.innerHTML = `${colors[0]} <br> <div onclick="copyToClipboard('${colors[0]}')">&#128203;</div>`
    two.innerHTML = `${colors[1]} <br> <div onclick="copyToClipboard('${colors[1]}')">&#128203;</div>`
    three.innerHTML = `${colors[2]} <br> <div onclick="copyToClipboard('${colors[2]}')">&#128203;</div>`
    four.innerHTML = `${colors[3]} <br> <div onclick="copyToClipboard('${colors[3]}')">&#128203;</div>`
    five.innerHTML = `${colors[4]} <br> <div onclick="copyToClipboard('${colors[4]}')">&#128203;</div>`
    });
});


    function copyToClipboard(y) {
      navigator.clipboard.writeText(y)
    }







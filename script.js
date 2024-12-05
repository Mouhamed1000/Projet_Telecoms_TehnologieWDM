var input2 = document.getElementsByName('answer2')[0];
var input3 = document.getElementsByName('answer3')[0];
var input4 = document.getElementsByName('answer4')[0];

var valeur1, valeur2, valeur3, valeur4;

var bouton0 = document.getElementById('button0');
var bouton1 = document.getElementById('button1');
var bouton2 = document.getElementById('button2');
var bouton3 = document.getElementById('button3');
var bouton4 = document.getElementById('button4');
var bouton5 = document.getElementById('button5');

var section0 = document.getElementsByClassName('section0')[0];
var section1 = document.getElementsByClassName('section1')[0];
var section2 = document.getElementsByClassName('section2')[0];
var section3 = document.getElementsByClassName('section3')[0];
var section4 = document.getElementsByClassName('section4')[0];
var section5 = document.getElementsByClassName('section5')[0];

var element = document.getElementsByClassName('element')[0];

var output2 = document.getElementById('output2');
var output3 = document.getElementById('output3');
var output4 = document.getElementById('output4');

// var bouton2 = document.getElementById('button')

bouton0.addEventListener('click', () => {

    section0.style.display = 'none';
    section1.style.display = 'block';
    
})

bouton1.addEventListener('click', () => {

    if (document.getElementById('a').checked) {
        valeur1 = document.getElementById('a').value;

        input2.style.value = '18';
        input2.max = '18';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output2.textContent = '18';

        // valeur2 = output2.textContent;

       }
       if (document.getElementById('b').checked) {
        valeur1 = document.getElementById('b').value;

        input2.style.value = '160';
        input2.max = '160';
        input2.min = '80';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output2.textContent = '80';

        // valeur2 = output2.textContent;

       }
       if (document.getElementById('c').checked) {
        valeur1 = document.getElementById('c').value;

        input2.style.value = '400';
        input2.max = '400';
        input2.min = '0';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output2.textContent = '400';

        // valeur2 = output2.textContent;

       }

    section1.style.display = 'none';
    section2.style.display = 'block';
})

bouton2.addEventListener('click', () => {
    
    valeur2 = output2.textContent;

    section2.style.display ='none';
    section3.style.display = 'block';

    if (valeur1 == "CWDM") {

        input3.style.value = '25';
        input3.max = '25';
        input3.min = '20';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output3.textContent = '25';
    }
    else if (valeur1 == "DWDM") {

        input3.style.value = '1.6';
        input3.max = '1.6';
        input3.min = '0.4';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output3.textContent = '1.6';
    }
    else {
     
        input3.style.value = '0.08';
        input3.max = '0.08';
        // input3.step = '0.01';
        input3.min = '0.08';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output3.textContent = '0.08';
    }
    
})

bouton3.addEventListener('click', () => {
    
    valeur3 = output3.textContent;

    section3.style.display = 'none';
    section4.style.display = 'block';

    if (valeur1 == "CWDM") {

        input4.style.value = '1620';
        input4.max = '1620';
        input4.min = '1260';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output4.textContent = '1260';
    }
    else if ((valeur1 == "DWDM" )|| (valeur1 == "UWDM") ) {

        input4.style.value = '1600';
        input4.max = '1600';
        input4.min = '1500';
        // input2.style.oninput = input2.style.value + " = " + input2.style.value;
        output4.textContent = '1500';
    }
})

bouton4.addEventListener('click', () => {

    valeur4 = output4.textContent;

    section4.style.display = 'none';
    section5.style.display = 'block';

    let λ = new Array();

    λ[0] = valeur4;

    for (let i=1; i<valeur2; i++ ) {
        λ[i] = λ[0] + ((i-1) * (valeur3));
    }

    for (let i = 0; i < valeur2; i++ ) {

        var el1 = document.createElement('tr');

        el1.innerHTML = '<tr> <td>' + ' λ (' + i + ') </td> <td>'  + λ[i]+ ' nm' + '</td> <tr/>';   

        element.appendChild(el1);
    }

bouton5.addEventListener('click', () => {

    section5.style.display = 'none';
    section0.style.display = 'block';

})

})


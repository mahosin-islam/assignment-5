// header section
//incrasing  heard button 
const heard=document.querySelectorAll('.hom');
let sum=0;
for(let hear of heard){
    hear.addEventListener('click',function(){
        sum++;
        document.getElementById('mama').innerText=sum;

    })
}
//incrasing  copy button 
const appe=document.querySelectorAll('.about');
let cope=0;
for(let app of appe){
    app.addEventListener('click',function(){
        cope++;
        document.getElementById('copy-point').innerText=cope;

    })
}


///call button desin
let array = [];

// first row-area ///
document.getElementById('call-btn1').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling National Emergency Number 999')
        const add = {
            name: 'National Emetrgency',
            number: 999,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);

    }
    else {
        alert('your coint is less');
    }

})
document.getElementById('call-btn2').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling National Emergency Number 999')

        const add = {
            name: 'Police Helpline Number',
            number: 999,
            date: new Date().toLocaleTimeString(),
        }

        array.push(add);
    }
    else {
        alert('your coint is less');
    }
})
document.getElementById('call-btn3').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling National Emergency Number 999')
        const add = {
            name: 'Fire Service Number',
            number: 999,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);
    }
    else {
        alert('your coint is less');
    }

})
//second row-ara

document.getElementById('call-btn4').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling Ambulance service Number 1994.999999')
        const add = {
            name: 'Ambulance',
            number: 1994.999999,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);

    }
    else {
        alert('your coint is less');
    }

})
document.getElementById('call-btn5').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling  Women & Child Helpline Number 109')

        const add = {
            name: 'Women  & Child Helpline',
            number: 109,
            date: new Date().toLocaleTimeString(),
        }

        array.push(add);
    }
    else {
        alert('your coint is less');
    }
})
document.getElementById('call-btn6').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling Anti-Corruption Number 999')
        const add = {
            name: 'Anti-Corruption',
            number: 106,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);
    }
    else {
        alert('your coint is less');
    }

})

// third area

document.getElementById('call-btn7').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling Electricity Helpline Number 16216')
        const add = {
            name: 'Electricity Helpline',
            number: 16216,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);

    }
    else {
        alert('your coint is less');
    }

})
document.getElementById('call-btn8').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling Brack Helpline Number 16445')

        const add = {
            name: 'Brack Helpline ',
            number: 16216,
            date: new Date().toLocaleTimeString(),
        }

        array.push(add);
    }
    else {
        alert('your coint is less');
    }
})
document.getElementById('call-btn9').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard > 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('❤ caling Bangladesh Reilway Helpline  Number 163')
        const add = {
            name: 'Bangladesh Reilway Helpline',
            number: 163,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);
    }
    else {
        alert('your coint is less');
    }

})



// aside area////////// ||||||||||
const cards = document.querySelectorAll('.common');
const histor = document.getElementById('history-btn');
for (let card of cards) {
    card.addEventListener('click', function () {


        for (const add of array) {
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="bg-gray-100 rounded-[10px] flex justify-between items-center p-1 my-2 w-full">
                     <div>
                        <h1 class="font-semibold"> ${add.name}</h1>
                        <h2 class="text-1xl font-semibold">${add.number}</h2>
                     </div>
                     <span class="text-gray-700">${add.date}</span>
                  </div>
    `,
                histor.appendChild(div);
            array = [];
        }

    })
}
///clean history

document.getElementById('clean').addEventListener('click', function () {
    array = [];
    document.getElementById('history-btn').innerHTML = '';
}) 
function succed(copebtn, textbtn){
    document.getElementById(copebtn).addEventListener('click',function(){
     let write=document.getElementById(textbtn).innerText
    })

}

// copy-desing by using function 
function addcopy(button, texte){
    document.getElementById(button).addEventListener('click',function(){
      let pora=document.getElementById(texte).innerText;
      navigator.clipboard.writeText(pora);
      if(pora){
        alert('you are succed');
      }
      else{
        alert('have a wrond')
      }
    }
)}

addcopy('copy-btn1','text1' )
addcopy('copy-btn2','text2' )
addcopy('copy-btn3','text3' )
addcopy('copy-btn4','text4' )
addcopy('copy-btn5','text5' )
addcopy('copy-btn6','text6' )
addcopy('copy-btn7','text7' )
addcopy('copy-btn8','text8' )
addcopy('copy-btn9','text9' )

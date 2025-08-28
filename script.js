// header section
//incrasing  heard button 
const heard = document.querySelectorAll('.hom');
let sum = 0;
for (let hear of heard) {
    hear.addEventListener('click', function () {
        sum++;
        document.getElementById('mama').innerText = sum;

    })
}
//incrasing  copy button 
const appe = document.querySelectorAll('.about');
let cope = 0;
for (let app of appe) {
    app.addEventListener('click', function () {
        cope++;
        document.getElementById('copy-point').innerText = cope;

    })
}


///call button desin
let array = [];

document.getElementById('call-btn1').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Calling National Emergency Number 999')
        const add = {
            name: 'National Emetrgency',
            number: 999,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);

    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }

})
document.getElementById('call-btn2').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Caling National Emergency Number 999')

        const add = {
            name: 'Police Helpline Number',
            number: 999,
            date: new Date().toLocaleTimeString(),
        }

        array.push(add);
    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }
})
document.getElementById('call-btn3').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Calling National Emergency Number 999')
        const add = {
            name: 'Fire Service Number',
            number: 999,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);
    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');
    }

})
//second row-ara

document.getElementById('call-btn4').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Calling Ambulance service Number 1994.999999')
        const add = {
            name: 'Ambulance',
            number: 1994.999999,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);

    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }

})
document.getElementById('call-btn5').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Calling  Women & Child Helpline Number 109')

        const add = {
            name: 'Women  & Child Helpline',
            number: 109,
            date: new Date().toLocaleTimeString(),
        }

        array.push(add);
    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }
})
document.getElementById('call-btn6').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert(' Calling Anti-Corruption Number 999')
        const add = {
            name: 'Anti-Corruption',
            number: 106,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);
    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }

})

// third area

document.getElementById('call-btn7').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert(' Calling Electricity Helpline Number 16216')
        const add = {
            name: 'Electricity Helpline',
            number: 16216,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);

    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }

})
document.getElementById('call-btn8').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Calling Brack Helpline Number 16445')

        const add = {
            name: 'Brack Helpline ',
            number: 16216,
            date: new Date().toLocaleTimeString(),
        }

        array.push(add);
    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');

    }
})
document.getElementById('call-btn9').addEventListener('click', function () {
    const hearCard = Number(document.getElementById('hard-cart').innerText);
    if (hearCard >= 20) {
        let resul = hearCard - 20;
        (document.getElementById('hard-cart').innerText) = resul;
        alert('Calling Bangladesh Reilway Helpline  Number 163')
        const add = {
            name: 'Bangladesh Reilway Helpline',
            number: 163,
            date: new Date().toLocaleTimeString(),
        }
        array.push(add);
    }
    else {
        alert('❌আপনার পযর্প্ত কয়েন নেই কল করতে কমপক্ষে  ২০ কয়েন লাগে');
    }

})



// aside area dwsing//
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

//copy text desing
document.getElementById('copy-btn1').addEventListener('click',function(){
     const tex= document.getElementById('text1').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 999');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn2').addEventListener('click',function(){
     const tex= document.getElementById('text2').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 999');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn3').addEventListener('click',function(){
     const tex= document.getElementById('text3').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 999');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn4').addEventListener('click',function(){
     const tex= document.getElementById('text4').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 1994-999999');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn5').addEventListener('click',function(){
     const tex= document.getElementById('text5').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 109');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn6').addEventListener('click',function(){
     const tex= document.getElementById('text6').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 106');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn7').addEventListener('click',function(){
     const tex= document.getElementById('text7').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 16216');
        }
        else {
            alert('do not copy number')
        }
})
document.getElementById('copy-btn8').addEventListener('click',function(){
     const tex= document.getElementById('text8').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 16445');
        }
        else {
        alert('do not copy number')
        }
})
document.getElementById('copy-btn9').addEventListener('click',function(){
     const tex= document.getElementById('text9').innerText;
      navigator.clipboard.writeText(tex);
        if (tex) {
            alert('Copy number is 163');
        }
        else {
            alert('do not copy number')
        }
})


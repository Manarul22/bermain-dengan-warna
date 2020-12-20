const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function(){
    // document.body.style.backgroundColor = 'orange';
    // document.body.setAttribute('class', 'orange');
    document.body.classList.toggle('orange');
})

//Membuat button di javascript
const tRandomWarna = document.createElement('button');
const tTextRandomWarna = document.createTextNode('Random Warna');

tRandomWarna.appendChild(tTextRandomWarna);
//setAttribute button Random Warna
tRandomWarna.setAttribute('type', 'button');
//masukan button Random Warna setelah Ubah Warna
tUbahWarna.after(tRandomWarna);
//memasukan events click
tRandomWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    console.log(r)
    document.body.style.backgroundColor = `rgba(${r},${g},${b})`;
})
// //CARA BIASA
// //ambil sMerah sHijau dan sBiru
// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]')

// //random Warna
// sMerah.addEventListener('input', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     document.body.style.backgroundColor = `rgb(${r},${g},100)`;
// });

// sHijau.addEventListener('input', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     document.body.style.backgroundColor = `rgb(${r},${g},100)`;
// });

// sBiru.addEventListener('input', function(){
//     const r = sMerah.value;
//     const g = sHijau.value;
//     const b = sBiru.value;
//     document.body.style.backgroundColor = `rgb(${r},${g},${b})`
// });

//CARA lebih EFEKTIF
//ambil semua elemen sMerah sHijau dan sBiru
const sWarna = document.querySelectorAll("input[type='range']");

//jika elemen digeser akan melakukan sebuah fungsi slider perubah warna background
sWarna.forEach(function(slider){
    slider.addEventListener('input', function(){
        const r = document.querySelector("input[name='sMerah']").value;
        const g = document.querySelector("input[name='sHijau']").value;
        const b = document.querySelector("input[name='sBiru']").value;
        console.log(r,g,b);
        document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    });
});

//berubah warna ketika mouse bergerak
document.body.addEventListener('mousemove', function(event){
    const xPosition = Math.round((event.clientX / window.innerWidth) * 255);
    const yPosition = Math.round((event.clientY / window.innerHeight) * 255);
    console.log(xPosition,yPosition)
    document.body.style.backgroundColor = `rgb(${xPosition}, ${yPosition}, 100)`;
})


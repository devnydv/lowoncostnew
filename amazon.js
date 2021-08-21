/*let maintop=localStorage.getItem('topd'); */
let data;
let maintop;
let val;
let getstr = document.getElementById('hnam').textContent;
let strtrim = getstr.trim();
let sub = strtrim.substr(16, 4);

if (sub === 'Amaz') {
  maintop = 'amatop'
  val = 'ama'
  val1 = 'Amazon'
} else if (sub === 'Flip') {
  maintop = 'fliptop'
  val = 'flip'
  val1 = 'Flipkart'
} else if (sub === 'Mynt') {
  maintop = 'myntop'
  val = 'myn'
  val1 = "Myntra"
} else if (sub === 'Ajio') {
  maintop = 'ajiotop'
  val = 'ajio'
  val1='Ajio'
}
console.log(val1)




//firebase.database().ref(`${maintop}`).
firebase.database().ref('topdeals/' + `${maintop}`).
  on('value', function (snapshot) {
    let data = snapshot.val()
    let key = Object.keys(data);


    for (let i = 0; i < key.length; i++) {



      firebase.database().ref('topdeals/' + `${maintop}/` + key[i]).
        once('value', function (snapshot) {
          let fd = snapshot.val();

          //console.log(fd)



          let elem = document.getElementById('pate');
          let a = document.createElement('a');
          a.setAttribute('href', fd.link);
          let mydiv = document.createElement('div')

          let img = document.createElement('img')

          img.setAttribute('src', fd.image);
          img.setAttribute('alt', "img");
          mydiv.appendChild(img);
          let nam = document.createElement('p');
          nam.innerText = key[i];
          mydiv.appendChild(nam)
          let p = document.createElement('p')
          p.innerText = fd.price
          mydiv.appendChild(p)

          elem.appendChild(a);
          a.appendChild(mydiv);
          //console.log(elem)

        })


    }
    let load = document.getElementById('loader');
    load.remove();

  });




function ama(btm) {

  val2 = btm.value
  let rempate = document.getElementById('pate');
  let remtop = document.getElementById('top');
  // remtop.remove()
  //  rempate.remove()
  let bidiv = document.getElementById('bigdiv');
  bidiv.innerHTML = ''


  firebase.database().ref(`${val1}/` + `${val2}/`).
    on('value', function (snapshot) {
      let fd = snapshot.val();
      let keyw = Object.keys(fd)

      for (let i = 0; i < keyw.length; i++) {


        let sdiv = document.getElementById('bigdiv');
        let cpara = document.createElement('p');
        cpara.innerText = keyw[i];
        sdiv.appendChild(cpara);
        cpara.setAttribute('class', 'top')
        let cpate = document.createElement('div')
        cpate.setAttribute('class', 'pate');
        sdiv.appendChild(cpate);








        firebase.database().ref(`${val1}/` + `${val2}/` + keyw[i]).
          once('value', function (snapshot) {
            let fdd = snapshot.val();
            let newkey = Object.keys(fdd);


            for (j = 0; j < newkey.length; j++) {
              firebase.database().ref(`${val1}/` + `${val2}/` + `${keyw[i]}/` + `${newkey[j]}`).
                on('value', function (snapshot) {
                  let fd1 = snapshot.val();




                  let elem = document.getElementsByClassName('pate');
                  //for(c=0; c<elem.length; c++){

                  // console.log('n')










                  let a = document.createElement('a');
                  a.setAttribute('href', fd1.link);
                  a.setAttribute('target', "_blank");
                  a.setAttribute('rel', "nofollow");
                  let mydiv = document.createElement('div')

                  let img = document.createElement('img')

                  img.setAttribute('src', fd1.image);
                  mydiv.appendChild(img);
                  let nam = document.createElement('p');


                  nam.innerText = newkey[j];

                  mydiv.appendChild(nam)
                  let pop = document.createElement('p')
                  pop.innerText = fd1.price
                  mydiv.appendChild(pop)

                  elem[i].appendChild(a);
                  a.appendChild(mydiv);












                  //}           
                })





            }
          })
      }

    })

}

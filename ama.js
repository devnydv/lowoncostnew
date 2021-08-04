/*function setama(){
  localStorage.setItem("nextp","ama")
};
function setflip(){
  localStorage.setItem("nextp","flip")
};
function setmyn(){
  localStorage.setItem("nextp","myn")
};
function setajio(){
  localStorage.setItem("nextp","ajio")
};*/

let maintop;
let val;
let getstr=document.getElementById('hnam').textContent;
let strtrim= getstr.trim();
let sub= strtrim.substr(16,4)
console.log(sub)
if(sub==='Amaz'){
  maintop='amatop'
  val='ama'
}else if (sub === 'Flip') {
  maintop = 'amatop'
  val = 'flip'
}else if (sub === 'Mynt') {
  maintop = 'newlist'
  val = 'myn'
}else if (sub === 'Ajio') {
  maintop = 'newlist'
  val = 'ajio'
}


firebase.database().ref(`${maintop}`).
  on('value', function (snapshot) {
    let data = snapshot.val()
    let key = Object.keys(data);
    //console.log(data)

    for (let i = 0; i < key.length; i++) {





      firebase.database().ref(`${maintop}/`+ key[i]).
        once('value', function (snapshot) {
          let fd = snapshot.val();

          
          


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
  

  });










//function ama(btm) {
 /* val = localStorage.getItem("nextp"); */
  let mbut = document.getElementById("but")
  mbut.remove();



  firebase.database().ref(val).
    on('value', function (snapshot) {
      let data = snapshot.val()
      let key = Object.keys(data);


      let fa = document.getElementById('page-content');
      let newdiv = document.createElement('div');
      newdiv.setAttribute('id', 'but');


      for (let i = 0; i < key.length; i++) {



        firebase.database().ref(`${val}/` + key[i]).
          once('value', function (snapshot) {
            let fd = snapshot.val();

            //keyw = Object.keys(fd)



            //  let butelem = document.getElementById('but');
            let newbut = document.createElement('button');
            newbut.setAttribute('value', key[i])
            newbut.setAttribute('onclick', 'me(this)')
            newbut.setAttribute('id', 'mybut')
            newbut.innerText = key[i];
            newdiv.appendChild(newbut);
            let pos = fa.firstElementChild.nextElementSibling.nextElementSibling;
            fa.insertBefore(newdiv, pos);
            // console.log(newdiv)


          })

      
      
    
    }
       let loader = document.getElementById('loader');
       loader.remove();
       
    })

// }





function me(btm) {
  val2 = btm.value

  // console.log(val2)

let topp =document.getElementById('top')
topp.innerHTML=val2;



  let rem = document.getElementById('pate');
  rem.remove();
  //  let fdiv = document.getElementById('fload');
  //  let load = document.createElement('div');
  //  load.setAttribute('id', 'loader');
  //  fload.appendChild(load);

  let fa = document.getElementById('bigdiv');
  let newdiv = document.createElement('div');
  newdiv.setAttribute('id', 'pate');
  fa.appendChild(newdiv);

  //console.log(keyw)


        firebase.database().ref(`${val}/` +`${val2}/`).
          once('value', function (snapshot) {
            let fd = snapshot.val();

            let keyw = Object.keys(fd)

          
            //console.log(val)
            // console.log(val2)


            for (let i = 0; i < keyw.length; i++) {

              firebase.database().ref(`${val}/` + `${val2}/` + keyw[i]).
                once('value', function (snapshot) {
                  let fdd = snapshot.val();



                  let elem = document.getElementById('pate');

                  let a = document.createElement('a');
                  a.setAttribute('href', fdd.link);
                  a.setAttribute('target', "_blank");
                  a.setAttribute('rel', "nofollow");
                  let mydiv = document.createElement('div')

                  let img = document.createElement('img')

                  img.setAttribute('src', fdd.image);
                  mydiv.appendChild(img);
                  let nam = document.createElement('p');
                  nam.innerText = keyw[i];
                  mydiv.appendChild(nam)
                  let p = document.createElement('p')
                  p.innerText = fdd.price
                  mydiv.appendChild(p)

                  elem.appendChild(a);
                  a.appendChild(mydiv);
                  //console.log(elem)
                  

                })
              }
              
      })
      



    


  }

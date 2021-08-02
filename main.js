let link;
let name;
let image;
let price;

function setama(){
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
};








firebase.database().ref('newlist').
  on('value', function (snapshot) {
    let data = snapshot.val()
    let key = Object.keys(data);
    //console.log(data)

    for (let i = 0; i < key.length; i++) {





      firebase.database().ref('newlist/' + key[i]).
        once('value', function (snapshot) {
          let fd = snapshot.val();

          
          // link = fd.link
          
          // price = fd.price
          // image = fd.image


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
          p.innerText =fd.price
          mydiv.appendChild(p)

          elem.appendChild(a);
          a.appendChild(mydiv);
          //console.log(elem)

        })

        
    }
    let load = document.getElementById('p2');
    load.remove();
  });







// let val;


// function ama(btm) {
//   val = btm.value;
//   let mbut = document.getElementById("but")
//   mbut.remove();



//   firebase.database().ref(val).
//     on('value', function (snapshot) {
//       let data = snapshot.val()
//       let key = Object.keys(data);


//       let fa = document.getElementById('page-content');
//       let newdiv = document.createElement('div');
//       newdiv.setAttribute('id', 'but');


//       for (let i = 0; i < key.length; i++) {



//         firebase.database().ref(`${val}/` + key[i]).
//           once('value', function (snapshot) {
//             let fd = snapshot.val();

//             //keyw = Object.keys(fd)



//             //  let butelem = document.getElementById('but');
//             let newbut = document.createElement('button');
//             newbut.setAttribute('value', key[i])
//             newbut.setAttribute('onclick', 'me(this)')
//             newbut.setAttribute('id', 'mybut')
//             newbut.innerText = key[i];
//             newdiv.appendChild(newbut);
//             let pos = fa.firstElementChild.nextElementSibling.nextElementSibling;
//             fa.insertBefore(newdiv, pos);
//             // console.log(newdiv)

            
//           })
          
//       }
      
//     })
    
// }





// function me(btm) {
//   val2 = btm.value

//   // console.log(val2)

// let topp =document.getElementById('top')
// topp.innerHTML=val2;



//   let rem = document.getElementById('pate');
//   rem.remove();
//   // let fdiv = document.getElementById('fload');
//   // let load = document.createElement('div');
//   // load.setAttribute('id', 'loader');
//   // fload.appendChild(load);

//   let fa = document.getElementById('page-content');
//   let newdiv = document.createElement('div');
//   newdiv.setAttribute('id', 'pate');
//   fa.appendChild(newdiv);

//   //console.log(keyw)





//   firebase.database().ref(val).
//     on('value', function (snapshot) {
//       let data = snapshot.val()
//       let key = Object.keys(data);







//       for (let i = 0; i < key.length; i++) {

//         firebase.database().ref(`${val}/` + key[i]).
//           once('value', function (snapshot) {
//             let fd = snapshot.val();

//             let keyw = Object.keys(fd)


//             //console.log(val)
//             // console.log(val2)


//             for (let i = 0; i < keyw.length; i++) {

//               firebase.database().ref(`${val}/` + `${val2}/` + keyw[i]).
//                 once('value', function (snapshot) {
//                   let fdd = snapshot.val();





// // console.log(fdd.image)



//                   /* link= fdd.link
//                   name= keyw[i]
//                   price= fd.price
//                   image=fd.image*/
//                   //console.log(fdd.link)

//                   let elem = document.getElementById('pate');

//                   let a = document.createElement('a');
//                   a.setAttribute('href', fdd.link);
//                   a.setAttribute('target', "_blank");
//                   a.setAttribute('rel', "nofollow");
//                   let mydiv = document.createElement('div')

//                   let img = document.createElement('img')

//                   img.setAttribute('src', fdd.image);
//                   mydiv.appendChild(img);
//                   let nam = document.createElement('p');
//                   nam.innerText = keyw[i];
//                   mydiv.appendChild(nam)
//                   let p = document.createElement('p')
//                   p.innerText = fdd.price
//                   mydiv.appendChild(p)

//                   elem.appendChild(a);
//                   a.appendChild(mydiv);
//                   //console.log(elem)
                  

//                 })
                
//             }
            
//           })
          
//       }

      

//     })
    

// }

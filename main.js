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
    let loader = document.getElementById('loader');
    loader.remove();


  });








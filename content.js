console.log("chrome ext GO");

let filenames = [
  "mulch1.png",
  "mulch2.png",
  "mulch3.png",
  "mulch4.png",
  "mulch5.png",
  "mulch6.png",
  "mulch7.png",
  "mulch8.png",
  "mulch9.png",
  "mulch10.png",
  "mulch11.png",
  "mulch12.png",
  "mulch13.png",
  "mulch14.png",
  "mulch15.png",
  "mulch16.png",
  "mulch17.png",
  "mulch18.png",
  "mulch19.png",
  "mulch20.png",
  "mulch21.png",
  "mulch22.png",
  "mulch23.png"
];

let images = document.getElementsByTagName('img');
for (imgElt of images) {
  let r = Math.floor(Math.random() * filenames.length); 
  let file = `img/${filenames[r]}`;
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
}


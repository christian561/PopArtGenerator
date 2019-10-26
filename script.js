//Editable Variables
var count = 4;
var brightness = 1;
var saturation = 1;
var contrast = 2.3;
var imagesrc = document.getElementById("imageSrcInput").placeholder;

//where the art should render
var artContainer = document.getElementById("artContainer");

//get sliders
var sliderBrightness = document.getElementById("sliderBrightness");
var sliderContrast = document.getElementById("sliderContrast");
var sliderSaturation = document.getElementById("sliderSaturation");
var sliders = [sliderBrightness,sliderContrast,sliderSaturation]
//initial load
var currentSrc =''
renderImages(imagesrc)

//create and add images to DOM 
function renderImages(newestsrc){
  if(newestsrc != ''){
    console.log('dont update src')
    currentSrc =newestsrc
  }
  brightness = sliderBrightness.value
  contrast = sliderContrast.value
  saturation = sliderSaturation.value
  //clear container to make room for new art
  artContainer.innerHTML = '';
  //creating images and adding them to an array
  var art = []
  var artToAppend = ''
  for(var i =0;i<count;i++){
    art[i] = document.createElement("IMG")   
    //if no parameter then don't update the src
    
    art[i].src = currentSrc;
    art[i].style.filter = "brightness("+brightness/100+") saturate("+saturation/100+") contrast("+contrast/100+") hue-rotate("+Math.random()*360+"deg)";
    artToAppend = art[i]
    //add created images to DOM
    artContainer.appendChild(artToAppend)
  }
}


function updateImages(){
  //get new image url
  var newsrc = document.getElementById("imageSrcInput").value;
  
  if(newsrc != ''){
     renderImages(newsrc)
    document.getElementById("srcWarning").innerHTML = "Updated!";
  }
  else{
    document.getElementById("srcWarning").innerHTML = "Error: Can't be blank!";
  }
 
}

//add oninput listener function for rerender functionality to all sliders in array
for(var i =0;i<sliders.length;i++){
  sliders[i].oninput = function() {
    renderImages('');
  }
}
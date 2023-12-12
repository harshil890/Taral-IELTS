//code of phone menu
document.getElementById("menu_btn").addEventListener("click" , openmenu);
function openmenu(){
    document.getElementsByClassName("mobile_menu")[0].classList.toggle("visible");
  document.getElementsByClassName("phone_menu_cnt")[0].classList.toggle("phone_menu_cnt_active");  
};
// code of first img slider
{let ielts_imgs = []
for(i = 1; i < 22; i++){
  ielts_imgs.push("IELTS/" + " " + "(" + i + ").jpg")
}
var count = 0
function preieltsimg(){
  if(count == 0){count = ielts_imgs.length}
  else{
    count--
    return showimg()
  }
    
}
function nextieltsimg(){
  if(count == 20){count = -1}
  else{
    count++
    return showimg()
  }
}

function showimg(){
   document.getElementById("ielts_slide").setAttribute("src", ielts_imgs[count])
}
document.getElementById("pre").addEventListener("click",preieltsimg);
document.getElementById("nex").addEventListener("click",nextieltsimg);} 
//code of second img slider

{let canada_imgs = []
  for(i = 1; i < 22; i++){
    canada_imgs.push("CANADA/" + " " + "(" + i + ").jpg")
  }
  var count1 = 0
  function precanadaimg(){
    if(count1 == 0){count1 = canada_imgs.length}
    else{
      count1--
      return showimg()
    }
      
  }
  function nextcanadaimg(){
    if(count1 == 20){count1 = -1}
    else{
      count1++
      return showimg()
    }
  }
  
  function showimg(){
     document.getElementById("canada_slide").setAttribute("src", canada_imgs[count1])
  }
  document.getElementById("pre1").addEventListener("click",precanadaimg);
  document.getElementById("nex1").addEventListener("click",nextcanadaimg);} 

//code for usa img slider
{let usa_imgs = []
  for(i = 1; i < 22; i++){
    usa_imgs.push("USA/" + " " + "(" + i + ").jpg")
  }
  var count2 = 0
  function preusaimg(){
    if(count2 == 0){count2 = usa_imgs.length}
    else{
      count2--
      return showimg()
    }
      
  }
  function nextusaimg(){
    if(count2 == 20){count2 = -1}
    else{
      count2++
      return showimg()
    }
  }
  
  function showimg(){
     document.getElementById("usa_slide").setAttribute("src", usa_imgs[count2])
  }
  document.getElementById("pre2").addEventListener("click",preusaimg);
  document.getElementById("nex2").addEventListener("click",nextusaimg);} 






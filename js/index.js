function checkDay(){
  
  var dd = document.getElementById("inputDay");
  var mm = document.getElementById("inputMonth");
  var year = document.getElementById("inputYear").toString();

  var cc = parseInt(year.slice(0,2));
  var yy = parseInt(year.slice(2,4));
  
  var selector = document.getElementById("gender");
  var gender = selector.options[selector.selectedIndex].text;

  if(dd<=31 && dd>0){
    continue;
  }else{
    alert("Input a correct day");
    break;
  }

  if(mm>0 && mm<=12){
    continue;
  }else{
    alert("Input a correct month");
    break;
  }

  var f = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + DD ) % 7 ;

  if(gender=="Male" && f <= 1.5){
    alert("Your birthday was on a Sunday and your Akan name is Kwasi")
  }else if(gender=="Male" && f <= 2.5){
    alert("Your birthday was on a Monday and your Akan name is Kwadwo")
  }else if(gender=="Male" && f <= 3.5){
    alert("Your birthday was on a Tuesday and your Akan name is Kwabena")
  }else if(gender=="Male" && f <= 4.5){
    alert("Your birthday was on a Wednesday and your Akan name is Kwaku")
  }
}
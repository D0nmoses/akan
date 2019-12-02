function checkDay(){

  var dd,mm,year,cc,yy,selector,gender,f;
  
  dd = parseInt(document.getElementById("inputDay"));
  mm = parseInt(document.getElementById("inputMonth"));
  year = document.getElementById("inputYear").toString();

  cc = parseInt(year.slice(0,2));
  yy = parseInt(year.slice(2,4));
  
  selector = document.getElementById("gender");
  gender = selector.options[selector.selectedIndex].value;

  if(dd<=0 || dd>31){
    alert("Input a correct day");
  }

  if(mm<=0 || mm>12){
    alert("Input a correct month");
  }

  f = ( ( (cc/4) -(2*cc)-1) + ((5*yy)/4 ) + (26*(mm+1)/10) + dd ) % 7 ;


  if(gender=="Male" && f<=1.5){
    alert("Your birthday was on a Sunday and your Akan name is Kwasi");
  }else if(gender=="Male" && f<=2.5){
    alert("Your birthday was on a Monday and your Akan name is Kwadwo");
  }else if(gender=="Male" && f<=3.5){
    alert("Your birthday was on a Tuesday and your Akan name is Kwabena");
  }else if(gender=="Male" && f<=4.5){
    alert("Your birthday was on a Wednesday and your Akan name is Kwaku");
  }else if(gender=="Male" && f<=5.5){
    alert("Your birthday was on a Thursday and your Akan name is Yaw");
  }else if(gender=="Male" && f<=6.5){
    alert("Your birthday was on a Friday and your Akan name is Kofi");
  }else if(gender=="Male" && f>6.5){
    alert("Your birthday was on a Saturday and your Akan name is Kwame");
  }else if(gender=="Female" && f<=1.5){
    alert("Your birthday was on a Sunday and your Akan name is Akosua");
  }else if(gender=="Female" && f<=2.5){
    alert("Your birthday was on a Monday and your Akan name is Adwoa");
  }else if(gender=="Female" && f<=3.5){
    alert("Your birthday was on a Tuesday and your Akan name is Abenaa");
  }else if(gender=="Female" && f<=4.5){
    alert("Your birthday was on a Wednesday and your Akan name is Akua");
  }else if(gender=="Female" && f<=5.5){
    alert("Your birthday was on a Thursday and your Akan name is Yaa");
  }else if(gender=="Female" && f<=6.5){
    alert("Your birthday was on a Friday and your Akan name is Afua");
  }else if(gender=="Female" && f>6.5){
    alert("Your birthday was on a Saturday and your Akan name is Ama");
  }
};

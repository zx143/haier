window.onload=function(){
   var input=document.getElementById('vipuser_third_no1_ph');
    var lable=document.getElementById('mPrompt');
    input.onfocus=function(){
        lable.value='';
    }
}
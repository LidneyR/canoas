 
validateView=document.getElementById('validation')
var inputnamelogin=document.getElementById('userName')


// FUNÇAO DE FOCUS PRA TECLADO
var logo=document.querySelector('.validation img')
var textLogin=document.querySelector('form .content-text')
var socialMedia=document.querySelector('.socialmedia')

inputnamelogin.addEventListener('focus',()=>{ 
 
  //  cria css, para otimzar espaço em tela
  logo.style.cssText='max-width: 113px;', textLogin.style.cssText='display:none;', socialMedia.style.cssText='display:none;'
  
})

inputnamelogin.addEventListener('focusout',()=>{
 
 //  cria css, para otimzar espaço em tela
 logo.style.cssText='max-width280px', textLogin.style.cssText='display:flex;', socialMedia.style.cssText='display:inherit;'
 
})

if (localStorage.getItem("lastname")){
  validateView.style.display="none"
  initApp(localStorage.getItem("lastname"))
  inputUserName=localStorage.getItem("lastname")
  
}

function exitSection(){

  localStorage.removeItem("lastname");
  localStorage.removeItem("idClient");

  location.reload() 

  
}

function validation(event){

     event.preventDefault()
     var select=document.getElementById('selectValidate')
     var selectValue=select.options[select.selectedIndex].value
     var validateView=document.getElementById('validation')
     var userView=document.getElementById('user')
       inputUserName=document.getElementById('userName').value
   
       text = select.options[select.selectedIndex].text;
 

  
       if(inputUserName.length>3 & selectValue!=1){
        

          idClient=Math.floor(Math.random() * 2000)

          localStorage.setItem("lastname", inputUserName);
          localStorage.setItem("idClient", idClient);
          retirada=text;
         
          initApp(inputUserName)


     
      }else{
        alert('Preencha os Campos')
  
      }


}
function initApp(user){
 
  userView=document.getElementById('user')

  userView.innerHTML= `  
    <div style="padding: 0 15px; "> 
     <!-- <img src="assets/images/user.png" alt=""> -->
     <i  class="fa-regular fa-user"></i>

        Olá <strong>`+user +`</strong>
    </div>
    <div style="position: absolute;top: 0;right: 0;margin: 25px;color: white; ">
    <button style=" color: white; " onclick=" exitSection()" ><i class="fa-solid fa-right-from-bracket"></i> sair</button>
    <button id="btnFullScreen" onclick="fullScreen()"><i  class="fa-solid fa-expand"></i></button>
    <button id="btnCloseFullScreen" onclick="closeFullscreen()"><i  class="fa-solid fa-expand"></i></button>

</div>
    
  `;
  setTimeout(function init(){
    validateView.style.display="none"
    document.getElementsByTagName('body')[0].style.cssText="overflow:auto;"
 }, 1000);
}
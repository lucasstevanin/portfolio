function burguerMenu(){
   var burguer = document.querySelector('.myLinks')

   if (burguer.style.display === "block"){
       burguer.style.display = "none";
   }
   else{
       burguer.style.display = "block"
   }
}
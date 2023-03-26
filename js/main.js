let alire = document.getElementById("alire");
let lu = document.getElementById("lu");
document.getElementById("ajouter").addEventListener("click",function(){

    let lien = document.getElementById('lien').value;
    let titre = document.getElementById('titre').value;
    if(lien==""|| titre==""){
        alert("Les deux doivent etre rempli");
    }
    else{
        document.getElementById("titre1").style.visibility="visible";
        document.getElementById("pretexte").style.visibility="hidden";
        alire.insertAdjacentHTML("afterbegin",'<li>${titre}<i id=${titre} class="fa-solid fa-check" onclick=marqueLu(this.id)></i><i id=${titre} onclick=supprimer(this.id) class="fa-thin  fa-trash"></i><a href=${lien} target="blank"><i class="fa-solid fa-cart-shopping"></i></a></li>');
        document.getElementById('lien').value;
        document.getElementById('titre').value;
    }

})

function supprimer(id){

    document.getElementById(id).parentElement.outerHTML="";
}
function marqueLu(id){
    document.getElementById("titre2").style.visibility="visible";
    lu.insertAdjacentHTML("afterbegin",'<li>${id}<i id=${id} onclick=supprimer(this.id) class="fa-thin  fa-trash"></i></li>');
    supprimer(id);
}
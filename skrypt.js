const formularz =document.querySelector("form");
const marka=formularz.querySelector("input[name=marka]");
const model=formularz.querySelector("input[name=model]");
const numer=formularz.querySelector("input[name=numer]");
const klient=formularz.querySelector("input[name=klient]");
formularz.addEventListener("submit", e=>{
    e.preventDefault();
    if(marka.value.length<1){
        alert("wypełnij pole");
    }
    if(model.value.length<1){
        alert("wypełnij pole");
    }
    if(numer.value.length<1){
        alert("wypełnij pole");
    }
    if(klient.value.length<1){
        alert("wypełnij pole");
    }
    if(numer.value.length<=6){
        alert("numer ma minimum 6 znaków");
    }
}) 

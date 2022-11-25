function obliczCiag(){
    let a=document.getElementById("liczbaA").value;
    let an=document.getElementById("liczbaAN").value;
    let n=document.getElementById("liczbaN").value;

    let wynik=(an-a)/(n-1)
    
    document.getElementById("wynik").value=wynik;
}
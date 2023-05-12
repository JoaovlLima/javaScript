function concatenar(){
    
    let nome = document.getElementById("pnome").value;
    let sobrenome = document.getElementById("psobre").value;

    if(nome || sobrenome ==null){
        alert("Preencha todos os espaços para concatenar")
    }else{
        alert(nome +" "+sobrenome);
}

    

    


}
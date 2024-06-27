function carregar(){
    
}

function image() {
    var img = document.createElement("IMG");
    img.src = "img/dir.gif";
    document.getElementById('image').appendChild(img);
}

function contar(){

    let ano = document.getElementById('txtano').value;  // Exemplo de variável contendo uma string
    let anoAtual = 2024
    let res = document.getElementById('res')
    let age = document.getElementById('age')
    let inf = document.getElementById('inf');
    let adolescencia = document.getElementById('adolescencia');
    let adulta = document.getElementById('adulta');
    let idoso = document.getElementById('idoso');
    inf.style.display = 'none';
    adolescencia.style.display = 'none';
    adulta.style.display = 'none';
    idoso.style.display = 'none';

    if (ano.length === 4 & ano.length <= 2024) {

        result = anoAtual - ano

        res.innerHTML = `Quem nasceu no ano de ${ano} agora tem ${result} anos! :)`;
        
        if(result >= 0 & result <=12){
            inf.style.display = 'block';
            age.innerHTML = 'e esta na fase infantil !';
        }else if(result >= 13 & result <=18){
            adolescencia.style.display = 'block';
            age.innerHTML = 'e esta na fase da adolêscencia !';
        }else if(result >= 19 & result <=59){
            adulta.style.display = 'block';
            age.innerHTML = 'e esta na fase adulta !';
        }else if(result >= 60){
            idoso.style.display = 'block';
            age.innerHTML = 'e é um/a idoso/a !';
        }
        
        
    else {
    alert('A variável não possui exatamente 4 caracteres! Insira o ano de forma correta :).');
    }

}
}

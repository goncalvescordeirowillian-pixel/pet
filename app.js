
console.log("oi");
async function imagemApi(){

    let respostaApi = fetch ('https://dog.ceo/api/breeds/image/random') ;
    let dadosApi = (await respostaApi).json();
    document.querySelector(".img-dog").src =dadosApi.message;
    console.log(dadosApi)


}
imagemApi()
function whatzap(){

    const texto="Olá! Vim pelo site da nomeapp e gostaria de agendar um horario pro meu pet."
    const textoFormatado = encodeURIComponent(texto)
    const url= "https://wa.me//5544999181239?text=" + textoFormatado;
    open(url, '_blank');
    console.log(url);
    

}
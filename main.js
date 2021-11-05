/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes. */

//1.creiamo un arrey di oggetti contenenti (Autore, foto profilo, data desto del post e immagine post)
    //1.1 facciamom si che in modo randomico le immagini non escano
    //
//2.creiamo un ciclo for per scorrere gli oggetti 
    //2.1facciamo un  destrutting  dell'arrey per richiamarcii nomi delle chiavi direttamente
//3. mettiamo il tutto nell'HTML tramite inner 
//4.faccio una funzione al click per gestirmi il conteggio del mi piace
    //4.1 creo un arrey che mi salvi il numero di click
//5.trovo un modo per bloccare il tasto mi piace una volta premuto

let inFormazioniPost = [
    {
        "imgAutore":"https://unsplash.it/300/300?image=15",
        "nomeAutore":"Valerio Avallone",
        "dataPost":"2 mesi fa",
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
        "imgPost":"https://unsplash.it/600/300?image=171",
        "numerMipiace":"80"
    },
    {
        "imgAutore":"https://unsplash.it/300/300?image=15",
        "nomeAutore":"Giuseppe Vivaldi",
        "dataPost":"6 mesi fa",
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
        "numerMipiace":"50"
    },
    {
        "imgAutore":"https://unsplash.it/300/300?image=15",
        "nomeAutore":"Giorgione Antico",
        "dataPost":"1 mesi fa",
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
        "imgPost":"https://unsplash.it/600/300?image=171",
        "numerMipiace":"30"
    },
    {
        "imgAutore":"https://unsplash.it/300/300?image=15",
        "nomeAutore":"Antonio Paperella",
        "dataPost":" 1 ora fa",
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
        "numerMipiace":"13"
    },
    {
        "imgAutore":"https://unsplash.it/300/300?image=15",
        "nomeAutore":"Papis Peppino",
        "dataPost":"4 ore fa",
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
        "imgPost":"https://unsplash.it/600/300?image=171",
        "numerMipiace":"180"
    },
    {
        "imgAutore":"https://unsplash.it/300/300?image=15",
        "nomeAutore":"Valerio Avallone",
        "dataPost":"2 mesi fa",
        "testoPost":"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias",
        "imgPost":"https://unsplash.it/600/300?image=171",
        "numerMipiace":"80"
    },
];
console.log(inFormazioniPost);



const postCont = document.querySelector('.post');

for (let i = 0; i < inFormazioniPost.length; i++ ){
    const {imgAutore,nomeAutore,dataPost,testoPost,imgPost,numerMipiace} = inFormazioniPost[i];
    console.log(inFormazioniPost);
    if(imgPost!== undefined){
    postCont.innerHTML += `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src= ${imgAutore} alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${nomeAutore}</div>
                    <div class="post-meta__time">${dataPost}</div>
                </div>                    
            </div>
        </div>
            <div class="post__text">${testoPost}</div>
            <div class="post__image">
                <img src= ${imgPost} alt="">
            </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${numerMipiace}</b> persone
                </div>
            </div> 
        </div>    
        `}else {
        postCont.innerHTML +=  `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src= ${imgAutore} alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${nomeAutore}</div>
                    <div class="post-meta__time">${dataPost}</div>
                </div>                    
            </div>
        </div>
            <div class="post__text">${testoPost}</div>
            <div class="post__image">
            </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${numerMipiace}</b> persone
                </div>
            </div> 
        </div>    
        `}
        
};


const{numerMipiace} = inFormazioniPost[i];

const botTon= querySelectorAll("like-button");

for(let i = 0 ; i < botTon.length;i++){
    botTon.addEventListener ("click",
    function(){
        numerMipiace++;
    })
   
};



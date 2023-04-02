const tabScroll=document.querySelectorAll("a");

tabScroll.forEach((e)=>{
    e.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"//no aplica el movmiento suave :(
        });
    });
});

function topFunction(){
    document.documentElement.scrollTop=0;
}

//***NO ME FUNCIONO ESTE METODO***

/*const openFacebook=document.querySelector('#face')
const openInstagram=document.querySelector('#insta')
const openTwitter=document.querySelector('#tw')
const openWasap=document.querySelectorAll('.info')*/

/*const listSocial={
    facebook:'https://www.facebook.com/SmartSecOK',
    instagram:'https://www.instagram.com/smart_sec_ok/',
    twitter:'https:www.twitter.com',
    whatsapp:'https://api.whatsapp.com/send?phone=5491125153562'
}

openFacebook.addEventListener('click',()=>{
    window.open(listSocial.facebook,'blank')
})
openInstagram.addEventListener('click',()=>{
    window.open(listSocial.instagram,'blank')
})
openTwitter.addEventListener('click',()=>{
    window.open(listSocial.twitter,'blank')
})
openWasap.addEventListener('click',()=>{
    window.open(listSocial.whatsapp,'blank')
})*/
//----------

//***NI ESTE OTRO METODO.***
/*function openNewTab(){
    window.open('https://www.facebook.com/SmartSecOK','_blank')
 }
 openFacebook.addEventListener("click",openNewTab)
*/

//***nada de esto me funciono, asi que le di funcionalidad a los botones solo con html***
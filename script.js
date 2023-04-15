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


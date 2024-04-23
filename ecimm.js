var img=document.createElement('img');
var img2=document.createElement('img');
var sport=document.getElementById('sport');
var top1=document.getElementById("top1");
var top2=document.getElementById("top2");
var top3=document.getElementById("top3");
var top4=document.getElementById("top4");
var image2=document.getElementById("image2");
var main=document.getElementById("main");
var sport2=document.getElementById("sport2");
var top10=document.getElementById("top10");
var top20=document.getElementById("top20");
var top30=document.getElementById("top30");
var top40=document.getElementById("top40");
var closee=document.getElementById("close");
var mobilemenoshow=document.getElementById("mobilemenoshow");
var mobilemenu=document.getElementById("mobilemenu");
var menuclose=document.getElementById("menuclose");



img2.src="./image/image-product-1.jpg";
img.src="./image/image-product-1.jpg";
sport.appendChild(img);
sport2.appendChild(img2);

closee.addEventListener('click',function(){
    image2.classList.add('image2');
    image2.classList.remove('image2show');
    main.classList.remove('mainblur');
})

 menuclose.addEventListener('click',function(){
    mobilemenoshow.classList.add('mobilemenoshow');
    mobilemenoshow.classList.remove('mobilemenoshoww');
})


top1.addEventListener('click',function(){
    img.src="./image/image-product-2.jpg"; 
})
top2.addEventListener('click',function(){
    img.src="./image/image-product-1.jpg"; 
})
top3.addEventListener('click',function(){
    img.src="./image/image-product-3.jpg"; 
})
top4.addEventListener('click',function(){
    img.src="./image/image-product-4.jpg"; 
})



top10.addEventListener('click',function(){
    img2.src="./image/image-product-2.jpg"; 
})
top20.addEventListener('click',function(){
    img2.src="./image/image-product-1.jpg"; 
})
top30.addEventListener('click',function(){
    img2.src="./image/image-product-3.jpg"; 
})
top40.addEventListener('click',function(){
    img2.src="./image/image-product-4.jpg"; 
})

sport.addEventListener('dblclick',function(){
    image2.classList.remove('image2');
    image2.classList.add('image2show');
    main.classList.add('mainblur');
})

mobilemenu.addEventListener('click',function(){
    mobilemenoshow.classList.remove('mobilemenoshow');
    mobilemenoshow.classList.add('mobilemenoshoww');
    console.log("show");
})


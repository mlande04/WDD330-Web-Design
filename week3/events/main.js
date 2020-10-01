//function doSomething(event){
//    console.log(event.target);
//}
//addEventListener('click', doSomething);

const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );

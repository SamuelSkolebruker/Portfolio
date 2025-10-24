(function(){
const links = Array.from(document.querySelectorAll('.nav-link'));
links.forEach(a=>a.addEventListener('click',()=>{
links.forEach(x=>x.classList.remove('active'));
a.classList.add('active');
}));
const adjustPad = ()=>{
const nav = document.querySelector('.bottom-nav');
document.body.style.paddingBottom = (nav.offsetHeight + 6) + 'px';
};
window.addEventListener('load',adjustPad);
window.addEventListener('resize',adjustPad);
})();
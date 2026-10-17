/**
 * AIMS landing page interactions.
 * Keep UI behaviour framework-independent; replace each handler with a component
 * or service adapter when migrating to React/Next.js/Vue/etc.
 */

const navToggle=document.getElementById('mobileToggle');
const navLinks=document.getElementById('navLinks');
navToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));navToggle.textContent=open?'×':'☰';});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');navToggle.setAttribute('aria-expanded','false');navToggle.textContent='☰';}));
const demoModal=document.getElementById('demoModal');
const marketModal=document.getElementById('marketModal');
function openModal(el){el.classList.add('open');document.body.style.overflow='hidden';}
function closeModals(){document.querySelectorAll('.modal-backdrop').forEach(el=>el.classList.remove('open'));document.body.style.overflow='';}
document.querySelectorAll('[data-demo]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openModal(demoModal);}));
document.querySelectorAll('[data-market]').forEach(el=>el.addEventListener('click',()=>openModal(marketModal)));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeModals));
document.querySelectorAll('.modal-backdrop').forEach(el=>el.addEventListener('click',e=>{if(e.target===el)closeModals();}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModals();});
document.getElementById('playButton').addEventListener('click',()=>{const frame=document.getElementById('videoFrame');frame.classList.toggle('show-hint');document.getElementById('playButton').textContent=frame.classList.contains('show-hint')?'×':'▶';});
document.getElementById('demoForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('formToast').classList.add('show');});
document.getElementById('marketForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('marketToast').classList.add('show');});
document.getElementById('footerContactForm').addEventListener('submit',e=>{e.preventDefault();document.getElementById('footerFormNote').classList.add('show');});
document.getElementById('year').textContent=new Date().getFullYear();
const revealItems=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}})},{threshold:0.12,rootMargin:'0px 0px -35px 0px'});revealItems.forEach(item=>observer.observe(item));}else{revealItems.forEach(item=>item.classList.add('is-visible'));}
document.querySelectorAll('main > section .section-head, .hero-grid > div, .integration-art, .integration-points .point, .market-grid > div, .audience-card, .cta-panel').forEach(el=>el.classList.add('reveal'));
const allReveal=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const lateObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');lateObserver.unobserve(entry.target);}}),{threshold:0.12});allReveal.forEach(item=>{if(!item.classList.contains('is-visible'))lateObserver.observe(item);});}else{allReveal.forEach(item=>item.classList.add('is-visible'));}

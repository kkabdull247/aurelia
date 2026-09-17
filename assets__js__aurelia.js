(function(){
  const $ = (s, r=document)=>r.querySelector(s);
  const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));
  const cartKey='aurelia_cart';
  function readCart(){try{return JSON.parse(localStorage.getItem(cartKey)||'[]')}catch(e){return[]}}
  function writeCart(items){localStorage.setItem(cartKey,JSON.stringify(items)); updateCart()}
  function updateCart(){
    const items=readCart(); let total=0,count=0;
    items.forEach(i=>{total += (Number(i.price)||0)*(Number(i.qty)||1); count += Number(i.qty)||1});
    $$('.js-cart-total').forEach(el=>el.textContent='$'+total.toFixed(2));
    $$('.js-cart-count').forEach(el=>el.textContent=count);
  }
  window.AureliaCart={add:function(name,price,image){const items=readCart(); const found=items.find(i=>i.name===name); if(found){found.qty=(found.qty||1)+1}else{items.push({name,price,image,qty:1})} writeCart(items); toast(name+' added to cart')},remove:function(name){writeCart(readCart().filter(i=>i.name!==name))},clear:function(){writeCart([])}};
  function toast(msg){let t=$('#aureliaToast');if(!t){t=document.createElement('div');t.id='aureliaToast';Object.assign(t.style,{position:'fixed',left:'50%',bottom:'24px',transform:'translateX(-50%) translateY(10px)',background:'#2d2d2d',color:'#fff',padding:'10px 16px',fontSize:'12px',borderRadius:'4px',opacity:'0',zIndex:'9999',transition:'.25s'});document.body.appendChild(t)}t.textContent=msg;t.style.opacity='1';t.style.transform='translateX(-50%) translateY(0)';clearTimeout(t._tm);t._tm=setTimeout(()=>{t.style.opacity='0';t.style.transform='translateX(-50%) translateY(10px)'},2200)}
  function initNav(){
    $$('.mobile-menu-btn').forEach(btn=>btn.addEventListener('click',()=>{const m=$('#mobileMenu'); if(m)m.classList.toggle('open')}));
    $$('.mobile-group>button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
  }
  function initFAQ(){
    $$('.faq-item>button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')))
  }
  function initForms(){
    $$('.aurelia-demo-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();toast(form.dataset.success||'Thanks! Your request has been received.')}));
  }
  function initPlans(){
    $$('.js-add-plan').forEach(btn=>btn.addEventListener('click',()=>AureliaCart.add(btn.dataset.name,btn.dataset.price,'')));
  }
  function initProductButtons(){
    $$('.js-add-product').forEach(btn=>btn.addEventListener('click',()=>AureliaCart.add(btn.dataset.name,btn.dataset.price,btn.dataset.image)));
  }
  function initCartPage(){
    const root=$('#cartItems'); if(!root)return;
    function render(){const items=readCart(); root.innerHTML=''; if(!items.length){root.innerHTML='<div class="empty">Your cart is currently empty.<br><br><a class="btn-primary" href="currentmenu.html">Browse Menu</a></div>'; $('#cartSubtotal').textContent='$0.00'; return}
      let total=0; items.forEach(item=>{total+=(Number(item.price)||0)*(Number(item.qty)||1); const row=document.createElement('div');row.className='cart-row';row.innerHTML='<div><strong>'+item.name+'</strong><div style="font-size:11px;color:#777">Quantity: '+item.qty+'</div></div><div><strong>$'+((Number(item.price)||0)*(Number(item.qty)||1)).toFixed(2)+'</strong> <button class="remove-cart" data-name="'+item.name.replace(/"/g,'&quot;')+'" style="margin-left:8px;border:0;background:none;color:#777">×</button></div>';root.appendChild(row)}); $('#cartSubtotal').textContent='$'+total.toFixed(2); $$('.remove-cart').forEach(b=>b.addEventListener('click',()=>{AureliaCart.remove(b.dataset.name);render()}));
    } render();
    $('#clearCart')?.addEventListener('click',()=>{AureliaCart.clear();render()});
  }
  function initCheckout(){
    const form=$('#checkoutForm'); if(!form)return; form.addEventListener('submit',e=>{e.preventDefault();localStorage.removeItem(cartKey); toast('Order request submitted. Connect this form to your payment provider.'); setTimeout(()=>location.href='index.html',700)});
  }
  function initNewsletter(){
    $$('.newsletter-form').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();toast('Thanks for joining the AURELIA newsletter.') }));
  }
  document.addEventListener('DOMContentLoaded',()=>{initNav();initFAQ();initForms();initPlans();initProductButtons();initCartPage();initCheckout();initNewsletter();updateCart();
    const year=$('#year');if(year)year.textContent=new Date().getFullYear();
  });
})();

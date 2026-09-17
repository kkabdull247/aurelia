(function(){
  function esc(s){return String(s).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]})}
  function card(p){
    return '<article class="full-menu-card" data-category="'+esc(p.category)+'" data-name="'+esc(p.name.toLowerCase())+'">'+
      '<a href="product.html?id='+encodeURIComponent(p.id)+'" aria-label="View '+esc(p.name)+'">'+
      '<div class="photo"><img src="'+esc(p.image)+'" alt="'+esc(p.name)+'"><span class="category">'+esc(p.category)+'</span></div>'+
      '<div class="details"><h3>'+esc(p.name)+'</h3><p>'+esc(p.description)+'</p><div class="meta"><span>'+p.calories+' Calories</span><span class="price">$'+p.price.toFixed(2)+'</span></div><span class="btn-primary">View Details</span></div></a></article>';
  }
  function init(){
    var grid=document.getElementById('fullMenuGrid'); if(!grid || !window.AureliaProducts)return;
    var search=document.getElementById('menuSearch');
    var buttons=Array.from(document.querySelectorAll('.menu-filter'));
    var active='All';
    function render(){
      var q=(search&&search.value||'').trim().toLowerCase();
      var data=window.AureliaProducts.filter(function(p){
        var categoryOk=active==='All' || p.category===active;
        var searchOk=!q || p.name.toLowerCase().indexOf(q)!==-1 || p.description.toLowerCase().indexOf(q)!==-1;
        return categoryOk && searchOk;
      });
      grid.innerHTML=data.length?data.map(card).join(''):'<div class="notice" style="grid-column:1/-1">No menu items match your search.</div>';
    }
    buttons.forEach(function(b){b.addEventListener('click',function(){buttons.forEach(x=>x.classList.remove('active'));b.classList.add('active');active=b.dataset.category;render();})});
    if(search)search.addEventListener('input',render);
    render();
  }
  document.addEventListener('DOMContentLoaded',init);
})();

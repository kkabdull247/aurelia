(function(){
  function el(id){return document.getElementById(id)}
  function init(){
    if(!window.AureliaProducts)return;
    var params=new URLSearchParams(window.location.search);
    var product=window.AureliaGetProduct(params.get('id'));
    document.title=product.name+' | AURELIA';
    if(el('productImage')){el('productImage').src=product.image;el('productImage').alt=product.name}
    if(el('productCategory'))el('productCategory').textContent=product.category;
    if(el('productName'))el('productName').textContent=product.name;
    if(el('productDescription'))el('productDescription').textContent=product.description;
    if(el('productPrice'))el('productPrice').textContent='$'+product.price.toFixed(2);
    if(el('nutritionCalories'))el('nutritionCalories').textContent=product.calories;
    if(el('nutritionProtein'))el('nutritionProtein').textContent=product.protein;
    if(el('nutritionCarbs'))el('nutritionCarbs').textContent=product.carbs;
    if(el('nutritionFat'))el('nutritionFat').textContent=product.fat;
    if(el('nutritionFiber'))el('nutritionFiber').textContent=product.fiber;
    if(el('nutritionSodium'))el('nutritionSodium').textContent=product.sodium;
    if(el('nutritionSugar'))el('nutritionSugar').textContent=product.sugar;
    if(el('productIngredients'))el('productIngredients').textContent=product.ingredients;
    if(el('productAllergens'))el('productAllergens').textContent=product.allergens;
    if(el('productQty'))el('productQty').value='1';
    var minus=el('qtyMinus'),plus=el('qtyPlus');
    function setQty(v){var n=Math.max(1,Math.min(20,parseInt(v||1,10)||1));el('productQty').value=n;return n}
    if(minus)minus.addEventListener('click',function(){setQty((parseInt(el('productQty').value,10)||1)-1)})
    if(plus)plus.addEventListener('click',function(){setQty((parseInt(el('productQty').value,10)||1)+1)})
    var add=el('addProduct');
    if(add)add.addEventListener('click',function(){var qty=setQty(el('productQty').value);for(var i=0;i<qty;i++)window.AureliaCart.add(product.name,product.price,product.image);});
    var related=el('relatedProducts');
    if(related){related.innerHTML=window.AureliaProducts.filter(function(p){return p.id!==product.id}).slice(0,3).map(function(p){return '<a class="content-card" href="product.html?id='+encodeURIComponent(p.id)+'"><img src="'+p.image+'" alt="'+p.name+'"><h3>'+p.name+'</h3><p>'+p.calories+' calories · $'+p.price.toFixed(2)+'</p></a>'}).join('')}
  }
  document.addEventListener('DOMContentLoaded',init);
})();

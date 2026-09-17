window.AureliaProducts = [
  {
    id:'blackened-chicken',
    name:'Blackened Chicken with House Broccoli, Sweet Potato and BBQ Sauce',
    category:'Entrée', price:12.95, calories:480, protein:'38g', carbs:'42g', fat:'18g', fiber:'7g', sodium:'610mg', sugar:'8g',
    image:'data__meals__425.jpg',
    description:'Tender blackened chicken served with house broccoli, roasted sweet potato and our signature BBQ sauce.',
    ingredients:'Chicken breast, broccoli, sweet potato, house BBQ sauce, olive oil, herbs and spices.',
    allergens:'May contain soy and mustard depending on sauce preparation.'
  },
  {
    id:'chicken-tinga',
    name:'Chicken Tinga with Mexican Rice and Green Beans',
    category:'Entrée', price:12.95, calories:420, protein:'35g', carbs:'44g', fat:'14g', fiber:'6g', sodium:'590mg', sugar:'6g',
    image:'data__meals__421.jpg',
    description:'Slow-cooked chicken tinga with seasoned Mexican rice and crisp green beans.',
    ingredients:'Chicken, tomato, onion, Mexican rice, green beans, garlic, herbs and spices.',
    allergens:'Prepared in a kitchen that handles common allergens.'
  },
  {
    id:'roasted-salmon',
    name:'Roasted Salmon with Green Beans',
    category:'Entrée', price:15.95, calories:490, protein:'36g', carbs:'20g', fat:'26g', fiber:'5g', sodium:'520mg', sugar:'4g',
    image:'data__meals__417.jpg',
    description:'Oven-roasted salmon paired with green beans and a light seasonal finish.',
    ingredients:'Atlantic salmon, green beans, lemon, olive oil, herbs and spices.',
    allergens:'Contains fish.'
  },
  {
    id:'blueberry-bliss',
    name:'Blueberry Bliss Smoothie',
    category:'Smoothie', price:7.95, calories:280, protein:'12g', carbs:'34g', fat:'8g', fiber:'5g', sodium:'110mg', sugar:'24g',
    image:'data__meals__425.jpg',
    description:'A cool blueberry-forward smoothie blended for a bright, creamy finish.',
    ingredients:'Blueberries, yogurt, banana, milk or alternative, honey.',
    allergens:'Contains dairy unless prepared with a non-dairy alternative.'
  },
  {
    id:'beach-smoothie',
    name:'Tropical Beach Smoothie',
    category:'Smoothie', price:7.95, calories:300, protein:'8g', carbs:'47g', fat:'7g', fiber:'4g', sodium:'95mg', sugar:'29g',
    image:'data__meals__421.jpg',
    description:'Tropical fruit flavors blended into a refreshing smoothie for any time of day.',
    ingredients:'Mango, pineapple, banana, yogurt, citrus and ice.',
    allergens:'Contains dairy unless prepared with a non-dairy alternative.'
  },
  {
    id:'berry-five',
    name:'High Five Berry Smoothie',
    category:'Smoothie', price:7.95, calories:320, protein:'10g', carbs:'45g', fat:'9g', fiber:'6g', sodium:'100mg', sugar:'27g',
    image:'data__meals__417.jpg',
    description:'Mixed berries, banana and creamy ingredients blended into a vibrant fruit smoothie.',
    ingredients:'Strawberry, blueberry, raspberry, banana, yogurt, milk or alternative.',
    allergens:'Contains dairy unless prepared with a non-dairy alternative.'
  }
];

window.AureliaGetProduct = function(id){
  return window.AureliaProducts.find(function(p){ return p.id === id; }) || window.AureliaProducts[0];
};

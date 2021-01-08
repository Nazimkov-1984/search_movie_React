const cardHeaderSizeCalculate = () => {
 const cardHeaders = document.querySelectorAll('.list__item__text');
 const calkHeight = [];
 cardHeaders.forEach((item) =>{
   calkHeight.push(item.clientHeight);
 });
const clearHeight =  calkHeight.map((item) => item-20)
 console.log (clearHeight);
 const maxHeight = Math.max(...clearHeight);
const newHeight = [];
for (let i = 0; i<calkHeight.length; i++){
  newHeight[i] = (maxHeight - clearHeight[i]) + 20;
  cardHeaders[i].style.paddingBottom = `${newHeight[i]}px`;
}
console.log(newHeight);
}
export default cardHeaderSizeCalculate;
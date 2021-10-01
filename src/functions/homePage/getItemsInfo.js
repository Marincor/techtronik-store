export default function getItemInfo (initialEvent, classModel, currentItems, funcChangeCurrentItem) {


    const currentNameItem =
    initialEvent.target.parentElement.parentElement.firstChild.firstChild.textContent;
  const currentPriceItem =
  initialEvent.target.parentElement.parentElement.firstChild.firstChild.nextSibling
      .textContent;
  const CurrentPriceItemFormated = JSON.parse(
    currentPriceItem.replace("$", "")
  );
  const currentImage =
  initialEvent.target.parentElement.parentElement.firstChild.firstChild.nextSibling
      .nextSibling.src;




  const currentItem = new classModel(currentNameItem, CurrentPriceItemFormated, currentImage);

  const arr = currentItems || [];


  let currentArr = arr.find(atribute => atribute._name === currentNameItem) || null;

    if(arr.length === 0) {

      arr.push(currentItem)
      funcChangeCurrentItem(arr)



    }
    else if( arr.length > 0 && currentArr !== null) {

      currentArr._amount += 1;
  

      funcChangeCurrentItem(arr)
  
    
    } else {

         
      arr.push(currentItem)
      funcChangeCurrentItem(arr)
    }

}
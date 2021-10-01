export default function getCurrentItems(items, itemToDelete, funcChangeItems, funcChangeCartStatus ) {

      
    const arr = items || [];

    const findItem = arr.find((atribute) => atribute._id === itemToDelete);

    function removerPorId(array, id) {
      return array.filter(function (el) {
        return el._id !== id;
      });
    }

    if (findItem._amount > 1) {
      findItem._amount -= 1;

      funcChangeItems(arr);

      funcChangeCartStatus(false);

      setTimeout(() => {
        funcChangeCartStatus(true);
      }, 1);
    } else {
        funcChangeItems(removerPorId(arr, itemToDelete));
    }
}
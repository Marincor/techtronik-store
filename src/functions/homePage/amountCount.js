export default function amountCount(includedItems) {

    let currentAmountOfItems = 0;

    includedItems.forEach((item) => {
      currentAmountOfItems += item.amount;
    });

    return currentAmountOfItems;
  }
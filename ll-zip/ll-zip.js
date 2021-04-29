'use strict';

const zipLists = (listOne, listTwo) => {
  if (!listOne || !listTwo){
    return;
  }

  let list = listOne.next;
  listOne.next = listTwo;
  listTwo.next = listZipper(list, listTwo.next);
  return listOne;
}

function zippedList(zipList1, zipList2){
  return zipLists(zipList1.head, zipList2);

}
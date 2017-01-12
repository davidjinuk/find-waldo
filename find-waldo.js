var list = ["Alice", "Bob", "Waldo", "Winston"];
function findWaldo(arr, found) {
  list.forEach (function(element, i) {
    if (element == 'Waldo') {
      actionWhenFound(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found him!" + "index: " + index);
}

findWaldo(list, actionWhenFound);
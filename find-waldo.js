var list = ["Alice", "Bob", "Waldo", "Winston"];
function findWaldo(arr, found) {
  list.forEach (function(element) {
    if (element == 'Waldo') {
      actionWhenFound();
    }
  });
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found();   // execute callback
  //   }
  // }
}

function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(list, actionWhenFound);
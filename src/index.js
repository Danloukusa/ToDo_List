// Create factory for ToDo ITEM
// import toDoItem from './toDoItem';
import toDoClass from './toDoItem';

    function showAList(toDoObject){
        // IF toDoObject.parent != default && IF list not shown yet
        if(toDoObject.parentProject != "default")
        {
            /*
            let container = document.createElement("div");
            container.id = "container";
            document.getElementById("megaContainer").appendChild(container);
            
            
            let myList = document.createElement("ol");
            myList.id = "list";
            document.getElementById("default").appendChild(myList);
            */
        }

        if(toDoObject.parentProject != "default")
        {

        }







        showHelper(toDoObject.list, toDoObject.parentProject);
        // This will take an ENTIRE list, and show it in a box on the page.
        // What does a list look like?
        function showHelper(list, listParent){
            let index;
            for(index in list)
            {
                let listEle = document.createElement("li");
                listEle.id = listParent + index;
                listEle.innerText = list[index];
                document.getElementById(listParent).appendChild(listEle);
            }
        }
    }
// Main is like normal if you make it an IIFE
(function main(){
    // Data is in the back end now.
    let listArray = [];

    function storeList(list){
        listArray.push(list);
    }

    function removeList(listIndex){
        listArray.splice(listIndex, 1);
    }

    let newThing = toDoClass();
    storeList(newThing);
    console.log(newThing.parentProject);
    newThing.addToList("Put water in a pot");
    newThing.addToList("Turn on the stove");
    newThing.addToList("Put in the pasta");
    newThing.addToList("Turn on the timer for 20min");


    showAList(newThing);
    // console.log(newThing.list);

    // console.log(listArray);

    let JSONREADYarray = JSON.stringify(listArray);

    localStorage.setItem("ToDoList Collection", JSONREADYarray);

    console.log("LOCAL STORAGE SECTION BELOW HERE:");
    console.log(JSON.parse(localStorage['ToDoList Collection']));

    // What should I present it as on the DOM?
})();
console.log("POTATO!");


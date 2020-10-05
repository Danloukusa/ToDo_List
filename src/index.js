// Create factory for ToDo ITEM
// import toDoItem from './toDoItem';
import toDoClass from './toDoItem';
    function decideList(){
        let x;
        for(x in listArray)
        {
            if (listArray[x].parentProject == this.id)
                showAList(listArray[x]);
        }
    }

    function showAllLists(array){
        let item;
        let mainList = document.createElement("ul");
        mainList.id = "mainList";
        mainList.innerText = "MAIN LIST";
        document.getElementById("megaContainer").appendChild(mainList);

        for(item in array){
            if(document.getElementById(array[item].parentProject) == null)
            {
                let list = document.createElement("li");
                list.id = array[item].parentProject;
                list.innerText = list.id;
                list.addEventListener("click", decideList);
                console.log(list.id);
                document.getElementById("mainList").appendChild(list);
            }
        }
    }
    function showAList(toDoObject){
        let containerExist = doesContainerExist(toDoObject.listName);
        if(!containerExist)
        {
            let container = document.createElement("ol");
            container.id = toDoObject.listName;
            container.className = toDoObject.parentProject;
            container.innerText = container.id;
            document.getElementById("megaContainer").appendChild(container);
        }

        showHelper(toDoObject.list, toDoObject.listName);
        // This will take an ENTIRE list, and show it in a box on the page.
        // What does a list look like?

        function showHelper(list, listName){
            let index;
            for(index in list)
            {
                let listEle = document.createElement("li");
                listEle.id = listName + index;
                listEle.innerText = list[index];
                document.getElementById(listName).appendChild(listEle);
            }
        }

        function doesContainerExist(containerName){
            return document.getElementById(containerName) != null;
        }
    }

    let listArray = [];
// Main is like normal if you make it an IIFE
function main(){
    // Data is in the back end now.
    

    function storeList(list){
        listArray.push(list);
    }

    function removeList(listIndex){
        listArray.splice(listIndex, 1);
    }

    let newThing = toDoClass("cookPasta");
    storeList(newThing);
    newThing.addToList("Put water in a pot");
    newThing.addToList("Turn on the stove");
    newThing.addToList("Put in the pasta");
    newThing.addToList("Turn on the timer for 20min");



    let secondList = toDoClass("running");
    storeList(secondList);
    secondList.addToList("Put on shoes");
    secondList.addToList("Tie shoelaces");
    secondList.addToList("Open door");
    secondList.addToList("Walk outside");
    secondList.addToList("Close and lock door");
    secondList.parentProject = "shoeStuff";

    let t = toDoClass("jumpRope");
    storeList(t);
    t.addToList("Put on shoes");
    t.addToList("Tie shoelaces");
    t.addToList("Open door");
    t.addToList("Walk outside");
    t.addToList("Close and lock door");
    t.addToList("Realize forgotton JumpRope")
    t.parentProject = "shoeStuff";

    showAllLists(listArray);

    //showAList(newThing);
    //showAList(secondList);
    // console.log(newThing.list);

    // console.log(listArray);

    let JSONREADYarray = JSON.stringify(listArray);

    localStorage.setItem("ToDoList Collection", JSONREADYarray);

    // console.log("LOCAL STORAGE SECTION BELOW HERE:");
    // console.log(JSON.parse(localStorage['ToDoList Collection']));

    // What should I present it as on the DOM?
};
main();


// Create factory for ToDo ITEM
// import toDoItem from './toDoItem';
import toDoClass from './toDoItem';

    function showSubLists(){
        let x;
        newBackground(this);
        for(x in listArray)
        {
            if (listArray[x].parentProject == this.id)
                showAList(listArray[x]);
        }
    }

    let prev = "ooga";

    function newBackground(loc)
    {
        if(prev == "ooga")
        {
            loc.style.backgroundColor = "blue";
            prev = loc;
        }
        else{
            prev.style.backgroundColor = "pink";
            prev = loc;
            loc.style.backgroundColor = "blue";
        }

    }


    function showAllLists(array){
        let item;

        let header = document.createElement("div");
        header.id = "buttons";
        document.getElementById("megaContainer").appendChild(header);
    
        header = document.createElement("button");
        header.id = "mainButton";
        header.innerText = "Show Main List";
        document.getElementById("buttons").appendChild(header);

        header = document.createElement("button");
        header.innerText = "New List";
        header.id = "newList";
        header.style.display = "inline";
        document.getElementById("buttons").appendChild(header);

        header = document.createElement("button");
        header.innerText = "Edit Current List";
        header.id = "editList";
        header.style.display = "inline";
        document.getElementById("buttons").appendChild(header);

        let title = document.createElement("label");
        title.id = "currentListTitle";
        title.innerText = "Category Lists";
        title.style.display = "block";
        document.getElementById("megaContainer").appendChild(title);

        let mainList = document.createElement("ul");
        mainList.id = "mainList";
        document.getElementById("megaContainer").appendChild(mainList);

        for(item in array){
            if(document.getElementById(array[item].parentProject) == null)
            {
                let list = document.createElement("li");
                list.id = array[item].parentProject;
                list.innerText = list.id;
                list.addEventListener("click", showSubLists);
                console.log(list.id);
                document.getElementById("mainList").appendChild(list);
            }
        }
    }

    function clearSubLists(){
        
        let mainParent = document.getElementById("megaContainer");
        let num = 0;
        for(num = 0; num < 4; num++)
        {
            if(mainParent.childNodes.length > 5)
                mainParent.removeChild(mainParent.lastChild);

        }
        document.getElementById("makeList").style.display = "none";
    }

    function showAList(toDoObject){
        clearSubLists();
        let containerExist = doesContainerExist(toDoObject.listName);
        // alert(containerExist);
        if(!containerExist)
        {
            let container = document.createElement("ol");
            container.id = toDoObject.listName;
            container.className = toDoObject.parentProject;
            container.innerText = container.id;
            document.getElementById("megaContainer").appendChild(container);
            showHelper(toDoObject.list, toDoObject.listName);
        }
        else
        {
            // List REFRESH functionality would be nice
        }

        // showHelper(toDoObject.list, toDoObject.listName);
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

    document.getElementById("listConstruction").reset();

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

    let x = toDoClass("Gaming");
    storeList(x);
    x.addToList("Get a PC and peripherals");
    x.addToList("Install games");
    x.addToList("Play Games");
    x.parentProject = "Entertainment";

    //showAList(newThing);
    //showAList(secondList);
    // console.log(newThing.list);

    // console.log(listArray);


    // LOCAL STORAGE SECTION **********************
    // ********************************************
    
    let JSONREADYarray = JSON.stringify(listArray);

    localStorage.setItem("ToDoList Collection", JSONREADYarray);
    console.log(JSON.parse(localStorage['ToDoList Collection']));

    listArray = JSON.parse(localStorage['ToDoList Collection']);
    // console.log("LOCAL STORAGE SECTION BELOW HERE:");
    // console.log(JSON.parse(localStorage['ToDoList Collection']));

    // What should I present it as on the DOM?

    showAllLists(JSON.parse(localStorage['ToDoList Collection']));
};
main();

function overlayListener(){
    document.getElementById("newList").addEventListener("click", listCreator);
    // document.getElementById("viewAll").addEventListener("click", removeOverlay);
    document.getElementById("mainButton").addEventListener("click", clearSubLists);
    document.getElementById("radioDefault").addEventListener("click", hideCustomInput);
    document.getElementById("radioCustom").addEventListener("click", showCustomInput);
}

function showCustomInput(){
    let x = document.getElementById("parent");
    x.style.display = "inline";
}

function hideCustomInput(){
    let x = document.getElementById("parent");
    x.style.display = "none";
}

overlayListener();

function listCreator(){
    document.getElementById("makeList").style.display = "inline";
}

/*
    function removeOverlay(){
        if(this.id == "newList")
        {
            document.getElementById("makeList").style.display = "inline";
        }
        if(this.id == "viewAll")
        {
            
            showAllLists(JSON.parse(localStorage['ToDoList Collection']));
            // include in the form, parent project section.
        }

        document.getElementById("overlay").style.display = "none";
    }
*/

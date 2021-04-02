// Create factory for ToDo ITEM
// import toDoItem from './toDoItem';
import toDoClass from './toDoItem';

    function showSubLists(){
        let x;
        clearSubLists();
        newBackground(this);
        document.getElementById("currentListTitle").innerText = this.id;
        replaceMainList(this.id);
        /*
        for(x in listArray)
        {
            if (listArray[x].parentProject == this.id)
                showAList(listArray[x]);
        }
        */
    }

    function showAList()
    {
        clearSubLists();
        newBackground(this);
        let index;
        let objInd = 0;
        for(index in listArray)
        {
            if( listArray[index].listName == this.id)
            {
                objInd = index;
            }
        }
        // alert(containerExist);

            let container = document.createElement("ol");
            container.id = listArray[objInd].listName + "Display";
            container.className = listArray[objInd].parentProject;
            container.innerText = listArray[objInd].listName;
            document.getElementById("displayBox").appendChild(container);
          //  showHelper(listArray[index], listArray);

        // WE HAVE CONTAINER. Now add everything within list to container.

        let myList = listArray[objInd].list;
       // console.log(myList);
        let name = listArray[objInd].listName;
        for(index in myList)
        {
            let ele = document.createElement("li");
            ele.id = name + index;
            ele.innerText = myList[index];
            document.getElementById(name + "Display").appendChild(ele);
        }

        /*
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
        */

        function doesContainerExist(containerName){
            return document.getElementById(containerName) != null;
        }
    }


    // LEFT OFF HERE, TRYING TO REPLACE BOXES!!!
    function replaceMainList(subListCategory)
    {
        //alert("REPLACE");
        let list = document.getElementById("mainList");
        while(list.hasChildNodes())
        {
            list.removeChild(list.lastChild);
        }

        if(subListCategory == "mainButton")
        {
            //alert("RESTART MAIN");
            let foodex;
            for(foodex in listArray)
            {
                if(document.getElementById(listArray[foodex].parentProject) == null)
                {
                    let food = document.createElement("li");
                    food.id = listArray[foodex].parentProject;
                    food.innerText = food.id;
                    food.addEventListener("click", showSubLists);
                   // console.log(food.id);
                    document.getElementById("mainList").appendChild(food);
                }

            }    
        }
        else
        {
            let index;
            for(index in listArray)
            {
                if((listArray[index].parentProject == subListCategory))
                { 
                    let list = document.createElement("li");
                    list.id = listArray[index].listName;
                    list.innerText = list.id;
                    list.addEventListener("click", showAList);
                    //console.log(list.id);
                    document.getElementById("mainList").appendChild(list);
                }
            }
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
                //console.log(list.id);
                document.getElementById("mainList").appendChild(list);
            }
        }

        let displayBox = document.createElement("div");
        displayBox.id = "displayBox";
        document.getElementById("megaContainer").appendChild(displayBox);
    }

    function clearSubLists(){
        
        let mainParent = document.getElementById("displayBox");
        while(mainParent.hasChildNodes())
        {
            mainParent.removeChild(mainParent.lastChild);
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

function mainButton(){
    clearSubLists();
    document.getElementById("currentListTitle").innerText = "Category Lists";
    replaceMainList(this.id);
}

function overlayListener(){
    document.getElementById("newList").addEventListener("click", listCreator);
    // document.getElementById("viewAll").addEventListener("click", removeOverlay);
    document.getElementById("mainButton").addEventListener("click", mainButton);
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

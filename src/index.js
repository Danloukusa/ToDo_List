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

    // making a new list
    function submitList(){
        let flag = false;
        if(document.getElementById("radioCustom").checked == "checked");
        {
            if(document.getElementById("parent").value == "")
                return;
            
            flag = true;
        }
        if(document.getElementById("title").value == "")
            return;



        let parentProject;
        if (flag)
        {
            parentProject = document.getElementById("parent").value;
        }
        else
        {
            parentProject = "default";
        }

        let title = document.getElementById("title").value;

        let description = document.getElementById("desc");

        let newThing = toDoClass(title);
        newThing.parentProject = parentProject;
        newThing.description = description;
        newThing.addToList("Default First Item");

        storeList(newThing);

        saveList();

        console.log(listArray);

        mainButton();
        
        // radioDefault
        // radioCustom -> if checked, pull:  'parent'
        
        // title
        // desc (optional)
    }


    let currentListIndex = -1;

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
                currentListIndex = objInd;
                break;
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

                                
            ele = document.createElement("input");
            ele.type = "checkbox";
            ele.addEventListener("click", updateCheckboxArray);
            ele.id = index;
            ele.checked = listArray[objInd].checkList[index];
            document.getElementById(name + index).appendChild(ele);
        }

        function updateCheckboxArray()
        {
            listArray[currentListIndex].checkList[this.id] = !listArray[currentListIndex].checkList[this.id];
            console.log(listArray[currentListIndex].checkList);
            saveList();
            console.log(listArray);
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
        

        function doesContainerExist(containerName){
            return document.getElementById(containerName) != null;
        }
        */
    }


    // LEFT OFF HERE, TRYING TO REPLACE BOXES!!!
    function replaceMainList(subListCategory)
    { 
        let list = document.getElementById("mainList");
        while(list.hasChildNodes())
        {
            list.removeChild(list.lastChild);
        }

        let added = false;
        if(subListCategory == "mainButton")
        {
            if(listArray.length == 0)
            {
                document.getElementById("currentListTitle").innerText = "Press 'New List'";
                return;
            }
            currentListIndex = -1;
           //console.log("in mainButton");
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
                    added = true;
                }
            }
            if(added == false)
            {
                    mainButton();
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

    function editList()
    {
        if(currentListIndex == -1)
        {
            return;
        }
        let i = 0;
        let size = listArray[currentListIndex].list.length;
        let name = listArray[currentListIndex].listName;
        console.log(size);
        for(i = 0; i < size; i++)
        {
            document.getElementById(i).remove();
            let currentChild = document.getElementById(name + i);
            let parent = document.getElementById("displayBox").firstChild;

            let newChild = document.createElement("input");
            newChild.type = "text";
            newChild.id = currentChild.id;
            newChild.value = currentChild.innerText;

            currentChild.innerText = "";
            currentChild.append(newChild);

            /*
            if(i == 0)
            {
                newChild = document.createElement("button");
                newChild.id = name + "+bef";
                newChild.innerText = "NEW ITEM ABOVE CURRENT";
                currentChild.append(newChild);
            }

            
            newChild = document.createElement("button");
            newChild.id = name + "+aft";
            newChild.innerText = "NEW ITEM BELOW CURRENT";
            currentChild.append(newChild);
            */


            newChild = document.createElement("button");
            newChild.id = name + i + "-";
            newChild.innerText = "REMOVE";
            newChild.addEventListener("click", removeRow);
            currentChild.append(newChild);

            if(i == size - 1)
            {
                newChild = document.createElement("button");
                newChild.id = name + i + "+";
                newChild.innerText = "ADD ITEM";
                newChild.addEventListener("click", addRow);
                currentChild.append(newChild);
            }



            // parent.replaceChild(newChild, currentChild);
        }

        let newChild = document.createElement("button");
        newChild.id = "save";
        newChild.innerText = "SAVE CHANGES";
        newChild.addEventListener("click", save);
        document.getElementById("displayBox").appendChild(newChild);
    }

    function save(){
        let i = 0;
        let webSize = document.getElementById("displayBox").firstChild.childNodes.length;
        console.log("NUM CHILDREN: " + webSize);
        let arr = listArray[currentListIndex].list;
        console.log(arr);
        let arrLength = arr.length;
        for(i = 1; i < webSize; i++)
        {
            if(i + 1 >= arr.length)
            {
                arr.push(document.getElementById("displayBox").firstChild.childNodes[i].firstChild.value);
            }
            else{
                console.log(i);
                arr[i - 1] = document.getElementById("displayBox").firstChild.childNodes[i].firstChild.value;
            }

        }  
        
        if(webSize-1 < arrLength)
        {
            if(webSize - 1 == 0)
            {
                deleteList();
            }
            else
            {
                console.log("smallerList than initial Array");
                arr = arr.splice(0, webSize - 1);
            }
        }
        
        saveList();
    }

    function removeRow()
    {
        let parent = this.parentNode.parentNode;
        childIndex = parent.childNodes.length - 2;
        console.log("removeCurrent: " + childIndex);
        let x = confirm("Confirm deletion.");
        if(x)
        {
            // if current is LAST child
            if((this.parentNode == this.parentNode.parentNode.lastChild) && childIndex != 0)
            {
                parent = document.getElementById("displayBox").firstChild.childNodes[childIndex];
                let child = document.createElement("button");
                child.id = parent.id + "+"
                child.addEventListener("click", addRow);
                child.innerText = "ADD ITEM";
                parent.appendChild(child);
            }
            document.getElementById(this.id).parentNode.remove();
        }  
    }

    function deleteList()
    {
        if(currentListIndex == -1)
        {
            alert("No list selected");
            return;
        }  
        let x = confirm("Confirm deletion.");
        if(x)
        {
            listArray.splice(currentListIndex, 1);
            replaceMainList(document.getElementById("currentListTitle").innerText);
            clearSubLists();
        }
        currentListIndex = -1;
    }

    let childIndex = 0;
    // make a row of list in edit mode
    function addRow(){
        let parent = this.parentNode.parentNode;
        console.log(parent);
        childIndex = parent.childNodes.length - 1;

        let name;
        let newChild = document.createElement("li");
        newChild.id = listArray[currentListIndex].listName + childIndex;
        name = newChild.id;
        parent.appendChild(newChild);

        parent = document.getElementById(name);
        newChild = document.createElement("input");
        newChild.type = "text";
        newChild.id = name;
        parent.appendChild(newChild);

        newChild = document.createElement("button");
        newChild.id = name + "-";
        newChild.innerText = "REMOVE";
        newChild.addEventListener("click", removeRow);
        parent.append(newChild);

        newChild = document.createElement("button");
        newChild.id = name + "+";
        newChild.innerText = "ADD ITEM";
        newChild.addEventListener("click", addRow);
        parent.append(newChild);

        name = listArray[currentListIndex].listName + (childIndex - 1) + "+";
        newChild = document.getElementById(name).remove();
    }

    
    function initialSetup(){
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
        header.addEventListener("click", editList);
        header.style.display = "inline";
        document.getElementById("buttons").appendChild(header);

        header = document.createElement("button");
        header.innerText = "DELETE Current List";
        header.id = "deleteList";
        header.addEventListener("click", deleteList);
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

        replaceMainList("mainButton");

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
        document.getElementById("makeList").style.display = "none";
    }


    function storeList(list){
        listArray.push(list);
    }

    function removeList(listIndex){
        listArray.splice(listIndex, 1);
    }

    let listArray = [];
// Main is like normal if you make it an IIFE
    function main(){
        document.getElementById("listConstruction").reset();
        // Data is in the back end now.
        document.getElementById("subList").addEventListener("click", submitList);

        

/*        
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
    
    */
        console.log(JSON.parse(localStorage['ToDoList Collection']));

        listArray = JSON.parse(localStorage['ToDoList Collection']);
        // console.log("LOCAL STORAGE SECTION BELOW HERE:");
        // console.log(JSON.parse(localStorage['ToDoList Collection']));

        // What should I present it as on the DOM?

        initialSetup();
        // JSON.parse(localStorage['ToDoList Collection']
    };
    main();

    function saveList(){
        let JSONREADYarray = JSON.stringify(listArray);
        localStorage.setItem("ToDoList Collection", JSONREADYarray);
    }

    function mainButton()
    {
            clearSubLists();
            document.getElementById("currentListTitle").innerText = "Category Lists";
            replaceMainList("mainButton");
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
        x.required = true;
    }

    function hideCustomInput(){
        let x = document.getElementById("parent");
        x.style.display = "none";
        x.required = false;
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

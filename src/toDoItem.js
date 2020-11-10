// Make a new PROJECT
function toDoClass(theName){
    // Collection of Sentences
    let list = [];
    // Name of ToDo list
    let listName = theName;
    // Info on ToDo list
    let description;
    // Importance of ToDo list;
    let priority = 0;
    // What project is this a part of? By default, it's Default; HUE
    let parentProject = "default";

    // add to list
    function addToList(info){
        list.push(doItemMaker(info));
    }

    function addDescription(info){
        this.description = info;
    }

    // Move the list to another project
    function moveList(parent){
    this.parentProject = parent;
    }

    // Class for the toDo items
    function doItemMaker(text){
        let sentence = text;

        return sentence;
    }

    // activated by clicking an X next to the item
    function removeItem(index){
        list.splice(index, 1);
    }


    return { list, listName, description, priority, parentProject, addToList, moveList, doItemMaker, addDescription };
}

export default toDoClass;

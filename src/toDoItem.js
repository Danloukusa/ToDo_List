// Make a new PROJECT
function toDoClass(theName){
    // Collection of Sentences
    let list = [];
    // 0 = unchecked, 1 = checked. default is 0;
    let checkList = [];
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
        checkList.push(false);
    }

    function editListItem(index, text)
    {
        list[index] = text;
    }

    function addDescription(info){
        this.description = info;
    }

    // Move the list to another project
    function moveList(parent){
    this.parentProject = parent;
    }

    function doItemMaker(text){
        let sentence = text;

        return sentence;
    }

    // activated by clicking an X next to the item
    function removeItem(index){
        list.splice(index, 1);
    }


    return { list, listName, description, priority, parentProject, addToList, moveList, doItemMaker, addDescription, editListItem, removeItem, checkList };
}

export default toDoClass;

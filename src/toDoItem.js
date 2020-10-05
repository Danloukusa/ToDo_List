// MAKE a TODO item

// const { defaultMaxListeners } = require("stream");
// const { get } = require("http");


// Make a new PROJECT
function toDoClass(){
    // Collection of Sentences
    let list = [];
    // Name of ToDo list
    let name;
    // Info on ToDo list
    let description;
    // Importance of ToDo list;
    let priority;
    // What project is this a part of? By default, it's Default; HUE
    let parentProject = "Default";

    // add to list
    function addToList(info){
        list.push(doItemMaker(info));
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


    return { list, name, description, priority, parentProject, addToList, moveList, doItemMaker };
}

export default toDoClass;

/*
const toDoItem = (() => {
    
    let name;
    let description;
    let deadline;
    let priority;

    // INSERT ITEM INTO TODOLIST [array]

    let theList = [];

    function insertIntoList(data){
        theList.push("BANANA");
    }

    function makeItem(name, text, date, importance){
        setName("x");
        console.log(this.name);
        setDescription("Y");
        setDeadline("Z");
        setPriority("NOT Z");
    }

    function getInfo(){
        return getName() + getDescription() + getDeadline() + getPriority();
    }

    function getList(){
        return this.theList;
    }

    function setName(name){
        this.name = name;
    }

    function setDescription(text){
        this.description = text;
    }

    function setDeadline(date){
        this.deadline = date;
    }

    function setPriority(importance){
        this.priority = importance;
    }

    function getName(){
        return this.name;
    }

    function getDescription(){
        return this.description;
    }

    function getDeadline(){
        return this.deadline;
    }

    function getPriority(){
        return this.priority;
    }
    

    // PUBLIC THINGS GO HERE!
    return { getInfo, makeItem, insertIntoList, getList };
})();

export default toDoItem;
*/
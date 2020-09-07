// MAKE a TODO item

// const { defaultMaxListeners } = require("stream");
// const { get } = require("http");

const toDoItem = (() => {
    
    name;
    description;
    deadline;
    priority;

    function makeItem(){
        setName(name);
        setDescription(text);
        setDeadline(date);
        setPriority(importance)
    }

    function getInfo(){
        return getName() + getDescription() + getDeadline() + getPriority();
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
    return { getInfo, makeItem };
})();

export default toDoItem;
let state = {
    lists: ["list1","list2"],
    tasks: []
};

for(let i = 0; i < 4 ;i++){
    state.tasks.push({
        id:"task"+ i,
        title : "test Task"+ i,
        listId : "list1"
    });
}

export default state ;
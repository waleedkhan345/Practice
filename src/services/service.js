class Helper {
    Todo=[]
    update=''

    constructor(){
        this.Stateinitialize();
    }

    Stateinitialize(){
        for (var i=0; i <= 10; i++){
            this.Todo.push({
                id:this.Todo.length,
                Task:`Task # ${this.Todo.length}`
            })
        }
    }

    Addtodo(task){
        this.Todo.push(task)
        return this.Todo
    }

    DeleteTodo(ids){
        var indexes = this.Todo.map(function(obj, index) {
            if(obj.id == ids) {
                return index;
            }
        }).filter(isFinite)
        this.Todo.splice(indexes,1)
    }

    Update(ids){
        var indexes = this.Todo.map(function(obj, index) {
            if(obj.id == ids) {
                return index;
            }
        }).filter(isFinite)
        this.update = this.Todo[indexes].Task
    }

}

let Helpers = new Helper();

export default Helpers


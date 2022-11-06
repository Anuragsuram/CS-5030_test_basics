

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        console.log("Inside the get_todos");
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });    
    
    test("add_todos", () => {
        todoObject = {
            "id": 4,
            "title": "T4",
            "description": "D4",
            "done": false
        };
        todo_service.add_todo(todoObject);
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });
    
    test("update_todos", () => {
        todoObject = {
            "id": 3,
            "title": "T3 Updated",
            "description": "D3 Updated",
            "done": true
        };
        todo_service.update_todo( todoObject.id, todoObject);
        expect(todo_service.get_todo_by_index(todoObject.id).title).toEqual("T3 Updated") && expect(todo_service.get_todo_by_index(todoObject.id).description).toEqual("D3 Updated") && expect(todo_service.get_todo_by_index(todoObject.id).done).toEqual(true);
    });

    test("delete_todos", () => {
        beforeLength = todo_service.get_todos().todo.length;
        todo_service.delete_todo(1);
        afterLength = todo_service.get_todos().todo.length;
        expect(beforeLength).toBeGreaterThan(afterLength);
    }); 


    // Write all your test cases here that corresponds to software requirements


});
export default class Task {
    constructor(title, description, dueDate, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = completed;
    }
}
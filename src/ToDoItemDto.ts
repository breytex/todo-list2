export default class TodoItemDto {
    id: string;
    label?: string;
    description?: string;
    important?: boolean;

    constructor(id: string) {
        this.id = id;
    }
}

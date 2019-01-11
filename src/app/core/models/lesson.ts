
export class Lesson {
    readonly id: string;
    title: string;
    description: string;

    constructor(data: any) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
    }

    private get value() {
        return {
            title: this.title,
            description: this.description
        }
    }

    toPlainObject() {
        return this.value;
    }
}

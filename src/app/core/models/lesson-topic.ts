export class LessonTopic {
    readonly id: string;
    anchor: string;
    content: string;
    goal: string;
    title: string;

    constructor(data: any) {
        this.id = data.id;
        this.anchor = data.anchor;
        this.content = data.content;
        this.goal = data.goal;
        this.title = data.title;
    }

    clone() {
        return new LessonTopic({
            id: this.id,
            anchor: this.anchor,
            content: this.content,
            goal: this.goal,
            title: this.title
        });
    }
}

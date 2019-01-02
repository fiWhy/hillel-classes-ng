export class LessonTopic {
    anchor: string;
    content: string;
    goal: string;
    title: string;

    constructor(data: any) {
        this.anchor = data.anchor;
        this.content = data.content;
        this.goal = data.goal;
        this.title = data.title;
    }
}

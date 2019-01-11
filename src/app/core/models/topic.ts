import { Lesson } from "./lesson";
import { Material } from "./material";
export class TopicGoal {
    content: string;
    goal: string;
    articles?: Material[];

    constructor(data: any) {
        this.content = data.content;
        this.goal = data.goal;
        this.articles = [...(data.articles || [])];
    }

    private get value() {
        return {
            content: this.content,
            goal: this.goal,
            articles: [...this.articles]
        }
    }

    clone() {
        return new TopicGoal(this.value);
    }

    toPlainObject() {
        return this.value;
    }
}

export class Topic {
    readonly id: string;
    anchor: string;
    title: string;
    data: TopicGoal[];

    constructor(data: any, public lesson: Lesson) {
        this.id = data.id;
        this.anchor = data.anchor;
        this.title = data.title;
        this.data = (data.data || []).map(el => new TopicGoal(el));
    }

    private get value() {
        return {
            id: this.id,
            anchor: this.anchor,
            data: this.data.map(el => el.toPlainObject()),
            title: this.title
        };
    }

    clone() {
        return new Topic(this.value, this.lesson);
    }

    toPlainObject() {
        return this.value;
    }
}

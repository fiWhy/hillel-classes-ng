import { Lesson } from "./lesson";
import { Material } from "./material";
export class TopicGoal {
    content: string;
    goal: string;
    articles?: Material[];

    constructor(data: any) {
        this.content = data.content || 'Placeholder content';
        this.goal = data.goal || 'Placeholder goal';
        this.articles = [...(data.articles || []).map(a => new Material(a))];
    }

    private get value() {
        return {
            content: this.content,
            goal: this.goal,
            articles: [...this.articles.map(a => a.toPlainObject())]
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
        this.anchor = data.anchor || `anchor-${this.id}`;
        this.title = data.title || 'Placeholder Title';
        this.data = (data.data || []).map(el => new TopicGoal(el));
    }

    private get value() {
        return {
            id: this.id || null,
            anchor: this.anchor || null,
            data: this.data.map(el => el.toPlainObject()),
            title: this.title || null
        };
    }

    clone() {
        return new Topic(this.value, this.lesson);
    }

    toPlainObject() {
        return this.value;
    }

    get articles() {
        return this.data.reduce((accum, goal) => accum.concat(goal.articles), []);
    }
}

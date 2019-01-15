export class Material {
    readonly id: string;
    text: string;
    link: string;
    topicId: string;

    constructor(data: any) {
        this.id = data.id;
        this.link = data.link || 'http://example.com';
        this.text = data.text || 'Placeholder text';
        this.topicId = data['lesson-topic'] ? data['lesson-topic'].id : null;
    }

    get value() {
        return {
            id: this.id || null,
            link: this.link,
            text: this.text,
            topicId: this.topicId || null
        }
    }

    toPlainObject() {
        return this.value;
    }
}
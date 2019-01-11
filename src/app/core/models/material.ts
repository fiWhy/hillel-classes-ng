export class Material {
    id: string;
    text: string;
    link: string;
    topicId: string;

    constructor(data: any) {
        this.id = data.id;
        this.link = data.link;
        this.text = data.text;
        this.topicId = data['lesson-topic'] ? data['lesson-topic'].id: null;
    }
}
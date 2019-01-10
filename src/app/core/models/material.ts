export class Material {
    id: string;
    label: string;
    link: string;
    topicId: string;

    constructor(data: any) {
        this.id = data.id;
        this.link = data.link;
        this.label = data.label;
        this.topicId = data['lesson-topic'].id;
    }
}
export interface Message {
    id: number;
    content: string;
    messageType: MessageType;
    date: Date;
}

export class Message implements Message {
    constructor(id: number, content: string, type: MessageType, date: Date) {
        this.id = id;
        this.content = content;
        this.messageType = type;
        this.date = date;
    }
}

export type MessageType = 'output' | 'input';
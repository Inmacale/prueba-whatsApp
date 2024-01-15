import { Contact } from "./contact";
import { Message } from "./message";

export interface Chat {
    id: number;
    contact: Contact;
    messages: Message[];
    unreadMessages: Message[];
}
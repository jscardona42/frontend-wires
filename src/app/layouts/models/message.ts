import { User } from "./user";

export interface Message {
    message_id?: number;
    title: string;
    content: string;
    created_date: Date;
    created_time: Date;
    updated_date?:Date;
    users: User;
  }
  
export interface MessageContent {
  content_type: string;
  parts: string[];
}

export interface MessageMetadata {
  model_slug?: string;
  request_id?: string;
  timestamp_?: string;
}

export interface Message {
  id: string;
  author: { role: string };
  content: MessageContent;
  create_time?: number;
  update_time?: number;
  metadata?: MessageMetadata;
}

export interface MappingNode {
  id: string;
  message: Message | null;
  parent: string | null;
  children: string[];
}

export interface Conversation {
  title: string;
  create_time: number;
  update_time: number;
  model: string;
  messages: Message[];
  mapping: Record<string, MappingNode>;
}

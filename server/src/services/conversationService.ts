import { Conversation, MappingNode, Message } from "../types/conversationTypes";

export const processConversations = (rawData: any): Conversation[] => {
  if (!Array.isArray(rawData)) {
    throw new Error("Invalid format: Expected an array of conversations.");
  }

  return rawData.map((conversation) => {
    const processedMapping = processMapping(conversation.mapping || {});

    return {
      title: conversation.title || "Untitled Conversation",
      create_time: conversation.create_time || Date.now(),
      update_time: conversation.update_time || Date.now(),
      model: extractModelFromMapping(processedMapping),
      messages: extractMessagesFromMapping(processedMapping),
      mapping: processedMapping,
    };
  });
};

/**
 * Extracts the model from mapping nodes.
 */
const extractModelFromMapping = (
  mapping: Record<string, MappingNode>
): string => {
  for (const node of Object.values(mapping)) {
    if (node.message?.metadata?.model_slug) {
      return node.message.metadata.model_slug;
    }
  }
  return "unknown";
};

/**
 * Extracts all messages from the mapping into a flat array.
 */
const extractMessagesFromMapping = (
  mapping: Record<string, MappingNode>
): Message[] => {
  const messages: Message[] = [];
  for (const node of Object.values(mapping)) {
    if (node.message) {
      messages.push(node.message);
    }
  }
  return messages.sort((a, b) => (a.create_time || 0) - (b.create_time || 0)); // Sort by timestamp
};

/**
 * Converts mapping objects into structured conversations.
 */
const processMapping = (
  mapping: Record<string, any>
): Record<string, MappingNode> => {
  const result: Record<string, MappingNode> = {};

  for (const [id, node] of Object.entries(mapping)) {
    result[id] = {
      id,
      message: node.message ? processMessage(node.message) : null,
      parent: node.parent || null,
      children: node.children || [],
    };
  }

  return result;
};

/**
 * Converts a raw message object into a structured message.
 */
const processMessage = (message: any): Message => ({
  id: message.id,
  author: { role: message.author?.role || "unknown" },
  content: {
    content_type: message.content?.content_type || "text",
    parts: message.content?.parts || [],
  },
  create_time: message.create_time || null,
  update_time: message.update_time || null,
  metadata: message.metadata || {},
});

import { Injectable } from '@nestjs/common';

interface SendMessageRequest {
  to: string;
  from: string;
  content: string;
  type: 'text' | 'image' | 'file';
}

interface MessageResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

@Injectable()
export class MessagingService {
  sendMessage(data: SendMessageRequest): MessageResponse {
    console.log('Sending message:', data);
    return {
      status: 'success',
      message: 'Message sent successfully',
      data: { id: 'msg-' + Date.now(), ...data, sentAt: new Date().toISOString() },
      timestamp: new Date().toISOString(),
    };
  }

  getMessages(data: { userId: string; limit?: number }): MessageResponse {
    console.log('Getting messages for user:', data.userId);
    const messages = [
      { id: '1', from: 'user1', to: data.userId, content: 'Hello!', type: 'text', sentAt: new Date().toISOString() },
      { id: '2', from: 'user2', to: data.userId, content: 'How are you?', type: 'text', sentAt: new Date().toISOString() },
    ];
    return {
      status: 'success',
      message: 'Messages retrieved successfully',
      data: messages.slice(0, data.limit || 10),
      timestamp: new Date().toISOString(),
    };
  }

  markAsRead(data: { messageId: string; userId: string }): MessageResponse {
    console.log('Marking message as read:', data);
    return {
      status: 'success',
      message: 'Message marked as read',
      data: { messageId: data.messageId, userId: data.userId, readAt: new Date().toISOString() },
      timestamp: new Date().toISOString(),
    };
  }
}

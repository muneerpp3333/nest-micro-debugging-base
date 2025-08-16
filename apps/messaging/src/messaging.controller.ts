import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MessagingService } from './messaging.service';

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

@Controller()
export class MessagingController {
  constructor(private readonly messagingService: MessagingService) {}

  @MessagePattern('send_message')
  sendMessage(@Payload() data: SendMessageRequest): MessageResponse {
    return this.messagingService.sendMessage(data);
  }

  @MessagePattern('get_messages')
  getMessages(@Payload() data: { userId: string; limit?: number }): MessageResponse {
    return this.messagingService.getMessages(data);
  }

  @MessagePattern('mark_read')
  markAsRead(@Payload() data: { messageId: string; userId: string }): MessageResponse {
    return this.messagingService.markAsRead(data);
  }
}

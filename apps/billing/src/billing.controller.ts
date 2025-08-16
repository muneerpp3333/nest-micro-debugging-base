import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BillingService } from './billing.service';

interface CreateInvoiceRequest {
  userId: string;
  amount: number;
  description: string;
  items: Array<{ name: string; price: number; quantity: number }>;
}

interface PaymentRequest {
  invoiceId: string;
  paymentMethod: string;
  amount: number;
}

interface BillingResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @MessagePattern('create_invoice')
  createInvoice(@Payload() data: CreateInvoiceRequest): BillingResponse {
    return this.billingService.createInvoice(data);
  }

  @MessagePattern('process_payment')
  processPayment(@Payload() data: PaymentRequest): BillingResponse {
    return this.billingService.processPayment(data);
  }

  @MessagePattern('get_invoice')
  getInvoice(@Payload() data: { invoiceId: string }): BillingResponse {
    return this.billingService.getInvoice(data.invoiceId);
  }

  @MessagePattern('get_user_invoices')
  getUserInvoices(@Payload() data: { userId: string; limit?: number }): BillingResponse {
    return this.billingService.getUserInvoices(data);
  }
}

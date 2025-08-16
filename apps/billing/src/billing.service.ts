import { Injectable } from '@nestjs/common';

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

@Injectable()
export class BillingService {
  createInvoice(data: CreateInvoiceRequest): BillingResponse {
    console.log('Creating invoice:', data);
    return {
      status: 'success',
      message: 'Invoice created successfully',
      data: { 
        id: 'inv-' + Date.now(), 
        ...data, 
        status: 'pending',
        createdAt: new Date().toISOString() 
      },
      timestamp: new Date().toISOString(),
    };
  }

  processPayment(data: PaymentRequest): BillingResponse {
    console.log('Processing payment:', data);
    return {
      status: 'success',
      message: 'Payment processed successfully',
      data: { 
        paymentId: 'pay-' + Date.now(),
        ...data, 
        status: 'completed',
        processedAt: new Date().toISOString() 
      },
      timestamp: new Date().toISOString(),
    };
  }

  getInvoice(invoiceId: string): BillingResponse {
    console.log('Getting invoice:', invoiceId);
    return {
      status: 'success',
      message: 'Invoice retrieved successfully',
      data: { 
        id: invoiceId, 
        userId: 'user123', 
        amount: 100, 
        description: 'Sample invoice',
        status: 'paid',
        createdAt: new Date().toISOString() 
      },
      timestamp: new Date().toISOString(),
    };
  }

  getUserInvoices(data: { userId: string; limit?: number }): BillingResponse {
    console.log('Getting invoices for user:', data.userId);
    const invoices = [
      { id: '1', userId: data.userId, amount: 100, description: 'Invoice 1', status: 'paid' },
      { id: '2', userId: data.userId, amount: 200, description: 'Invoice 2', status: 'pending' },
    ];
    return {
      status: 'success',
      message: 'Invoices retrieved successfully',
      data: invoices.slice(0, data.limit || 10),
      timestamp: new Date().toISOString(),
    };
  }

  testService(data: any): BillingResponse {
    console.log('Test service called on Billing service:', data);
    return {
      status: 'success',
      message: 'Billing service is healthy and responding',
      data: {
        service: 'billing',
        echo: data,
        capabilities: ['create_invoice', 'process_payment', 'get_invoice', 'get_user_invoices'],
      },
      timestamp: new Date().toISOString(),
    };
  }
}

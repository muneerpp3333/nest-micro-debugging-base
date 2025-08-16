import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  SERVICE_NAMES,
  ProcessRequest,
  AnalyzeRequest,
} from '../../../libs/shared/src';

interface ProcessResponse {
  status: string;
  message: string;
  data: ProcessRequest;
  timestamp: string;
}

interface AnalyzeResponse {
  status: string;
  message: string;
  analysis: {
    processed: boolean;
    insights: string[];
  };
  data: AnalyzeRequest;
  timestamp: string;
}

interface ListingResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

interface MessagingResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

interface BillingResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

@Injectable()
export class ApiService {
  constructor(
    @Inject(SERVICE_NAMES.AI_SDR) private readonly aiSdrClient: ClientProxy,
    @Inject(SERVICE_NAMES.LISTING) private readonly listingClient: ClientProxy,
    @Inject(SERVICE_NAMES.MESSAGING) private readonly messagingClient: ClientProxy,
    @Inject(SERVICE_NAMES.BILLING) private readonly billingClient: ClientProxy,
  ) {}

  // AI-SDR methods
  processAiSdrRequest(data: ProcessRequest): Observable<ProcessResponse> {
    return this.aiSdrClient.send<ProcessResponse>('process_ai_sdr', data);
  }

  analyzeData(data: AnalyzeRequest): Observable<AnalyzeResponse> {
    return this.aiSdrClient.send<AnalyzeResponse>('analyze_data', data);
  }

  // Listing methods
  createListing(data: any): Observable<ListingResponse> {
    return this.listingClient.send<ListingResponse>('create_listing', data);
  }

  updateListing(data: any): Observable<ListingResponse> {
    return this.listingClient.send<ListingResponse>('update_listing', data);
  }

  getListing(id: string): Observable<ListingResponse> {
    return this.listingClient.send<ListingResponse>('get_listing', { id });
  }

  listListings(data: any): Observable<ListingResponse> {
    return this.listingClient.send<ListingResponse>('list_listings', data);
  }

  // Messaging methods
  sendMessage(data: any): Observable<MessagingResponse> {
    return this.messagingClient.send<MessagingResponse>('send_message', data);
  }

  getMessages(data: any): Observable<MessagingResponse> {
    return this.messagingClient.send<MessagingResponse>('get_messages', data);
  }

  markAsRead(data: any): Observable<MessagingResponse> {
    return this.messagingClient.send<MessagingResponse>('mark_read', data);
  }

  // Billing methods
  createInvoice(data: any): Observable<BillingResponse> {
    return this.billingClient.send<BillingResponse>('create_invoice', data);
  }

  processPayment(data: any): Observable<BillingResponse> {
    return this.billingClient.send<BillingResponse>('process_payment', data);
  }

  getInvoice(invoiceId: string): Observable<BillingResponse> {
    return this.billingClient.send<BillingResponse>('get_invoice', { invoiceId });
  }

  getUserInvoices(data: any): Observable<BillingResponse> {
    return this.billingClient.send<BillingResponse>('get_user_invoices', data);
  }
}

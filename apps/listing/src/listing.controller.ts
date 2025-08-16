import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ListingService } from './listing.service';

interface CreateListingRequest {
  title: string;
  description: string;
  price: number;
  userId: string;
}

interface UpdateListingRequest {
  id: string;
  title?: string;
  description?: string;
  price?: number;
}

interface ListingResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

@Controller()
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @MessagePattern('create_listing')
  createListing(@Payload() data: CreateListingRequest): ListingResponse {
    return this.listingService.createListing(data);
  }

  @MessagePattern('update_listing')
  updateListing(@Payload() data: UpdateListingRequest): ListingResponse {
    return this.listingService.updateListing(data);
  }

  @MessagePattern('get_listing')
  getListing(@Payload() data: { id: string }): ListingResponse {
    return this.listingService.getListing(data.id);
  }

  @MessagePattern('list_listings')
  listListings(@Payload() data: { userId?: string; limit?: number }): ListingResponse {
    return this.listingService.listListings(data);
  }

  @MessagePattern('test_service')
  testService(@Payload() data: any): ListingResponse {
    return this.listingService.testService(data);
  }
}

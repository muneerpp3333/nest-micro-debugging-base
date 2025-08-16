import { Injectable } from '@nestjs/common';

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

@Injectable()
export class ListingService {
  createListing(data: CreateListingRequest): ListingResponse {
    console.log('Creating listing:', data);
    return {
      status: 'success',
      message: 'Listing created successfully',
      data: { id: 'listing-' + Date.now(), ...data },
      timestamp: new Date().toISOString(),
    };
  }

  updateListing(data: UpdateListingRequest): ListingResponse {
    console.log('Updating listing:', data);
    return {
      status: 'success',
      message: 'Listing updated successfully',
      data: { id: data.id, ...data },
      timestamp: new Date().toISOString(),
    };
  }

  getListing(id: string): ListingResponse {
    console.log('Getting listing:', id);
    return {
      status: 'success',
      message: 'Listing retrieved successfully',
      data: { id, title: 'Sample Listing', description: 'Sample description', price: 100 },
      timestamp: new Date().toISOString(),
    };
  }

  listListings(data: { userId?: string; limit?: number }): ListingResponse {
    console.log('Listing listings:', data);
    const listings = [
      { id: '1', title: 'Listing 1', description: 'Description 1', price: 100 },
      { id: '2', title: 'Listing 2', description: 'Description 2', price: 200 },
    ];
    return {
      status: 'success',
      message: 'Listings retrieved successfully',
      data: listings.slice(0, data.limit || 10),
      timestamp: new Date().toISOString(),
    };
  }

  testService(data: any): ListingResponse {
    console.log('Test service called on Listing service:', data);
    return {
      status: 'success',
      message: 'Listing service is healthy and responding',
      data: {
        service: 'listing',
        echo: data,
        capabilities: ['create_listing', 'update_listing', 'get_listing', 'list_listings'],
      },
      timestamp: new Date().toISOString(),
    };
  }
}

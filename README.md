<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# AI-SDR Microservices with RabbitMQ

This project demonstrates a comprehensive microservices architecture using NestJS and RabbitMQ for communication between an API Gateway and multiple microservices.

## Architecture

- **API Gateway** (`apps/api`): Handles GraphQL requests and forwards them to microservices via RabbitMQ
- **AI-SDR Service** (`apps/ai-sdr`): Processes AI-SDR related requests
- **Listing Service** (`apps/listing`): Manages listing operations (create, update, get, list)
- **Messaging Service** (`apps/messaging`): Handles messaging operations (send, get, mark as read)
- **Billing Service** (`apps/billing`): Manages billing operations (invoices, payments)
- **RabbitMQ**: Message broker for inter-service communication

## Prerequisites

- Node.js (v18 or higher)
- pnpm
- Docker and Docker Compose

## Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start RabbitMQ:**
   ```bash
   pnpm start:rabbitmq
   ```
   This will start RabbitMQ on `localhost:5672` with management UI on `localhost:15672`

3. **Set up environment variables:**
   Create a `.env` file in the root directory with:
   ```env
   RABBITMQ_HOST=localhost
   RABBITMQ_PORT=5672
   RABBITMQ_USERNAME=guest
   RABBITMQ_PASSWORD=guest
   RABBITMQ_AI_SDR_QUEUE=ai-sdr-queue
   RABBITMQ_LISTING_QUEUE=listing-queue
   RABBITMQ_MESSAGING_QUEUE=messaging-queue
   RABBITMQ_BILLING_QUEUE=billing-queue
   API_PORT=3000
   ```

## Running the Services

### Development Mode

1. **Start all microservices:**
   ```bash
   # Terminal 1: AI-SDR Service
   pnpm start:ai-sdr:dev

   # Terminal 2: Listing Service
   pnpm start:listing:dev

   # Terminal 3: Messaging Service
   pnpm start:messaging:dev

   # Terminal 4: Billing Service
   pnpm start:billing:dev

   # Terminal 5: API Gateway
   pnpm start:api:dev
   ```

### Production Mode

1. **Build the project:**
   ```bash
   pnpm build
   ```

2. **Start services:**
   ```bash
   pnpm start:ai-sdr
   pnpm start:listing
   pnpm start:messaging
   pnpm start:billing
   pnpm start:api
   ```

## GraphQL API

### API Gateway (Port 3000)

- **GraphQL Playground:** http://localhost:3000/graphql
- **Health Query:** `{ health }`

### Available Mutations

#### AI-SDR Operations
- `processAiSdr(input: ProcessRequestInput)`
- `analyzeData(input: AnalyzeRequestInput)`

#### Listing Operations
- `createListing(input: CreateListingInput)`
- `updateListing(input: UpdateListingInput)`
- `getListing(id: String!)`
- `listListings(input: ListListingsInput)`

#### Messaging Operations
- `sendMessage(input: SendMessageInput)`
- `getMessages(input: GetMessagesInput)`
- `markAsRead(input: MarkAsReadInput)`

#### Billing Operations
- `createInvoice(input: CreateInvoiceInput)`
- `processPayment(input: ProcessPaymentInput)`
- `getInvoice(invoiceId: String!)`
- `getUserInvoices(input: GetUserInvoicesInput)`

## Example Usage

### Health Check

```graphql
query {
  health
}
```

### AI-SDR Operations

```graphql
mutation {
  processAiSdr(input: {
    data: "sample data for processing"
    type: "analysis"
  }) {
    status
    message
    data
    timestamp
  }
}

mutation {
  analyzeData(input: {
    data: "data to analyze"
    analysisType: "comprehensive"
    parameters: "{\"depth\": \"deep\"}"
  }) {
    status
    message
    analysis {
      processed
      insights
    }
    data
    timestamp
  }
}
```

### Listing Operations

```graphql
mutation {
  createListing(input: {
    title: "Sample Listing"
    description: "A sample listing description"
    price: 100
    userId: "user123"
  }) {
    status
    message
    data
    timestamp
  }
}

query {
  getListing(id: "listing-123") {
    status
    message
    data
    timestamp
  }
}
```

### Messaging Operations

```graphql
mutation {
  sendMessage(input: {
    to: "user456"
    from: "user123"
    content: "Hello there!"
    type: "text"
  }) {
    status
    message
    data
    timestamp
  }
}

query {
  getMessages(input: {
    userId: "user123"
    limit: 10
  }) {
    status
    message
    data
    timestamp
  }
}
```

### Billing Operations

```graphql
mutation {
  createInvoice(input: {
    userId: "user123"
    amount: 150
    description: "Service invoice"
    items: [
      { name: "Service A", price: 100, quantity: 1 }
      { name: "Service B", price: 50, quantity: 1 }
    ]
  }) {
    status
    message
    data
    timestamp
  }
}

mutation {
  processPayment(input: {
    invoiceId: "inv-123"
    paymentMethod: "credit_card"
    amount: 150
  }) {
    status
    message
    data
    timestamp
  }
}
```

## RabbitMQ Management

- **Management UI:** http://localhost:15672
- **Username:** guest
- **Password:** guest

## Debugging

The project includes VS Code debug configurations for all services:

- **Debug AI-SDR (Main)**: Debug the AI-SDR microservice
- **Debug API Service**: Debug the GraphQL API Gateway
- **Debug Listing Service**: Debug the listing microservice
- **Debug Messaging Service**: Debug the messaging microservice
- **Debug Billing Service**: Debug the billing microservice

## Stopping Services

```bash
# Stop RabbitMQ
pnpm stop:rabbitmq

# Stop services (Ctrl+C in their respective terminals)
```

## Project Structure

```
ai-sdr/
├── apps/
│   ├── api/                 # API Gateway (GraphQL)
│   │   └── src/
│   │       ├── api.controller.ts
│   │       ├── api.service.ts
│   │       ├── api.module.ts
│   │       └── graphql/
│   │           ├── resolvers/ai-sdr.resolver.ts
│   │           └── types/ai-sdr.types.ts
│   ├── ai-sdr/             # AI-SDR Service
│   │   └── src/
│   │       ├── app.controller.ts
│   │       ├── app.service.ts
│   │       └── app.module.ts
│   ├── listing/            # Listing Service
│   │   └── src/
│   │       ├── listing.controller.ts
│   │       ├── listing.service.ts
│   │       └── listing.module.ts
│   ├── messaging/          # Messaging Service
│   │   └── src/
│   │       ├── messaging.controller.ts
│   │       ├── messaging.service.ts
│   │       └── messaging.module.ts
│   └── billing/            # Billing Service
│       └── src/
│           ├── billing.controller.ts
│           ├── billing.service.ts
│           └── billing.module.ts
├── libs/
│   └── shared/             # Shared utilities
│       └── src/
│           ├── service.names.ts
│           ├── services/shared.service.ts
│           ├── modules/shared.module.ts
│           └── interfaces/requests.interface.ts
├── docker-compose.yml      # RabbitMQ configuration
└── package.json
```

## Message Flow

1. Client sends GraphQL query/mutation to API Gateway
2. API Gateway sends message to appropriate RabbitMQ queue
3. Target microservice receives message from queue
4. Microservice processes the request
5. Response is sent back through the same flow

## Development

### Adding New Message Patterns

1. Add new method in `apps/api/src/api.service.ts`
2. Add corresponding GraphQL resolver in `apps/api/src/graphql/resolvers/`
3. Add message pattern handler in the target microservice controller
4. Implement business logic in the target microservice service

### Adding New Services

1. Create new service using `npx nest generate app <service-name>`
2. Add service name to `libs/shared/src/service.names.ts`
3. Configure RabbitMQ client in the new service
4. Update API Gateway to communicate with the new service
5. Add debug configuration to `.vscode/launch.json`
6. Add scripts to `package.json`

## Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run e2e tests
pnpm test:e2e

# Run linting
pnpm lint
```

## License

This project is licensed under the MIT License.
# nest-micro-debugging-base

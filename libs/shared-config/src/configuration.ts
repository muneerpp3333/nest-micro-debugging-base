export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "3000", 10),
  APP_URL: process.env.APP_URL || "http://localhost:3000",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: parseInt(process.env.DB_PORT || "5432", 10),
  DB_USERNAME: process.env.DB_USERNAME || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "postgres",
  DB_DATABASE: process.env.DB_DATABASE || "ai_sdr",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-4",
  LOG_LEVEL: process.env.LOG_LEVEL || "info",
  ENCRYPTION_KEY:
    process.env.ENCRYPTION_KEY || "default-encryption-key-change-in-production",
  // RabbitMQ Configuration
  RABBITMQ_HOST: process.env.RABBITMQ_HOST || "localhost",
  RABBITMQ_PORT: parseInt(process.env.RABBITMQ_PORT || "5673", 10),
  RABBITMQ_USERNAME: process.env.RABBITMQ_USERNAME || "guest",
  RABBITMQ_PASSWORD: process.env.RABBITMQ_PASSWORD || "guest",
  // Queue names
  RABBITMQ_AI_SDR_QUEUE: process.env.RABBITMQ_AI_SDR_QUEUE || "ai-sdr-queue",
  RABBITMQ_LISTING_QUEUE: process.env.RABBITMQ_LISTING_QUEUE || "listing-queue",
  RABBITMQ_MESSAGING_QUEUE: process.env.RABBITMQ_MESSAGING_QUEUE || "messaging-queue",
  RABBITMQ_BILLING_QUEUE: process.env.RABBITMQ_BILLING_QUEUE || "billing-queue",
  // Storage configuration
  STORAGE_ENDPOINT: process.env.STORAGE_ENDPOINT || "http://localhost:9000",
  STORAGE_ACCESS_KEY: process.env.STORAGE_ACCESS_KEY || "minioadmin",
  STORAGE_SECRET_KEY: process.env.STORAGE_SECRET_KEY || "minioadmin",
  STORAGE_BUCKET_NAME: process.env.STORAGE_BUCKET_NAME || "ai-sdr-uploads",
  // Stripe Configuration
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || "",
  // Service URLs for health checks
  API_SERVICE_URL: process.env.API_SERVICE_URL || "http://localhost:3000",
  AI_SDR_SERVICE_URL: process.env.AI_SDR_SERVICE_URL || "",
  LISTING_SERVICE_URL: process.env.LISTING_SERVICE_URL || "",
  MESSAGING_SERVICE_URL: process.env.MESSAGING_SERVICE_URL || "",
  BILLING_SERVICE_URL: process.env.BILLING_SERVICE_URL || "",
  RABBITMQ_MANAGEMENT_URL: process.env.RABBITMQ_MANAGEMENT_URL || "http://localhost:15673",
  // Flag to disable scheduled health checks in local development
  DISABLE_HEALTH_CHECKS: process.env.DISABLE_HEALTH_CHECKS || "",
});

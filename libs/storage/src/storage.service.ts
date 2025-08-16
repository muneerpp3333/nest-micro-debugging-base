import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface UploadedFile {
  key: string;
  url: string;
  size: number;
  mimetype: string;
}

export interface UploadOptions {
  organizationId: string;
  folder: string;
  filename: string;
  mimetype: string;
  size: number;
}

@Injectable()
export class StorageService implements OnModuleInit {
  private readonly logger = new Logger(StorageService.name);
  private bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.bucketName = this.configService.get<string>('STORAGE_BUCKET_NAME') || 'ai-sdr-uploads';
  }

  async onModuleInit() {
    this.logger.log('Storage service initialized');
  }

  async uploadFile(file: Express.Multer.File, options: UploadOptions): Promise<UploadedFile> {
    this.logger.log(`Uploading file: ${options.filename}`);
    
    // Simulate file upload for now
    const key = this.generateKey(options.organizationId, options.folder, options.filename);
    
    return {
      key,
      url: `https://storage.example.com/${key}`,
      size: file.size,
      mimetype: file.mimetype,
    };
  }

  async deleteFile(key: string): Promise<void> {
    this.logger.log(`Deleting file: ${key}`);
    // Simulate file deletion
  }

  async getFileUrl(key: string): Promise<string> {
    return `https://storage.example.com/${key}`;
  }

  private generateKey(
    organizationId: string,
    folder: string,
    filename: string,
  ): string {
    // Sanitize filename
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    const timestamp = Date.now();
    return `${organizationId}/${folder}/${timestamp}_${sanitizedFilename}`;
  }
}

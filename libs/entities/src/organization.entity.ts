import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';

export enum BillingType {
  FREE = 'free',
  SUBSCRIPTION = 'subscription',
  PAY_AS_YOU_GO = 'pay_as_you_go',
}

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({ nullable: true })
  contactEmail?: string;

  @Column({ nullable: true })
  stripeCustomerId?: string;

  @Column({
    type: 'enum',
    enum: BillingType,
    default: BillingType.FREE,
  })
  billingType!: BillingType;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.5 })
  freeUsageLimit!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  freeUsageUsed!: number;

  @Column({ nullable: true })
  stripeSubscriptionItemId?: string; // For PAG usage reporting

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => User, (user) => user.organization)
  users!: User[];
}

export enum PaymentStatus {
  PENDING = 'pending',
  PAID = 'paid',
  FAILED = 'failed',
  REFUNDED = 'refunded',
  CANCELLED = 'cancelled',
}

export enum VnpayTransactionStatus {
  INITIATED = 'initiated',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export enum PaymentProvider {
  VNPay = 'vnpay',
}
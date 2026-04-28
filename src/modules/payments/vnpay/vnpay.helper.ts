import * as crypto from 'crypto';
import moment from "moment";

export function createVnpayUrl(
  vnpTxnRef: string,
  amount: number,
  orderInfo: string,
  ipAddr: string,
): string {
  const params: Record<string, string> = {
    vnp_Version: '2.1.0',
    vnp_Command: 'pay',
    vnp_TmnCode: process.env.VNPAY_TMN_CODE,
    vnp_Amount: String(amount * 100),
    vnp_CreateDate: moment().format('YYYYMMDDHHmmss'),
    vnp_CurrCode: 'VND',
    vnp_IpAddr: ipAddr,
    vnp_Locale: 'vn',
    vnp_OrderInfo: orderInfo,
    vnp_OrderType: 'other',
    vnp_ReturnUrl: process.env.VNPAY_RETURN_URL,
    vnp_TxnRef: vnpTxnRef,
  };

  const sorted = Object.fromEntries(Object.entries(params).sort());
  const signData = new URLSearchParams(sorted).toString();
  const hash = crypto
    .createHmac('sha512', process.env.VNPAY_HASH_SECRET)
    .update(Buffer.from(signData, 'utf-8') as any)
    .digest('hex');

  return `${process.env.VNPAY_URL}?${signData}&vnp_SecureHash=${hash}`;
}

export function verifyVnpaySignature(query: Record<string, string>): boolean {
  const { vnp_SecureHash, vnp_SecureHashType, ...rest } = query;
  const sorted = Object.fromEntries(Object.entries(rest).sort());
  const signData = new URLSearchParams(sorted).toString();
  const hash = crypto
    .createHmac('sha512', process.env.VNPAY_HASH_SECRET)
    .update(Buffer.from(signData, 'utf-8') as any)
    .digest('hex');
  return hash === vnp_SecureHash;
}
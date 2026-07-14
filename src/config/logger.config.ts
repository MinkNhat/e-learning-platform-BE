import { Params } from 'nestjs-pino';

const getRequestUrl = (req: any) => req.originalUrl || req.url;
const getRequestPath = (req: any) => getRequestUrl(req)?.split('?')[0];
const hasKeys = (value: any) => value && Object.keys(value).length > 0;

export const createLoggerConfig = (
  logLevel = 'info',
  nodeEnv = 'development',
): Params => {
  const normalizedLogLevel = logLevel.toLowerCase();
  const isProduction = nodeEnv === 'production';
  const shouldLogRequestDetails = ['trace', 'debug'].includes(normalizedLogLevel);

  return {
    pinoHttp: {
      level: normalizedLogLevel,
      quietReqLogger: !shouldLogRequestDetails,
      quietResLogger: !shouldLogRequestDetails,
      wrapSerializers: false,
      serializers: {
        req(req: any) {
          return {
            method: req.method,
            url: getRequestUrl(req),
            query: hasKeys(req.query) ? req.query : undefined,
            // id: req.id,
            // params: hasKeys(req.params) ? req.params : undefined,
            // remoteAddress: req.ip || req.socket?.remoteAddress,
          };
        },
      },
      customSuccessObject(req, res, value) {
        return {};
      },
      customErrorObject(req, res, error, value) {
        return {
          err: value.err,
        };
      },
      customSuccessMessage(req, res, responseTime) {
        return `${req.method} ${getRequestPath(req)} ${res.statusCode} - ${responseTime}ms`;
      },
      customErrorMessage(req, res, error) {
        return `${req.method} ${getRequestPath(req)} ${res.statusCode} - ${error.message}`;
      },
      redact: {
        paths: [
          'req.headers.authorization',
          'req.headers.cookie',
          'req.headers["x-api-key"]',
          'res.headers["set-cookie"]',
        ],
        censor: '[Redacted]',
      },
      transport: isProduction
        ? undefined
        : {
            target: require.resolve('pino-pretty'),
            options: {
              colorize: true,
              singleLine: false,
              translateTime: 'SYS:standard',
              messageFormat: '{if context}[{context}] {end}{msg}',
              ignore: 'pid,hostname,context,reqId',
            },
          },
    },
  };
};

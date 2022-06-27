import { NextApiRequest, NextApiResponse } from '../../node_modules/next/dist/shared/lib/utils';

interface MessageEho extends NextApiRequest {
  query: {
    message?: string;
  };
}

export default function eho(req: MessageEho, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      message: req.query.message ?? 'Васе мессаге',
    }),
  );
}

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '../config/index.js';

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as any;
    (req as any).user = decoded;
    if (decoded.sub) {
      req.headers['x-user-id'] = decoded.sub;
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/index.js';
import { globalLimiter } from './middlewares/rateLimit.js';
import apiRoutes from './routes/index.js';
import { logger } from './utils/logger.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(globalLimiter);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Gateway is running' });
});

// Proxy routes
app.use('/api', apiRoutes);

app.listen(config.port, () => {
  logger.info(`Gateway running on port ${config.port}`);
});

// Refatorado para melhor legibilidade

// Ajustes de performance no roteamento

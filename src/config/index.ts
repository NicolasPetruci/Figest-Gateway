import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  usuarioServiceUrl: process.env.USUARIO_SERVICE_URL || 'http://localhost:3001',
  financeiroServiceUrl: process.env.FINANCEIRO_SERVICE_URL || 'http://localhost:3002',
  comprasServiceUrl: process.env.COMPRAS_SERVICE_URL || 'http://localhost:3003',
  relatorioServiceUrl: process.env.RELATORIO_SERVICE_URL || 'http://localhost:3004',
  integracaoServiceUrl: process.env.INTEGRACAO_SERVICE_URL || 'http://localhost:3005',
  jwtSecret: process.env.JWT_SECRET || 'super-secret',
};

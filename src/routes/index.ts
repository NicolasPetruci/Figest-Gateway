import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { config } from '../config/index.js';
import { verifyAuth } from '../middlewares/auth.js';

const router = Router();

// Authentication Service Proxy
router.use('/auth', createProxyMiddleware({
  target: config.usuarioServiceUrl,
  changeOrigin: true,
  pathRewrite: { '^/api/auth': '/auth' },
}));

// Users Service Proxy (Assuming under usuario service)
router.use('/users', verifyAuth, createProxyMiddleware({
  target: config.usuarioServiceUrl,
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/users' },
}));

// Financeiro Service Proxy
router.use('/finance', verifyAuth, createProxyMiddleware({
  target: config.financeiroServiceUrl,
  changeOrigin: true,
  pathRewrite: { '^/api/finance': '/' },
}));

// Compras Service Proxy
router.use('/purchases', verifyAuth, createProxyMiddleware({
  target: config.comprasServiceUrl,
  changeOrigin: true,
  pathRewrite: { '^/api/purchases': '/' },
}));

// Relatorio Service Proxy
router.use('/reports', verifyAuth, createProxyMiddleware({
  target: config.relatorioServiceUrl,
  changeOrigin: true,
  pathRewrite: { '^/api/reports': '/' },
}));

// Integracao Service Proxy
router.use('/integrations', verifyAuth, createProxyMiddleware({
  target: config.integracaoServiceUrl,
  changeOrigin: true,
  pathRewrite: { '^/api/integrations': '/' },
}));

export default router;

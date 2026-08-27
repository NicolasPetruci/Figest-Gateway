# 🚪 Figest-Gateway

> ⚠️ **Educational Project Notice**: This service is part of the **Figest** financial ecosystem, built for educational, study, and testing purposes to demonstrate microservice API gateway patterns and reverse proxying.

---

## 📌 Overview

**Figest-Gateway** acts as the single entry point for all client requests entering the Figest ecosystem. Built with Express.js and TypeScript, it handles request routing, JWT authentication validation, rate limiting, and security headers.

---

## 🛠️ Tech Stack
* **Runtime:** Node.js 22 + TypeScript
* **Framework:** Express.js
* **Proxy Engine:** `http-proxy-middleware`
* **Security & Auth:** `jsonwebtoken`, `helmet`, `cors`, `express-rate-limit`

---

## 🗺️ Proxy Routing Table

| Inbound Path | Target Service | Service URL | Auth Required |
|---|---|---|---|
| `/api/auth/*` | Figest-UsuarioService | `http://usuario-service:3001/auth/*` | ❌ No |
| `/api/users/*` | Figest-UsuarioService | `http://usuario-service:3001/users/*` | ✅ Yes |
| `/api/finance/*` | Figest-FinanceiroService | `http://financeiro-service:3002/*` | ✅ Yes |
| `/api/purchases/*` | Figest-ComprasService | `http://compras-service:3003/*` | ✅ Yes |
| `/api/reports/*` | Figest-RelatorioService | `http://relatorio-service:3004/*` | ✅ Yes |
| `/api/integrations/*` | Figest-IntegracaoService | `http://integracao-service:3005/*` | ✅ Yes |

---

## 🔒 Authentication Flow
For protected routes, the Gateway verifies the `Authorization: Bearer <token>` header. On successful JWT validation, it injects the `x-user-id` header into the proxied request to inform downstream microservices of the authenticated user's identity.

---

## 🚀 Running Locally

```bash
npm install
npm run build
npm start
```

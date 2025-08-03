# ✅ Todo App Fullstack (Next.js + Express + PostgreSQL)

A fullstack Todo application with a modern UI and scalable backend. Built with:

- **Frontend**: Next.js + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Node.js + Express + PostgreSQL + Prisma ORM
- **Hosting**: Vercel (frontend) & Railway (backend)

---

## 🌐 Live Demo

- Frontend: [View on Vercel](https://todoapp-frontend.vercel.app) 
- Backend API: [View on Railway](https://todoapp-backend-production.up.railway.app) 

---

## 📁 Repositories

- Frontend Repo: [`todoapp-fullstack-nextjs`](https://github.com/tatang111/todoapp-fullstack-nextjs)
- Backend Repo: [`todoapp-fullstack-express`](https://github.com/tatang111/todoapp-fullstack-express)

---

## ⚙️ Tech Stack

| Layer     | Tech Details                                                                 |
|-----------|------------------------------------------------------------------------------|
| Frontend  | Next.js, TypeScript, Tailwind CSS, shadcn/ui                                |
| Backend   | Node.js, Express, PostgreSQL, Prisma ORM                                    |
| Hosting   | Vercel (frontend), Railway (backend + DB)                                   |

---

## 🚀 Getting Started (Development)

### 🖥️ Frontend

# Clone frontend
git clone https://github.com/tatang111/todoapp-fullstack-nextjs
cd todoapp-fullstack-nextjs

# Install dependencies
npm install

# Start dev server
npm run dev
⚙️ Backend
# Clone backend
git clone https://github.com/tatang111/todoapp-fullstack-express
cd todoapp-fullstack-express

# Install dependencies
npm install
Set up environment
Create a .env file in the backend root:

env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
Initialize Prisma

# Push schema to database
npx prisma db push

# Generate Prisma client
npx prisma generate
Run server

npm run dev
🔌 API Endpoints (Backend)
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get a single product
POST	/products	Create a product
PUT	/products/:id	Update a product
DELETE	/products/:id	Delete a product

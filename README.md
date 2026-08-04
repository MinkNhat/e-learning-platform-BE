# E-Learning Platform API

A backend API for an e-learning platform built with NestJS.

## Technologies

- NestJS, TypeScript
- MongoDB with Mongoose
- JWT authentication and Passport (Google, Facebook authenticate)
- Nodemailer / NestJS Mailer
- VNPay payment integration

## Project Structure

```text
src/
  auth/        Authentication and Passport strategies
  config/      App configuration
  core/        Shared decorators, enums, pipes, and interceptors
  databases/   Database seed and migration helpers
  modules/     Feature modules
  utils/       Shared utility services
test/          E2E tests
public/        Static assets
view/          Email or template views
docs/          Extra documentation
```


## Run Locally

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Update `.env` before running the app. Important values include MongoDB, JWT secrets, mail credentials, VNPay, social login, YouTube API, and RAG service settings.

```env
PORT=
...
```

Create seeds data:

```bash
npm run seed:run
```

Start the development server:

```bash
npm run dev
```
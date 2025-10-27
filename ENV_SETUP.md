# Environment Variables Setup

To configure the GraphQL API endpoint, create a `.env.local` file in the root directory:

```bash
# .env.local

# GraphQL API Endpoint
NEXT_PUBLIC_GRAPHQL_URI=http://localhost:4000/pebble/web/graphql
```

## For Production

When deploying to production, set the environment variable to your deployed backend URL:

```bash
NEXT_PUBLIC_GRAPHQL_URI=https://your-backend-domain.com/pebble/web/graphql
```

## Default Behavior

If no environment variable is set, the app will default to:
- `http://localhost:4000/pebble/web/graphql` (local development)

## Backend Setup

Make sure your backend server is running at the configured URL. See the [cleaning-server](https://github.com/VoltisLab/cleaning-server) repository for backend setup instructions.


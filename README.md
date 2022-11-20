# goinvois-nextjs

Invoice generator on the go.

- Build on nextjs (typescript).
- Fullstack.
- With tailwindcss
- With prisma
- With Auth0

## Gettting staarted (stable nextjs way)

1. `git clone git@github.com:ceghap/goinvois-nextjs.git` or `git clone https://github.com/ceghap/goinvois-nextjs.git`
1. `cd goinvoice-nextjs`
1. `yarn install && yarn dev`
1. go to `http://localhost:3000`

## Next 13 Layout / app

this implementation was moved to a different branch of this repository `with-server-component`.  
to check out the implementation please checkout to the branch `git checkout with-server-component`

## NextAuth + Auth0

- I choose NextAuth so that changing provider in the future will be easier(Avoid vendor locking).
- I did choose Auth0 as it offer free plan with 7000 active user & I did not need to host it anywhere.

Add this in `.env.local` to make Auth0 Work

```
NEXTAUTH_SECRET=
NEXTAUTH_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_ISSUER=
```

## Prisma

Add this in `.env.local`

```
DATABASE_URL=
```

run this to create SQL migration
`npx prisma migrate dev`

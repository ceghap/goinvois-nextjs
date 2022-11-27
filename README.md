# goinvois-nextjs

Invoice generator on the go.

- Build on nextjs (typescript).
- Fullstack.
- With tailwindcss
- With prisma
- ~~With Auth0~~
- With PostgresSQL (supabase)

## Gettting staarted (stable nextjs way)

1. `git clone git@github.com:ceghap/goinvois-nextjs.git` or `git clone https://github.com/ceghap/goinvois-nextjs.git`
1. `cd goinvoice-nextjs`
1. `yarn install && yarn dev`
1. go to `http://localhost:3000`

## Next 13 Layout / app

this implementation was moved to a different branch of this repository `with-server-component`.  
to check out the implementation please checkout to the branch `git checkout with-server-component`

## ~~NextAuth + Auth0~~

- ~~I choose NextAuth so that changing provider in the future will be easier(Avoid vendor locking).~~
- ~~I did choose Auth0 as it offer free plan with 7000 active user & I did not need to host it anywhere.~~

## NextAuth + Oauth + prisma + supabase

I have abandoned Auth0 as setting up Oauth with google & github is the easiest to start with.
I also set prisma up & add it as adaptor in NextAuth. Every successful oauth 'login' will a user in the database.
I also set prisma with supabase as it is a postgreSQL & it is **FREE!** :joi:

Add this in `.env` to make Auth0 Work

```
NEXTAUTH_SECRET=
NEXTAUTH_URL=
# Google provider
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
# Github provider
GITHUB_ID=
GITHUB_SECRET=
```

## Prisma

Too bad, prisma by default did not understand `.env.local` so renaming your `.env.local` to `.env` is a must here.
There are some workaround like using dotenv package for this, but I can't a way to let prisma `env()` in schema.prisma to be working.
I could say that use `.env` is the easiest way to start :)

Add this in `.env`

```
DATABASE_URL=
```

run this to create SQL migration
`npx prisma generate`
`npx prisma migrate dev`

to use prisma studio
`npx prisma studio`

# Reproduction steps

checkout `main` branch

run 
```shell
pnpm install
nx run-many -t=gen
# or bar-app
nx serve foo-app

# see the error in the console
```

# Working on Prisma v5.8.x 

checkout `prisma-5.8` branch

run

```shell
pnpm install
nx run-many -t=push
# or bar-app
nx serve foo-app

# see no errors in the console.
```
you can send the post request to create a new user and ensure it actually works.
```shell
curl -X 'POST' \
  'http://localhost:3020/users' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{"email": "text@mail.com"}'
```

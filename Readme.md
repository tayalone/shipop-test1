# Shippop Test 1

## For Developement Mode

- npm run dev
- docker-compose -f docker-compose.dev.yaml up --build

## For Poduction Mode

- npm run build && npm run start
- docker-compose up --build
- docker run -p 3000:3000 taylone/shippop-test1

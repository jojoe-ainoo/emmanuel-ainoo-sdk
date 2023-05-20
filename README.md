# emmanuel-ainoo-sdk

SDK for an existing Lord of the Rings API

### Description

This projects builds an sdk that allows developers access the lord rings APIs for movies and quotes : `https://the-one-api.dev/documentation`

### Usage

To use this typescript sdk in your project:

1. install the sdk from npm

```shell
npm install emmanuel-ainoo-sdk
```

2. Import and Create an instance of the Client

```typescript
import { LordOfTheRings } from "emmanuel-ainoo-sdk";

const loftrClient = new LordOfTheRings({
  apiKey: "YOUR-API-KEY",
  baseUrl: "https://the-one-api.dev/v2",
});
```

4. Access the lord of the rings documentation to get an API Key here: `https://the-one-api.dev/sign-up`

5. Example: Use client to fetch movies

```typescript
loftrClient.moviesApi.getMovies().then((response) => console.log(response));
```

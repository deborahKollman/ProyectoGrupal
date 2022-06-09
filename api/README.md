# Actualizaciones

- ejecutar "npm install" se añadieron nuevas dependencias para la autenticacion
- en index.js colocar force en true

## Scripts

```bash
npm run dev
```

- inicia el servidor en modo desarrollador con 'nodemon'

```bash
npm start
```

- inicia el servidor en modo de producción con 'node.js'

```bash
npm test
```

- inicia los test

```bash
npm run test:watch
```

- inicia los test y vuelven a correr al hacer algun cambio en los mismos

### Como correr los test de de modelos y los test de rutas:

- ### Para correr todos los test

  ```json
  {
    "scripts": {
      "test": "jest --verbose --detectOpenHandles",
      "test:watch": "npm run test -- --watchAll",
      "dev": "nodemon index.js",
      "start": "node index.js",
      "format": "eslint --fix --ext .js,.jsx ."
    }
  }
  ```

- ### Para correr los test de rutas cambiamos el script de "test"

  ```json
  {
    "scripts": {
      "test": "jest routes --verbose --detectOpenHandles",
      "test:watch": "npm run test -- --watchAll",
      "dev": "nodemon index.js",
      "start": "node index.js",
      "format": "eslint --fix --ext .js,.jsx ."
    }
  }
  ```

- ### Para correr los test de modelos cambiamos el script de "test":

  ```json
  {
    "scripts": {
      "test": "jest models --verbose --detectOpenHandles",
      "test:watch": "npm run test -- --watchAll",
      "dev": "nodemon index.js",
      "start": "node index.js",
      "format": "eslint --fix --ext .js,.jsx ."
    }
  }
  ```

- ### Nota

  para problemas con 'passport' usar en el archivo .env

  GOOGLE_CLIENT_ID=501870436365-eq75i2tfr3rrabcflqjspnrb14ikg6gq.apps.googleusercontent.com

  GOOGLE_CLIENT_SECRET=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

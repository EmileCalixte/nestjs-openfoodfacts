# NestJS OpenFoodFacts

This is a technical test whose purpose is to query the [Open Food Facts database](https://fr.openfoodfacts.org/data).

It should be possible to search for a product by code or by product name. The API documentation is automatically generated.

## Run project

### Start containers

```shell
docker compose up
```

### Import data

Download [Open Food Facts MongoDB export](https://fr.openfoodfacts.org/data) and unarchive it in the `mongo` directory, so that you have the following structure:

```
./           
|-- mongo/
|   `-- dump/
```

Then run the following command to create the MongoDB database from the dump (takes several minutes):

```shell
make importdb
```

### Access

- API: [http://127.0.0.1:3000](http://127.0.0.1:3000)
- API documentation: [http://127.0.0.1:3000/api](http://127.0.0.1:3000/api)
- MongoExpress: [http://127.0.0.1:8080](http://127.0.0.1:8080)

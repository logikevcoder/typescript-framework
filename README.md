### Run the project with parcel

Run this command

```
parcel index.html
```

Builds the dist folder and run the project locally converting typescript into vanilla javascript

### Start the backend json server

To start the backend json server being built by json-server run

```
json-server -w db.json
```

### NPM scripts

These execution commands are also able to be called in the npm scripts in package.json

run parcel

```
npm run start:parcel
```

run the json-server

```
npm run start:db
```

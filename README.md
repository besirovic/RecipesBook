# Recepiesbook

## Set up

### Clone a repo
```
git clone https://github.com/besirovic/recipesbook.git

```

### Install dependencies
```
npm install
```

or

```
yarn install
```

### Add Firebase credentials
* Go to [Firebase](https://firebase.google.com/) and login with your Google account or create one if you don't have.
* Create new project or select existing
* Grab your firebase credentials and add it in ``` src/app/app.component.ts ``` file
* Open Database section and inside Rules tab add following code:
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```


### Run
To run app open your terminal, navigate to project root folder and then run
```
ng serve
````

After that open ```http://localhost:4200``` and start using app.

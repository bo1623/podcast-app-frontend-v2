## THE PODCAST APP

For experimenting on your local machine, cd to your local directory and run

```
git clone git@github.com:bo1623/podcast-app-frontend-v2.git
```

After this, run `npm install` in your terminal to install the relevant packages for this app to work.

Subsequently, copy and clone the rails backend of this app from https://github.com/bo1623/podcast-api-backend, a separate README has been prepared for getting the backend up and running.  

If you are planning to run the app using localhost database, make sure to change the baseUrl in 'src/fetchUrl.js' to the localhost url of your backend. E.g. baseUrl = 'http://localhost:3000'

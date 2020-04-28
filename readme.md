sudo npm init -y
npm i express

npm install nodemon 
in package.json

change script to

"scripts": {
    "test": "node Index.js",
    "dev": "nodemon Index.js"
  },

then npm run dev => this will auto reload the server 

npm i uuid (in branch develop)
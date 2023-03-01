const express = require('express');
const app = express()
require('dotenv').config()

app.get('/', function (req, res) {
    res.send('Hello world!')
})

app.use(express.json())
app.get('*', (req,res) => {
    
})

app.listen(process.env.PORT)





























// 1. Navigate to my ‘code’ folder

// 2. Make a new folder (named for the project)

// 3. Inside the folder create a file called ‘index.js’

// 4. Open my terminal and navigate to the project folder

// 5. Run the command “npm init -y”

// 6. Run the command “npm install express”

// 7. Open up ‘index.js’

// 8. Require express at the top of the file

// 9. Initialize the app variable

// 10. Create the home page route
//    a. Call app.get()
//    b. Set ‘/‘ as the path (first arg)
//    c. Write callback function with req, res
//    d. Call res.send(‘hello world’) 

// 11. Call app.listen(3000) to keep server open

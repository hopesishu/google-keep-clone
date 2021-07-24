import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://hello:hello123@cluster0.ltfrx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //if connection is successful
    .catch((error) => console.log(error.message)); //connection to databse unsuccessful

mongoose.set("useFindAndModify", false);

//connection without mongo database
// app.get('/', function(req, res) {
//     res.send("express here")
// })

// app.listen(3001, function() {
//     console.log("express server is running on port 3001")
// });

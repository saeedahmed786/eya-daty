const express = require('express');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const clinicRoutes = require('./routes/clinicRoutes');
const uploadFilesRoutes = require('./routes/uploadFilesRoutes');
const commentsRoutes = require('./routes/commentRoutes');
const blogsRoutes = require('./routes/blogsRoutes');
const mongoose = require('mongoose');
const config = require('./config/keys');
const path = require('path');
const cors = require('cors');
const app = express();


const corsOpts = {
    origin: '*',
    methods: [
        'GET', "POST", "PUT", "DELETE"
    ]
};


/******************************************MiddleWares  ********************************************/
app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/clinics', clinicRoutes);
app.use('/api/files', uploadFilesRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/blogs', blogsRoutes);

/******************************************MongoDb Connection********************************************/

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('MongoDb Connected')).catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./client/build'));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));

    });
}

app.listen(process.env.PORT || 8000, () => console.log('Listening to port 8000'));


app.get('/api', (req, res) => {
    res.send("Server is running")
});




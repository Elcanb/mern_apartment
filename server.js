import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import path from 'path'

import adverts from './routes/api/adverts';
import users from './routes/api/users';
import auth from './routes/api/auth';

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    var whitelist = ['localhost:3000']
    var host = req.get('host');

    whitelist.forEach(function (val, key) {
        if (host.indexOf(val) > -1) {
            res.setHeader('Access-Control-Allow-Origin', host);
        }
    })

    next();
});

//DB config
const port = process.env.PORT || 5000;
const db = config.get('mongoURI');

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.log(error));

//Routes
app.use('/api/adverts', adverts);
app.use('/api/users', users);
app.use('/api/auth', auth);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('/apartment/build'));

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'apartment', 'build', 'index.html'));
    });
};

//Port
app.listen(port, () => console.log(`Server started on port ${port}`));
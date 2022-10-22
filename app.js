


app.use(express.json());
app.use(cors());

const contact = require('./routes/contact');
app.use('/contact',contact);

module.exports = app;

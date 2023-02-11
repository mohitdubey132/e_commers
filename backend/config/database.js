const mongoose = require('mongoose');

exports.createDatabase = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.mongoURL || 'mongodb://127.0.0.1:27017/Ecommers', { useNewUrlParser: true })
    .then(() => console.log('connection successfull'))


}
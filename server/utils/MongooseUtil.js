//CLI: npm install mongoose --save
const mongoose = require('mongoose');
const MyConstants = require('./MyConstants');
const uri = 'mongodb+srv://' + MyConstants.db_user + ':' + MyConstants.db_pass + '@' + MyConstants.db_server + '/' + MyConstants.db_database;
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => { console.log('Connected to ' + MyConstants.db_server + '/' + MyConstants.db_database); })
  .catch((err) => { console.error(err); });
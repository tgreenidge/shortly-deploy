var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var urlSchema = new Schema({
  url: {type: String, required: true, unique: true},
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  created_at: Date,
  updated_at: Date
});

var Link = mongoose.model('Url', urlSchema);

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){

//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });


// on every save, add the date
urlSchema.pre('save', function(next) {
  var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      this.code = shasum.digest('hex').slice(0, 5);
      next();
});

module.exports = Link;

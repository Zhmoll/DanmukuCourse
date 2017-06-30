const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const danmakuSchema = new Schema({
  content: { type: String },
  student: { type: Schema.Types.ObjectId, index: true, ref: 'Student' },
  room: { type: Schema.Types.ObjectId, index: true, ref: 'Room' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Danmaku', danmakuSchema);
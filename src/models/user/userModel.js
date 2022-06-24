const mongoose = require('mongoose')

const userCollection = mongoose.model('user', new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [3, 'username terlalu pendek'],
    maxlength: [30, 'username terlalu panjang']
  },
  password: {
    type: String,
    required: true,
    maxlength: [20, 'password terlalu panjang']
  },
  tanggal_dibuat: {
    type: String,
    default: () => {
      const d = new Date();
      const belowTen = (n) => {
        return n < 10 ? `0${n}` : n
      }
      return `${belowTen(d.getHours())}:${belowTen(d.getMinutes())}, ${belowTen(d.getDate())}-` +
        `${belowTen(d.getMonth() + 1)}-${d.getFullYear()}`
    }
  }
}), 'users')

module.exports = userCollection;
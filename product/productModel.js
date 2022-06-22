const mongoose = require('mongoose')

const productCollection = mongoose.model('produk', new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    minlength: [1, 'nama produk terlalu pendek'],
    maxlength: [50, 'nama produk terlalu panjang']
  },
  harga: {
    type: Number,
    required: true,
    min: [0, 'value harga negatif'],
    max: [99999999, 'value harga terlalu tinggi']
  },
  kategori: {
    type: String,
    required: true,
    minlength: [1, 'nama kategori terlalu pendek'],
    maxlength: [50, 'nama kategori terlalu panjang']
  },
  deskripsi: {
    type: String,
    maxlength: [200, 'deskripsi terlalu panjang']
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
}), 'produk')

module.exports = productCollection;
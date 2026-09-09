import mongoose from 'mongoose'

const templateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['standard', 'events', 'special', 'modern'],
      default: 'standard',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    numberPosition: {
      x: { type: Number, default: 50 },
      y: { type: Number, default: 50 },
    },
    lettersPosition: {
      x: { type: Number, default: 30 },
      y: { type: Number, default: 50 },
    },
    arabicLettersPosition: {
      x: { type: Number, default: 70 },
      y: { type: Number, default: 50 },
    },
    englishLettersPosition: {
      x: { type: Number, default: 10 },
      y: { type: Number, default: 80 },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Template', templateSchema)

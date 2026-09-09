import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

import templateRoutes from './routes/templates.js'
import { seedTemplates } from './utils/seedData.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/saudi-license-plates'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Database Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ تم الاتصال بقاعدة البيانات بنجاح')
  // Seed initial data
  seedTemplates()
}).catch((error) => {
  console.error('❌ خطأ في الاتصال بقاعدة البيانات:', error)
  process.exit(1)
})

// Routes
app.use('/api/templates', templateRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: '✅ النظام يعمل بشكل طبيعي' })
})

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'المسار غير موجود' })
})

// Error Handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'حدث خطأ في الخادم' })
})

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`)
  console.log(`📍 URL: http://localhost:${PORT}`)
})

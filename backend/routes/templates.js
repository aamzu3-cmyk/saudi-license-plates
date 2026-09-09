import express from 'express'
import Template from '../models/Template.js'
import multer from 'multer'

const router = express.Router()
const upload = multer({ storage: multer.memoryStorage() })

// Get all templates
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query
    let query = { isActive: true }

    if (category && category !== 'all') {
      query.category = category
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ]
    }

    const templates = await Template.find(query).sort({ createdAt: -1 })
    res.json(templates)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'خطأ في جلب التصاميم' })
  }
})

// Get single template
router.get('/:id', async (req, res) => {
  try {
    const template = await Template.findById(req.params.id)
    if (!template) {
      return res.status(404).json({ error: 'التصميم غير موجود' })
    }
    res.json(template)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'خطأ في جلب التصميم' })
  }
})

// Create template
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, imageUrl, numberPosition, lettersPosition, arabicLettersPosition } = req.body

    const template = new Template({
      name,
      description,
      category: category || 'standard',
      imageUrl,
      numberPosition: numberPosition ? JSON.parse(numberPosition) : { x: 50, y: 50 },
      lettersPosition: lettersPosition ? JSON.parse(lettersPosition) : { x: 30, y: 50 },
      arabicLettersPosition: arabicLettersPosition ? JSON.parse(arabicLettersPosition) : { x: 70, y: 50 },
    })

    await template.save()
    res.status(201).json(template)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'خطأ في إنشاء التصميم' })
  }
})

// Update template
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, imageUrl, numberPosition, lettersPosition, arabicLettersPosition } = req.body

    const template = await Template.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        category: category || 'standard',
        imageUrl,
        numberPosition: numberPosition ? JSON.parse(numberPosition) : undefined,
        lettersPosition: lettersPosition ? JSON.parse(lettersPosition) : undefined,
        arabicLettersPosition: arabicLettersPosition ? JSON.parse(arabicLettersPosition) : undefined,
      },
      { new: true, runValidators: true }
    )

    if (!template) {
      return res.status(404).json({ error: 'التصميم غير موجود' })
    }

    res.json(template)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'خطأ في تحديث التصميم' })
  }
})

// Delete template
router.delete('/:id', async (req, res) => {
  try {
    const template = await Template.findByIdAndDelete(req.params.id)

    if (!template) {
      return res.status(404).json({ error: 'التصميم غير موجود' })
    }

    res.json({ message: 'تم حذف التصميم بنجاح' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'خطأ في حذف التصميم' })
  }
})

// Increment views
router.patch('/:id/views', async (req, res) => {
  try {
    const template = await Template.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    )

    if (!template) {
      return res.status(404).json({ error: 'التصميم غير موجود' })
    }

    res.json(template)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'خطأ في تحديث المشاهدات' })
  }
})

export default router

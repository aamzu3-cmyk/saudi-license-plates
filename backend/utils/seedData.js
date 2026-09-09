import Template from '../models/Template.js'

const SAMPLE_TEMPLATES = [
  {
    name: 'اللوحة السعودية الكلاسيكية',
    description: 'اللوحة التقليدية السعودية بتصميم كلاسيكي فخم',
    category: 'standard',
    imageUrl: 'https://via.placeholder.com/500x200/064E3B/FFFFFF?text=%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  },
  {
    name: 'اللوحة الذهبية',
    description: 'لوحة بتصميم ذهبي فخم مستوحى من الهوية السعودية',
    category: 'modern',
    imageUrl: 'https://via.placeholder.com/500x200/D4A017/000000?text=Gold+Plate',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  },
  {
    name: 'لوحة العيد الوطني',
    description: 'تصميم خاص بمناسبة اليوم الوطني السعودي',
    category: 'events',
    imageUrl: 'https://via.placeholder.com/500x200/064E3B/10B981?text=National+Day',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  },
  {
    name: 'لوحة رؤية 2030',
    description: 'لوحة مستوحاة من رؤية المملكة 2030',
    category: 'special',
    imageUrl: 'https://via.placeholder.com/500x200/10B981/FFFFFF?text=Vision+2030',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  },
  {
    name: 'اللوحة الحديثة المتدرجة',
    description: 'تصميم حديث بألوان متدرجة من الأخضر والأسود',
    category: 'modern',
    imageUrl: 'https://via.placeholder.com/500x200/064E3B/064E3B?text=Modern',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  },
  {
    name: 'لوحة الأعياد والمناسبات',
    description: 'لوحة احتفالية ملونة لجميع المناسبات',
    category: 'events',
    imageUrl: 'https://via.placeholder.com/500x200/10B981/D4A017?text=Celebration',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  },
]

export const seedTemplates = async () => {
  try {
    const count = await Template.countDocuments()
    if (count === 0) {
      await Template.insertMany(SAMPLE_TEMPLATES)
      console.log('✅ تم إضافة التصاميم الأساسية بنجاح')
    }
  } catch (error) {
    console.error('❌ خطأ في إضافة البيانات الأساسية:', error)
  }
}

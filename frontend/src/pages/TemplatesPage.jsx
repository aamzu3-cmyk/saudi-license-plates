import { useState, useEffect } from 'react'
import axios from 'axios'

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/templates')
      setTemplates(response.data)
    } catch (error) {
      console.error('Error fetching templates:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = ['all', 'standard', 'events', 'special', 'modern']

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-saudi-dark mb-4 text-center">📋 جميع التصاميم</h1>
        <p className="text-gray-600 text-center mb-12">استكشف مجموعتنا الواسعة من تصاميم لوحات السيارات</p>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="ابحث عن تصميم..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-saudi w-full"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-saudi-dark text-white'
                    : 'bg-white border-2 border-saudi-dark text-saudi-dark hover:bg-saudi-cream'
                }`}
              >
                {cat === 'standard' ? 'عادي' :
                 cat === 'events' ? 'مناسبات' :
                 cat === 'special' ? 'خاص' :
                 cat === 'modern' ? 'حديث' : 'الكل'}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">جاري التحميل...</p>
            </div>
          ) : filteredTemplates.length > 0 ? (
            filteredTemplates.map(template => (
              <div key={template._id} className="card-saudi">
                <img
                  src={template.imageUrl}
                  alt={template.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-saudi-dark mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <span className="inline-block bg-saudi-cream text-saudi-dark px-3 py-1 rounded-full text-sm font-bold">
                  {template.category}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">لم يتم العثور على تصاميم 😢</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

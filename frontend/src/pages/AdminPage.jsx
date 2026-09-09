import { useState, useEffect } from 'react'
import axios from 'axios'
import TemplateForm from '../components/TemplateForm'

export default function AdminPage() {
  const [templates, setTemplates] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState(null)
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

  const handleDeleteTemplate = async (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا التصميم؟')) {
      try {
        await axios.delete(`/api/templates/${id}`)
        fetchTemplates()
        alert('تم حذف التصميم بنجاح!')
      } catch (error) {
        console.error('Error deleting template:', error)
        alert('حدث خطأ أثناء حذف التصميم')
      }
    }
  }

  const handleSaveTemplate = async (templateData) => {
    try {
      if (editingTemplate) {
        await axios.put(`/api/templates/${editingTemplate._id}`, templateData)
        alert('تم تحديث التصميم بنجاح!')
      } else {
        await axios.post('/api/templates', templateData)
        alert('تم إضافة التصميم بنجاح!')
      }
      fetchTemplates()
      setShowForm(false)
      setEditingTemplate(null)
    } catch (error) {
      console.error('Error saving template:', error)
      alert('حدث خطأ أثناء حفظ التصميم')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-saudi-dark">⚙️ لوحة التحكم</h1>
          <button
            onClick={() => {
              setShowForm(true)
              setEditingTemplate(null)
            }}
            className="btn-primary"
          >
            ➕ إضافة تصميم جديد
          </button>
        </div>

        {/* Form Section */}
        {showForm && (
          <div className="mb-8 card-saudi">
            <TemplateForm
              template={editingTemplate}
              onSave={handleSaveTemplate}
              onCancel={() => {
                setShowForm(false)
                setEditingTemplate(null)
              }}
            />
          </div>
        )}

        {/* Templates List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">جاري التحميل...</p>
            </div>
          ) : templates.length > 0 ? (
            templates.map(template => (
              <div key={template._id} className="card-saudi">
                <img
                  src={template.imageUrl}
                  alt={template.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-saudi-dark mb-2">{template.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingTemplate(template)
                      setShowForm(true)
                    }}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
                  >
                    ✏️ تعديل
                  </button>
                  <button
                    onClick={() => handleDeleteTemplate(template._id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
                  >
                    🗑️ حذف
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">لا توجد تصاميم حالياً</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

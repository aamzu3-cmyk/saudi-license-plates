import { useState, useEffect } from 'react'

export default function TemplateForm({ template, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'standard',
    imageUrl: '',
    numberPosition: { x: 50, y: 50 },
    lettersPosition: { x: 30, y: 50 },
    arabicLettersPosition: { x: 70, y: 50 },
  })

  useEffect(() => {
    if (template) {
      setFormData(template)
    }
  }, [template])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePositionChange = (type, axis, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [axis]: parseInt(value)
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-saudi-dark">
        {template ? '✏️ تعديل التصميم' : '➕ إضافة تصميم جديد'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">اسم التصميم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-saudi w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">الفئة</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input-saudi w-full"
          >
            <option value="standard">عادي</option>
            <option value="events">مناسبات</option>
            <option value="special">خاص</option>
            <option value="modern">حديث</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">الوصف</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="input-saudi w-full h-24 resize-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-700 mb-2">رابط الصورة</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="input-saudi w-full"
          required
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-4">مواضع العناصر</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">موضع الأرقام (X)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.numberPosition.x}
              onChange={(e) => handlePositionChange('numberPosition', 'x', e.target.value)}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{formData.numberPosition.x}%</span>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">موضع الأرقام (Y)</label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.numberPosition.y}
              onChange={(e) => handlePositionChange('numberPosition', 'y', e.target.value)}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{formData.numberPosition.y}%</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button type="submit" className="btn-primary flex-1">
          💾 حفظ التصميم
        </button>
        <button type="button" onClick={onCancel} className="btn-secondary flex-1">
          ❌ إلغاء
        </button>
      </div>
    </form>
  )
}

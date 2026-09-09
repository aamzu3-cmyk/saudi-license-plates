import { useRef } from 'react'
import html2canvas from 'html2canvas'

export default function LicensePlatePreview({ plateData, selectedTemplate, templates, onTemplateChange }) {
  const plateRef = useRef(null)

  const currentTemplate = templates.find(t => t._id === selectedTemplate)

  const downloadPlate = async () => {
    if (plateRef.current) {
      try {
        const canvas = await html2canvas(plateRef.current, {
          scale: 2,
          backgroundColor: '#ffffff',
        })
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = `license-plate-${Date.now()}.png`
        link.click()
      } catch (error) {
        console.error('Error downloading plate:', error)
      }
    }
  }

  const copyToClipboard = async () => {
    if (plateRef.current) {
      try {
        const canvas = await html2canvas(plateRef.current)
        canvas.toBlob(blob => {
          navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ])
          alert('تم نسخ اللوحة! 📋')
        })
      } catch (error) {
        console.error('Error copying:', error)
      }
    }
  }

  const shareOnSocial = () => {
    const text = `تفقد لوحتي المخصصة! ${window.location.href}`
    const encodedText = encodeURIComponent(text)
    window.open(`https://twitter.com/intent/tweet?text=${encodedText}`, '_blank')
  }

  return (
    <div className="card-saudi">
      <h2 className="text-2xl font-bold text-saudi-dark mb-6">معاينة اللوحة</h2>
      
      {/* Template Selector */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700 mb-2">
          اختر التصميم
        </label>
        <select
          value={selectedTemplate || ''}
          onChange={(e) => onTemplateChange(e.target.value)}
          className="input-saudi w-full"
        >
          <option value="">-- اختر تصميماً --</option>
          {templates.map(template => (
            <option key={template._id} value={template._id}>
              {template.name}
            </option>
          ))}
        </select>
      </div>

      {/* License Plate Display */}
      <div ref={plateRef} className="bg-white p-8 rounded-lg mb-6 flex justify-center">
        {currentTemplate && (
          <div
            className="license-plate relative"
            style={{
              backgroundImage: `url(${currentTemplate.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '500px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Plate Content */}
            <div className="text-center font-bold text-2xl text-black">
              <div>{plateData.arabicLetters}</div>
              <div>{plateData.number}</div>
              <div className="ltr text-lg">{plateData.englishLetters}</div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={downloadPlate}
          className="btn-primary text-sm py-2"
        >
          📥 تحميل
        </button>
        <button
          onClick={copyToClipboard}
          className="btn-secondary text-sm py-2"
        >
          📋 نسخ
        </button>
        <button
          onClick={shareOnSocial}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm"
        >
          🔗 مشاركة
        </button>
      </div>
    </div>
  )
}

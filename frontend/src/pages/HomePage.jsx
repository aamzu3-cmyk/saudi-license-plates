import { useState, useEffect } from 'react'
import axios from 'axios'
import LicensePlateGenerator from '../components/LicensePlateGenerator'
import LicensePlatePreview from '../components/LicensePlatePreview'

export default function HomePage() {
  const [plateData, setPlateData] = useState({
    number: '1234',
    arabicLetters: 'س',
    englishLetters: 'SA'
  })
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('/api/templates')
      setTemplates(response.data)
      if (response.data.length > 0) {
        setSelectedTemplate(response.data[0]._id)
      }
    } catch (error) {
      console.error('Error fetching templates:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-saudi-cream to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-saudi-dark mb-4">
            🚗 منصة لوحات السيارات السعودية
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            أنشئ وخصص لوحة سيارتك بتصاميم فخمة وحديثة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Generator Side */}
          <div>
            <LicensePlateGenerator 
              plateData={plateData} 
              setPlateData={setPlateData}
            />
          </div>

          {/* Preview Side */}
          <div>
            <LicensePlatePreview 
              plateData={plateData}
              selectedTemplate={selectedTemplate}
              templates={templates}
              onTemplateChange={setSelectedTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

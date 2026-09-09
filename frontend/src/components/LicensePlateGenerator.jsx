export default function LicensePlateGenerator({ plateData, setPlateData }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setPlateData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="card-saudi">
      <h2 className="text-2xl font-bold text-saudi-dark mb-6">بيانات اللوحة</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            رقم اللوحة
          </label>
          <input
            type="text"
            name="number"
            value={plateData.number}
            onChange={handleChange}
            maxLength="4"
            className="input-saudi w-full text-center text-2xl font-bold"
            placeholder="1234"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            الحروف العربية
          </label>
          <input
            type="text"
            name="arabicLetters"
            value={plateData.arabicLetters}
            onChange={handleChange}
            maxLength="3"
            className="input-saudi w-full text-center text-2xl font-bold"
            placeholder="س"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">
            الحروف الإنجليزية
          </label>
          <input
            type="text"
            name="englishLetters"
            value={plateData.englishLetters}
            onChange={handleChange}
            maxLength="2"
            className="input-saudi w-full text-center text-2xl font-bold ltr"
            placeholder="SA"
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-saudi-cream rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          📝 تم إدخال البيانات بنجاح! اختر تصميماً من الجانب الآخر لعرض اللوحة
        </p>
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-saudi-dark text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">عن المنصة</h3>
            <p className="text-gray-300">منصة احترافية لإنشاء وتخصيص لوحات السيارات السعودية بتصاميم متعددة وفخمة.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">الروابط السريعة</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-saudi-light">الرئيسية</a></li>
              <li><a href="/templates" className="hover:text-saudi-light">التصاميم</a></li>
              <li><a href="/admin" className="hover:text-saudi-light">لوحة التحكم</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <p className="text-gray-300">البريد الإلكتروني: info@slp.sa</p>
            <p className="text-gray-300">الهاتف: +966 1 XXXX XXXX</p>
          </div>
        </div>
        <div className="border-t border-saudi-light pt-8 text-center text-gray-400">
          <p>&copy; 2024 منصة لوحات السيارات السعودية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}

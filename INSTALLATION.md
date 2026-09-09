# دليل التثبيت والتشغيل
## Installation & Setup Guide

### المتطلبات
- Node.js 16+ 
- MongoDB (محلي أو Atlas)
- npm أو yarn

### خطوات التثبيت

#### 1. استنساخ المستودع
```bash
git clone https://github.com/aamzu3-cmyk/saudi-license-plates.git
cd saudi-license-plates
```

#### 2. تثبيت المكتبات
```bash
npm run install-all
```

أو يدويا:
```bash
# تثبيت المكتبات الأساسية
npm install

# تثبيت مكتبات Frontend
cd frontend
npm install
cd ..

# تثبيت مكتبات Backend
cd backend
npm install
cd ..
```

#### 3. إعداد المتغيرات البيئية

**Backend (.env)**
```bash
cd backend
cp .env.example .env
# ثم عدّل الملف بناء على إعداداتك
```

أمثلة للمتغيرات:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/saudi-license-plates
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
```

#### 4. تشغيل المشروع

**للتطوير (Development):**
```bash
# شغل الخادم والواجهة معاً
npm run dev
```

**أو شغلهما بشكل منفصل:**

```bash
# Terminal 1 - Backend
cd backend
npm run dev
# الخادم سيعمل على: http://localhost:5000

# Terminal 2 - Frontend
cd frontend
npm run dev
# الواجهة ستعمل على: http://localhost:3000
```

**للإنتاج (Production):**
```bash
npm run build
npm start
```

### التحقق من التثبيت

تفقد أن كل شيء يعمل بشكل صحيح:
```bash
curl http://localhost:5000/api/health
```

يجب أن ترى:
```json
{ "status": "✅ النظام يعمل بشكل طبيعي" }
```

### بنية المشروع
```
saudi-license-plates/
├── frontend/
│   ├── src/
│   │   ├── components/      # مكونات React
│   │   ├── pages/           # الصفحات
│   │   ├── styles/          # التنسيقات
│   │   └── main.jsx         # نقطة الدخول
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── routes/              # المسارات
│   ├── models/              # نماذج MongoDB
│   ├── utils/               # دوال مساعدة
│   ├── server.js            # نقطة الدخول
│   ├── package.json
│   └── .env.example
└── package.json             # Root package
```

### الميزات الرئيسية ✨

1. **واجهة عربية RTL كاملة**
   - تصميم متجاوب للجوال والكمبيوتر
   - خطوط عربية واضحة
   - تأثيرات سلسة

2. **مولد لوحات سيارات احترافي**
   - إدخال البيانات بشكل سهل
   - معاينة حية للوحة
   - تحكم كامل بالمواضع

3. **تصاميم متعددة**
   - لوحات كلاسيكية
   - تصاميم حديثة
   - لوحات مناسبات خاصة
   - تصاميم قابلة للتخصيص

4. **لوحة تحكم إدارية**
   - إضافة تصاميم جديدة
   - تعديل التصاميم الموجودة
   - حذف التصاميم
   - إدارة مواضع العناصر

5. **خيارات المشاركة والتحميل**
   - تحميل الصور بجودة عالية
   - نسخ التصميم للحافظة
   - مشاركة على وسائل التواصل

### المشاكل الشائعة

**مشكلة: خطأ في الاتصال بـ MongoDB**
```
الحل: تأكد من أن MongoDB يعمل على المنفذ 27017
أو عدّل MONGODB_URI في ملف .env
```

**مشكلة: خطأ CORS**
```
الحل: تأكد من أن Backend يسمح بالطلبات من Frontend
تم إضافة CORS في server.js بالفعل
```

**مشكلة: Vite لا تجد الملفات**
```
الحل: احذف node_modules و package-lock.json
ثم اشغل: npm install مرة أخرى
```

### قاعدة البيانات

التصاميم الأولية (seed data) تُضاف تلقائياً عند تشغيل الخادم لأول مرة.

للحذف والبدء من جديد:
```bash
# حذف قاعدة البيانات من MongoDB
db.templates.deleteMany({})

# ثم أعد تشغيل الخادم
```

### دعم إضافي

للمزيد من المعلومات، اطلع على:
- `backend/API_DOCUMENTATION.md` - توثيق API الكامل
- `README.md` - معلومات المشروع العامة

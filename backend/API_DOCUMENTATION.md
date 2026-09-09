# Saudi License Plates - Backend Documentation

## قائمة المسارات (API Routes)

### التصاميم (Templates)

#### الحصول على جميع التصاميم
```
GET /api/templates
Query Parameters:
  - category: standard|events|special|modern (اختياري)
  - search: نص البحث (اختياري)

مثال:
GET /api/templates?category=standard&search=كلاسيكية
```

#### الحصول على تصميم واحد
```
GET /api/templates/:id
```

#### إنشاء تصميم جديد
```
POST /api/templates
Content-Type: application/json

{
  "name": "اسم التصميم",
  "description": "وصف التصميم",
  "category": "standard",
  "imageUrl": "https://example.com/image.png",
  "numberPosition": { "x": 50, "y": 50 },
  "lettersPosition": { "x": 30, "y": 50 },
  "arabicLettersPosition": { "x": 70, "y": 50 }
}
```

#### تحديث تصميم
```
PUT /api/templates/:id
Content-Type: application/json

// نفس بيانات POST
```

#### حذف تصميم
```
DELETE /api/templates/:id
```

#### زيادة عدد المشاهدات
```
PATCH /api/templates/:id/views
```

## بيانات قاعدة البيانات

### نموذج التصميم (Template Schema)

```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  category: String (standard|events|special|modern),
  imageUrl: String,
  numberPosition: {
    x: Number (0-100),
    y: Number (0-100)
  },
  lettersPosition: {
    x: Number (0-100),
    y: Number (0-100)
  },
  arabicLettersPosition: {
    x: Number (0-100),
    y: Number (0-100)
  },
  englishLettersPosition: {
    x: Number (0-100),
    y: Number (0-100)
  },
  isActive: Boolean,
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

## متغيرات البيئة

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/saudi-license-plates
NODE_ENV=development
JWT_SECRET=your_secret_key
```

## البدء السريع

```bash
# تثبيت المكتبات
npm install

# نسخ ملف البيئة
cp .env.example .env

# تشغيل الخادم في وضع التطوير
npm run dev

# تشغيل الخادم في الإنتاج
npm start
```

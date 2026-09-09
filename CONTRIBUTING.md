# المساهمة في المشروع
## Contributing Guidelines

شكراً لاهتمامك بالمساهمة في منصة لوحات السيارات السعودية! 🎉

## قبل البدء

الرجاء قراءة:
- README.md - معلومات عامة عن المشروع
- INSTALLATION.md - كيفية التثبيت والتشغيل
- ROADMAP.md - الميزات المستقبلية

## خطوات المساهمة

### 1. قم بـ Fork المستودع
```bash
git clone https://github.com/your-username/saudi-license-plates.git
cd saudi-license-plates
```

### 2. أنشئ فرع جديد
```bash
git checkout -b feature/your-feature-name
```

أسماء الفروع الموصى بها:
- `feature/add-xyz` - ميزة جديدة
- `fix/fix-xyz` - إصلاح خطأ
- `docs/update-xyz` - تحديث التوثيق
- `refactor/improve-xyz` - تحسين الكود

### 3. اكتب الكود

#### معايير الكود

**JavaScript/React:**
```javascript
// ✅ جيد
export default function LicensePlate({ data, onUpdate }) {
  return (
    <div className="license-plate">
      {/* Content */}
    </div>
  )
}

// ❌ سيء
function Component (props) {
  return <div>{props.children}</div>
}
```

**القواعد:**
- استخدم ES6+ syntax
- أضف تعليقات واضحة للأكواد المعقدة
- استخدم meaningful variable names
- تجنب الـ console.log في الكود النهائي
- اتبع Airbnb JavaScript Style Guide

**React Conventions:**
- استخدم Functional Components
- استخدم Hooks (useState, useEffect, etc.)
- قسّم المكونات إلى أجزاء صغيرة
- استخدم PropTypes أو TypeScript

**Styling:**
- استخدم Tailwind CSS فقط
- تجنب inline styles
- استخدم color variables من tailwind.config.js

**Backend:**
- اتبع REST API conventions
- أضف error handling صحيح
- استخدم async/await
- أضف comments للدوال المعقدة

### 4. اختبر التغييرات

```bash
# تشغيل التطبيق
npm run dev

# التحقق من عدم وجود أخطاء
npm run lint  # (عند الحاجة)
```

### 5. اكتب Commit messages واضحة

```bash
git commit -m "feat: add new template category"
git commit -m "fix: resolve license plate rendering issue"
git commit -m "docs: update installation guide"
```

**قالب Commit message:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` - ميزة جديدة
- `fix` - إصلاح خطأ
- `docs` - تحديث التوثيق
- `style` - تنسيق الكود فقط
- `refactor` - تحسين الكود بدون تغيير الوظيفة
- `perf` - تحسين الأداء
- `test` - إضافة اختبارات

### 6. اشحن التغييرات

```bash
git push origin feature/your-feature-name
```

### 7. افتح Pull Request

1. اذهب إلى GitHub
2. انقر على "New Pull Request"
3. اختر الفرع الخاص بك
4. أضف وصف واضح للـ PR
5. انتظر المراجعة

**قالب وصف PR:**
```markdown
## الوصف
وصف مختصر للتغييرات

## الدافع والسياق
لماذا تم هذا التغيير؟

## نوع التغيير
- [ ] ميزة جديدة
- [ ] إصلاح خطأ
- [ ] تحديث التوثيق

## كيفية الاختبار
خطوات لاختبار التغييرات

## Screenshots (اختياري)
لقطات من الواجهة إن وجدت
```

## معايير قبول PR

للموافقة على PR، يجب أن:

- [ ] لا تحتوي على أخطاء
- [ ] تتبع معايير الكود
- [ ] تحتوي على وصف واضح
- [ ] تم اختبارها بشكل كامل
- [ ] توثيق التغييرات مضافة
- [ ] لا تحتوي على تضاربات

## الإبلاغ عن الأخطاء

### قبل الإبلاغ

1. تحقق من أن الخطأ لم يتم الإبلاغ عنه بالفعل
2. جرب في نسخة أخرى
3. تحقق من تثبيتك

### كيفية الإبلاغ

1. اذهب إلى "Issues"
2. انقر على "New Issue"
3. اختر "Bug report"
4. أملأ التفاصيل:

```markdown
## الوصف
وصف واضح للمشكلة

## خطوات إعادة الإنتاج
1. ...
2. ...
3. ...

## السلوك المتوقع
ماذا يجب أن يحدث

## السلوك الفعلي
ماذا حدث بالفعل

## البيئة
- OS: Windows 10
- Browser: Chrome
- Node: 16.0.0

## لقطات/فيديو
إذا أمكن
```

## طلب ميزة جديدة

1. اذهب إلى "Issues"
2. انقر على "New Issue"
3. اختر "Feature request"
4. اشرح الميزة المطلوبة بوضوح

## مراجعة الكود

عند مراجعة PR:

- كن محترماً وبناءً
- اطلب تحسينات بوضوح
- اشرح السبب وراء الطلب
- شارك المعرفة والدروس

## قنوات التواصل

- **Issues** - للأخطاء والميزات
- **Discussions** - للأسئلة والنقاش
- **Pull Requests** - للمساهمات

## الترخيص

جميع المساهمات مرخصة تحت رخصة MIT

## الشكر والتقدير

شكراً لمساهمتك! 🙏
جميع المساهمين سيتم ذكرهم في README.md

---

**لديك أسئلة؟** فتح issue جديد أو اتصل بالمشرف!

# 🚀 بدء سريع - SmartBacDz APK

## ⚡ تشغيل سريع

### 1. تثبيت التبعيات
```bash
npm install
```

### 2. تشغيل الخادم المحلي
```bash
npm run dev
```

### 3. بناء للإنتاج
```bash
npm run build
```

## 🌐 النشر على Netlify

### الطريقة السريعة:
1. اذهب إلى [Netlify](https://netlify.com)
2. اسحب مجلد `dist` (بعد البناء) إلى Netlify
3. انتهى! 🎉

### الطريقة المتقدمة:
1. ارفع الكود إلى GitHub
2. اربط GitHub بـ Netlify
3. اترك الإعدادات الافتراضية

## 📁 الملفات المهمة

- `src/App.tsx` - المكون الرئيسي
- `public/SmartBacDz.v1.apk` - ملف التطبيق
- `netlify.toml` - إعدادات Netlify
- `_redirects` - إعادة التوجيه

## ✅ التحقق من العمل

- [ ] الموقع يفتح بدون أخطاء
- [ ] زر التحميل يعمل
- [ ] التصميم متجاوب
- [ ] RTL يعمل

## 🐛 استكشاف الأخطاء

### إذا لم يعمل npm:
```bash
# تأكد من تثبيت Node.js
node --version
npm --version
```

### إذا لم يعمل البناء:
```bash
# حذف node_modules وإعادة التثبيت
rm -rf node_modules package-lock.json
npm install
```

### إذا لم يعمل التحميل:
- تأكد من وجود ملف APK في `public/`
- تحقق من إعدادات Netlify

## 📞 المساعدة

- راجع `README.md` للتفاصيل الكاملة
- راجع `DEPLOYMENT_GUIDE.md` للنشر
- راجع `deploy-checklist.md` للتحقق

---

**ملاحظة**: تأكد من تحديث الروابط في `index.html` قبل النشر.

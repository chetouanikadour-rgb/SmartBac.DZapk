# SmartBacDz APK - تطبيق الباكالوريا الذكي

موقع ويب لتطبيق SmartBacDz APK - تطبيق الباكالوريا الذكي للطلاب الجزائريين مع دعم الذكاء الاصطناعي.

## 🚀 المميزات

- ✨ تصميم عصري وجذاب
- 📱 متجاوب مع جميع الأجهزة
- 🤖 دعم الذكاء الاصطناعي
- 📚 أرشيف شامل للمواضيع (2010-2025)
- 🎥 فيديوهات تعليمية عالية الجودة
- 📊 إحصائيات تفاعلية
- 🔒 آمن ومضمون 100%

## 🛠️ التقنيات المستخدمة

- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لكتابة كود آمن ومنظم
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS
- **Lucide React** - أيقونات جميلة
- **Netlify** - منصة النشر

## 📦 التثبيت والتشغيل

### المتطلبات
- Node.js 18 أو أحدث
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone <repository-url>
cd project
```

2. **تثبيت التبعيات**
```bash
npm install
```

3. **تشغيل الموقع محلياً**
```bash
npm run dev
```

4. **بناء المشروع للإنتاج**
```bash
npm run build
```

5. **معاينة الإنتاج**
```bash
npm run preview
```

## 🌐 النشر على Netlify

### الطريقة الأولى: النشر التلقائي

1. ارفع الكود إلى GitHub
2. اذهب إلى [Netlify](https://netlify.com)
3. اختر "New site from Git"
4. اختر GitHub وحدد المستودع
5. اترك الإعدادات الافتراضية:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. اضغط "Deploy site"

### الطريقة الثانية: النشر اليدوي

1. **بناء المشروع**
```bash
npm run build
```

2. **رفع مجلد `dist` إلى Netlify**
   - اذهب إلى Netlify Dashboard
   - اختر "Sites" > "Add new site" > "Deploy manually"
   - اسحب مجلد `dist` إلى المنطقة المخصصة

### إعدادات Netlify المطلوبة

المشروع يحتوي على ملف `netlify.toml` مع الإعدادات المثالية:

- **إعادة التوجيه**: جميع المسارات تعود إلى `index.html`
- **رؤوس الأمان**: حماية من XSS والهجمات
- **تخزين مؤقت**: تحسين الأداء
- **نوع الملفات**: دعم تحميل ملفات APK

## 📁 هيكل المشروع

```
project/
├── public/
│   ├── SmartBacDz.v1.apk    # ملف التطبيق
│   ├── _redirects           # إعادة التوجيه لـ Netlify
│   ├── robots.txt           # تحسين SEO
│   └── manifest.json        # PWA manifest
├── src/
│   ├── App.tsx              # المكون الرئيسي
│   ├── main.tsx             # نقطة الدخول
│   └── index.css            # الأنماط العامة
├── netlify.toml             # إعدادات Netlify
├── tailwind.config.js       # إعدادات Tailwind
├── vite.config.ts           # إعدادات Vite
└── package.json             # تبعيات المشروع
```

## 🔧 الإعدادات المتقدمة

### تحسين الأداء

- **Code Splitting**: تم تفعيله تلقائياً في Vite
- **Lazy Loading**: للصور والمكونات
- **Caching**: إعدادات تخزين مؤقت محسنة
- **Compression**: ضغط الملفات تلقائياً

### الأمان

- **CSP Headers**: حماية من XSS
- **HTTPS**: إجباري على Netlify
- **Security Headers**: رؤوس أمان إضافية

### SEO

- **Meta Tags**: محسنة للشبكات الاجتماعية
- **Structured Data**: بيانات منظمة
- **Sitemap**: خريطة الموقع
- **Robots.txt**: إرشادات للمحركات

## 🐛 استكشاف الأخطاء

### مشاكل شائعة

1. **خطأ في التحميل**
   - تأكد من وجود ملف APK في مجلد `public`
   - تحقق من إعدادات Netlify

2. **مشاكل في التصميم**
   - تأكد من تحميل Tailwind CSS
   - تحقق من إعدادات RTL

3. **مشاكل في النشر**
   - تحقق من إعدادات Build
   - تأكد من صحة ملف `netlify.toml`

### أوامر مفيدة

```bash
# فحص الأخطاء
npm run lint

# فحص الأنواع
npm run type-check

# بناء الإنتاج
npm run build:prod

# تشغيل الخادم المحلي
npm run dev
```

## 📞 الدعم

للمساعدة أو الإبلاغ عن مشاكل:
- 📧 البريد الإلكتروني: support@smartbacdz.com
- 🐛 GitHub Issues: [رابط المشاكل](https://github.com/username/repo/issues)

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT. راجع ملف `LICENSE` للتفاصيل.

---

**ملاحظة**: تأكد من تحديث روابط الشبكات الاجتماعية في `index.html` قبل النشر.
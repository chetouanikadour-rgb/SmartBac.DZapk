@echo off
echo ========================================
echo    حل مشاكل البناء - SmartBacDz APK
echo ========================================

echo.
echo 1. تنظيف الملفات القديمة...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist dist rmdir /s /q dist

echo.
echo 2. تثبيت التبعيات...
call npm install --legacy-peer-deps

echo.
echo 3. فحص الأخطاء...
call npm run type-check

echo.
echo 4. بناء المشروع...
call npm run build

echo.
echo 5. فحص النتيجة...
if exist dist (
    echo ✅ تم بناء المشروع بنجاح!
    echo 📁 مجلد dist موجود
    dir dist
) else (
    echo ❌ فشل في بناء المشروع
    echo راجع الأخطاء أعلاه
)

echo.
echo ========================================
echo    انتهى!
echo ========================================
pause

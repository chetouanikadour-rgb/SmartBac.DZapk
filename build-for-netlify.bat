@echo off
echo Building SmartBacDz for Netlify...
echo.
echo Installing dependencies...
npm install
echo.
echo Building project...
npm run build
echo.
echo Build completed! Check the 'dist' folder.
echo.
echo To deploy to Netlify:
echo 1. Go to https://netlify.com
echo 2. Drag and drop the 'dist' folder
echo 3. Or connect your GitHub repository
echo.
pause

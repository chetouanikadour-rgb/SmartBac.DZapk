import { useState, useEffect, useCallback } from 'react';
import { Download, BookOpen, Smartphone, Bot, Calendar, Video, FileText, Target, Users, TrendingUp, Shield, Menu, X, Sparkles, Brain, BookMarked, GraduationCap } from 'lucide-react';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadAPK = useCallback(() => {
    setIsDownloading(true);
    
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = '/SmartBacDz.v1.apk';
      link.download = 'SmartBacDz.v1.apk';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset loading state
      setTimeout(() => setIsDownloading(false), 2000);
    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      // Fallback: open in new tab
      window.open('/SmartBacDz.v1.apk', '_blank');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" dir="rtl">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-reverse space-x-3 md:space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 animate-pulse">
                <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-black text-white bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SmartBacDz</h1>
                <p className="text-xs text-gray-400 font-medium hidden sm:block">تطبيق الباكالوريا الذكي</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold hover:scale-105 relative group">
                المميزات
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#download" className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-semibold hover:scale-105 relative group">
                التحميل
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-gray-300 hover:text-pink-400 transition-all duration-300 font-semibold hover:scale-105 relative group">
                حول التطبيق
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 animate-in slide-in-from-top-2 duration-300">
              <nav className="flex flex-col space-y-4 p-6">
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold py-2 border-b border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  المميزات
                </a>
                <a 
                  href="#download" 
                  className="text-gray-300 hover:text-purple-400 transition-all duration-300 font-semibold py-2 border-b border-gray-700/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  التحميل
                </a>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-pink-400 transition-all duration-300 font-semibold py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  حول التطبيق
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-32 pb-20 md:pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-full text-cyan-300 text-xs md:text-sm font-bold mb-6 md:mb-8 border border-cyan-500/30 animate-pulse">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              الإصدار الأول • 13 ميجابايت • مجاني تماماً
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">SmartBacDz</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300">تطبيق الباكالوريا الثوري</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              أول تطبيق جزائري مدعوم بالذكاء الاصطناعي للباكالوريا. 
              <span className="text-cyan-400 font-bold"> كل ما تحتاجه للنجاح</span> في مكان واحد
            </p>
            
            {/* Action Button */}
            <div className="flex justify-center items-center mb-8 md:mb-12 px-4">
              <button 
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 md:px-16 py-4 md:py-6 rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-purple-500/25 hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden w-full sm:w-auto justify-center max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 md:h-6 md:w-6 border-b-2 border-white ml-3"></div>
                      جاري التحميل...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 md:w-6 md:h-6 ml-3 group-hover:animate-bounce" />
                      تحميل APK (13 MB)
                    </>
                  )}
                </div>
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-8 text-sm text-gray-400 px-4">
              <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-full px-4 py-2">
                <Shield className="w-4 h-4 ml-2 text-green-400" />
                <span>آمن 100%</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-full px-4 py-2">
                <Users className="w-4 h-4 ml-2 text-blue-400" />
                <span>+10,000 طالب</span>
              </div>
              <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 ml-2 text-purple-400" />
                <span>تحديثات مستمرة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">تصميم مستقبلي</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              واجهة عصرية وذكية تجعل التعلم تجربة ممتعة ومثيرة
            </p>
          </div>
          
          <div className="flex justify-center relative">
            <div className="relative group">
              {/* Background phones for depth */}
              <div className="absolute -top-4 -right-4 w-64 md:w-80 h-[400px] md:h-[500px] bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-[2rem] md:rounded-[3rem] transform rotate-12 blur-sm"></div>
              <div className="absolute -top-2 -right-2 w-64 md:w-80 h-[400px] md:h-[500px] bg-gradient-to-br from-cyan-600/30 to-purple-600/30 rounded-[2rem] md:rounded-[3rem] transform rotate-6 blur-sm"></div>
              
              {/* Main phone */}
              <div className="relative w-64 md:w-80 h-[400px] md:h-[500px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-purple-500/25 border border-gray-700/50 p-4 md:p-6 group-hover:scale-105 transition-transform duration-500">
                {/* Phone header */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div className="flex space-x-reverse space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse animation-delay-4000"></div>
                  </div>
                  <Smartphone className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                </div>
                
                {/* Phone content */}
                <div className="text-white space-y-3 md:space-y-4">
                  <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SmartBacDz</h3>
                    <p className="text-gray-400 text-xs md:text-sm">مرحباً بك في المستقبل</p>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-colors">
                      <div className="flex items-center">
                        <Bot className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 text-cyan-400" />
                        <div>
                          <span className="font-bold text-white text-sm md:text-base">مساعد ذكي</span>
                          <p className="text-xs text-gray-400">AI متطور</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/50 transition-colors">
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 text-purple-400" />
                        <div>
                          <span className="font-bold text-white text-sm md:text-base">مواضيع شاملة</span>
                          <p className="text-xs text-gray-400">2010-2025</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl md:rounded-2xl p-3 md:p-4 backdrop-blur-xl border border-pink-500/30 hover:border-pink-400/50 transition-colors">
                      <div className="flex items-center">
                        <Video className="w-4 h-4 md:w-6 md:h-6 ml-2 md:ml-3 text-pink-400" />
                        <div>
                          <span className="font-bold text-white text-sm md:text-base">فيديوهات HD</span>
                          <p className="text-xs text-gray-400">شرح مفصل</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">مميزات ثورية</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium px-4">
              تقنيات متطورة ومميزات حصرية لضمان تفوقك في الباكالوريا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/25">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors">مساعد ذكي متطور</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                نموذج ذكاء اصطناعي من الجيل الجديد يفهم أسئلتك ويقدم إجابات دقيقة ومفصلة لكل المواد
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                <BookMarked className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-400 transition-colors">أرشيف شامل 2010-2025</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                مكتبة ضخمة تضم جميع مواضيع الباكالوريا مع الحلول النموذجية والتصحيحات المفصلة
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/25">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                <Video className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-pink-400 transition-colors">فيديوهات عالية الجودة</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                شروحات مرئية بجودة HD من أفضل الأساتذة مع تقنيات تعليمية حديثة وتفاعلية
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/25">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-green-400 transition-colors">منظم ذكي للوقت</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                نظام تخطيط متقدم يحلل أداءك ويضع جدولاً مخصصاً لتحقيق أفضل النتائج
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/25">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/25">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors">اختبارات تكيفية</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                نظام اختبارات ذكي يتكيف مع مستواك ويركز على نقاط الضعف لتحسين مستمر
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/25">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-indigo-400 transition-colors">نظام الإنجازات</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors text-sm md:text-base">
                تحديات يومية وشارات تحفيزية تجعل التعلم أكثر متعة وتشويقاً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-2xl md:rounded-[3rem] p-8 md:p-16 border border-gray-700/50 shadow-2xl shadow-purple-500/25">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ابدأ رحلة التفوق الآن
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-4">
              انضم إلى آلاف الطلاب الذين حققوا النجاح باستخدام SmartBacDz. 
              <span className="text-cyan-400 font-bold"> التحميل مجاني بالكامل</span>
            </p>
            
            <div className="flex justify-center items-center mb-8 md:mb-12 px-4">
              <button 
                onClick={handleDownloadAPK}
                disabled={isDownloading}
                className="group relative bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 md:px-16 py-4 md:py-6 rounded-2xl font-black text-lg md:text-xl shadow-2xl shadow-purple-500/25 hover:shadow-cyan-500/25 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden w-full sm:w-auto justify-center max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center">
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 md:h-7 md:w-7 border-b-2 border-white ml-3 md:ml-4"></div>
                      جاري التحميل...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 md:w-7 md:h-7 ml-3 md:ml-4 group-hover:animate-bounce" />
                      تحميل SmartBacDz APK
                      <span className="text-xs md:text-sm opacity-75 mr-2">(13 MB)</span>
                    </>
                  )}
                </div>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm px-4">
              <div className="flex items-center justify-center text-gray-400 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 ml-2 text-green-400" />
                <span>آمن ومضمون 100%</span>
              </div>
              <div className="flex items-center justify-center text-gray-400 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2">
                <Smartphone className="w-4 h-4 md:w-5 md:h-5 ml-2 text-blue-400" />
                <span>يتطلب Android 5.0+</span>
              </div>
              <div className="flex items-center justify-center text-gray-400 bg-white/5 backdrop-blur-xl rounded-full px-4 py-2">
                <Download className="w-4 h-4 md:w-5 md:h-5 ml-2 text-purple-400" />
                <span>تحديثات مجانية مدى الحياة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2 md:mb-3">1500+</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors text-sm md:text-base">درس وملخص شامل</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 md:mb-3">15</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors text-sm md:text-base">سنة من المواضيع</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2 md:mb-3">800+</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors text-sm md:text-base">فيديو تعليمي HD</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2 md:mb-3">24/7</div>
                <div className="text-gray-400 font-semibold group-hover:text-gray-300 transition-colors text-sm md:text-base">مساعد ذكي متاح</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-gray-800/50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8">
            <div className="flex items-center space-x-reverse space-x-3 md:space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SmartBacDz APK</h3>
                <p className="text-gray-400 font-medium text-sm md:text-base">تطبيق الباكالوريا الذكي للطلاب الجزائريين</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-medium text-sm md:text-base">
                جميع الحقوق محفوظة © 2024 SmartBacDz
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800/50 pt-6 md:pt-8 text-center">
            <p className="text-gray-500 font-medium text-sm md:text-base px-4">
              مصمم بعناية للطلاب الجزائريين • مدعوم بأحدث تقنيات الذكاء الاصطناعي • الإصدار الأول
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

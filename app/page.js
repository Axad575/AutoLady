"use client";
import Image from "next/image";
import { useState } from "react";
import { strings } from "./assets/strings";

export default function Home() {
  const [lang, setLang] = useState("ru");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "standard"
  });
  const t = strings[lang];

  const languages = {
    ru: { name: "Русский", flag: "🇷🇺" },
    uz: { name: "O'zbek", flag: "🇺🇿" },
    en: { name: "English", flag: "🇬🇧" }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t.modal.successMessage);
    setIsModalOpen(false);
    setFormData({ name: "", phone: "", course: "standard" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <div className="bg-linear-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{t.modal.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{t.modal.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.modal.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-gray-900"
                  placeholder={t.modal.namePlaceholder}
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.modal.phoneLabel}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-gray-900"
                  placeholder={t.modal.phonePlaceholder}
                />
              </div>

              {/* Course Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.modal.courseLabel}
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-gray-900 bg-white"
                >
                  <option value="express" className="text-gray-900">
                    {t.courses.express.title} - {t.courses.express.price} {t.courses.express.currency}
                  </option>
                  <option value="standard" className="text-gray-900">
                    {t.courses.standard.title} - {t.courses.standard.price} {t.courses.standard.currency}
                  </option>
                  <option value="trial" className="text-gray-900">
                    {t.courses.trial.title} - {t.courses.trial.price}
                  </option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                {t.modal.submitButton}
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              {t.modal.privacyText}
            </p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Image
              src="/Main logo.png"
              alt="AutoLady Logo"
              width={140}
              height={56}
              className="h-10 sm:h-14 w-auto"
            />
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">{t.nav.about}</a>
              <a href="#courses" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">{t.nav.courses}</a>
              <a href="#advantages" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">{t.nav.advantages}</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">{t.nav.contact}</a>
              <a href="#vacancies" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">{t.nav.vacancies}</a>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                >
                  <span className="font-medium text-gray-700 text-sm sm:text-base">{lang.toUpperCase()}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="gray" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                    {Object.entries(languages).map(([code, data]) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-pink-50 transition-colors ${
                          lang === code ? 'bg-pink-100' : ''
                        }`}
                      >
                        <span className={`font-medium ${lang === code ? 'text-pink-500' : 'text-gray-700'}`}>
                          {data.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                {t.nav.enroll}
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-pink-50 via-purple-50 to-blue-50 pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in max-w-4xl mx-auto">
            <Image
              src="/Main logo.png"
              alt="AutoLady"
              width={400}
              height={200}
              className="mx-auto mb-6 sm:mb-8 drop-shadow-2xl w-48 sm:w-72 md:w-96 h-auto"
              priority
            />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-4 sm:mb-6 font-light px-4 leading-relaxed">
              {t.hero.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto px-4 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 max-w-md sm:max-w-none mx-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full text-sm sm:text-base lg:text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
              >
                {t.hero.enrollButton}
              </button>
              {/* <button className="bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 px-10 rounded-full text-lg transition-all shadow-lg border-2 border-gray-200 hover:border-pink-300">
                {t.hero.learnMore}
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              {t.about.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-6 sm:p-8 rounded-2xl bg-linear-to-br from-pink-50 to-purple-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">👩‍🏫</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{t.about.feature1.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.about.feature1.description}
              </p>
            </div>
            <div className="group text-center p-6 sm:p-8 rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">🚗</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{t.about.feature2.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.about.feature2.description}
              </p>
            </div>
            <div className="group text-center p-6 sm:p-8 rounded-2xl bg-linear-to-br from-yellow-50 to-orange-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 md:col-span-1">
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform">⭐</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{t.about.feature3.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {t.about.feature3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section id="advantages" className="py-12 sm:py-24 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                {t.advantages.title}
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-lg shrink-0">
                    <span className="text-xl sm:text-2xl">📚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-gray-700 mb-2">{t.advantages.item1.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{t.advantages.item1.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                    <span className="text-xl sm:text-2xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-gray-700 mb-2">{t.advantages.item2.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{t.advantages.item2.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                    <span className="text-xl sm:text-2xl">✅</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-gray-700 mb-2">{t.advantages.item3.title}</h4>
                    <p className="text-sm sm:text-base text-gray-600">{t.advantages.item3.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-pink-400 to-purple-500 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t.advantages.cta.title}</h3>
                <p className="mb-6 text-pink-100 text-sm sm:text-base">{t.advantages.cta.description}</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-pink-500 font-bold py-3 px-6 sm:px-8 rounded-full hover:bg-gray-50 transition-all shadow-lg text-sm sm:text-base"
                >
                  {t.advantages.cta.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Курсы */}
      <section id="courses" className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">{t.courses.title}</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              {t.courses.subtitle}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Экспресс курс */}
            <div className="group bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200 hover:-translate-y-2">
              <div className="mb-6 rounded-2xl overflow-hidden h-40 sm:h-52 bg-linear-to-br from-pink-100 to-purple-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-5xl sm:text-7xl">📱</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">{t.courses.express.title}</h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-pink-500">{t.courses.express.price}</span>
                <span className="text-lg sm:text-xl text-gray-500 ml-2">{t.courses.express.currency}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {t.courses.express.description}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                {t.courses.express.button}
              </button>
            </div>

            {/* Стандартный курс - ПОПУЛЯРНЫЙ */}
            <div className="group bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-pink-500 hover:-translate-y-2 relative sm:scale-105">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="bg-linear-to-r from-pink-500 to-purple-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                  ⭐ {t.courses.popular}
                </span>
              </div>
              <div className="mb-6 rounded-2xl overflow-hidden h-40 sm:h-52 bg-linear-to-br from-blue-100 to-blue-300 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-5xl sm:text-7xl">💻</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">{t.courses.standard.title}</h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-pink-500">{t.courses.standard.price}</span>
                <span className="text-lg sm:text-xl text-gray-500 ml-2">{t.courses.standard.currency}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {t.courses.standard.description}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-linear-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                {t.courses.standard.button}
              </button>
            </div>

            {/* Пробный урок */}
            <div className="group bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
              <div className="mb-6 rounded-2xl overflow-hidden h-40 sm:h-52 bg-linear-to-br from-green-100 to-teal-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-5xl sm:text-7xl">🎧</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                {t.courses.trial.title}
              </h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-green-500">{t.courses.trial.price}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                {t.courses.trial.description}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-linear-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                {t.courses.trial.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-12 sm:py-24 bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">{t.contact.title}</h2>
              <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 px-4">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Контактная информация */}
              <div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <a
                    href="tel:+998946400800"
                    className="group bg-white hover:bg-pink-500 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform shrink-0">📞</div>
                      <div className="text-left">
                        <h4 className="font-bold text-base sm:text-lg mb-1 text-gray-700 group-hover:text-white transition-colors">{t.contact.phone}</h4>
                        <p className="text-sm sm:text-base text-gray-600 group-hover:text-pink-100 transition-colors">+998 94 640 08 00</p>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://t.me/autolady"
                    className="group bg-white hover:bg-blue-500 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform shrink-0">
                        <Image
                          src="/telegram_logo.png"
                          alt="telegram"
                          width={40}
                          height={40}
                          className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-base sm:text-lg mb-1 text-gray-700 group-hover:text-white transition-colors">{t.contact.telegram}</h4>
                        <p className="text-sm sm:text-base text-gray-600 group-hover:text-blue-100 transition-colors">@autolady</p>
                      </div>
                    </div>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/autolady.uz/"
                    className="group bg-white hover:bg-linear-to-r hover:from-purple-500 hover:to-pink-500 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform shrink-0">
                        <Image
                          src="/instagram_logo.png"
                          alt="instagram"
                          width={40}
                          height={40}
                          className="absolute inset-0 group-hover:opacity-0 transition-opacity duration-300"
                        />
                        <Image
                          src="/instagram_logo_white.png"
                          alt="instagram"
                          width={40}
                          height={40}
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-base sm:text-lg mb-1 text-gray-700 group-hover:text-white transition-colors">{t.contact.instagram}</h4>
                        <p className="text-sm sm:text-base text-gray-600 group-hover:text-purple-100 transition-colors">autolady.uz</p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Адрес */}
                <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl shrink-0">📍</div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-2 text-gray-800">{t.contact.address}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {t.footer.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Карта */}
              <div className="h-75 sm:h-100 lg:h-full rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d711.7891974641351!2d69.22938508163949!3d41.34442063270461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1766598915214!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Image
                src="/Main logo.png"
                alt="AutoLady"
                width={150}
                height={60}
                className="brightness-0 invert h-10 sm:h-12 w-auto"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2 text-sm sm:text-base">&copy; 2024 AutoLady. {t.footer.rights}</p>
              <p className="text-xs sm:text-sm text-gray-500">{t.footer.location}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

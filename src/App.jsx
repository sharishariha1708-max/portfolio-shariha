import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Footer from './components/footer'
import { useState, useEffect } from 'react'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#F3F4F6] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#CBD5E1]"></div>
              <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#0F172A] animate-spin"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xl font-bold text-[#0F172A] tracking-wider">VB</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-[17px] font-medium text-[#475569] uppercase tracking-widest text-sm">Loading</p>
            <div className="w-48 h-[3px] bg-[#E2E8F0] overflow-hidden mx-auto rounded-full">
              <div className="h-full bg-[#0F172A] w-[40%] shimmer-loading rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-load">
      <Navbar></Navbar>

      <div className='container'>
        <Header resumeLink = '/Vasanth-B.html'></Header>
        <About></About>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
      </div>
      
      <Footer></Footer>
    </div>
  )
}



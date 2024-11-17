import About from './components/About'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import HowUsWork from './components/HowUsWork'
import RegisterNow from './components/RegisterNow'
import TopPopularJobs from './components/TopPopularJobs'

function App() {
  return (
    <main className="relative w-full flex-1">
      <Header />
      <Banner />
      <Categories />
      <TopPopularJobs />
      <About />
      <HowUsWork />
      <RegisterNow />
      <Footer />
    </main>
  )
}

export default App

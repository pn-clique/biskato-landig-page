import About from './components/About'
import Banner from './components/Banner'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Header from './components/Header'
import HowUsWork from './components/HowUsWork'
import RegisterNow from './components/RegisterNow'
import TopPopularJobs from './components/TopPopularJobs'
import CategoriesPopulations from './components/CategoriesPopulations'
import Questions from './components/Questions'

function App() {
  return (
    <main className="relative w-full flex-1">
      <Header />
      <Banner />
      <Categories />
      <TopPopularJobs />
      <About />
      <HowUsWork />
      <Questions />
      <RegisterNow />
      <CategoriesPopulations />
      <Footer />

    </main>
  )
}

export default App

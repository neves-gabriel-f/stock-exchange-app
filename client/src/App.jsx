import Header from "./components/Header"
import StockCardList from "./components/StockCardList"
import { useState } from "react"
import './styles/Body.css'


function App() {
  const [searchResult, setSearchResult] = useState({})
  const [limit, setLimit] = useState(70)

  const handleLimit = (limit) => {
    setLimit(limit)
  }

  const handleSearchResult = (result) => {
    setSearchResult(result)
  }
  return (
    <>
      <Header setSearchResult={handleSearchResult} limit={limit}/>
      <StockCardList setLimit={handleLimit} searchResult={searchResult} limit={limit}/>
    </>
  )
}

export default App

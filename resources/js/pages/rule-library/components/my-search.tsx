import { useEffect, useRef, useState } from "react"
import { Button } from "./ui/button"

const MySearch = () => {
  const searchRef = useRef<HTMLDivElement | null>(null)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    let offsetTop = 0

    const measureOffset = () => {
      if (searchRef.current) {
        const rect = searchRef.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        offsetTop = rect.top + scrollTop
        handleScroll()
      }
    }

    const handleScroll = () => {
      if (window.scrollY >= offsetTop) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    // Delay offset measurement to allow layout to stabilize
    setTimeout(measureOffset, 50)

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", measureOffset)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", measureOffset)
    }
  }, [])

  return (
    <>
      {isSticky && <div className="h-[112px] sm:h-[118px] lg:h-[124px]" />}

      <div
        ref={searchRef}
        className={`bg-[#393838] pb-2 z-50 transition-all duration-300 ease-in-out ${
          isSticky ? "fixed top-0 left-0 w-full shadow-lg border-b border-neutral-700" : ""
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 lg:px-20 py-3">
          <p className="text-base sm:text-xl lg:text-2xl text-white font-semibold">
            One Search
          </p>

          <form
            action="https://www.elibrary-rule.com/one_search"
            method="GET"
            className="mt-3 bg-white flex flex-col sm:flex-row items-center justify-center border pl-3 pr-0 py-0 rounded-full gap-2 shadow-xl focus-within:ring-2 focus-within:ring-yellow-300"
          >
            <label htmlFor="search-bar" className="sr-only">
              Search
            </label>
            <input
              id="search-bar"
              name="search"
              placeholder="Search by: Title, ISBN, Author..."
              className="px-4 py-2 w-full rounded-full text-black text-sm sm:text-base outline-none bg-white"
            />
            <Button
              type="submit"
              className="px-3 py-2 rounded-full bg-yellow-400 border border-yellow-500 text-white font-semibold hover:bg-yellow-500 hover:border-yellow-600 transition-all duration-200 active:scale-95"
            >
              <span className="text-sm font-semibold">Go</span>
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default MySearch

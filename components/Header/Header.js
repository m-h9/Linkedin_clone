import React, { useContext } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { ImSearch } from 'react-icons/im'
import { SiLinkedin } from 'react-icons/si'
import { DesignContext } from '../../context/DesignCTX'
import { HeaderIcon as Icon } from '../../Utils'
const Header = () => {
  const { toggleFocus, focus } = useContext(DesignContext)
  return (
    <div className="flex h-full w-full items-center justify-between px-28">
      <div className="flex h-full w-full items-center gap-3">
        <SiLinkedin size={33} style={{ color: 'blue' }} />
        <label
          className={`relative block h-9 ${
            !focus ? 'w-72' : 'w-96'
          } rounded-md transition-all ease-in-out`}
          onClick={toggleFocus}
        >
          <span className="sr-only h-7">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <ImSearch />
          </span>
          <input
            className="focus:gray-200 block w-full rounded-md border bg-[#F3F2EF] py-[6px] pl-9 pr-3 shadow-sm placeholder:text-[#7c7c7c] focus:outline-none focus:ring-0 sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
          />
        </label>
      </div>
      <div className="flex h-full w-full items-center justify-between">
        {Icon.map((e, i) => (
          <div
            className="group relative flex cursor-pointer flex-col items-center justify-center px-2 
           before:absolute before:bottom-[-5px] before:block 
          before:h-[2px] before:w-full before:scale-[1.1] before:bg-black before:opacity-0 hover:before:opacity-100"
          >
            <e.icon
              size={22}
              className="text-[#6e6558] group-hover:text-[#000]"
            />
            <p className="text-sm group-hover:text-black">{e.title}</p>
          </div>
        ))}
        <img
          src="/joker.jpg"
          className="h-9 w-9 rounded-full object-cover "
          alt=""
        />
        <div className="h-full w-[1px] bg-gray-100" />
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <CgMenuGridR size={23} style={{ color: '#6e6558' }} />
          <p>work</p>
        </div>
        <a href="#" className="text-center text-sm text-orange-800">
          Try Premium <br />
          for free
        </a>
      </div>
    </div>
  )
}

export default Header

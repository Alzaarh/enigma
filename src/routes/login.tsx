import image from '../assets/images/financial-illustration.svg'
import logo from '../assets/images/logo.svg'
import circle from '../assets/images/Ellipse.svg'
import { useState } from 'react'

export default function Page() {
  const [tab, setTab] = useState(1)
  const [phone, setPhone] = useState('')

  return (
    <div className="h-screen">
      <div className="flex gap-4 pl-20 py-36 max-h-full">
        <div className="flex-1">
          <img src={image} alt="financial illustration" className="h-full" />
          <img src={circle} className="absolute top-0 left-96 w-full h-full" />
        </div>
        <div className="bg-[#4050E3] rounded-[32px] py-4 pb-40 text-white flex-1 max-w-xl">
          <div className="flex pb-4 border-b">
            <h2
              className={`border-l pr-20 pl-6 cursor-pointer ${
                tab === 1 ? 'text-[#F2971F]' : 'text-white'
              }`}
            >
              ورود/ثبت نام با شماره
            </h2>
            <h2 className="pr-6 pl-20 cursor-pointer">ورود با نام کاربری</h2>
          </div>
          <div className="flex flex-col items-center gap-2 mt-28">
            <h2 className="text-2xl">ترازافزار شرق</h2>
            <img src={logo} alt="tarazafzar logo" className="w-24" />
          </div>
          <div className="text-white mt-4 text-lg px-14">
            <p>سلام!</p>
            <p>لطفا شماره موبایل خود را وارد کنید</p>
            <form className="mt-2 flex flex-col gap-5">
              <input
                type="text"
                placeholder="شماره تلفن"
                className="py-3 px-2.5 rounded-xl text-[#646464]"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#E85F03] rounded-xl py-3 px-2.5"
              >
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

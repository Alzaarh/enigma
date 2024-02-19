import image from '../assets/images/financial-illustration.svg'
import logo from '../assets/images/logo.svg'
import { useState } from 'react'

export default function Page() {
    const [tab, setTab] = useState(1)
    const [phone, setPhone] = useState('')

    return (
        <div className="h-screen flex items-center overflow-hidden px-6">
            <div className="max-w-[1400px] mx-auto flex gap-8 py-14 justify-center items-center">
                <div className="relative">
                    <div className='w-[40rem] h-[40rem] rounded-full absolute top-1/2 left-14 -translate-y-1/2 bg-gradient-to-tr from-[#3645D0] to-[#3243DC] opacity-10'></div>
                    <img src={image} alt="financial illustration" className="relative z-10" width="580" />
                </div>
                <div className='relative'>
                    <div className='w-[40rem] h-[40rem] absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rounded-full' style={{ backgroundImage: "radial-gradient(circle, rgba(232,95,3,0.18) 0%, rgba(232,95,3,0) 75%)" }}></div>
                    <div className="bg-[#4050E3] rounded-[32px] py-4 text-white flex-1 max-w-lg relative z-10 min-w-max">
                        <div className="flex pb-4 border-b border-opacity-20 font-medium text-lg">
                            <h2
                                className={`border-l pr-16 pl-6 cursor-pointer ${tab === 1 ? 'text-[#F2971F]' : 'text-white'
                                    }`}
                            >
                                ورود/ثبت‌نام با شماره
                            </h2>
                            <h2 className="pr-6 pl-20 cursor-pointer">ورود با نام کاربری</h2>
                        </div>
                        <div className='py-24 px-14'>
                            <div className="flex flex-col items-center gap-2">
                                <h2 className="text-xl font-bold">ترازافزار شرق</h2>
                                <img src={logo} alt="tarazafzar logo" className="w-24" />
                            </div>
                            <div className="text-white">

                                <form className="mt-8 flex flex-col">
                                    <div className='font-light text-sm mb-3'>
                                        <p>سلام!</p>
                                        <label htmlFor='phone'>لطفا شماره موبایل خود را وارد کنید</label>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="شماره تلفن"
                                        className="py-3 px-2.5 rounded-xl text-[#646464]"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        id='phone'
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#E85F03] rounded-xl py-3 px-2.5 font-bold mt-8 shadow-xl shadow-black/15"
                                    >
                                        ورود
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

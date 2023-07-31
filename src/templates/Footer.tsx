import { FooterSection } from "@/layout/FooterSection"
import { useState } from "react"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSendEmail = async () => {
    const response = await fetch("/api/send", {
      method: "POST", // Specify the HTTP method used by your API route
      body: JSON.stringify({ email })
    })
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  return (
    <FooterSection>
      <div className='flex flex-col text-center text-gray-800'>
        <div className='my-5 self-end'>
          <div className='flex flex-row'>
            <div className='relative'>
              <input
                type='text'
                id='hs-leading-icon'
                name='hs-leading-icon'
                className='py-3 px-4 pl-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                placeholder='you@site.com'
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className='absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4'>
                <svg
                  className='h-4 w-4 text-gray-400'
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
                </svg>
              </div>
            </div>
            <div>
              <button
                className='h-16 w-16 rounded-md border-2 border-red-700 bg-red-700 text-sm font-semibold text-white'
                onClick={handleSendEmail}
              >
                Light
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 mt-5 justify-center' style={{ backgroundColor: "bg-gray-100" }}>
          <div>
            600.000 users registered since January. We've created the product that will help your startup get better
            marketing results.
          </div>
          <div>
            <div className='flex flex-col pb-16 w-1/3 mx-auto'>
              <div className='basis-1/3 '>Email</div>
              <div className='basis-1/3 '>Location</div>
              <div className='basis-1/3 '>Tel No</div>
            </div>
          </div>
          <div>
            600.000 users registered since January. We've created the product that will help your startup get better
            marketing results.
          </div>
        </div>
      </div>
    </FooterSection>
  )
}

export { Footer }

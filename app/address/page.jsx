'use client'
// https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only

import TextInput from '../components/TextInput'
import MainLayout from '../layouts/MainLayout'

export default function Address() {
  return (
    <>
      <MainLayout>
        <div id='AddressPage' className='mt-4 max-w-[600px] mx-auto px-2'>
          <div className='mx-auto bg-white rounded-lg p-3'>
            <div className='text-xl text-bold mb-2'>Address Details</div>

            <form>
              <div className='mb-4'>
                <TextInput
                  className='w-full'
                  string={'test'}
                  placeholder='Name'
                  error='This is an error'
                />
              </div>

              <button className=' mt-6 w-full  text-white text-lg font-semibold p-3 rounded'>
                Update Address
              </button>
            </form>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

'use client'

import SimilarProducts from '@/app/components/SimilarProducts'
import MainLayout from '../../layouts/MainLayout'

export default function Product({ params }) {
  const product = {
    id: 1,
    title: 'Brown Leather Bag',
    description:
      'Lorem ipsum dolor sit amet. Sit dolores obcaecati rem dolorem dicta ut ipsa quidem et dolorem consequatur ea ipsam voluptatem et odio molestiae et dolorum unde. Hic asperiores fugit ab totam omnis ex voluptatum ipsam At vero aperiam id consequatur expedita',
    url: 'https://picsum.photos/id/7',
    price: 2500,
  }

  return (
    <>
      <MainLayout>
        <div className='max-w-[1200px] mx-auto'>
          <div className='flex px-4 py-10'>
            {product?.url ? (
              <img
                className='w-[40%] rounded-lg'
                src={product?.url + '/280'}
                alt='product'
              />
            ) : (
              <div className='w-[40%]'></div>
            )}

            <div className='px-4 w-full'>
              <div className='font-bold text-xl'>{product?.title}</div>
              <div className='text-sm text-gray-700 pt-2'>
                Brand New - Full Warranty
              </div>

              <div className='border-b py-1' />

              <div className='pt-3 pb-2'>
                <div className='flex items-center'>
                  Condition:{' '}
                  <span className='font-bold text-[17px] ml-2'>New</span>
                </div>
              </div>

              <div className='border-b py-1' />

              <div className='pt-3'>
                <div className='w-full flex items-center justify-between'>
                  <div className='flex items-center'>
                    Price:
                    {product?.price ? (
                      <div className='font-bold text-[20px] ml-2'>
                        GBP £{(product?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button className=' text-white py-2 px-20 rounded-full cursor-pointer bg-[#349BC9]'>
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className='border-b py-1' />

              <div className='pt-3'>
                <div className='font-semibold pb-1'>Description:</div>
                <div className='text-sm'>{product?.description}</div>
              </div>
            </div>
          </div>
        </div>

        <SimilarProducts />
      </MainLayout>
    </>
  )
}

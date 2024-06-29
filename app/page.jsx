'use client'

import CarouselComp from './components/CarouselComp'
import Product from './components/Product'
import MainLayout from './layouts/MainLayout'

export default function Home() {
  const products = [
    {
      id: 1,
      title: 'Brown Leather Bag',
      description:
        'Lorem ipsum dolor sit amet. Sit dolores obcaecati rem dolorem dicta ut ipsa quidem et dolorem consequatur ea ipsam voluptatem et odio molestiae et dolorum unde. Hic asperiores fugit ab totam omnis ex voluptatum ipsam At vero aperiam id consequatur expedita',
      url: 'https://picsum.photos/id/7',
      price: 2500,
    },
    {
      id: 2,
      title: 'School Books',
      description:
        'Lorem ipsum dolor sit amet. Sit dolores obcaecati rem dolorem dicta ut ipsa quidem et dolorem consequatur ea ipsam voluptatem et odio molestiae et dolorum unde. Hic asperiores fugit ab totam omnis ex voluptatum ipsam At vero aperiam id consequatur expedita',
      url: 'https://picsum.photos/id/20',
      price: 1999,
    },
  ]

  return (
    <>
      <MainLayout>
        <CarouselComp />
        <div className='max-w-[1200px] mx-auto'>
          <div className='text-2xl font-bold mt-4 mb-6 px-4'>Products</div>
          <div className='grid grid-cols-5 gap-4'>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  )
}

import Image from 'next/image'
import Button from './Button'
import Form from './Form'


export const Hero = () => {
    return (
      <section
      id="section-hero"
      aria-label="section"
      className="relative z-0 bg-gray-900 text-white overflow-hidden py-20"
      style={{
        backgroundImage: 'url(/demo/bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center">
          <div className="text-center max-w-3xl">
            <div className="subtitle s2 mb-3 text-indigo-400 uppercase tracking-widest font-semibold">
              Welcome to Dreptec
            </div>
            <h1 className="text-6xl font-extrabold uppercase leading-tight mb-6">
              AI pioneer
            </h1>
            <p className="mb-8 text-lg">
              Dreptec helps to unleash the Power of AI: Transforming Ideas into Intelligent Apps
            </p>
            {/* <Button btnText="Contact us"/> */}
            <Form/>
          </div>
        </div>

        {/* Side badges */}
        <div className="hidden sm:flex absolute top-5 left-10 flex-col items-center space-y-2 z-20">
          <Image src="/demo/ai_.png" alt="Envato Elite Author" width={60} height={60} />
          <h5 className="text-white font-semibold">AI Elite</h5>
        </div>
        <div className="hidden sm:flex absolute top-5 right-10 flex-col items-center space-y-2 z-20">
          <Image src="/demo/featured-author.png" alt="Featured Author" width={60} height={60} />
          <h5 className="text-white font-semibold">Featured AI</h5>
        </div>

        {/* Preview images */}
        <div className="ss-wrap text-center relative mt-16 z-20">
          <div className="relative inline-block">
            {/* <Image
              src="/demo/preview/homepage-1.webp"
              alt="Homepage Preview 1"
              width={600}
              height={400}
              className="relative inline-block"
            /> */}
            <Image
              src="/demo/preview/homepage-2.webp"
              alt="Homepage Preview 2"
              width={200}
              height={150}
              className="absolute top-10 left-0 animate-fadeIn"
              style={{ animationDelay: '0.9s' }}
            />
            <Image
              src="/demo/preview/homepage-3.webp"
              alt="Homepage Preview 3"
              width={200}
              height={150}
              className="absolute top-20 left-20 animate-fadeIn"
              style={{ animationDelay: '1.2s' }}
            />
            <Image
              src="/demo/preview/homepage-4.webp"
              alt="Homepage Preview 4"
              width={200}
              height={150}
              className="absolute top-10 right-0 animate-fadeIn"
              style={{ animationDelay: '0.9s' }}
            />
            <Image
              src="/demo/preview/homepage-5.webp"
              alt="Homepage Preview 5"
              width={200}
              height={150}
              className="absolute top-20 right-20 animate-fadeIn"
              style={{ animationDelay: '1.2s' }}
            />
          </div>
        </div>
      </div>
      
    </section> 
    )
}
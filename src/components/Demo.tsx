import Image from 'next/image'
import Link from "next/link"


export const Demo = () => {
    return (
      <section
          id="section-demo"
          className="bg-black bg-opacity-90 py-20 text-white"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-xl mx-auto mb-12">
              <div className="subtitle s2 mb-3 uppercase tracking-widest text-indigo-400 font-semibold">
                All Demos Included
              </div>
              <h2 className="text-4xl font-bold mb-5">Demo Preview</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {[
                {
                  href: 'index.html',
                  img: '/demo/preview/homepage-1.webp',
                  title: 'Main (Video Background)',
                },
                {
                  href: 'index-slider.html',
                  img: '/demo/preview/homepage-2.webp',
                  title: 'Slider Background',
                },
                {
                  href: 'index-static-background.html',
                  img: '/demo/preview/homepage-3.webp',
                  title: 'Static Background',
                },
                {
                  href: 'index-slider-text.html',
                  img: '/demo/preview/homepage-4.webp',
                  title: 'Slider Text',
                },
                {
                  href: 'index-countdown.html',
                  img: '/demo/preview/homepage-5.webp',
                  title: 'Video Background + Countdown',
                },
              ].map(({ href, img, title }) => (
                <div key={title} className="gallery-item text-center mb-5">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="relative inline-block group">
                    <Image src={img} alt={title} width={600} height={400} className="w-full transition-transform group-hover:scale-105 rounded-md" />
                    <span className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity rounded-md">
                      Live Preview
                    </span>
                  </a>
                  <h5 className="mt-2 text-xl font-semibold">{title}</h5>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
}
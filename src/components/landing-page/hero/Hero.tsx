import styles from './hero.module.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section>
      <div className={`${styles.container} flex items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white`}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`${styles.contentContainer} ${styles.left} space-y-8`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trade Bitcoin with <span className="text-blue-500">Confidence</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience lightning-fast trades with our advanced matching engine. Join thousands of traders who trust our platform for secure and reliable cryptocurrency transactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div>
                  <p className="text-2xl font-bold text-white">$2B+</p>
                  <p>24h Trading Volume</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">1M+</p>
                  <p>Active Traders</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">99.9%</p>
                  <p>Uptime</p>
                </div>
              </div>
            </div>
            <div className={`${styles.contentContainer} ${styles.right}`}>
              <Image 
                src="/images/landing-page/hero/desktop-app@1x-min.png" 
                alt="Trading Dashboard" 
                className="rounded-lg shadow-2xl" 
                width={1024}
                height={768}
              />
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-lg p-4 rounded-lg">
                <p className="text-green-400 font-semibold">BTC/USD</p>
                <p className="text-2xl font-bold">$43,521.00</p>
                <p className="text-green-400">+2.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

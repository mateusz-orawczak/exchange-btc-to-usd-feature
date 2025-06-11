import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className={styles.container} >
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">BTC-TRADE</Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/markets" className="text-gray-600 hover:text-gray-900">Markets</Link>
                <Link href="/trade" className="text-gray-600 hover:text-gray-900">Trade</Link>
                <Link href="/prices" className="text-gray-600 hover:text-gray-900">Prices</Link>
                <Link href="/learn" className="text-gray-600 hover:text-gray-900">Learn</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function SwitchButton({ toggleMode, isBuying }: { toggleMode: () => void, isBuying: boolean }) {
  return (
    <button
        onClick={toggleMode}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors flex items-center gap-2"
    >
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
        >
        <path 
            fillRule="evenodd" 
            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
            clipRule="evenodd" 
        />
        </svg>
        Switch to {isBuying ? 'Sell' : 'Buy'}
    </button>
  )
}
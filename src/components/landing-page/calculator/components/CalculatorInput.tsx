export default function CalculatorInput({ value, isBuying, onChange }: { value: string, isBuying: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={isBuying ? "Enter USD amount" : "Enter BTC amount"}
      min="0"
    />
  )
}
export default function Rate({ rate, countdown }: { rate: number, countdown: number }) {
  return (
    <p className="text-xs text-gray-400 mt-2 text-center">
      1 BTC = ${rate.toLocaleString()}
      <span className="text-xs text-gray-400 ml-2">
        Rate is valid for {countdown} seconds
      </span>
    </p>
  )
}
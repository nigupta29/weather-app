/* eslint-disable react/prop-types */
function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th'
  }
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
const MessageBox = ({ message }) => {
  let displayText = message?.msg
  let textColor = ''
  let bgColor = ''
  let borderColor = ''
  let additionalStyle = ''

  if (message.type === 'error') {
    textColor = 'text-red-600'
    bgColor = 'bg-red-100/70'
    borderColor = 'ring-red-700'
    additionalStyle = 'animate-bounce'
  } else if (message.type === 'loading') {
    textColor = 'text-amber-600'
    bgColor = 'bg-amber-100/90'
    borderColor = 'ring-amber-700'
    additionalStyle = 'animate-pulse'
  } else {
    textColor = 'text-primary'
    bgColor = 'bg-white/70'
    borderColor = 'ring-primary'

    const date = new Date('2023-10-29')
    const day = date.getDate()
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()

    const formattedDate = `${day}${getDaySuffix(day)} ${month} ${year}`
    displayText = formattedDate
  }

  const styles = `${textColor} ${bgColor} ${borderColor} ${additionalStyle}`
  return (
    <div className="mx-auto max-w-fit">
      <p
        className={`rounded-2xl px-10 py-2 text-lg font-semibold ring-2 ${styles}`}
      >
        {displayText}
      </p>
    </div>
  )
}

export default MessageBox

// Write your code here
const DenominationItem = props => {
  const {details, denomination} = props
  const {value} = details

  const onDenomination = () => {
    denomination(value)
  }

  return (
    <li className="li-container">
      <button type="button" className="btn" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem

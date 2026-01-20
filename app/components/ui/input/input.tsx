type InputProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, onChange, ...rest }: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input {...rest} onChange={onChange} />
    </>
  )
}

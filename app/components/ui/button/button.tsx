import { MouseEvent } from 'react'

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>
}

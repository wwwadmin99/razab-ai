import './title.css'

type TitleProps = {
  children: React.ReactNode
}

export const H1 = ({ children }: TitleProps) => {
  return (
    <>
      {' '}
      <h3 className="title">{children}</h3>
    </>
  )
}

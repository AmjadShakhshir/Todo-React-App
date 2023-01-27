import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick = {onAdd}
        color={showAdd ? 'black' : '#1d86ff'}
        text={showAdd ? 'Close' : 'Add a new todo'}
        />

    </header>
  )
}

export default Header
import Button from "./Button"

const Header = (props) => {

     
    const onClick = () => {
        console.log('Clicked')
    }

  return (
    <header className="header">
        <h1>{props.title}</h1>
        <Button onClick = {onClick}/>
    </header>
  )
}

export default Header
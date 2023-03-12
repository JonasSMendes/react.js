type props = {
  title?: string;
}

export const Header = ({title}:props)=>{
    return (
      <header>
        <h1>{title}</h1>
        <hr />
      </header>
    )
  }

  
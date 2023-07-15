

type props = {
    label: string;
    click: () => void
}

export const Button = ({label, click}: props) => {
    return(
       <button
       className={`py-3 px-4 rounded border`}
       
       >
        
            {label}
       </button>
    )
}
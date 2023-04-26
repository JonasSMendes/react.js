import { type } from "os"
import * as C from "./styles"

type Props = {
    label: string;
    Icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button = ({label, Icon, onClick}:Props) =>{
    return(
        <C.conatiner onClick={onClick}>
            { Icon &&
            <C.iconArea>
                <C.Icon src={Icon} />
            </C.iconArea>
            }
            <C.label>{label}</C.label>
        </C.conatiner>
    )
}
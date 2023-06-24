import { useState } from "react"
import { CharacterSides } from "../types/Chactersides";

export const useCharecter = () =>{

    const [pos, setPos] = useState({x:3, y:4});
    const [side, setSide] = useState<CharacterSides>('down')

    const moveLeft = () =>{
        setPos(pos => ({
            x: pos.x - 1,
            y:pos.y
        }))
        setSide('left')
    }
    const moveRight = () =>{
        setPos(pos => ({
            x: pos.x + 1,
            y:pos.y
        }))
        setSide('rigth')
    }
    const moveUp = () =>{
        setPos(pos => ({
            x: pos.x,
            y:pos.y - 1
        }))
        setSide('up')
    }
    const moveDown = () =>{
        setPos(pos => ({
            x: pos.x,
            y:pos.y + 1
        }))
        setSide('down')
    }

    return{
        x:pos.x,
        y:pos.y,
        side,
        moveLeft,
        moveDown,
        moveRight,
        moveUp
    };

}
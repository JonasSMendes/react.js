import { useState } from "react"
import { CharacterSides } from "../types/Chactersides";
import { mapSpots } from "../data/mapSpots";

export const useCharecter = () =>{

    const [pos, setPos] = useState({x:3, y:4});
    const [side, setSide] = useState<CharacterSides>('down')

    const moveLeft = () =>{
        setPos(pos => ({
            x: CanMove(pos.x-1, pos.y) ? pos.x - 1 : pos.x,
            y:pos.y
        }))
        setSide('left')
    }
    const moveRight = () =>{
        setPos(pos => ({
            x: CanMove(pos.x+1, pos.y) ? pos.x + 1 : pos.x,
            y:pos.y
        }))
        setSide('rigth')
    }
    const moveUp = () =>{
        setPos(pos => ({
            x: pos.x,
            y:CanMove(pos.x, pos.y - 1) ? pos.y - 1: pos.y
        }))
        setSide('up')
    }
    const moveDown = () =>{
        setPos(pos => ({
            x: pos.x,
            y:CanMove(pos.x, pos.y + 1) ? pos.y + 1: pos.y
        }))
        setSide('down')
    }

    const CanMove = (x:number, y:number) =>{
        if(mapSpots[y] !== undefined && mapSpots[y][x] !== undefined){
            if(mapSpots[y][x] === 1){
                return true
            }
        }

        return false
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
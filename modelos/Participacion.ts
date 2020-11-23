import { Jugador } from "./Jugador";

class Participacion{
    jugador: Jugador
    minutos: number
    
    constructor(jugador: Jugador, minutos: number){
        this.jugador = jugador
        this.minutos = minutos
    }
}

export{Participacion}
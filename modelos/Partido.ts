import { Jugador } from "./Jugador"
import { Participacion } from './Participacion'

class Partido{
    rival: string
    jugadores: Array<Participacion>

    constructor(rival: string){
        this.rival = rival
        this.jugadores = []
    }

    addJugadorParticipacion(participacion: Participacion){
        this.jugadores.push(participacion)
    }

}

export{Partido}
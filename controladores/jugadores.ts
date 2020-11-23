import {Jugador} from '../modelos/Jugador'
import { menuPrincipal } from './menu'

const pathJugadores = './datos/jugadores.json'
const readlineSync = require('readline-sync')
const fs = require('fs')

const getJugadores = () : Array<Jugador> =>{
    let jugadoresJSON = JSON.parse(fs.readFileSync(pathJugadores))
    return getJugadoresFromJSON(jugadoresJSON)
}

const getJugadoresFromJSON = (jugadoresJSON) : Array<Jugador> => {
    let jugadores : Array<Jugador> = []
    for(let jugadorJSON of jugadoresJSON){
        let jugador = new Jugador(Number(jugadorJSON.dorsal), jugadorJSON.nombre, Number(jugadorJSON.minutos))
        jugadores.push(jugador)
    }
    return jugadores;
}


const nuevoJugador = () => {
    console.log("Datos del nuevo jugador")
    let dorsal = readlineSync.question('Dorsal: ')
    let nombre = readlineSync.question('Nombre: ')
    let jugador = new Jugador(dorsal,nombre,0)
    let jugadores = getJugadores()
    jugadores.push(jugador)
    fs.writeFileSync(pathJugadores,JSON.stringify(jugadores))
    console.log("Jugador creado\n\n")
    menuPrincipal()
}

const actualizaMinutosJugadores = (jugadores: Array<Jugador>)=>{ 
    fs.writeFileSync(pathJugadores,JSON.stringify(jugadores))
}

export {getJugadores, getJugadoresFromJSON, nuevoJugador, actualizaMinutosJugadores}
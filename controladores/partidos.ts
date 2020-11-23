import { Partido } from '../modelos/Partido'
import { Participacion } from '../modelos/Participacion'

import { menuPrincipal } from './menu'
import {getJugadores,actualizaMinutosJugadores} from './jugadores'

const pathPartidos = './datos/partidos.json'
const readlineSync = require('readline-sync')
const fs = require('fs')

const getPartidos = () : Array<Partido> =>{
    let partidosJSON = JSON.parse(fs.readFileSync(pathPartidos))
    let partidos : Array<Partido> = []
    for(let partidoJSON of partidosJSON){
        let partido = new Partido(partidoJSON.rival)
        partido.jugadores = partidoJSON.jugadores
        partidos.push(partido)
    }
    return partidos;
}


const nuevoPartido = () => {
    console.log("Datos del nuevo partido")
    let rival = readlineSync.question('Nombre del rival: ')
    let partido = new Partido(rival)
    let jugadores = getJugadores()
    for(let jugador of jugadores){
        console.log(`Participación de ${jugador.nombre}: `)
        let minutos = Number(readlineSync.question('Minutos: '))
        jugador.sumaMinutos(minutos)
        partido.addJugadorParticipacion(new Participacion(jugador,minutos))
    }
    let partidos = getPartidos()
    partidos.push(partido)
    fs.writeFileSync(pathPartidos,JSON.stringify(partidos))
    console.log("Partido creado\n\n")
    actualizaMinutosJugadores(jugadores)
    menuPrincipal()
}

export {getPartidos, nuevoPartido}
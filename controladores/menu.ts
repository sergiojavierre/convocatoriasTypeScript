import { Partido } from "../modelos/Partido"
import { getJugadores, nuevoJugador } from "./jugadores"
import { getPartidos, nuevoPartido } from "./partidos"

const readlineSync = require('readline-sync')


const menuPrincipal = () => {
    console.log("1) Jugadores\n2) Partidos\n Otro) Salir")
    let opcion = readlineSync.question('Selección: ')
    if(opcion == 1){
        menuJugadores()
    }
    else if (opcion == 2){
        menuPartidos()
    }
}

const menuJugadores = () => {
    console.log("1) Listado\n2) Nuevo jugador")
    let opcion = readlineSync.question('Selección: ')
    if(opcion == 1){
        console.log(getJugadores())
        menuPrincipal()
    }
    else if (opcion == 2){
        nuevoJugador()
    }
}

const menuPartidos = () => {
    console.log("1) Listado\n2) Nuevo partido")
    let opcion = readlineSync.question('Selección: ')
    if(opcion == 1){
        muestraPartidos(getPartidos())
        menuPrincipal()
    }
    else if (opcion == 2){
        nuevoPartido()
    }
}

const muestraPartidos = (partidos: Array<Partido>) => {
    for(let partido of partidos){
        console.log("\n\n")
        console.log("Rival: "+partido.rival)
        console.log("Jugadores participantes: ")
        for(let participante of partido.jugadores){
            console.log(`${participante.jugador.nombre} con ${participante.minutos} minutos`)
        }
        console.log("\n\n")
    }
    
}

export {menuPrincipal}
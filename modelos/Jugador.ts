class Jugador{
    dorsal: number
    nombre: string
    minutos: number

    constructor(dorsal: number, nombre: string, minutos: number){
        this.dorsal = dorsal
        this.nombre = nombre
        this.minutos = minutos
    }

    sumaMinutos(minutos: number){
        this.minutos+=minutos
    }

}

export {Jugador}
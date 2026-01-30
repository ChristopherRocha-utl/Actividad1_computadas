const app = {
    data() {
        return {
            busqueda: '',
            formulario: false,
            datoT: '', 
            seleccion: null,
            personajes: [
                {
                    nombre: 'Sonic',
                    especie: 'Erizo',
                    habilidad: 'Velocidad',
                    imagen: '../img/Sonic.jpg',
                    datos: ["Es azul", "Corre rápido"]
                },
                {
                    nombre: 'Tails',
                    especie: 'Zorro',
                    habilidad: 'Volar',
                    imagen: '../img/Tails.jpg',
                    datos: ["Tiene 2 colas", "Es genio"]
                },
                {
            nombre: 'Shadow the Hedgehog',
            especie: 'Erizo',
            habilidad: 'Chaos Control',
            imagen: '../img/Shadow.png',
            datos: ["Es la forma de vida definitiva", "Usa las Chaos Emeralds"]
    },
    {
        nombre: 'Knuckles the Echidna',
        especie: 'Equidna',
        habilidad: 'Fuerza bruta',
        imagen: '../img/knuckles.png',
        datos: ["Guardián de la Master Emerald", "Puede escalar paredes"]
    },
            ],
            nuevoPj: {
                nombre: '',
                especie: '',
                habilidad: '',
                imagen: '../img/a.png',
                datos: []
            }
        }
    },
    methods: {
        seleccionar(personaje) {
            this.seleccion = personaje;
        },
        agregarDato() {
            if (this.datoT.trim() !== "") {
                this.nuevoPj.datos.push(this.datoT);
                this.datoT = "";
            }
        },
        guardarPj() {
            if (this.nuevoPj.nombre && this.nuevoPj.especie) {
                this.personajes.push({
                    nombre: this.nuevoPj.nombre,
                    especie: this.nuevoPj.especie,
                    habilidad: this.nuevoPj.habilidad,
                    imagen: this.nuevoPj.imagen,
                    datos: this.nuevoPj.datos
                });

                this.nuevoPj = { nombre: "", especie: "", habilidad: "", imagen: "../img/a.png", datos: [] };
                this.formulario = false;
            }
        },
        cancelarFormulario() {
            this.formulario = false;
            this.nuevoPj = { nombre: "", especie: "", habilidad: "", imagen: "../img/a.png", datos: [] };
        }
    }
}
const mountedApp = Vue.createApp(app).mount('#componente');
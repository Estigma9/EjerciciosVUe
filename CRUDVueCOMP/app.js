
const app = new Vue({
    el: '#app',
    data: {
        title: 'Tareas del proyecto con Vue',
        sesion: 16,
        profesores: {
            'nombre': 'Esteban',
            'modulo': '4'
        },
        tareas:[],
        nuevaTarea:'',
        checked: false,

    },

    methods: {
        agregarFecha(){
            Fecha = new Date().toLocaleDateString('es', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
            });

            return Fecha
        },

    },

    
});






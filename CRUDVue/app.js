
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
        agregarTarea(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: this.checked,
            });
            this.nuevaTarea = '';
            this.checked = false;
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },

        editarTarea(index){
            if(this.tareas[index].estado){
                this.tareas[index].estado = false;
            }else{
                this.tareas[index].estado = true;
            }
            localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
        },

        eliminarTarea(index){
            if(!this.tareas[index].estado){
                this.tareas.splice(index, 1);
                localStorage.setItem('tareas-vue', JSON.stringify(this.tareas));
            }
        },

        agregarFecha(){
            Fecha = new Date().toLocaleDateString('es', {
                weekday: 'long',
                month: 'short',
                day: 'numeric'
            });

            return Fecha
        }

    },

    computed: {

    },

    beforeCreate(){

    },

    created(){
        let datosDB = JSON.parse(localStorage.getItem('tareas-vue'));
        if(datosDB === null){
            this.tareas = [];
        }else{
            this.tareas = datosDB
        }
    }

});






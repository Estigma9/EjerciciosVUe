Vue.component('MisTareas', {
    template:
    `
    <div>
        <input 
            type="text" 
            class="form-control mt-5" 
            v-on:keyup.enter="agregarTarea" 
            v-model="nuevaTarea"
        >

        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Realizada?</label>

        <button 
            class="btn btn-success w-100"
            v-on:click="agregarTarea"
        >Agregar tarea</button>

        <div class="mt-3" v-for="(item, index) of tareas" :key="item.id">
            <div 
                :class="[item.estado? 'alert-success' : 'alert-danger']"
                class="alert" 
                role="alert"
            >
                <div class="d-flex justify-content-between align-items-center">
                    <div class="col-6">
                        {{item.nombre}}  
                    </div>
                    <div v-if="item.estado">
                        <span>
                            Si :D
                        </span>
                    </div>
                    <div v-else>
                        <span>
                            Ño :P
                        </span>
                    </div>
                    <div>
                        <button class="btn btn-success" @click="editarTarea(index)">Ok</button>
                        <button class="btn btn-danger" @click="eliminarTarea(index)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg> 
                        </button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    `,

    data(){
        return{
            tareas: [],
            nuevaTarea: '',
            checked: false,

        }
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






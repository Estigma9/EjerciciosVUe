Vue.component('inicial', {
    template:
    `
        <div>
            <h1>Hola a todos en clase</h1>
            <h2>{{titulo}}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, alias?</p>
            <button @click="sumar(5,2)">Click me!!!</button>
        </div>

    `,
    data(){
        return{
            titulo: 'Mi primer componente con Vue'
        }
    },

    methods:{
        sumar(num1, num2){
            console.log(num1 + num2);
        },
    },

});





const app = new Vue({
    el: '#app',
    data: {
        title: 'Intro con Vue',
        mensaje: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi pariatur officia dicta temporibus odio voluptate tempore, blanditiis voluptas, nihil vero, ut asperiores eveniet placeat quibusdam facilis officiis beatae quisquam.',
        
        tareas: [
            {
                'nombre': 'tarea1',
                'estado': 'terminado'
            },
        ],
        despedida: '',
        contador: 0,

    },

    methods: {
        suma(){
            this.contador++;
            console.log(this.contador);
        }

    }
});





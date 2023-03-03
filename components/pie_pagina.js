Vue.component(
    'pie_pagina',
    {
        template:    `<div>   <footer
                        :style="{ backgroundColor: configuracionPagina.footerColor }"
                    ></footer>
                    </div>`,    
        data: function(){
            return {
                  configuracionPagina: {
                    marca: 'MegaDron',
                    menuColor: '#5b88a5',
                    footerColor: '#158fa2',
                    precioEstilos:
                    'background: orangered; color: white; font-weight: bold',
                    menus: [
                    {
                        etiqueta: 'Inicio',
                        url: '',
                    },
                    {
                        etiqueta: 'Tienda',
                        url: '',
                    },
                    ],
                },
            
            }
        },
        props: ["titulo"],
        mounted() {
            this.numero =10
        },
    }
);
Vue.component(
    'menus',
    {
        template:    `  
        <nav
        class="navbar navbar-expand-lg"
        :style="{ backgroundColor: configuracionPagina.menuColor }"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> {{ configuracionPagina.marca }}</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                class="nav-item"
                v-for="item in configuracionPagina.menus"
                :key="item.etiqueta"
              >
                <a class="nav-link" aria-current="page" href="#"
                  >{{item.etiqueta}}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav> `,    
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
       
        },
    }
);
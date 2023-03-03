Vue.component("tarjeta", {
  template: `<div>  

                        <div class="container">
                            <div class="row">
                            <h3>{{producto.nombre}}</h3>
                            </div>
                            <div class="row">
                            <div class="col-12 col-sm-6 col-md-4">
                                <img :src="producto.imagen" alt="" width="100%" />
                            </div>
                            <div class="col-12 col-sm-6 col-md-8">
                                <h6>{{producto.descripcion}}</h6>
                                <div
                                class="p-3 mb-2 text-white"
                                :style="configuracionPagina.precioEstilos"
                                >
                                Precio {{producto.precio}} BOV
                                </div>
                                <h5>Color</h5>
                                <div>
                                <div
                                    class="color-box clic"
                                    :style="{ backgroundColor: item }"
                                    v-for="item in producto.colores"
                                    :key="item.etiqueta"
                                    @click="colorSelecionado(item)"
                                ></div>
                                </div>
                                <h5>Cantidad</h5>
                                <div class="quantity">
                                <button @click="disminuirCantidad()">-</button>
                                <div>{{pedido.cantidad}}</div>
                                <button @click="adicionarCantidad()">+</button>
                                </div>
                                <div class="buy-box">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    @click="comprarProducto(producto.id)"
                                    :disabled="btnComprar"
                                >
                                    Comprar
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                         <div class="container">
                            <div class="row">
                            <h4>Productos relacionados</h4>
                            </div>
                            <div class="row">
                            <div class="col" v-for="producto in productosRelacionados" :key="producto.id">
                                <div class="card" style="width: 18rem">
                                  <div class="card-body">
                                      <h5 class="card-title">{{producto.nombre}}</h5>
                                      <img :src="producto.imagen" alt="" width="100%" />
                                      <p class="card-text">{{producto.descripcion}}</p>
                                      <div class="producto-relacionado-precio"  @click="mostrarProducto(producto)">
                                        Precio:{{producto.precio}} BOB
                                      </div>
                                      <div>
                                      <div>
                                          <div class="color-box" :style="{ backgroundColor: item }" v-for="item in producto.colores" :key="item.etiqueta"></div>
                                      </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                            </div>
                        </div>


                    </div>`,
  data: function () {
    return {
      configuracionPagina: {
        precioEstilos: "background: orangered; color: white; font-weight: bold",
      },
      producto: {},

      productosRelacionados: [],
      pedido: {
        id: null,
        cantidad: 1,
        color: null,
      },
      btnComprar: false
    };
  },

  methods: {
    getProducto() {
      axios
        .get("http://localhost:5000/producto")
        .then((response) => {
          console.log(response.data);
          this.producto = response.data;
        })
        .catch((e) => console.log("catch", e));
    },

    getProductoRelacionados() {
      axios
        .get("http://localhost:5000/productosRelacionados")
        .then((response) => {
          console.log(response.data);
          this.productosRelacionados = response.data;
        })
        .catch((e) => console.log("catch", e));
    },

    comprarProducto(id) {
      this.pedido.id = id;
      console.log(this.pedido);
      alert(" ● id del producto: " + this.pedido.id 
        + "\n ● La cantidad: " + this.pedido.cantidad 
        + "\n ● Color seleccionado: " + this.pedido.color);
    },
    mostrarProducto(producto) {
      alert(" ● Id: " + producto.id
        + "\n ● Imagen: " + producto.imagen
        + "\n ● Nombre: " + producto.nombre
        + "\n ● Descripcion: " + producto.descripcion
        + "\n ● Precio: " + producto.precio
        + "\n ● Color: " + producto.colores);
    },
    colorSelecionado(color) {
      this.pedido.color = color;
    },
    adicionarCantidad() {
      this.pedido.cantidad++;
      if (this.pedido.cantidad > 0) {
        this.btnComprar = false;
      }
    },
    disminuirCantidad() {
      this.pedido.cantidad -= 1;
      if (this.pedido.cantidad == 0) {
        this.btnComprar = true;
      }
      if (this.pedido.cantidad < 0) {
        this.pedido.cantidad = 0;
      }
    },
  },

  props: ["titulo"],
  mounted() {
    this.getProducto(), this.getProductoRelacionados();
  },
});

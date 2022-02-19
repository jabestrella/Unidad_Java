class Factura {
  constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
          baseImponible: 0,
          iva: 21,
          total: 0,
          formadepago: "efectivo"
      }
      this.calculototal = function() {
          for (var i = 0; i< this.elementos.length; i++) {
              this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
          }
          this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
      this.mostrartotal = function() {
          this.calculototal();
          alert("El total de los productos es " + this.informacion.total);
      }
  }
}

class Cliente {
  constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
  }
}

class Elemento {
  constructor(descripcion, cantidad, precio) {
      this.descripcion = descripcion;
      this.cantidad = cantidad;
      this.precio = precio;
  }
}

const firstCliente = new Cliente("Juan", "Toledo", "625774123", "3558777U");
const seconCliente = new Cliente("Pedro", "Madrid","648225556", "6999954S")
const arrayElementos = [new Elemento("Objeto 1", 1, 5), new Elemento("Objeto 2", 7, 3), new Elemento("Objeto 3", 2, 20)];
const FacturaDelTotal = new Factura(seconCliente, arrayElementos);
FacturaDelTotal.mostrartotal();
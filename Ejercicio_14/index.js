class cuadrado {
  constructor(lado) {
      this.area = lado * lado;
      this.perímetro = lado * 4;

      console.log(`Este cuadrado tiene ${lado} cm de lado, su perímetro es ${this.perímetro} cm y su área ${this.area} cm2`);
  }
};

const pequeño = new cuadrado(2);
const mediano = new cuadrado(5);
const grande = new cuadrado(10);
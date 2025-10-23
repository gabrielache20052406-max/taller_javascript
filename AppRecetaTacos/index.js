import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
const recetaJSON =`[
  {
    "id": "0001",
    "tipo": "taco",
    "nombre": "Taco lechon",
    "precio": 20.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Puerco",
        "preparacion": "Horneado"
      },
      "salsa": {
        "nombre": "Tomate verde",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Cebolla",
          "cantidad": "1 cucharada",
          "ingredientes": ["Cebolla blanca","Cilantro","Naranja", "Sal"]
        },
        {
          "nombre": "Guacamole",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Aguacate", "Jugo de limon", "Sal", "Cebolla", "Cilantro"]
        }
      ]
    }
  },
  {
    "id": "0002",
    "tipo": "taco",
    "nombre": "Taco Pollo Pibil",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Pollo",
        "preparacion": "Enterrado"
      },
      "salsa": {
        "nombre": "Curtido",
        "picor": "Medio"
      },
      "acompañamientos": [
        {
          "nombre": "Repollo",
          "cantidad": "3 cucharada",
          "ingredientes": ["Repollo blanco","Cilantro","Naranja", "Sal","Pimienta"]
        },
        {
          "nombre": "Jalapeño",
          "cantidad": "1 pieza",
          "ingredientes": ["Jalapeño", "Zanahoria", "Sal", "Vinagre", "Cebolla blanca"]
        }
      ]
    }
  },
  {
    "id": "0003",
    "tipo": "taco",
    "nombre": "Taco chaya con huevo",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Huevo",
        "preparacion": "Frito"
      },
      "salsa": {
        "nombre": "Habanero",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Arroz",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Arroz blanco"]
        },
        {
          "nombre": "Frijoles",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Frijol negro", "Cebolla", "Manteca", "Chile habanero"]
        }
      ]
    }
  },
  {
    "id": "0004",
    "tipo": "taco",
    "nombre": "Taco de salpicon",
    "precio": 18.00,
    "ingredientes": {
      "proteina": {
        "nombre": "Venado",
        "preparacion": "Hervido"
      },
      "salsa": {
        "nombre": "Habanero",
        "picor": "Alto"
      },
      "acompañamientos": [
        {
          "nombre": "Arroz",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Arroz blanco"]
        },
        {
          "nombre": "Frijoles",
          "cantidad": "2 cucharadas",
          "ingredientes": ["Frijol negro", "Cebolla", "Manteca", "Chile habanero"]
        }
      ]
    }
  }
]`
const Tacos = JSON.parse(recetaJSON);
app.use(express.static("public"));
app.use(bodyParser.json());
app.get('/receta/:type', (req, res) => {
    const elegirTaco = Tacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());

   res.json(elegirTaco || {error: "Receta no encontrada"});
});
app.listen(port,()=>{
    console.log(`Tu servidos esta ejecutandose en el puerto ${port}`);
})
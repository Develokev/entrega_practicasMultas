//*  VARIABLES +++++++++++++++++++++++++++++++++++++++
//ARRAYs ++++++++++
const arrayPropietarios = [
    {matricula:"6458-KL", nombre: "Marcos", direccion: "Fuencarral", telefono: "606-121-351", modelo: "Panda", multas: "2", alta: true},
    {matricula:"8295-JU", nombre: "Jorge", direccion: "Goya", telefono: "606-234-125", modelo: "Picasso", multas: "4", alta: true},
    {matricula:"7296-AM", nombre: "Maria", direccion: "Alcobendas", telefono: "606-636-636", modelo: "Ranger", multas: "3", alta: false},
    {matricula:"8525-PO", nombre: "Esther", direccion: "Retiro", telefono: "605-467-368", modelo: "350-Z", multas: "0", alta: true},
    {matricula:"2324-HR", nombre: "Andrés", direccion: "Barrio del pilar", telefono: "604-234-556", modelo: "Miatta", multas: "1", alta: false},
];
const fragment = document.createDocumentFragment();

arrayData = JSON.parse(localStorage.getItem('propietarios')) || [];

//QuerySelectors +++++++++
const subButton = document.querySelector("#submitButton");
console.log(subButton)
const addedData = document.querySelector("#addedData");
const search = document.querySelector("#search")
console.log(search)



//* EVENTOS +++++++++++++++++++++++++++++++++++++++++
//! Evento submit que va a accionar la validación, y posterior el pintar en tabla.
search.addEventListener('submit', (ev) => {
    ev.preventDefault();
    alert("Buscando datos en sistema..");
    validateStatus();
    search.reset();
});

//* FUNCIONES +++++++++++++++++++++++++++++++++++++++
//!Función validar
const validateStatus=()=>{
    altaBaja = arrayPropietarios.find((item) => item.alta == alta)
    console.log(altaBaja);
        if(altaBaja == false) {
            throw(`El propietario no está dando de alta en sistema`)
        }   else {
            console.log(altaBaja);
            return(altaBaja)
        }
    }

//!Función Get Propietarios
    propietario = arrayPropietarios.find((item) => item.propietario == propietario);


//!


//!Función pintar en tabla desde el LocalStorage
function paintTable() {

    const personalData = getLocal();

    personalData.forEach((item) => {
    const tableR = document.createElement("TR");

    const matriculaT = document.createElement("TD");
    matriculaT.textContent = item.matricula;

    const modeloT = document.createElement("TD");
    modeloT.textContent = item.modelo;

    const propietarioT = document.createElement("TD");
    propietarioT.textContent = item.propietario;

    const multasT = document.createElement("TD");
    multasT.textContent = item.multas;

    tableR.append(matriculaT, modeloT, propietarioT, multasT)

    fragment.append(tableR);

  });
    addedData.append(fragment);
}

//! función para SUBIR en Local Storage
setLocal=()=>{
    console.log("adding to Local Storage", arrayMovie)
    localStorage.setItem('movies', JSON.stringify(arrayMovie));
}

//! función para TRAER del Local Storage
getLocal=()=>{
  console.log("Retrieving data from Local Storage..");
  return JSON.parse(localStorage.getItem('movies')) || [];
}

//! siempre que iniciemos la web, que cargue el Local, y se pinte lo que haya guardado.
const init=()=>{  
    paintTable();
}
init();
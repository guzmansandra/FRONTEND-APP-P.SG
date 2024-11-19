// Importar los metodos de api.js
import  { getSneakers, getSneakersByID, updateSneakers, deleteSneakers } from "./api";
 
// Traer todos los productos y mostrarlos en la página principal
document.addEventListener("DOMContentLoaded", async () => { 
    const sneakersList = document.getElementById("sneakers-list");

    const sneakers = await getSneakers();
    sneakersList.innerHTML = sneakers.map(sneakers => `
        <div class="col-xs-12 col-sm-6 col md-3 card">
            <div class="card-body d-flex flex-column justify-content-end">
                <h5 class="card-title">${sneakers.brand}</h5>
                <p class="card-text">${sneakers.price}</p>
                <a onclick="viewSneakers(${sneakers.id})" class="btn btn-primary">Ver más</
        `).join("");

});
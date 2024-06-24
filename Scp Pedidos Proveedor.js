function myFunction() {
    document.getElementById("agr")
        .innerHTML += `<div class="indiv">
            <div class="input-item">
                <label class="label" for="ingrediente">IdIngrediente:</label><br>
                <input type="text" id="ingrediente" name="ingrediente"><br>
            </div>
            <div class="input-item">
                <label class="label" for="cantidad">Cantidad:</label><br>
                <input type="number" id="cantidad" name="cantidad">
            </div>
        </div>`;
}

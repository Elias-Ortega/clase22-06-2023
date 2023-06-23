class Producto {

    constructor(productoId, productoNombre, precioUnitario, unidadesEnStock, discontinuado) {
        this._productoId = productoId;
        this._productoNombre = productoNombre;
        this._precioUnitario = precioUnitario;
        this._unidadesEnStock = unidadesEnStock;
        this.discontinuado = discontinuado;
    }

    get productoId() {
        return this._productoId;
    }
    set productoId(productoId) {
        this._productoId = productoId;
    }

    get productoNombre() {
        return this._productoNombre;
    }
    set productoNombre(productoNombre) {
        this._productoNombre = productoNombre;
    }

    get precioUnitario() {
        return this._precioUnitario;
    }
    set precioUnitario(precioUnitario) {
        this._precioUnitario = precioUnitario;
    }

    get unidadesEnStock() {
        return this._unidadesEnStock;
    }
    set unidadesEnStock(unidadesEnStock) {
        this._unidadesEnStock = unidadesEnStock;
    }

    get discontinuado() {
        return this._discontinuado;
    }
    set discontinuado(discontinuado) {
        this._discontinuado = discontinuado;
    }
}

module.exports = Producto;

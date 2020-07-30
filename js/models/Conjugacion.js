class Conjugacion {
    constructor(infinitivo, yo, tu, el, nos, vos, ellos) {
        this._infinitivo = infinitivo;
        this._yo = yo;
        this._tu = tu;
        this._el = el;
        this._nos = nos;
        this._vos = vos;
        this._ellos = ellos;

        Object.freeze(this);
    }

    get infinitivo() { return this._infinitivo; }
    get yo() { return this._yo; }
    get tu() { return this._tu; }
    get el() { return this._el; }
    get nos() { return this._nos; }
    get vos() { return this._vos; }
    get ellos() { return this._ellos; }
}
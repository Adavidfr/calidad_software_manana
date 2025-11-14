function buscarAlumno(alumnos, nombre) {
    if (!Array.isArray(alumnpos))
        throw new TypeError('alumnos debe ser un array');
    if (typeof nombre !== 'string' || !nombre.trim())
        throw new TypeError('nombre invalido');
    const found = alumnos.find(a => a?.nombre === nombre.trim());
    return found ?? null;
}

function leerProp(obj, prop) {
    if (typeof obj !== 'object' || obj === null) {
        throw new TypeError('obj inválido');
    }
    if (typeof prop !== 'string' || !prop.trim()) {
        throw new TypeError('prop inválida');
    }
    return obj[prop];
}

module.exports = { buscarAlumno, leerProp };
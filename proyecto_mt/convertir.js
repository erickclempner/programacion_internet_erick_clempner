const unidades = {
    temperatura: {
        nombre: 'Temperatura',
        unidades: ['Celsius', 'Fahrenheit', 'Kelvin'],
        simbolos: { 'Celsius': '°C', 'Fahrenheit': '°F', 'Kelvin': 'K' }
    },
    distancia: {
        nombre: 'Distancia',
        unidades: ['Metros', 'Kilómetros', 'Millas', 'Pies', 'Pulgadas'],
        simbolos: { 'Metros': 'm', 'Kilómetros': 'km', 'Millas': 'mi', 'Pies': 'ft', 'Pulgadas': 'in' }
    },
    tiempo: {
        nombre: 'Tiempo',
        unidades: ['Años', 'Días', 'Horas', 'Segundos'],
        simbolos: { 'Años': 'años', 'Días': 'días', 'Horas': 'hrs', 'Segundos': 'seg' }
    },
    moneda: {
        nombre: 'Moneda',
        unidades: ['MXN', 'USD', 'Euro'],
        simbolos: { 'MXN': '$', 'USD': 'USD $', 'Euro': '€' }
    }
};

const selectCategoria = document.getElementById('categoria');
const selectUnidadOrigen = document.getElementById('unidadOrigen');
const selectUnidadDestino = document.getElementById('unidadDestino');
const inputValorOrigen = document.getElementById('valorOrigen');
const inputValorDestino = document.getElementById('valorDestino');
const btnConvertir = document.getElementById('btnConvertir');
const infoBox = document.getElementById('infoBox');

// Listeners
selectCategoria.addEventListener('change', cambiarCategoria);
btnConvertir.addEventListener('click', realizarConversion);
inputValorOrigen.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') realizarConversion();
});

// Función para cambiar categoría y actualizar selectores
function cambiarCategoria() {
    const categoria = selectCategoria.value;
    
    if (categoria === '') {
        // Deshabilitar todo si no hay categoría elejida
        selectUnidadOrigen.disabled = true;
        selectUnidadDestino.disabled = true;
        inputValorOrigen.disabled = true;
        btnConvertir.disabled = true;
        selectUnidadOrigen.innerHTML = '<option value="">Elije categoría primero</option>';
        selectUnidadDestino.innerHTML = '<option value="">Elije categoría primero</option>';
        inputValorDestino.value = '';
        infoBox.innerHTML = '<p>Elije una categoría para comenzar la conversión</p>';
        return;
    }
    
    selectUnidadOrigen.disabled = false;
    selectUnidadDestino.disabled = false;
    inputValorOrigen.disabled = false;
    btnConvertir.disabled = false;
    
    // Llenar selectores con las unidades de la categoría
    const unidadesCategoria = unidades[categoria].unidades;
    
    selectUnidadOrigen.innerHTML = unidadesCategoria.map(unidad => 
        `<option value="${unidad}">${unidad}</option>`
    ).join('');
    
    selectUnidadDestino.innerHTML = unidadesCategoria.map(unidad => 
        `<option value="${unidad}">${unidad}</option>`
    ).join('');
    
    // Diferentes unidades por default
    if (unidadesCategoria.length > 1) {
        selectUnidadDestino.selectedIndex = 1;
    }
    
    // Limpiar valores
    inputValorOrigen.value = '';
    inputValorDestino.value = '';
    
    // Actualizar mensaje de info
    infoBox.innerHTML = `<p>Categoría seleccionada: <strong>${unidades[categoria].nombre}</strong>. Ingresa un valor y presiona Convertir.</p>`;
}

function realizarConversion() {
    const categoria = selectCategoria.value;
    const unidadOrigen = selectUnidadOrigen.value;
    const unidadDestino = selectUnidadDestino.value;
    const valorOrigen = parseFloat(inputValorOrigen.value);
    
    // Validaciones
    if (!categoria || !unidadOrigen || !unidadDestino) {
        mostrarError('Por favor selecciona todas las opciones');
        return;
    }
    
    if (isNaN(valorOrigen)) {
        mostrarError('Por favor ingresa un valor numérico válido');
        return;
    }
    
    // Hacer conversión según la categoría
    let resultado;
    
    switch (categoria) {
        case 'temperatura':
            resultado = convertirTemperatura(valorOrigen, unidadOrigen, unidadDestino);
            break;
        case 'distancia':
            resultado = convertirDistancia(valorOrigen, unidadOrigen, unidadDestino);
            break;
        case 'tiempo':
            resultado = convertirTiempo(valorOrigen, unidadOrigen, unidadDestino);
            break;
        case 'moneda':
            resultado = convertirMoneda(valorOrigen, unidadOrigen, unidadDestino);
            break;
        default:
            mostrarError('Categoría no válida');
            return;
    }
    
    inputValorDestino.value = resultado.toFixed(6);
    mostrarExito(valorOrigen, unidadOrigen, resultado, unidadDestino);
}

// temperatura
function convertirTemperatura(valor, desde, hacia) {
    // Primero convertir a Celsius
    let celsius;
    
    switch (desde) {
        case 'Celsius':
            celsius = valor;
            break;
        case 'Fahrenheit':
            celsius = (valor - 32) * 5/9;
            break;
        case 'Kelvin':
            celsius = valor - 273.15;
            break;
    }
    
    switch (hacia) {
        case 'Celsius':
            return celsius;
        case 'Fahrenheit':
            return (celsius * 9/5) + 32;
        case 'Kelvin':
            return celsius + 273.15;
    }
}

// distancia
function convertirDistancia(valor, desde, hacia) {
    const aMetros = {
        'Metros': 1,
        'Kilómetros': 1000,
        'Millas': 1609.34,
        'Pies': 0.3048,
        'Pulgadas': 0.0254
    };
    
    // Convertir a metros primero
    const metros = valor * aMetros[desde];
    
    return metros / aMetros[hacia];
}

// tiempo
function convertirTiempo(valor, desde, hacia) {
    const aSegundos = {
        'Segundos': 1,
        'Horas': 3600,
        'Días': 86400,
        'Años': 31536000
    };
    
    // Convertir a segundos primero
    const segundos = valor * aSegundos[desde];
    
    return segundos / aSegundos[hacia];
}

// moneda
function convertirMoneda(valor, desde, hacia) {
    const tasas = {
        'USD': 1,
        'MXN': 18.33,      // valor al 6 de Octubre 2025
        'Euro': 0.85      // valor al 6 de octubre
    };
    
    // Convertir a dolares primero
    const usd = valor / tasas[desde];
    
    return usd * tasas[hacia];
}

function mostrarError(mensaje) {
    infoBox.innerHTML = `<p style="color: #dc3545;"> ${mensaje}</p>`;
    inputValorDestino.value = '';
}

function mostrarExito(valorOrigen, unidadOrigen, valorDestino, unidadDestino) {
    const categoria = selectCategoria.value;
    const simboloOrigen = unidades[categoria].simbolos[unidadOrigen];
    const simboloDestino = unidades[categoria].simbolos[unidadDestino];
    
    infoBox.innerHTML = `
        <p style="color: #28a745;">
            <strong>${valorOrigen} ${simboloOrigen}</strong> = 
            <strong>${valorDestino.toFixed(4)} ${simboloDestino}</strong>
        </p>
    `;
}

window.addEventListener('load', () => {
    console.log('Convertidor de Unidades cargado correctamente');
});

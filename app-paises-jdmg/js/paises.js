const data = {
    "México": {
        "Hidalgo": {
            "Tula": ["Ciudad Cruz Azul", "San marcos", "San Miguel"],
            "Tepeji": ["LA loma", "Polo Norte", "La Romera"],
            "Chilcuautla": ["Zacualoya", "Alamos", "Chilcuautla Centro"],

        },
        "Guadalajara": {
            "Zapotlanejo": ["vertisol", " planosol", "phaeozem"],
            "Tonalá": ["Basurero Municipal de Tonalá", " Siete Cascadas", "Agua Amarilla"],
            "San Pedro Tlaquepaque": ["Toluquilla", "Zalatitán", "Tequepexpan"],

        },
        "Guerrero": {
            "Zihuatanejo": ["Pantla", "El Coacoyul	", "Ixtapa Zihuatanejo"],
            "Taxco": ["Acuitlapán", "Agua Escondida ", "Angolilla"],
            "Copala": ["Atrixco", "Campamento Ojo de Agua las Salinas", "Bahía de Agua Dulce"],

        }
    },
    "Brzail": {
        "Río de janeriro": {
            "Maricá": ["Itapeba  ", "Numbuca ", "Aracatiba "],
            "Duque de caxias": ["Vila meriti", "Vila Paula", "Lindóia"],
            "Magé": ["Getúlio Vargas", "Esteparia da Hora", "Santa Luzia"],

        },
        "Bahía": {
            "Irecé": ["Canal", " Ibititá", "Canarana"],
            "Morro do chapéu": ["Lagoa do Mato", "Itareia", "Jose Marcelino"],
            "Jequié": ["Cascabel", "Jatobá", "Baixao"],

        },
        "Sao Paulo": {
            "Suzano": ["poá", "Jardin Graziela", "Ferraz de Vazconcelos"],
            "Guarujá": ["Punta da Paria", "Praia de Fora  ", "Praia do Tombo"],
            "Campinas": ["Cambuí", "Pte. Prtea", "Parque Prado"],

        }
    },

};


// Función para llenar un selector con opciones
function llenarSeleccion(selector, options, defaultOptionText = "Seleccione una opción") {
    selector.innerHTML = '';
    if (defaultOptionText) {
        selector.appendChild(new Option(defaultOptionText, ""));
    }
    options.forEach(option => {
        selector.appendChild(new Option(option, option));
    });
}

// Actualizar estados basado en el país seleccionado
function actualizarEstados() {
    const selectedCountry = countrySelect.value;
    const states = Object.keys(data[selectedCountry] || {});
    llenarSeleccion(stateSelect, states);
    llenarSeleccion(municipioSelect, [], "Seleccione un estado primero"); // Reinicia el selector de municipios
    llenarSeleccion(localidadSelect, [], "Seleccione un municipio primero"); // Reinicia el selector de localidades
}

// Actualizar municipios basado en el estado seleccionado
function actualizarMunicipios() {
    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;
    const municipios = Object.keys(data[selectedCountry]?.[selectedState] || {});
    llenarSeleccion(municipioSelect, municipios);
    llenarSeleccion(localidadSelect, [], "Seleccione un municipio primero"); // Reinicia el selector de localidades
}

// Actualizar localidades basado en el municipio seleccionado
function actualizarLocalidades() {
    const selectedCountry = countrySelect.value;
    const selectedState = stateSelect.value;
    const selectedMunicipio = municipioSelect.value;
    const localidades = data[selectedCountry]?.[selectedState]?.[selectedMunicipio] || [];
    llenarSeleccion(localidadSelect, localidades);
}

// Inicialización de los selectores
document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('countrySelect');
    const stateSelect = document.getElementById('stateSelect');
    const municipioSelect = document.getElementById('municipioSelect');
    const localidadSelect = document.getElementById('localidadSelect');

    llenarSeleccion(countrySelect, Object.keys(data), "Seleccione un país");
    llenarSeleccion(stateSelect, [], "Seleccione un país primero");
    llenarSeleccion(municipioSelect, [], "Seleccione un estado primero");
    llenarSeleccion(localidadSelect, [], "Seleccione un municipio primero");
});
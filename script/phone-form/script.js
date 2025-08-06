

// Variáveis globais
let selectedCountry = getDefaultCountry();
let detectedCountry = null;
let isValidPhone = false;

// Elementos DOM
const countrySelect = document.getElementById('country-select');
const phoneInput = document.getElementById('phone-input');
const countryCode = document.getElementById('country-code');
const formatHint = document.getElementById('format-hint');
const submitBtn = document.getElementById('submit-btn');
const phoneForm = document.getElementById('phone-form');
const countryDetection = document.getElementById('country-detection');
const phoneInputWrapper = document.querySelector('.phone-input-wrapper');

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeCountrySelect();
    initializePhoneInput();
    detectCountryByIP();
    setupEventListeners();
});

// Inicializar seletor de países
function initializeCountrySelect() {
    // Limpar opções existentes
    countrySelect.innerHTML = '';
    
    // Adicionar opções dos países
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = `${country.flag} ${country.name} ${country.dialCode}`;
        countrySelect.appendChild(option);
    });
    
    // Definir país padrão
    countrySelect.value = selectedCountry.code;
    updateCountryDisplay();
}

// Inicializar input de telefone
function initializePhoneInput() {
    updateCountryDisplay();
    updateValidationState();
}

// Configurar event listeners
function setupEventListeners() {
    // Mudança de país
    countrySelect.addEventListener('change', handleCountryChange);
    
    // Input de telefone
    phoneInput.addEventListener('input', handlePhoneInput);
    phoneInput.addEventListener('keydown', handlePhoneKeydown);
    
    // Envio do formulário
    phoneForm.addEventListener('submit', handleFormSubmit);
}

// Manipular mudança de país
function handleCountryChange(event) {
    const countryCode = event.target.value;
    selectedCountry = findCountryByCode(countryCode);
    
    // Limpar input e resetar validação
    phoneInput.value = '';
    isValidPhone = false;
    
    updateCountryDisplay();
    updateValidationState();
}

// Atualizar exibição do país
function updateCountryDisplay() {
    countryCode.textContent = selectedCountry.dialCode;
    phoneInput.placeholder = selectedCountry.format;
    formatHint.textContent = `Formato: ${selectedCountry.format} (máx. ${selectedCountry.maxLength} dígitos)`;
}

// Manipular input de telefone
function handlePhoneInput(event) {
    let value = event.target.value;
    
    // Remover caracteres não numéricos
    const numbersOnly = value.replace(/\D/g, '');
    
    // Limitar ao máximo de dígitos do país
    const limitedNumbers = numbersOnly.slice(0, selectedCountry.maxLength);
    
    // Aplicar formatação
    const formattedNumber = formatPhoneNumber(limitedNumbers, selectedCountry);
    
    // Atualizar input
    phoneInput.value = formattedNumber;
    
    // Validar número
    isValidPhone = validatePhoneNumber(limitedNumbers, selectedCountry);
    updateValidationState();
}

// Manipular teclas especiais no input
function handlePhoneKeydown(event) {
    // Permitir teclas de navegação e edição
    const allowedKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Home', 'End'
    ];
    
    if (allowedKeys.includes(event.key)) {
        return;
    }
    
    // Permitir Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if (event.ctrlKey && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())) {
        return;
    }
    
    // Permitir apenas números
    if (!/^\d$/.test(event.key)) {
        event.preventDefault();
    }
}

// Formatar número de telefone
function formatPhoneNumber(numbers, country) {
    if (!numbers) return '';
    
    switch (country.code) {
        case 'BR':
            return formatBrazilianNumber(numbers);
        case 'US':
        case 'CA':
            return formatNorthAmericanNumber(numbers);
        case 'AR':
            return formatArgentinianNumber(numbers);
        case 'FR':
            return formatFrenchNumber(numbers);
        case 'RU':
            return formatRussianNumber(numbers);
        default:
            return formatGenericNumber(numbers, country);
    }
}

// Formatação brasileira: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
function formatBrazilianNumber(numbers) {
    if (numbers.length <= 2) {
        return `(${numbers}`;
    } else if (numbers.length <= 6) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
}

// Formatação norte-americana: (XXX) XXX-XXXX
function formatNorthAmericanNumber(numbers) {
    if (numbers.length <= 3) {
        return `(${numbers}`;
    } else if (numbers.length <= 6) {
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else {
        return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    }
}

// Formatação argentina: (XX) XXXX-XXXX
function formatArgentinianNumber(numbers) {
    if (numbers.length <= 2) {
        return `(${numbers}`;
    } else if (numbers.length <= 6) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    }
}

// Formatação francesa: XX XX XX XX XX
function formatFrenchNumber(numbers) {
    let formatted = '';
    for (let i = 0; i < numbers.length; i += 2) {
        if (i > 0) formatted += ' ';
        formatted += numbers.slice(i, i + 2);
    }
    return formatted;
}

// Formatação russa: XXX XXX-XX-XX
function formatRussianNumber(numbers) {
    if (numbers.length <= 3) {
        return numbers;
    } else if (numbers.length <= 6) {
        return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    } else if (numbers.length <= 8) {
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    } else {
        return `${numbers.slice(0, 3)} ${numbers.slice(3, 6)}-${numbers.slice(6, 8)}-${numbers.slice(8)}`;
    }
}

// Formatação genérica baseada no padrão do país
function formatGenericNumber(numbers, country) {
    if (!country.pattern) return numbers;
    
    const match = numbers.match(country.pattern);
    if (!match) return numbers;
    
    // Remover o primeiro elemento (match completo) e juntar com espaços
    return match.slice(1).join(' ');
}

// Validar número de telefone
function validatePhoneNumber(numbers, country) {
    return numbers.length === country.maxLength;
}

// Atualizar estado de validação
function updateValidationState() {
    // Atualizar ícone de validação
    if (phoneInput.value === '') {

        phoneInputWrapper.className = 'phone-input-wrapper';
    } else if (isValidPhone) {

        phoneInputWrapper.className = 'phone-input-wrapper valid';
    } else {
        phoneInputWrapper.className = 'phone-input-wrapper invalid';
    }
    
    // Atualizar botão de envio
    if (isValidPhone) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Número';
    } else {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Digite um número válido';
    }
   
}

// Manipular envio do formulário
function handleFormSubmit(event) {
    event.preventDefault();
    
    if (isValidPhone) {
        const fullNumber = `${selectedCountry.dialCode} ${phoneInput.value}`;
        
    }
}


// Detectar país por IP com múltiplas APIs
async function detectCountryByIP() {
    // Mostrar indicador de carregamento
    showCountryDetection('loading', 'Detectando sua localização...', '');
    
    // Lista de APIs para tentar em ordem de prioridade
    const apis = [
        {
            url: 'https://ipapi.co/json/',
            parser: (data) => ({
                country: data.country_code,
                isVpn: data.org?.toLowerCase().includes('vpn') || 
                       data.org?.toLowerCase().includes('proxy') ||
                       data.org?.toLowerCase().includes('hosting'),
                city: data.city,
                region: data.region
            })
        },
        {
            url: 'https://ip-api.com/json/',
            parser: (data) => ({
                country: data.countryCode,
                isVpn: data.proxy || data.hosting || data.mobile,
                city: data.city,
                region: data.regionName
            })
        },
        {
            url: 'https://freeipapi.com/api/json/',
            parser: (data) => ({
                country: data.countryCode,
                isVpn: false, // Esta API não detecta VPN
                city: data.cityName,
                region: data.regionName
            })
        },
        {
            url: 'https://country.is/',
            parser: (data) => ({
                country: data.country,
                isVpn: false, // Esta API não detecta VPN
                city: null,
                region: null
            })
        }
    ];

    let detectionResult = null;

    // Tentar cada API até conseguir uma resposta válida
    for (const api of apis) {
        try {
            const response = await fetch(api.url);
            if (response.ok) {
                const data = await response.json();
                const parsed = api.parser(data);
                
                if (parsed.country) {
                    detectionResult = parsed;
                    break;
                }
            }
        } catch (error) {
            console.warn(`Erro na API ${api.url}:`, error);
            continue;
        }
    }
    
    if (detectionResult?.country) {
        const country = findCountryByCode(detectionResult.country);
        if (country) {
            updateDetectedCountry(
                country,
                detectionResult.isVpn,
                detectionResult.city,
                detectionResult.region
            );
            return;
        }
    }
    
    // Se não conseguiu detectar, esconder o indicador
    hideCountryDetection();
}

// Mostrar detecção de país
function showCountryDetection(type, text, details) {
    countryDetection.className = `country-detection ${type}`;
    countryDetection.querySelector('.detection-text').textContent = text;
    countryDetection.querySelector('.detection-details').textContent = details;
    countryDetection.classList.remove('hidden');
}

// Esconder detecção de país
function hideCountryDetection() {
    countryDetection.classList.add('hidden');
}

// Atualizar país detectado
function updateDetectedCountry(country, isVpn = false, city = '', region = '') {
    detectedCountry = country;
    selectedCountry = country;
    
    // Atualizar seletor
    countrySelect.value = country.code;
    updateCountryDisplay();
    
    // Mostrar informação de detecção
    let displayText = `${country.flag} ${country.name}`;
    if (isVpn) {
        displayText += ' (VPN/Proxy detectado)';
    }
    
    const locationText = [city, region].filter(Boolean).join(', ');
    
    showCountryDetection(
        isVpn ? 'vpn-detected' : 'detected',
        displayText,
        locationText
    );
}
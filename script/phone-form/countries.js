// Lista de países com códigos e formatos de telefone
const countries = [
    { 
        code: 'BR', 
        name: 'Brasil', 
        dialCode: '+55', 
        flag: '🇧🇷', 
        maxLength: 11, 
        format: '(XX) XXXXX-XXXX',
        pattern: /^(\d{2})(\d{4,5})(\d{4})$/
    },
    { 
        code: 'US', 
        name: 'Estados Unidos', 
        dialCode: '+1', 
        flag: '🇺🇸', 
        maxLength: 10, 
        format: '(XXX) XXX-XXXX',
        pattern: /^(\d{3})(\d{3})(\d{4})$/
    },
    { 
        code: 'AR', 
        name: 'Argentina', 
        dialCode: '+54', 
        flag: '🇦🇷', 
        maxLength: 10, 
        format: '(XX) XXXX-XXXX',
        pattern: /^(\d{2})(\d{4})(\d{4})$/
    },
    { 
        code: 'MX', 
        name: 'México', 
        dialCode: '+52', 
        flag: '🇲🇽', 
        maxLength: 10, 
        format: '(XXX) XXX-XXXX',
        pattern: /^(\d{3})(\d{3})(\d{4})$/
    },
    { 
        code: 'CO', 
        name: 'Colômbia', 
        dialCode: '+57', 
        flag: '🇨🇴', 
        maxLength: 10, 
        format: '(XXX) XXX-XXXX',
        pattern: /^(\d{3})(\d{3})(\d{4})$/
    },
    { 
        code: 'CL', 
        name: 'Chile', 
        dialCode: '+56', 
        flag: '🇨🇱', 
        maxLength: 9, 
        format: 'X XXXX XXXX',
        pattern: /^(\d{1})(\d{4})(\d{4})$/
    },
    { 
        code: 'PE', 
        name: 'Peru', 
        dialCode: '+51', 
        flag: '🇵🇪', 
        maxLength: 9, 
        format: 'XXX XXX XXX',
        pattern: /^(\d{3})(\d{3})(\d{3})$/
    },
    { 
        code: 'UY', 
        name: 'Uruguai', 
        dialCode: '+598', 
        flag: '🇺🇾', 
        maxLength: 8, 
        format: 'XXXX XXXX',
        pattern: /^(\d{4})(\d{4})$/
    },
    { 
        code: 'PY', 
        name: 'Paraguai', 
        dialCode: '+595', 
        flag: '🇵🇾', 
        maxLength: 9, 
        format: 'XXX XXX XXX',
        pattern: /^(\d{3})(\d{3})(\d{3})$/
    },
    { 
        code: 'BO', 
        name: 'Bolívia', 
        dialCode: '+591', 
        flag: '🇧🇴', 
        maxLength: 8, 
        format: 'XXXX XXXX',
        pattern: /^(\d{4})(\d{4})$/
    },
    { 
        code: 'EC', 
        name: 'Equador', 
        dialCode: '+593', 
        flag: '🇪🇨', 
        maxLength: 9, 
        format: 'XX XXX XXXX',
        pattern: /^(\d{2})(\d{3})(\d{4})$/
    },
    { 
        code: 'VE', 
        name: 'Venezuela', 
        dialCode: '+58', 
        flag: '🇻🇪', 
        maxLength: 10, 
        format: '(XXX) XXX-XXXX',
        pattern: /^(\d{3})(\d{3})(\d{4})$/
    },
    { 
        code: 'PT', 
        name: 'Portugal', 
        dialCode: '+351', 
        flag: '🇵🇹', 
        maxLength: 9, 
        format: 'XXX XXX XXX',
        pattern: /^(\d{3})(\d{3})(\d{3})$/
    },
    { 
        code: 'ES', 
        name: 'Espanha', 
        dialCode: '+34', 
        flag: '🇪🇸', 
        maxLength: 9, 
        format: 'XXX XXX XXX',
        pattern: /^(\d{3})(\d{3})(\d{3})$/
    },
    { 
        code: 'FR', 
        name: 'França', 
        dialCode: '+33', 
        flag: '🇫🇷', 
        maxLength: 10, 
        format: 'XX XX XX XX XX',
        pattern: /^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/
    },
    { 
        code: 'IT', 
        name: 'Itália', 
        dialCode: '+39', 
        flag: '🇮🇹', 
        maxLength: 10, 
        format: 'XXX XXX XXXX',
        pattern: /^(\d{3})(\d{3})(\d{4})$/
    },
    { 
        code: 'DE', 
        name: 'Alemanha', 
        dialCode: '+49', 
        flag: '🇩🇪', 
        maxLength: 11, 
        format: 'XXX XXXX XXXX',
        pattern: /^(\d{3})(\d{4})(\d{4})$/
    },
    { 
        code: 'GB', 
        name: 'Reino Unido', 
        dialCode: '+44', 
        flag: '🇬🇧', 
        maxLength: 10, 
        format: 'XXXX XXX XXX',
        pattern: /^(\d{4})(\d{3})(\d{3})$/
    },
    { 
        code: 'CA', 
        name: 'Canadá', 
        dialCode: '+1', 
        flag: '🇨🇦', 
        maxLength: 10, 
        format: '(XXX) XXX-XXXX',
        pattern: /^(\d{3})(\d{3})(\d{4})$/
    },
    { 
        code: 'AU', 
        name: 'Austrália', 
        dialCode: '+61', 
        flag: '🇦🇺', 
        maxLength: 9, 
        format: 'XXX XXX XXX',
        pattern: /^(\d{3})(\d{3})(\d{3})$/
    },
    { 
        code: 'JP', 
        name: 'Japão', 
        dialCode: '+81', 
        flag: '🇯🇵', 
        maxLength: 11, 
        format: 'XXX-XXXX-XXXX',
        pattern: /^(\d{3})(\d{4})(\d{4})$/
    },
    { 
        code: 'CN', 
        name: 'China', 
        dialCode: '+86', 
        flag: '🇨🇳', 
        maxLength: 11, 
        format: 'XXX XXXX XXXX',
        pattern: /^(\d{3})(\d{4})(\d{4})$/
    },
    { 
        code: 'IN', 
        name: 'Índia', 
        dialCode: '+91', 
        flag: '🇮🇳', 
        maxLength: 10, 
        format: 'XXXXX XXXXX',
        pattern: /^(\d{5})(\d{5})$/
    },
    { 
        code: 'RU', 
        name: 'Rússia', 
        dialCode: '+7', 
        flag: '🇷🇺', 
        maxLength: 10, 
        format: 'XXX XXX-XX-XX',
        pattern: /^(\d{3})(\d{3})(\d{2})(\d{2})$/
    }
];

// Função para encontrar país por código
function findCountryByCode(code) {
    return countries.find(country => country.code === code);
    
}




// Função para obter país padrão (Brasil)
function getDefaultCountry() {
    return findCountryByCode('BR');
}
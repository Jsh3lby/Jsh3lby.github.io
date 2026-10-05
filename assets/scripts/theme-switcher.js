/**
 * CONTROLADOR DE TEMAS CLARO/OSCURO
 * Versión 4.1 - Funcionamiento garantizado
 */

// Esperamos a que tanto el DOM como todos los scripts estén cargados
window.addEventListener('load', function() {
    console.log('🎨 Theme Switcher v4.1 iniciando...');
    
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const THEME_LABELS = {
        es: {
            toLight: 'Cambiar a tema claro',
            toDark: 'Cambiar a tema oscuro'
        },
        en: {
            toLight: 'Switch to light theme',
            toDark: 'Switch to dark theme'
        },
        fr: {
            toLight: 'Passer au theme clair',
            toDark: 'Passer au theme sombre'
        }
    };
    
    if (!themeToggle) {
        console.error('❌ Botón theme-toggle no encontrado');
        return;
    }
    
    console.log('✅ Botón theme-toggle encontrado');

    function getCurrentLanguage() {
        const storedLanguage = localStorage.getItem('portfolio-language');
        const lang = (storedLanguage || html.getAttribute('lang') || 'es').toLowerCase().split('-')[0];
        return THEME_LABELS[lang] ? lang : 'es';
    }

    function updateThemeAriaLabel(theme) {
        const language = getCurrentLanguage();
        const labels = THEME_LABELS[language] || THEME_LABELS.es;
        const ariaLabel = theme === 'dark' ? labels.toLight : labels.toDark;
        themeToggle.setAttribute('aria-label', ariaLabel);
    }
    
    // Función para aplicar tema
    function setTheme(theme) {
        console.log(`🔧 Aplicando tema: ${theme}`);
        
        try {
            // 1. Establecer atributo data-theme
            html.setAttribute('data-theme', theme);
            
            // 2. Actualizar iconos SVG del botón
            const moonIcon = themeToggle.querySelector('.moon-icon');
            const sunIcon = themeToggle.querySelector('.sun-icon');
            
            if (moonIcon && sunIcon) {
                if (theme === 'dark') {
                    // Tema oscuro = mostrar sol (para cambiar a claro)
                    moonIcon.style.display = 'none';
                    sunIcon.style.display = 'block';
                } else {
                    // Tema claro = mostrar luna (para cambiar a oscuro)
                    moonIcon.style.display = 'block';
                    sunIcon.style.display = 'none';
                }
            }

            updateThemeAriaLabel(theme);
            
            // 3. Guardar en localStorage
            localStorage.setItem('portfolio-theme', theme);
            
            // Mantener el aspecto centralizado en CSS para que todas las páginas
            // respondan igual al cambiar de tema.
            const themeColor = theme === 'dark' ? '#10110f' : '#f4f4f0';
            const themeMeta = document.querySelector('meta[name="theme-color"]');
            if (themeMeta) {
                themeMeta.setAttribute('content', themeColor);
            }
            
            console.log(`✅ Tema ${theme} aplicado correctamente`);
        } catch (error) {
            console.error('❌ Error aplicando tema:', error);
        }
    }
    
    // Event listener para el botón
    function handleThemeToggle(event) {
        event.preventDefault();
        console.log('🖱️ Click en botón de tema detectado');
        
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        console.log(`🔄 Cambiando de ${currentTheme} a ${newTheme}`);
        
        // Añadir clase de animación
        themeToggle.classList.add('switching');
        
        // Aplicar el nuevo tema después de un pequeño delay para la animación
        setTimeout(() => {
            setTheme(newTheme);
            // Remover la clase de animación después de que termine
            setTimeout(() => {
                themeToggle.classList.remove('switching');
            }, 400);
        }, 50);
    }
    
    // Remover cualquier listener previo y agregar el nuevo
    themeToggle.removeEventListener('click', handleThemeToggle);
    themeToggle.addEventListener('click', handleThemeToggle);
    
    // Cargar tema inicial
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    console.log(`📂 Cargando tema guardado: ${savedTheme}`);
    setTheme(savedTheme);

    window.addEventListener('portfolio:language-changed', () => {
        const currentTheme = html.getAttribute('data-theme') || 'dark';
        updateThemeAriaLabel(currentTheme);
    });
    
    console.log('🚀 Theme Switcher v4.1 listo y funcionando!');
});
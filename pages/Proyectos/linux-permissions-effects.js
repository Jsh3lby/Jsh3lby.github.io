// Linux Permissions Effects Script

document.addEventListener('DOMContentLoaded', function() {
    console.log('Linux Permissions Effects initialized');

    // Initialize all effects
    initScrollAnimations();
    initSmoothScrolling();
    initCopyButtons();
    initTabSwitching();
    initDemoControls();
    initTerminalEffects();
    initProgressiveLoad();
    
    // Add hover effects for stats
    initStatsAnimations();
});

// ========================================
// Scroll Animations
// ========================================

function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => observer.observe(el));
}

// ========================================
// Smooth Scrolling
// ========================================

function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// Copy to Clipboard
// ========================================

function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const codeBlock = button.closest('.code-content').querySelector('pre code');
            const text = codeBlock.textContent;
            
            try {
                await navigator.clipboard.writeText(text);
                showCopyFeedback(button, 'Copiado!');
            } catch (err) {
                console.error('Error al copiar:', err);
                showCopyFeedback(button, 'Error');
            }
        });
    });
}

function showCopyFeedback(button, message) {
    const originalText = button.textContent;
    button.textContent = message;
    button.style.background = message === 'Copiado!' ? '#10b981' : '#ef4444';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// ========================================
// Tab Switching System
// ========================================

function initTabSwitching() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.code-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.style.display = 'none';
                content.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.getElementById(`${targetTab}-code`);
            if (targetContent) {
                targetContent.style.display = 'block';
                targetContent.classList.add('active');
                animateCodeBlock(targetContent);
            }
        });
    });
    
    // Initialize first tab as active
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
}

function animateCodeBlock(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        element.style.transition = 'all 0.3s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 50);
}

// ========================================
// Demo Controls
// ========================================

function initDemoControls() {
    const demoButtons = document.querySelectorAll('.demo-btn');
    const demoOutput = document.querySelector('.terminal-content');
    
    // Demo scenarios for Linux permissions
    const demos = {
        audit: {
            title: 'Auditoría de Permisos',
            steps: [
                '$ ./audit_permissions.sh /home/usuario/proyectos',
                'Iniciando auditoría de permisos del sistema...',
                '',
                '� Analizando permisos de archivos y directorios:',
                '✓ Escaneando /home/usuario/proyectos',
                '✓ Verificando permisos críticos',
                '✓ Detectando vulnerabilidades de seguridad',
                '✓ Generando estadísticas',
                '',
                '🚨 PROBLEMAS CRÍTICOS DETECTADOS:',
                '• documento_secreto.txt - Permisos 777 (¡CRÍTICO!)',
                '• configuracion.conf - Legible por todos los usuarios',
                '• script_privado.sh - Ejecutable por otros usuarios',
                '• datos_sensibles/ - Directorio con permisos 755',
                '',
                '⚠️  PROBLEMAS MENORES:',
                '• backup.log - Permisos 666 (escritura mundial)',
                '• temp_file.tmp - Sin propietario definido',
                '',
                '📊 RESUMEN DE AUDITORÍA:',
                '• Total de archivos analizados: 3,247',
                '• Problemas críticos: 4',
                '• Problemas menores: 12',
                '• Archivos seguros: 3,231',
                '• Score de seguridad: 72/100',
                '',
                '✅ Auditoría completada en 2.3 segundos',
                '📋 Reporte detallado: audit_report_20250714.html'
            ]
        },
        fix: {
            title: 'Corrección Automática',
            steps: [
                '$ ./fix_permissions.sh /home/usuario/proyectos',
                'Iniciando corrección automática de permisos...',
                '',
                '💾 CREANDO RESPALDO DE SEGURIDAD:',
                '✓ Respaldo guardado en backups/permissions_backup_20250714.txt',
                '',
                '🔧 APLICANDO CORRECCIONES AUTOMÁTICAS:',
                '',
                '1. Corrigiendo documento_secreto.txt',
                '   Antes: 777 (rwxrwxrwx) - ¡CRÍTICO!',
                '   Después: 600 (rw-------) - Solo propietario',
                '   ✅ APLICADO',
                '',
                '2. Asegurando configuracion.conf',
                '   Antes: 644 (rw-r--r--) - Legible por todos',
                '   Después: 640 (rw-r-----) - Solo grupo autorizado',
                '   ✅ APLICADO',
                '',
                '3. Protegiendo script_privado.sh',
                '   Antes: 755 (rwxr-xr-x) - Ejecutable por todos',
                '   Después: 750 (rwxr-x---) - Solo grupo autorizado',
                '   ✅ APLICADO',
                '',
                '4. Asegurando directorio datos_sensibles/',
                '   Antes: 755 (rwxr-xr-x)',
                '   Después: 750 (rwxr-x---)',
                '   ✅ APLICADO',
                '',
                '🛡️  APLICANDO POLÍTICAS DE SEGURIDAD:',
                '• Configurando umask seguro: 022',
                '• Aplicando políticas por tipo de archivo',
                '• Actualizando ACLs de directorios críticos',
                '',
                '📊 RESUMEN DE CORRECCIONES:',
                '• Archivos corregidos: 4',
                '• Directorios asegurados: 1',
                '• Políticas aplicadas: 8',
                '• Nuevo score de seguridad: 95/100',
                '',
                '✅ ¡Todas las correcciones aplicadas exitosamente!',
                '� Log detallado: fix_permissions_20250714.log'
            ]
        },
        report: {
            title: 'Generación de Reportes',
            steps: [
                '$ ./generate_report.sh /home/usuario/proyectos --format html',
                'Generando reporte de seguridad detallado...',
                '',
                '� RECOPILANDO INFORMACIÓN:',
                '✓ Analizando estructura de directorios',
                '✓ Evaluando permisos actuales',
                '✓ Calculando métricas de seguridad',
                '✓ Generando gráficos estadísticos',
                '',
                '📈 ESTADÍSTICAS GENERALES:',
                '• Total de archivos: 3,247',
                '• Directorios analizados: 142',
                '• Usuarios únicos: 8',
                '• Grupos identificados: 12',
                '',
                '🔒 ANÁLISIS DE SEGURIDAD:',
                '• Archivos con permisos seguros: 98.2%',
                '• Configuraciones críticas protegidas: 100%',
                '• Cumplimiento con ISO 27001: 95%',
                '• Puntuación global: A- (Muy Bueno)',
                '',
                '📄 GENERANDO REPORTES:',
                '✓ Reporte HTML interactivo',
                '✓ Resumen ejecutivo PDF',
                '✓ Datos CSV para análisis',
                '✓ Dashboard JSON para monitoreo',
                '',
                '📁 ARCHIVOS GENERADOS:',
                '• security_report_20250714.html (Reporte principal)',
                '• executive_summary_20250714.pdf (Resumen)',
                '• permissions_data_20250714.csv (Datos brutos)',
                '• dashboard_20250714.json (Métricas)',
                '',
                '� CONFIGURANDO MONITOREO CONTINUO:',
                '✓ Tarea cron configurada para auditorías diarias',
                '✓ Alertas automáticas habilitadas',
                '✓ Dashboard web disponible en localhost:8080',
                '',
                '✅ Reportes generados exitosamente',
                '🌐 Ver reporte: firefox security_report_20250714.html'
            ]
        }
    };
    
    demoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const demoType = button.getAttribute('data-script');
            
            // Update active button
            demoButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Run demo
            if (demos[demoType]) {
                runDemo(demos[demoType], demoOutput);
            }
        });
    });
    
    // Run initial demo
    if (demoButtons.length > 0) {
        demoButtons[0].click();
    }
}

function runDemo(demo, outputElement) {
    outputElement.innerHTML = '';
    let stepIndex = 0;
    
    function showNextStep() {
        if (stepIndex < demo.steps.length) {
            const line = document.createElement('div');
            line.textContent = demo.steps[stepIndex];
            
            // Color coding for different types of output
            if (demo.steps[stepIndex].includes('$')) {
                line.style.color = '#60a5fa'; // Command prompt
            } else if (demo.steps[stepIndex].includes('✓') || demo.steps[stepIndex].includes('✅')) {
                line.style.color = '#10b981'; // Success
            } else if (demo.steps[stepIndex].includes('⚠️') || demo.steps[stepIndex].includes('🚨')) {
                line.style.color = '#f59e0b'; // Warning
            } else if (demo.steps[stepIndex].includes('📁') || demo.steps[stepIndex].includes('📊') || demo.steps[stepIndex].includes('🔧')) {
                line.style.color = '#06b6d4'; // Info
            }
            
            outputElement.appendChild(line);
            outputElement.scrollTop = outputElement.scrollHeight;
            
            stepIndex++;
            
            // Varying delays for realistic terminal simulation
            let delay = 800;
            if (demo.steps[stepIndex - 1] === '') delay = 300;
            if (demo.steps[stepIndex - 1].includes('$')) delay = 1000;
            if (demo.steps[stepIndex - 1].includes('...')) delay = 1500;
            
            setTimeout(showNextStep, delay);
        }
    }
    
    showNextStep();
}

// ========================================
// Terminal Effects
// ========================================

function initTerminalEffects() {
    const terminals = document.querySelectorAll('.terminal-content');
    
    terminals.forEach(terminal => {
        // Add blinking cursor effect
        const cursor = document.createElement('span');
        cursor.textContent = '█';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.color = '#10b981';
        
        // Add CSS for blinking animation
        if (!document.querySelector('#terminal-styles')) {
            const style = document.createElement('style');
            style.id = 'terminal-styles';
            style.textContent = `
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .terminal-content {
                    font-family: 'JetBrains Mono', 'Courier New', monospace;
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// ========================================
// Progressive Loading
// ========================================

function initProgressiveLoad() {
    const cards = document.querySelectorAll('.overview-card, .feature-card, .security-card, .technical-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(card);
    });
}

// ========================================
// Stats Animations
// ========================================

function initStatsAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateNumber(element) {
    const finalNumber = element.textContent;
    const isSpecial = finalNumber.includes('777') || finalNumber.includes('%');
    
    if (isSpecial) {
        // Special animation for 777 and percentages
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }, 300);
    } else {
        // Number counting animation
        const duration = 2000;
        const start = 0;
        const end = parseInt(finalNumber);
        const startTime = Date.now();
        
        function updateNumber() {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(start + (end - start) * progress);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = finalNumber;
            }
        }
        
        updateNumber();
    }
}

// ========================================
// Interactive Code Examples
// ========================================

function addInteractiveCodeFeatures() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        // Add line numbers
        const lines = block.textContent.split('\n');
        const numberedLines = lines.map((line, index) => {
            if (line.trim() === '') return line;
            return `${(index + 1).toString().padStart(2, ' ')} | ${line}`;
        }).join('\n');
        
        // Only apply if not already processed
        if (!block.textContent.includes('|')) {
            block.textContent = numberedLines;
        }
        
    });
}

// ========================================
// Enhanced Hover Effects
// ========================================

function initEnhancedHoverEffects() {
    const cards = document.querySelectorAll('.overview-card, .feature-card, .link-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ========================================
// Keyboard Navigation
// ========================================

function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Tab navigation for demo buttons
        if (e.key === 'Tab') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('demo-btn')) {
                e.preventDefault();
                const buttons = Array.from(document.querySelectorAll('.demo-btn'));
                const currentIndex = buttons.indexOf(activeElement);
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].focus();
            }
        }
        
        // Enter to activate focused demo button
        if (e.key === 'Enter' && document.activeElement.classList.contains('demo-btn')) {
            document.activeElement.click();
        }
        
        // ESC to close any modals or reset focus
        if (e.key === 'Escape') {
            document.body.focus();
        }
    });
}

// ========================================
// Performance Monitoring
// ========================================

function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Performance:', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalLoadTime: perfData.loadEventEnd - perfData.fetchStart
        });
    });
    
    // Monitor animation performance
    let frameCount = 0;
    function countFrames() {
        frameCount++;
        requestAnimationFrame(countFrames);
    }
    requestAnimationFrame(countFrames);
    
    setTimeout(() => {
        const fps = frameCount / 10; // 10 seconds
        console.log(`Average FPS: ${fps.toFixed(2)}`);
    }, 10000);
}

// ========================================
// Error Handling
// ========================================

window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // Graceful degradation - ensure basic functionality works
    if (e.error.message.includes('clipboard')) {
        console.log('Clipboard API not available, falling back to selection');
    }
});

// ========================================
// Accessibility Enhancements
// ========================================

function initAccessibilityEnhancements() {
    // Add ARIA labels to interactive elements
    const buttons = document.querySelectorAll('.demo-btn, .tab-btn, .copy-btn');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent);
        }
    });
    
    // Add role attributes
    const tabLists = document.querySelectorAll('.demo-controls, .code-tabs');
    tabLists.forEach(list => {
        list.setAttribute('role', 'tablist');
    });
    
    // Improve focus visibility
    const style = document.createElement('style');
    style.textContent = `
        .demo-btn:focus,
        .tab-btn:focus,
        .copy-btn:focus {
            outline: 2px solid #3b82f6;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        addInteractiveCodeFeatures();
        initEnhancedHoverEffects();
        initKeyboardNavigation();
        initPerformanceMonitoring();
        initAccessibilityEnhancements();
    }, 1000);
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

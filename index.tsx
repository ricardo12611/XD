/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface RankConfig {
    id: string;
    name: string;
    questionCount: number;
    passMark: number;
    timeThresholds: {
        suspicious: number; // seconds per question for red
        warning: number;    // seconds per question for yellow
    };
    questions: string[];
}

const ranks: Record<string, RankConfig> = {
    helper: {
        id: 'helper',
        name: 'Helper',
        questionCount: 18,
        passMark: 14,
        timeThresholds: { suspicious: 20, warning: 40 }, // <20s/q = red, <40s/q = yellow
        questions: [
            "¿Cuál es tu nombre en el juego y tu tag de Discord?",
            "¿Cuántos años tienes?",
            "¿En qué zona horaria te encuentras?",
            "¿Cuán activo/a puedes ser en el servidor diaria/semanalmente?",
            "¿Por qué quieres convertirte en Helper en Infinix?",
            "¿Qué cualidades posees que te harían un buen Helper?",
            "¿Alguna vez has sido miembro del staff en otro servidor de Minecraft? Si es así, describe tu rol y experiencia.",
            "¿Cuán familiarizado/a estás con los comandos comunes del servidor para moderación (ej. mute, kick, ban)?",
            "Describe una situación en la que tuviste que lidiar con un conflicto entre jugadores. ¿Cómo lo resolviste?",
            "¿Qué harías si vieras a un jugador haciendo spam en el chat?",
            "¿Cuál es tu enfoque para ayudar a los nuevos jugadores que tienen dificultades?",
            "¿Cómo manejas las críticas o comentarios negativos?",
            "¿Estás familiarizado/a con las reglas del servidor Infinix? Por favor, enumera tres importantes.",
            "¿Qué significa 'respeto' para ti en una comunidad en línea?",
            "¿Tienes un micrófono que funcione y te sientes cómodo/a usándolo para chat de voz si es necesario?",
            "¿Cuáles son tus aspectos favoritos del servidor Infinix?",
            "¿Hay algo específico que te gustaría mejorar o a lo que te gustaría contribuir como Helper?",
            "¿Tienes alguna pregunta para nosotros sobre el rol de Helper o el servidor?"
        ]
    },
    staff: {
        id: 'staff',
        name: 'Staff',
        questionCount: 25,
        passMark: 23,
        timeThresholds: { suspicious: 25, warning: 50 },
        questions: [
            "¿Cuál es tu nombre en el juego y tu tag de Discord?",
            "¿Cuántos años tienes y cuál es tu zona horaria?",
            "Detalla tu disponibilidad diaria/semanal para tareas de staff.",
            "¿Por qué estás aplicando para una posición de Staff específicamente, más allá de Helper?",
            "Describe tu estilo de liderazgo y cómo se aplica a la moderación del servidor.",
            "¿Cuáles son tus metas a largo plazo si te conviertes en miembro del Staff en Infinix?",
            "Proporciona ejemplos de tu experiencia previa en moderación, incluyendo nombres de servidores y roles.",
            "¿Cómo diferencias entre una infracción menor de las reglas y una mayor? Da ejemplos.",
            "Imagina que un jugador está explotando un bug repetidamente. Describe tu respuesta paso a paso.",
            "¿Cómo manejarías una situación en la que un jugador acusa a otro miembro del staff de abuso?",
            "¿Qué métodos utilizas para mantener la calma e imparcialidad al tratar con jugadores frustrados o enojados?",
            "Describe tu comprensión de los plugins de servidor comúnmente utilizados para moderación y administración.",
            "¿Cómo contribuirías al entrenamiento o mentoría de nuevos miembros del staff de rango Helper?",
            "¿Cuál es tu estrategia para identificar y tratar con tramposos o hackers?",
            "¿Cómo equilibras la aplicación estricta de las reglas con el mantenimiento de una atmósfera de servidor divertida y acogedora?",
            "¿Qué piensas sobre la participación comunitaria y cómo el staff puede fomentarla?",
            "Describe un problema complejo que hayas resuelto en un equipo o entorno de servidor anterior.",
            "¿Cómo te mantienes actualizado/a sobre nuevas actualizaciones de Minecraft, cambios en el servidor y posibles exploits?",
            "¿Eres competente en el uso de herramientas como Discord para la comunicación y coordinación del equipo?",
            "¿Cómo mediarías una disputa entre dos grupos de jugadores por recursos o territorio?",
            "¿Qué significa 'profesionalismo' en el contexto de ser un miembro del Staff del servidor?",
            "¿Cuáles son tus fortalezas y debilidades en cuanto a tareas de moderación?",
            "¿Cómo manejas información confidencial o datos sensibles de los jugadores?",
            "¿Qué iniciativas propondrías para mejorar la experiencia del jugador en Infinix?",
            "¿Hay algo más que te gustaría que supiéramos o alguna pregunta que tengas?"
        ]
    },
    admin: {
        id: 'admin',
        name: 'Admin',
        questionCount: 30,
        passMark: 30,
        timeThresholds: { suspicious: 30, warning: 60 },
        questions: [
            "Proporciona tu nombre completo en el juego, Tag de Discord, edad y zona horaria principal.",
            "Describe tus horas activas esperadas para tareas administrativas, considerando diferentes zonas horarias.",
            "¿Por qué aspiras a un rol de Admin? ¿Qué contribuciones únicas imaginas hacer?",
            "Describe tu filosofía sobre la gestión del servidor y el liderazgo comunitario.",
            "Detalla tu experiencia con la gestión del backend del servidor, configuración de plugins y comandos de consola.",
            "¿Has gestionado finanzas de servidor, donaciones o configuraciones de tiendas en línea antes? Explica.",
            "Describe tu proceso para investigar y resolver mala conducta o corrupción de alto nivel en el staff.",
            "¿Cómo manejarías una crisis mayor del servidor, como una brecha de datos, ataque DDoS o exploit crítico?",
            "Describe tu enfoque para el desarrollo estratégico del servidor, incluyendo la implementación de características y actualizaciones.",
            "¿Cómo planeas reclutar, entrenar y gestionar eficazmente a todo el equipo de staff?",
            "¿Qué métricas usarías para medir la salud del servidor, la satisfacción de los jugadores y el rendimiento del staff?",
            "Explica tu comprensión de las técnicas de optimización del rendimiento del servidor y reducción de lag.",
            "¿Cómo manejarías conflictos o desacuerdos dentro del propio equipo Admin?",
            "Describe tu experiencia con la divulgación comunitaria, asociaciones o promoción del servidor.",
            "¿Cuál es tu política sobre la transparencia con la comunidad respecto a decisiones y cambios del servidor?",
            "¿Cómo aseguras la equidad y consistencia en la aplicación de reglas en todos los niveles de jugadores y staff?",
            "¿Cuáles son tus opiniones sobre el manejo de apelaciones para castigos severos como baneos permanentes?",
            "Describe una vez que tuviste que tomar una decisión difícil que fue impopular pero necesaria para una comunidad/servidor.",
            "¿Cuán competente eres con los registros del servidor, análisis de datos e identificación de patrones de abuso o exploits?",
            "¿Cuál es tu visión para el futuro a largo plazo y el crecimiento del servidor Infinix?",
            "¿Cómo te mantienes actualizado/a con el EULA de Minecraft y el cumplimiento legal para servidores?",
            "Describe tu proceso para desarrollar y actualizar reglas y políticas del servidor.",
            "¿Cómo fomentarías una cultura positiva y colaborativa entre el equipo de staff?",
            "¿Qué estrategias emplearías para gestionar y hacer crecer sosteniblemente los recursos financieros del servidor?",
            "¿Cómo abordas los comentarios de los jugadores, tanto positivos como negativos, a nivel administrativo?",
            "Detalla tu experiencia con la planificación y ejecución de eventos para una gran base de jugadores.",
            "¿Cuáles son tus principios fundamentales cuando se trata de delegar tareas y responsabilidades?",
            "¿Cómo manejas el agotamiento dentro del equipo de staff, incluido el tuyo?",
            "Discute tu comprensión de la propiedad intelectual y la creación de contenido relacionada con un servidor de Minecraft.",
            "¿Cuál es la cualidad más importante que debe poseer un Admin y por qué? ¿Tienes alguna pregunta final?"
        ]
    }
};

let currentTimerInterval: number | null = null;
let currentTimerSeconds: number = 0;
let currentRankId: string | null = null;
let applicationStartTime: number = 0;

const appContainer = document.getElementById('app-container') as HTMLElement;
const allSections = document.querySelectorAll<HTMLElement>('.page-section');

function navigateTo(targetId: string) {
    let targetSection: HTMLElement | null = null;

    allSections.forEach(section => {
        if (section.id === targetId) {
            targetSection = section;
        } else if (section.classList.contains('active')) {
            section.classList.add('exiting');
            section.classList.remove('active');
            setTimeout(() => {
                section.classList.remove('exiting');
                section.style.visibility = 'hidden';
                section.style.position = 'absolute';
            }, parseFloat(getComputedStyle(section).transitionDuration) * 1000);
        } else {
             section.style.visibility = 'hidden';
             section.style.position = 'absolute';
        }
    });

    if (targetSection) {
        targetSection.style.visibility = 'hidden';
        targetSection.style.transform = 'translateX(100%)';
        targetSection.style.opacity = '0';
        targetSection.style.position = 'relative';

        setTimeout(() => {
            targetSection!.style.visibility = 'visible';
            targetSection!.classList.add('active');
            targetSection!.style.transform = 'translateX(0)';
            targetSection!.style.opacity = '1';
        }, 50);

        window.location.hash = targetId.replace('-section', '');

        if (targetId.endsWith('-apply-section')) {
            const rankId = targetId.replace('-apply-section', '');
            if (ranks[rankId]) {
                currentRankId = rankId;
                initializeApplySection(ranks[rankId]);
            }
        } else {
            stopTimer();
        }
    } else {
        console.warn(`Sección objetivo ${targetId} no encontrada. Navegando a inicio.`);
        navigateTo('home-section');
    }
}


function initializeApplySection(rankConfig: RankConfig) {
    const form = document.getElementById(`${rankConfig.id}-form`) as HTMLFormElement;
    const questionList = form.querySelector('.question-list');
    const timerDisplay = document.getElementById(`${rankConfig.id}-timer`) as HTMLElement;

    if (!form || !questionList || !timerDisplay) return;

    questionList.innerHTML = '';
    rankConfig.questions.forEach((q, index) => {
        const qId = `${rankConfig.id}-q-${index}`;
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.htmlFor = qId;
        label.textContent = `Pregunta ${index + 1}: ${q}`;
        
        const textarea = document.createElement('textarea');
        textarea.id = qId;
        textarea.name = qId;
        textarea.rows = 3;
        textarea.required = true;
        
        formGroup.appendChild(label);
        formGroup.appendChild(textarea);
        questionList.appendChild(formGroup);
    });
    
    (form.querySelector(`input[name="applicantName"]`) as HTMLInputElement).value = '';
    startTimer(timerDisplay);
}

function startTimer(timerDisplay: HTMLElement) {
    stopTimer();
    currentTimerSeconds = 0;
    applicationStartTime = Date.now();
    timerDisplay.textContent = formatTime(currentTimerSeconds);
    currentTimerInterval = window.setInterval(() => {
        currentTimerSeconds = Math.floor((Date.now() - applicationStartTime) / 1000);
        timerDisplay.textContent = formatTime(currentTimerSeconds);
    }, 1000);
}

function stopTimer() {
    if (currentTimerInterval !== null) {
        clearInterval(currentTimerInterval);
        currentTimerInterval = null;
    }
}

function formatTime(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function getSuspicionLevel(rankConfig: RankConfig, totalSeconds: number): { color: string, text: string, emoji: string } {
    const secondsPerQuestion = totalSeconds / rankConfig.questionCount;
    if (secondsPerQuestion < rankConfig.timeThresholds.suspicious) {
        return { color: 'red', text: 'Sospechoso (Muy Rápido)', emoji: '🔴' };
    } else if (secondsPerQuestion < rankConfig.timeThresholds.warning) {
        return { color: 'yellow', text: 'Algo Sospechoso (Rápido)', emoji: '🟡' };
    }
    return { color: 'blue', text: 'No Sospechoso', emoji: '🔵' };
}

function handleFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    stopTimer();

    const form = event.target as HTMLFormElement;
    const rankId = form.id.replace('-form', '');
    if (!currentRankId || currentRankId !== rankId || !ranks[rankId]) {
        console.error("Discrepancia de ID de rango o no encontrado durante el envío.");
        return;
    }

    const rankConfig = ranks[rankId];
    const formData = new FormData(form);
    const answers: { question: string, answer: string }[] = [];
    const applicantName = formData.get('applicantName') as string || 'No especificado';

    rankConfig.questions.forEach((qText, index) => {
        const answer = formData.get(`${rankId}-q-${index}`) as string;
        answers.push({ question: qText, answer: answer || 'Sin respuesta' });
    });

    const timeTakenFormatted = formatTime(currentTimerSeconds);
    const suspicion = getSuspicionLevel(rankConfig, currentTimerSeconds);

    // Actualizar sección de resultado de envío
    const applyIdDisplay = document.getElementById('apply-id-value') as HTMLElement;
    const applySuspicionIndicator = document.getElementById('apply-suspicion-indicator') as HTMLElement;
    const emailLink = document.getElementById('email-link') as HTMLAnchorElement;
    const submissionDetailsDiv = document.getElementById('submission-details') as HTMLElement;


    if (applyIdDisplay) applyIdDisplay.textContent = timeTakenFormatted;
    if (applySuspicionIndicator) {
        applySuspicionIndicator.textContent = suspicion.emoji;
        // Limpiar clases anteriores y añadir la nueva para el color del emoji si se usa CSS
        applySuspicionIndicator.className = ''; // Limpia clases previas del emoji en sí
        applySuspicionIndicator.classList.add(suspicion.color); // Añade clase de color: red, yellow, blue
    }
    
    if (submissionDetailsDiv) {
         submissionDetailsDiv.className = `submission-id-display suspicion-${suspicion.color}`;
    }


    const mailtoEmail = 'ricardo12@edumail.edu.pl';
    const subject = `Solicitud Infinix - ${rankConfig.name} - ${applicantName}`;
    let body = `Rango Solicitado: ${rankConfig.name}\n`;
    body += `Nombre del Solicitante: ${applicantName}\n`;
    body += `Tiempo Tomado: ${timeTakenFormatted} (Sospecha: ${suspicion.text} ${suspicion.emoji})\n`;
    body += `Puntuación Mínima Requerida: ${rankConfig.passMark}/${rankConfig.questionCount}\n\n`;
    body += `RESPUESTAS:\n`;
    answers.forEach((item, index) => {
        body += `------------------------------------\n`;
        body += `P${index + 1}: ${item.question}\n`;
        body += `Respuesta: ${item.answer}\n`;
    });
    body += `------------------------------------\n`;

    emailLink.href = `mailto:${mailtoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    navigateTo('submission-result-section');
    currentRankId = null; // Reiniciar rango actual
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll<HTMLButtonElement>('.nav-button, .back-button, .back-to-home-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            if (targetId) {
                navigateTo(targetId);
            }
        });
    });

    document.querySelectorAll<HTMLFormElement>('.apply-form').forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
    
    const initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash + '-section')) {
        navigateTo(initialHash + '-section');
    } else {
        navigateTo('home-section');
    }
});

window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash + '-section')) {
        navigateTo(hash + '-section');
    } else if (!hash) {
        navigateTo('home-section');
    }
});
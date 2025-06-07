document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menü Funktionalität
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); // Schaltet die 'hidden'-Klasse um
        });
    }

    // Formularvalidierung für die Kontaktseite
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Verhindert das Standard-Absenden des Formulars

            let isValid = true;

            // Name Validierung
            const nameInput = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameError.classList.remove('hidden');
                nameInput.classList.add('border-red-500'); // Roten Rand hinzufügen
                isValid = false;
            } else {
                nameError.classList.add('hidden');
                nameInput.classList.remove('border-red-500'); // Roten Rand entfernen
            }

            // E-Mail Validierung
            const emailInput = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            // Einfache E-Mail-Regex (nicht perfekt, aber ausreichend für Frontend-Validierung)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                emailInput.classList.add('border-red-500');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
                emailInput.classList.remove('border-red-500');
            }

            // Nachricht Validierung
            const messageInput = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (messageInput.value.trim() === '') {
                messageError.classList.remove('hidden');
                messageInput.classList.add('border-red-500');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
                messageInput.classList.remove('border-red-500');
            }

            if (isValid) {
                // Wenn alle Felder gültig sind:
                // Hier würden normalerweise die Daten an ein Backend gesendet werden (z.B. mit fetch API)
                alert('Nachricht erfolgreich gesendet! (Dies ist eine Frontend-Vorschau)');
                contactForm.reset(); // Formular zurücksetzen
                // Du könntest hier auch eine Erfolgsmeldung im HTML anzeigen
            } else {
                alert('Bitte fülle alle Pflichtfelder korrekt aus.');
            }
        });
    }
});
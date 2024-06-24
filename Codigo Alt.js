function generateCode() {
            return Math.floor(1000 + Math.random() * 9000);
        }

        window.onload = function() {
            const codeElement = document.getElementById('codigo');
            codeElement.textContent = generateCode();
        };
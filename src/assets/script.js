function formValidation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailRegex = /^[_A-Za-z0-9-]+(?:\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*(?:\.[A-Za-z]{2,})$/gm;
    
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (name.length < 3 || name.length > 50) {
        alert("Por favor, insira um nome contendo entre 3 e 50 caracteres.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    if (message.length < 5) {
        alert("Por favor, insira uma mensagem com pelo menos 5 caracteres.");
        return false;
    }

    return true;
}   

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (formValidation()) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        let formSubmit = false;

        if (name !== "" && email !== "" && message !== "") {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("message", message);
            formSubmit = true;

            console.log(`Dados do formulário:`);
            console.log(`Nome: ${name}`);
            console.log(`E-mail: ${email}`);
            console.log(`Mensagem: ${message}`);

            document.getElementById("form-submit").style.display = "block";
            document.getElementById("contactForm").style.display = "none";
            document.getElementsByTagName("h1")[0].style.display = "none";

            setTimeout(() => {
                document.getElementById("form-submit").style.display = "none";
                document.getElementById("contactForm").style.display = "flex";
                document.getElementsByTagName("h1")[0].style.display = "block";
            }, 3000);
        }
        if (formSubmit) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
    } 
});


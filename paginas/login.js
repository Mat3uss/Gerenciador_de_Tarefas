const button = document.getElementById('login');

async function validarLogin(){
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(nome === '' || senha === ''){
        alert('Preencha os Campos Corretamente.')

    }else{
        const user = await fetch('https:localhost:8080/usuarios')
        const ListUsers = await users.json()

        ListUsers.forEach((user) => {

            if(nome === user.email && senha === user.senha){
                alert('Usuario Logado com Sucesso')
            }

        })


        
        
    }
}

Window.onload = () => {
    button.addEventListener('click', validarLogin)


    // colocar no html o bagui q chama o js!!!!!!!
}
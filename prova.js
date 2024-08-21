// Definição do array para armazenar os usuários
let usuarios = [];

// Função para adicionar novos usuários ao array
function adicionarUsuario(nome, idade, email) {
    // Verificação se todos os campos estão preenchidos
    if (!nome || !idade || !email) {
        console.log("Erro: Todos os campos devem ser preenchidos.");
        return;
    }
    // Verificação se a idade é maior que 0
    if (idade <= 0) {
        console.log("Erro: A idade deve ser maior que 0.");
        return;
    }
    // Criação do objeto usuário
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    // Adição do usuário ao array
    usuarios.push(usuario);
    console.log("Usuário adicionado com sucesso!");
}

// Função para listar todos os usuários cadastrados
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
    console.log("Usuários cadastrados:");
    usuarios.forEach(usuario => {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}

// Exemplos de uso
adicionarUsuario("João", 25, "joao@example.com");
adicionarUsuario("Maria", 30, "maria@example.com");
listarUsuarios();

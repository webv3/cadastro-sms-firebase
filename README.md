# Cadastro de usuario no firebase com e-mail / senha e confirmação de celular do usuario por SMS
# Configuração
- Criar uma tabela chamada "users" no firebase
- Habilitar SMS e Email no fire base em:
    - Authentication > Metodo de login > E-mail/senha
    - Authentication > Metodo de login > Spartphone
- Adicionar o Firebase SDK snippet (configurações) do aplicativo criado no Firebase ao seu projeto
    - src/app/enviroments/enviroment.ts
    - src/app/enviroments/enviroment.prod.ts

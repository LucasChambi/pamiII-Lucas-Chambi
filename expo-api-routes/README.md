
### **Estrutura do Projeto**

1.  **Refatorar Estrutura de Arquivos:**
    
    -   Remova a pasta `App` e a pasta `Fonts` dentro de `assets`, pois não serão utilizadas.
        
    -   Crie a pasta `src` na raiz do projeto. Dentro dela, crie a pasta `app`.
        
    -   Dentro de `src/app`, crie os arquivos `index.tsx` (para a parte visual/frontend) e `usuario+api.ts` (para a lógica do backend).
        

### **Desenvolvimento do Backend**

2.  **Configuração da API:**
    
    -   No backend, configure um endpoint para verificar se o servidor está funcionando. O endpoint `http://localhost:8081/usuario/` deve retornar uma mensagem confirmando que o servidor está online.
        
    -   Entenda a diferença entre as requisições:
        
        -   **`POST`**: Usado para **enviar dados** ao servidor (ex: dados de login, formulários).
            
        -   **`GET`**: Usado para **coletar dados** do servidor.
            

### **Testes e Login**

3.  **Testes de API:**
    
    -   Instale a extensão **Thunder Client** no VS Code. Isso permitirá que você teste suas requisições de API de forma fácil e rápida.
        
4.  **Lógica de Autenticação:**
    
    -   Crie a lógica de login no backend. O sistema deve aceitar as seguintes credenciais:
        
        -   **Email:** `admin@email.com`
            
        -   **Senha:** `1234`
            
    -   Implemente uma **condição de erro** para lidar com credenciais incorretas, retornando uma mensagem clara ao usuário.
        

### **Conexão Frontend-Backend**

5.  **Configuração da Conexão (Axios):**
    
    -   Crie uma pasta chamada `server` na raiz do seu projeto.
        
    -   Dentro dela, crie o arquivo `api.ts`.
        
    -   Configure o **Axios** para se conectar ao servidor. Defina a URL base da sua API: `http://localhost:8081/`. O Axios será responsável por todas as requisições HTTP do frontend.
        
6.  **Integração do Frontend:**
    
    -   No frontend, concentre-se na parte visual. Crie os **campos de input** (email e senha) para o usuário.
        
    -   Implemente a função `handleSignIn`, que será responsável por coletar os dados dos inputs e enviá-los para o backend usando a lógica configurada no passo 5.

    **OBS: Projeto em desenvolvimento...**
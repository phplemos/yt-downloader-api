# 📥 YouTube Downloader

Um sistema backend para permitir o download de vídeos do YouTube, fornecendo ao usuário opções de qualidade e formato.

## 🚀 **Funcionalidades**

- ✅ Validação de links do YouTube.
- ✅ Obtenção de informações do vídeo (título, miniatura, qualidades disponíveis).
- ✅ Geração de links temporários para download.
- ✅ Suporte a formatos de vídeo e áudio.

---

## ⚙️ **Tecnologias Utilizadas**

- **Node.js**
- **Express.js**
- **YTDL**
- **Dotenv**

---

## 📚 **Instalação e Configuração**

### **Pré-requisitos:**
- Node.js (v14 ou superior)
- npm ou yarn

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/phplemos/yt-downloader-api.git
   cd yt-downloader-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` com as seguintes variáveis:
   ```env
   PORT=3000
   ```

4. **Execute o servidor:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   ``` 
   http://localhost:3000 
   ```
---

## 🔀 **Estrutura de Branches (GitFlow)**

- **main:** Produção.
- **develop:** Desenvolvimento.
- **feature/**: Funcionalidades específicas.
- **hotfix/**: Correção de bugs críticos.
- **release/**: Preparação para produção.

### **Exemplo de criação de branch:**
```bash
git checkout develop
git checkout -b feature/nova-funcionalidade
```

---

## 📊 **Rotas da API**

| **Rota**      | **Método** | **Descrição**             |
|-------------- |----------- |-------------------------- |
| `/video`      | `POST`     | Receber link do vídeo     |
| `/video/info` | `GET`      | Obter informações do vídeo|
| `/download`   | `POST`     | Gerar link para download  |
| `/history`    | `GET`      | Histórico de downloads    |

---

## 🧪 **Testes**

Execute os testes unitários com:
```bash
npm run test
```

---

## 🤝 **Contribuindo**

1. Faça um Fork do projeto.
2. Crie uma nova branch: `git checkout -b feature/minha-feature`.
3. Commit suas alterações: `git commit -m 'Adiciona nova funcionalidade'`.
4. Faça um Push para a branch: `git push origin feature/minha-feature`.
5. Envie um Pull Request.

---

## 📄 **Licença**

Este projeto está licenciado sob a licença MIT.

---

## 👤 **Autor**

- **Pedro Henrique Pinheiro**
- [LinkedIn](https://linkedin.com/in/phplemos)
---

💡 *Sinta-se à vontade para contribuir ou reportar problemas!* 🚀

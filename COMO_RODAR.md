# 🚀 Guia Rápido: Como Iniciar o Projeto Novamente

Guia simples e objetivo para colocar tudo para rodar do zero caso o computador seja reiniciado ou o sistema fechado.

---

### 1️⃣ Passo 1: Abrir o Docker (se aplicável)
- Abra o aplicativo **Docker Desktop** no seu Windows.
- Aguarde até que o ícone do Docker fique verde/ativo (indicando que o serviço iniciou).

---

### 2️⃣ Passo 2: Iniciar o Projeto (Servidor Local)
1. Abra o terminal (PowerShell ou Prompt de Comando) na pasta do projeto:
   ```cmd
   d:\PROJETOS ANTIGRAVITY\MétodoDone
   ```
2. Execute o comando para subir o servidor local:
   ```bash
   npm run dev
   ```
3. O projeto estará rodando localmente em: **`http://localhost:8080`**

---

### 3️⃣ Passo 3: Iniciar o ngrok (Criar o Link Público)
1. Abra um **novo terminal** ou a janela do ngrok.
2. Execute o comando para expor a porta 8080:
   ```bash
   ngrok http 8080
   ```
   *(Caso o comando `ngrok` não seja reconhecido, navegue até a pasta onde está o arquivo `ngrok.exe` e use `.\ngrok http 8080`)*

3. Copie o link público gerado na linha **`Forwarding`** (exemplo: `https://xxxx.ngrok-free.app`).

---

### 4️⃣ Passo 4: Enviar a Mensagem
- Cole o link do ngrok na sua mensagem de texto para os disparos.
- **Importante:** Mantenha as janelas do terminal e do ngrok abertas enquanto estiver fazendo os disparos.

---

### 📌 Resumo dos Comandos
| Ação | Comando |
| :--- | :--- |
| **Rodar o projeto local** | `npm run dev` *(na pasta do projeto)* |
| **Iniciar o tunnel ngrok** | `ngrok http 8080` |
| **Encerrar o ngrok (se travar)** | `Stop-Process -Name ngrok -Force` *(no PowerShell)* |

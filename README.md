## GPT_3.5T_WPP
 ### Integração entre o modelo mais recente do Chat GPT e o WPP

- Clone o repositório para sua máquina local usando o seguinte comando:

```sh
git clone https://github.com/IudeK/GPT_3.5T_WPP.git
```

- Navegue até a pasta do projeto clonado e execute o seguinte comando para instalar todos os módulos necessários: 
```sh
npm install
```
- Crie um arquivo chamado ".env" na raiz do projeto e adicione as seguintes informações:

```sh
OPENAI_KEY=<sua_chave_da_API>
ORGANIZATION_ID=<ID_da_organização>
PHONE_NUMBER=<seu_número_de_telefone_com_código_de_país_e_DDD>
```
- Você pode obter os dados nos seguintes links:

|  |  |
| ------ | ------ |
| OPENAI_KEY | https://platform.openai.com/account/api-keys |
| ORGANIZATION_ID | https://platform.openai.com/account/org-settings |

- Certifique-se de substituir <sua_chave_da_API>, <ID_da_organização> e <seu_número_de_telefone_com_código_de_país_e_DDD> pelas informações corretas.

- Execute o código com: 
```sh
node .
```

- No console escanei o QRCODE, após conectado, mande uma msg para seu próprio numero no wpp:

```sh
/gpt <minha_pergunta>
```

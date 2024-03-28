# How does the internet works

## Internet

A internet é um conjunto de dispositivos que comunicam-se entre-si. Iniciando-se nos anos 60 como um projeto de pesquisa consolidado pelo exercito norte americano, tornando-se de infraestrutura publica nos anos 80. Durante os anos, diversas mudanças ocorreram, porém, a forma que a internet funciona não passou por muitas mudanças. Hoje a internet é consolidada, mas você sabe como ela funciona?

### Como a internet funciona ?

Quando dois computadores precisam se comunicar, é necessario que os mesmos passem por um tipo de conexão (cabeada, ou sem fio). Quando um computador conecta-se a outro em um mesmo ambiente, chamamos de uma rede local. Normalmente essa conexão é feita via conexão cabeada, mas uma rede não é limitada a dois computadores, você pode conectar quantos computadores forem necessarios. Porém, imagine-se em uma situação que seja necessario conectar-se a mais de 10 computadores? Uma rede cabeada se tornaria um ninho de aranha, cheio de fios, cabos espalhados por todo canto, para isso, foi necessario criar mecanismos inteligentes de se comunicar entre outros computadores. Estes que foram chamados de de Roteadores. Um roteador tem a capacidade de enviar mensagens de um determinado dispositivo (computador, smartphone, dispositivos inteligentes) para um outro dispositivo que ele deseja se comunicar, ou seja, receber a mensagem. Uma vez que seja necessario adicionar um roteador, o que antes era 1 cabo para cada computador que era necessario realizar a conexão, tornou-se um roteador com 10 conexões (bastando apenas a conexão dos computadores para o roteador em especifico), ao invés de -> Computador A -> Computado B -> Computador C -> Computador -> D [...]
Todos os computadores passaram a se conectar de forma Computador A --> Roteador | Computador B --> Roteador | Computador C --> Roteador.
E assim a conexão é feita entre todos os computadores sem a necessidade de 30 fios conectados entre-si.

### Mas como nos conectamos a centanas de redes ?

Podemos conectar um roteador para outro roteador, isso nos possibilita ter diversas opções relacionadas a conexões de redes de computadores. Dessa forma podemos escalar nossa rede de uma forma infinita, conectando computadores a roteadores e roteadores a outros roteadores. Esse tipo de rede é parecida com o que conhecemos como internet.
Nos exemplos mencionados todas as conexões são feitas dentro de uma rede local. Em um local de espaço limitado conectando diversos dispositivos na mesma rede. Porém, além de sua rede de computadores, existem outras redes em outros locais pelo mundo, e para isso, teriamos que conectar cabos em outras residencias, locais, ligado-os ao nossos computadores. Porém, foi criado um dispositivo chamado modem que tem a responsabilidade de centralizar a rede a partir de um provedor de internet. Como um serviço de telefone ou energia. Assim a conexão é feita através do modem, que por sua vez, possui uma agencia responsavel por fazer essa distribuição da rede.

### ISP Provedores de serviço

O próximo passo é conectar a nossa rede a outra rede que desejamos alcançar, para isso, conectamos nossa rede a um provedor de de serviço de internet. ISP é uma companhia que gerenciaa computadores e dispositivos especiais que são conectados e podem também acessar roteadores de outros ISPs, assim, nossa rede percorre por todo o mundo.

### Dominio

Se você envia uma mensagem para um computador, precisa especificar qual é o computador, para isso, utilizamos o endereço IP (Internet Protocol). Atualmente utilizamos o IPV4 e o IPV6. Sendo o IPV4 o mais comum. ex: 192.168.2.10.

Porém, números são formas dificeis de se decorar para nós, humanos. Então existe um termo chamado "Dominio", este que funciona como uma especie de "apelido" para a rede de computador. Por exemplo Google.com, seu endereço IP é 142.250.190.78

## HTTP

HTTP é um protocolo da camada de aplicação em redes de computadores que possui a responsabilidade de transmitir documentos hypermedia. Ele foi desenvolvido para projetar a comunicação entre navegadores web e servidores web, porém, pode ser usado para outras finalidades. O HTTP serve a estrutura cliente-servidor. Um cliente abre uma conexão com um servidor e executa uma requisição e espera até receber a resposta. HTTP É stateless, ou seja, um protocolo sem estado, o que significa que o servidor não mantem dados entre duas requisições. O HTTP, embora seja utilizado na camada TCP/IP, pode ser utilizado em qualquer camada de transporte confiavel. O HTTP não pode ser utilizado com o UDP. Pois o UDP não possui confiabilidade.

### Considerações Finais

As redes de computadores são replatas de informações, é um sistema complexo que passa por uma série de etapas que juntas formam o que hoje a gente conhece como internet. Está é apenas aponta do iceberg, o que em um simples artigo não poderia resumir. A seguir deixarei conteudos que ajudam a complementar o seu entendimento a respeito de INTERNET E REDES DE COMPUTADORES.

- [Como a internet funciona - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work)
- [How does the internet work - cloudflare](https://www.cloudflare.com/pt-br/learning/network-layer/how-does-the-internet-work/)
- [HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP)

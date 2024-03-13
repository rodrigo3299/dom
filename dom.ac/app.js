const app = document.getElementById('app')
 
const header = document.createElement('header');
        header.innerHTML = `
            <h1>Portfólio</h1>
            <hr>
            <p>Bem-vindo ao nosso portfólio pessoal!</p>
           
        `;
        app.appendChild(header);
 
      const nav = document.createElement('nav');
      const ul = document.createElement('ul');
      const sections = ['Apresentação', 'Habilidades', 'Contato'];
        sections.forEach(section => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${section.toLowerCase()}`;
            a.textContent = section;
            li.appendChild(a);
            ul.appendChild(li);
        });
        nav.appendChild(ul);
        app.appendChild(nav);
 
 
        const apresentacao = document.createElement('section');
        apresentacao.id = 'apresentacao';
        apresentacao.innerHTML = `
        <center>
    </div>
    </div>
<div class="container">
 
<div class="card">
imagem
<div class="container">
  <h4><b>Rodrigo Lima</b></h4>
  <p>Sou uma pessoa que gosta de ajudar pessoas, praticar esporte como futebol, que é meu esporte favorito e gosto demais de assistir e torço pro São Paulo Futebol Clube, entrei na area de programação no ano de 2022 e também na Fiap School no começo sempre é dificil porque é uma coisa nova na minha vida mas depois vamos se acostumando e tudo vai dando certo.</p>
</div>
</div>
 
 
<div class="card">

<div class="container">
<h4><b>Rafael Quaresma</b></h4>
<p>Muito prazer, meu nome é Rafael Quaresma, sou estudante da área de TI no curso da Fiap School.
Minhas principais qualidades são da área de desing, não é um curso para todos, geralmente levamos os trabalhos para casa para terminar, pois é muito complexo fazer um site de alta eficiencia, mas com esforço tudo é possivel.</p>
</div>
</div>
 
  </div>
  </div>
 
 
  <div class="card">

<div class="container">
  <h4><b>Victor</b></h4>
  <p>Architect & Engineer</p>
</div>
</div>
 
  </div>
  </div>
 
 
</div>
 
    </center>
        `;
        app.appendChild(apresentacao);

 
 
const contatoH2 = document.createElement('h2')
contatoH2.id = 'contatoH2'
contatoH2.innerHTML=`
<center>
        <br>
     <h2>Entre em Contato</h2>
     </center>
`;
app.appendChild(contatoH2)
 
 const contato = document.createElement('section');
 contato.id = 'contato';
 contato.innerHTML = `
     <div class="container">
     <form>
   
       <label for="name">Nome: </label>
       <input type="text" id="name" name="name" placeholder="Seu nome">
   
       <label for="email">Email: </label>
       <input type="text" id="email" name="email"  placeholder="Digite seu E-mail">
   
       <label for="message">Mensagem: </label>
       <textarea id="message" name="message" placeholder="Envie uma mensagem" style="height:100px"></textarea>
   
       <button type="submit" class="registerbtn">Enviar</button>  
     </form>
   </div>
 `;
 app.appendChild(contato);
 
 const footer = document.createElement('footer');
 footer.innerHTML = `
     <p>&copy; 2024 - Meu Portfólio Pessoal. Todos os direitos reservados.</p>
 `;
 app.appendChild(footer);
 
    function handleSubmit(event) {
        event.preventDefault();
 
        form.addEventListener('submit', function(event) {
            event.preventDefault();
 
            const name = form.elements['name'].value;
            const email = form.elements['email'].value;
            const message = form.elements['message'].value;
 
            setTimeout(function() {
              alert('Obrigado por entrar em contato, ' + name + '! Nós responderemos em breve, no email: ' + email);
              form.reset();
            }, 1000);
          });
        }
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
 
        alert('Agradecemos pelo contato!');

        

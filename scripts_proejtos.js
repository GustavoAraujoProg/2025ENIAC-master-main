      // Esperar o DOM carregar completamente
      document.addEventListener("DOMContentLoaded", function () {
        // ===== MENU FIXO =====
        const header = document.querySelector("header");
        window.addEventListener("scroll", function () {
          if (window.scrollY > 100) {
            header.classList.add("solido");
          } else {
            header.classList.remove("solido");
          }
        });

        // ===== MENU MOBILE =====
        const menuToggle = document.querySelector(".menu-toggle");
        const nav = document.querySelector("nav ul");

        menuToggle.addEventListener("click", function () {
          nav.classList.toggle("ativo");
          // Animar o hambúrguer
          const spans = menuToggle.querySelectorAll("span");
          spans.forEach((span) => span.classList.toggle("ativo"));
        });

        // ===== ANIMAÇÃO DE APARECER QUANDO ROLAR A PÁGINA =====
        const secoes = document.querySelectorAll(".secao");

        const verificarVisibilidade = () => {
          const triggerBottom = window.innerHeight * 0.8;

          secoes.forEach((secao) => {
            const secaoTopo = secao.getBoundingClientRect().top;

            if (secaoTopo < triggerBottom) {
              secao.classList.add("ativa");
            }
          });
        };

        window.addEventListener("scroll", verificarVisibilidade);
        verificarVisibilidade(); // Verificar visibilidade inicial

        // ===== ANIMAÇÃO DA TIMELINE =====
        const timelineItems = document.querySelectorAll(".timeline-item");

        const animarTimeline = () => {
          const triggerBottom = window.innerHeight * 0.85;

          timelineItems.forEach((item) => {
            const itemTopo = item.getBoundingClientRect().top;

            if (itemTopo < triggerBottom) {
              item.classList.add("ativa");
            }
          });
        };

        window.addEventListener("scroll", animarTimeline);

        // ===== FILTRO DE PROJETOS =====
        const filtroBtns = document.querySelectorAll(".filtro-btn");
        const projetoCards = document.querySelectorAll(".projeto-card");

        filtroBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            // Remover classe ativo de todos os botões
            filtroBtns.forEach((b) => b.classList.remove("ativo"));
            // Adicionar classe ativo ao botão clicado
            this.classList.add("ativo");

            const filtro = this.getAttribute("data-filtro");

            // Filtrar os projetos
            projetoCards.forEach((card) => {
              if (filtro === "todos") {
                card.style.display = "block";
              } else {
                if (card.getAttribute("data-categoria") === filtro) {
                  card.style.display = "block";
                } else {
                  card.style.display = "none";
                }
              }
            });
          });
        });

        // ===== TABS LOGIN/REGISTRO =====
        const tabBtns = document.querySelectorAll(".tab-btn");
        const tabConteudos = document.querySelectorAll(".tab-conteudo");

        tabBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            // Remover classe ativo de todos os botões
            tabBtns.forEach((b) => b.classList.remove("ativo"));
            // Adicionar classe ativo ao botão clicado
            this.classList.add("ativo");

            const tab = this.getAttribute("data-tab");

            // Mostrar conteúdo da tab
            tabConteudos.forEach((conteudo) => {
              conteudo.classList.remove("ativo");
            });

            document.getElementById(`tab-${tab}`).classList.add("ativo");
          });
        });

        // ===== ROLAGEM SUAVE =====
        document.querySelectorAll('a[href^="#"]').forEach((ancora) => {
          ancora.addEventListener("click", function (e) {
            e.preventDefault();

            const id = this.getAttribute("href").substring(1);
            const elemento = document.getElementById(id);

            if (elemento) {
              window.scrollTo({
                top: elemento.offsetTop - 80,
                behavior: "smooth",
              });

              // Fechar menu mobile se estiver aberto
              if (nav.classList.contains("ativo")) {
                nav.classList.remove("ativo");
              }
            }
          });
        });

        // ===== FORMULÁRIO DE CONTATO =====
        const formContato = document.getElementById("formulario-contato");

        if (formContato) {
          formContato.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simular envio
            const btn = this.querySelector('button[type="submit"]');
            const textoOriginal = btn.textContent;

            btn.textContent = "Enviando...";
            btn.disabled = true;

            setTimeout(() => {
              alert(
                "Mensagem enviada com sucesso! Entraremos em contato em breve."
              );
              btn.textContent = textoOriginal;
              btn.disabled = false;
              formContato.reset();
            }, 1500);
          });
        }

        // ===== FORMULÁRIO DE LOGIN =====
        const formLogin = document.getElementById("formulario-login");

        if (formLogin) {
          formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simular login
            const btn = this.querySelector('button[type="submit"]');
            const textoOriginal = btn.textContent;

            btn.textContent = "Entrando...";
            btn.disabled = true;

            setTimeout(() => {
              alert("Login realizado com sucesso!");
              btn.textContent = textoOriginal;
              btn.disabled = false;
            }, 1500);
          });
        }

        // ===== FORMULÁRIO DE REGISTRO =====
        const formRegistro = document.getElementById("formulario-registro");

        if (formRegistro) {
          formRegistro.addEventListener("submit", function (e) {
            e.preventDefault();

            // Verificar senhas
            const senha = document.getElementById("registro-senha").value;
            const confirmaSenha = document.getElementById(
              "registro-confirma-senha"
            ).value;

            if (senha !== confirmaSenha) {
              alert("As senhas não coincidem. Por favor, tente novamente.");
              return;
            }

            // Simular registro
            const btn = this.querySelector('button[type="submit"]');
            const textoOriginal = btn.textContent;

            btn.textContent = "Criando conta...";
            btn.disabled = true;

            setTimeout(() => {
              alert("Conta criada com sucesso!");
              btn.textContent = textoOriginal;
              btn.disabled = false;
              formRegistro.reset();

              // Mudar para a tab de login
              document.querySelector('.tab-btn[data-tab="login"]').click();
            }, 1500);
          });
        }
      });

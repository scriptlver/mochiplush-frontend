import Header from "../../components/Header/Header";
import logo from "../../img/MochiPlush/mp-logo.png";

function TermsOfUse() {
  return (
    <div className="min-h-screen bg-[#F584BE]">
      <div className="px-4 pt-2">
        <img src={logo} alt="MochiPlush" className="w-44" />
      </div>

      <div className="-mt-2 min-h-[85vh] rounded-t-[40px] bg-[#F8F8F8] px-9 pt-10 pb-10">
        <div className="-mt-6">
          <Header title="Termos de uso" />
        </div>

        <div className="mt-2">
          <h2 className="text-center font-lexend text-[22px] font-bold text-black">
            1. Aceitação dos Termos
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Bem-vindo à MochiPlush!
            <br />
            Ao acessar e utilizar nosso site, você concorda com os presentes
            Termos de Uso e com nossa Política de Privacidade. Caso não concorde
            com qualquer disposição, recomendamos que não utilize nossos
            serviços.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            2. Sobre a MochiPlush
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            A MochiPlush é uma loja especializada na venda de pelúcias,
            acessórios e produtos relacionados, oferecendo uma experiência de
            compra segura, prática e confiável.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            3. Cadastro
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Para realizar compras, o cliente poderá criar uma conta informando
            dados verdadeiros, completos e atualizados.
            <br />
            O usuário é responsável por manter a confidencialidade de sua senha
            e por todas as atividades realizadas em sua conta.
            <br />
            Caso seja identificado qualquer uso não autorizado, o cliente deverá
            comunicar imediatamente à MochiPlush.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            4. Compras
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Após a confirmação do pagamento, o pedido será processado para
            separação e envio.
            <br />A MochiPlush reserva-se o direito de cancelar pedidos em casos
            de:
          </p>
          <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            <li>Suspeita de fraude;</li>
            <li>Inconsistências cadastrais;</li>
            <li>Indisponibilidade de estoque;</li>
            <li>Erros evidentes de preço ou descrição do produto.</li>
          </ul>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Caso ocorra o cancelamento, o cliente será informado e, quando
            aplicável, receberá o reembolso do valor pago.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            5. Preços
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Todos os preços estão expressos em Reais (R$).
            <br />
            Os valores podem ser alterados sem aviso prévio, respeitando os
            pedidos já concluídos.
            <br />
            Promoções possuem prazo determinado e podem ser encerradas a
            qualquer momento.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            6. Formas de Pagamento
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Aceitamos as seguintes formas de pagamento:
          </p>
          <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            <li>Cartão de crédito;</li>
            <li>Cartão de débito;</li>
            <li>Pix;</li>
            <li>Boleto bancário (quando disponível).</li>
          </ul>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            As transações são processadas por plataformas de pagamento seguras.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            7. Entrega
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            O prazo de entrega varia conforme a localização do cliente,
            disponibilidade do produto e modalidade de frete escolhida.
            <br />
            Após a postagem, o cliente poderá acompanhar o pedido por meio do
            código de rastreamento disponibilizado.
            <br />
            Eventuais atrasos decorrentes de fatores externos, como
            transportadoras ou eventos climáticos, poderão ocorrer.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            8. Trocas e Devoluções
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            As trocas e devoluções seguem o Código de Defesa do Consumidor.
            <br />
            O cliente poderá solicitar a devolução do produto em até 7 dias
            corridos após o recebimento, conforme o direito de arrependimento
            previsto no art. 49 do CDC.
            <br />
            Produtos com defeito poderão ser analisados e, quando constatado o
            problema, serão reparados, substituídos ou reembolsados.
            <br />O produto deverá ser devolvido em sua embalagem original,
            acompanhado de todos os acessórios.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            9. Propriedade Intelectual
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Todo o conteúdo presente no site, incluindo:
          </p>
          <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            <li>Marca MochiPlush;</li>
            <li>Logotipo;</li>
            <li>Textos;</li>
            <li>Fotografias;</li>
            <li>Ilustrações;</li>
            <li>Identidade visual;</li>
            <li>Layout;</li>
            <li>Códigos e funcionalidades,</li>
          </ul>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            é protegido pelas leis de propriedade intelectual. É proibida a
            reprodução, distribuição ou utilização sem autorização prévia.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            10. Responsabilidades
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            A MochiPlush compromete-se a fornecer informações claras e
            atualizadas sobre seus produtos.
            <br />O cliente é responsável por informar corretamente seus dados
            de entrega e manter suas informações cadastrais atualizadas.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            11. Alterações dos Termos
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            A MochiPlush poderá alterar estes Termos de Uso sempre que
            necessário.
            <br />
            As alterações entrarão em vigor após sua publicação no site.
          </p>

          <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
            12. Contato
          </h2>
          <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
            Em caso de dúvidas, entre em contato com nossa equipe:
            <br />
            <strong>E-mail:</strong> contato@mochiplush.com
            <br />
            <strong>Horário de atendimento:</strong> Segunda a sexta-feira, das
            9h às 18h.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;

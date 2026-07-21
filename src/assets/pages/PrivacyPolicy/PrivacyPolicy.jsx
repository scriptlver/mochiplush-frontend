import Header from "../../components/Header/Header";
import logo from "../../img/MochiPlush/mp-logo.png";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F584BE]">
      <div className="px-4 pt-2">
        <img src={logo} alt="MochiPlush" className="w-44" />
      </div>

      <div className="-mt-2 min-h-[85vh] rounded-t-[40px] bg-[#F8F8F8] px-9 pt-10 pb-10">
        <div className="-mt-6">
          <Header title="Política de privacidade" />
        </div>

        <h2 className="text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          1. Introdução
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          A MochiPlush valoriza a privacidade de seus clientes e está
          comprometida em proteger seus dados pessoais.
          <br />
          Esta Política explica como coletamos, utilizamos, armazenamos e
          protegemos suas informações.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          2. Dados Coletados
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Podemos coletar as seguintes informações:
        </p>

        <h3 className="mt-4 text-center font-lexend text-[18px] font-semibold text-[#1E1E1E]">
          Dados de cadastro
        </h3>
        <ul className="mt-1 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Nome completo;</li>
          <li>CPF;</li>
          <li>E-mail;</li>
          <li>Telefone;</li>
          <li>Data de nascimento.</li>
        </ul>

        <h3 className="mt-4 text-center font-lexend text-[18px] font-semibold text-[#1E1E1E]">
          Dados de entrega
        </h3>
        <ul className="mt-1 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>CEP;</li>
          <li>Endereço;</li>
          <li>Número;</li>
          <li>Complemento;</li>
          <li>Bairro;</li>
          <li>Cidade;</li>
          <li>Estado.</li>
        </ul>

        <h3 className="mt-4 text-center font-lexend text-[18px] font-semibold text-[#1E1E1E]">
          Dados de pagamento
        </h3>
        <p className="mt-1 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Os pagamentos são processados por empresas especializadas. A
          MochiPlush não armazena os dados completos do cartão de crédito,
          apenas informações necessárias para identificação da compra.
        </p>

        <h3 className="mt-4 text-center font-lexend text-[18px] font-semibold text-[#1E1E1E]">
          Dados de navegação
        </h3>
        <p className="mt-1 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Também coletamos automaticamente:
        </p>
        <ul className="mt-1 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Endereço IP;</li>
          <li>Navegador utilizado;</li>
          <li>Dispositivo;</li>
          <li>Páginas acessadas;</li>
          <li>Tempo de navegação;</li>
          <li>Cookies.</li>
        </ul>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          3. Como Utilizamos seus Dados
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Seus dados podem ser utilizados para:
        </p>
        <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Processar pedidos;</li>
          <li>Emitir notas fiscais;</li>
          <li>Realizar entregas;</li>
          <li>Enviar atualizações sobre compras;</li>
          <li>Prestar atendimento ao cliente;</li>
          <li>Prevenir fraudes;</li>
          <li>Melhorar nossos serviços;</li>
          <li>Enviar ofertas e promoções, mediante autorização.</li>
        </ul>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          4. Compartilhamento de Dados
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          A MochiPlush poderá compartilhar informações apenas quando necessário
          com:
        </p>
        <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Transportadoras;</li>
          <li>Intermediadores de pagamento;</li>
          <li>Empresas responsáveis pela emissão de notas fiscais;</li>
          <li>Autoridades competentes, quando exigido por lei.</li>
        </ul>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Não comercializamos dados pessoais.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          5. Cookies
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Utilizamos cookies para:
        </p>
        <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Manter o usuário conectado;</li>
          <li>Lembrar preferências;</li>
          <li>Analisar o desempenho do site;</li>
          <li>Personalizar a experiência de navegação.</li>
        </ul>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          O usuário poderá gerenciar os cookies diretamente em seu navegador.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          6. Segurança
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Adotamos medidas técnicas e administrativas para proteger os dados
          pessoais contra:
        </p>
        <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Acesso não autorizado;</li>
          <li>Perda;</li>
          <li>Alteração;</li>
          <li>Divulgação indevida.</li>
        </ul>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Apesar dos nossos esforços, nenhum sistema é completamente imune a
          riscos.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          7. Direitos do Titular
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Nos termos da Lei Geral de Proteção de Dados (LGPD), o usuário poderá
          solicitar:
        </p>
        <ul className="mt-2 list-inside list-disc text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          <li>Confirmação do tratamento de seus dados;</li>
          <li>Acesso aos dados pessoais;</li>
          <li>Correção de informações incorretas;</li>
          <li>Exclusão dos dados, quando aplicável;</li>
          <li>Portabilidade;</li>
          <li>Revogação do consentimento para comunicações de marketing.</li>
        </ul>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          As solicitações poderão ser realizadas pelos canais de atendimento.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          8. Tempo de Armazenamento
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Os dados serão armazenados pelo período necessário para cumprir
          obrigações legais, fiscais, contratuais ou enquanto houver
          relacionamento com o cliente.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          9. Alterações desta Política
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Esta Política poderá ser atualizada periodicamente para refletir
          alterações na legislação ou melhorias em nossos serviços. Recomendamos
          sua consulta regularmente.
        </p>

        <h2 className="mt-8 text-center font-lexend text-[22px] font-bold text-[#1E1E1E]">
          10. Contato
        </h2>
        <p className="mt-3 text-center font-lexend text-[16px] leading-8 text-[#2B2B2B]">
          Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o
          tratamento de seus dados pessoais, entre em contato:
          <br />
          <strong>MochiPlush</strong>
          <br />
          <strong>E-mail:</strong> contato@mochiplush.com
          <br />
          <strong>Horário de atendimento:</strong> Segunda a sexta-feira, das 9h
          às 18h.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

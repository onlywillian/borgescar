export const metadata = {
  title: "Quem Somos",
};

import Image from "next/image";

import logoImage from "../../../public/logo-light.svg";

export default function QuemSomos() {
  return (
    <>
      <main className="bg-aqua-light flex justify-center items-center overflow-auto p-10">
        <div className="bg-aqua-v-light w-1/2 rounded-lg flex flex-col p-10">
          <Image
            src={logoImage}
            alt="logo"
            className="h-20 w-20 self-end mb-10"
          />

          <div className="flex flex-col gap-5">
            <p>
              Bem-vindo à Borge's Car, sua concessionária de confiança para
              veículos de qualidade e serviços automotivos excepcionais. Com uma
              reputação sólida e anos de experiência no setor, nos orgulhamos de
              ser uma referência no mercado automotivo.
            </p>

            <p>
              Na Borge's Car, entendemos que a compra de um veículo é uma
              decisão importante e emocionante. Por isso, buscamos oferecer uma
              experiência única aos nossos clientes, desde o momento em que
              entram em nossa concessionária até muito além da compra. Nosso
              compromisso é fornecer veículos de alta qualidade e serviços
              especializados que atendam às necessidades e expectativas
              individuais de cada cliente.
            </p>

            <p>
              Oferecemos uma ampla seleção de veículos novos e usados, incluindo
              carros de passeio, SUVs, caminhões e veículos de luxo das
              principais marcas do mercado. Nossa equipe de profissionais
              experientes e conhecedores está pronta para auxiliá-lo na escolha
              do veículo perfeito que se adeque ao seu estilo de vida, orçamento
              e preferências pessoais.
            </p>

            <p>
              Na Borge's Car, a transparência e a honestidade são valores
              fundamentais. Acreditamos em estabelecer relacionamentos
              duradouros com nossos clientes, construídos com base na confiança
              e no atendimento personalizado. Nossa equipe de vendas está
              empenhada em ouvir suas necessidades, responder a todas as suas
              perguntas e fornecer orientação especializada para garantir que
              você faça a escolha certa.
            </p>

            <p>
              Além da venda de veículos, também oferecemos uma variedade de
              serviços automotivos abrangentes. Nossa equipe de técnicos
              altamente qualificados e equipados com tecnologia avançada está
              pronta para cuidar da manutenção, reparos e serviços
              especializados em seu veículo. Desde trocas de óleo e filtros até
              reparos complexos, você pode confiar em nossa expertise para
              manter seu veículo em ótimas condições de funcionamento.
            </p>

            <p>
              Valorizamos cada cliente que passa por nossas portas e nos
              esforçamos para superar suas expectativas em todos os aspectos.
              Buscamos continuamente aprimorar nossos processos e serviços para
              fornecer uma experiência excepcional, tornando-nos a escolha
              preferida para suas necessidades automotivas.
            </p>

            <p>
              Na Borge's Car, estamos comprometidos em fornecer qualidade,
              confiança e excelência em tudo o que fazemos. Venha nos visitar
              hoje mesmo e descubra por que somos a concessionária de confiança
              para clientes exigentes como você.
            </p>

            <p>A equipe Borge's Car.</p>
          </div>
        </div>
      </main>
    </>
  );
}

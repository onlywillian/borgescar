export const metadata = {
  title: "Termos de Compromisso",
};

import Image from "next/image";

import logoImage from "../../../public/logo-light.svg";

export default function Termos() {
  return (
    <main className="bg-aqua-light flex justify-center items-center overflow-auto p-10">
      <div className="bg-aqua-v-light w-1/2 rounded-lg flex flex-col p-10">
        <Image
          src={logoImage}
          alt="logo"
          className="h-20 w-20 self-end mb-10"
        />

        <div className="flex flex-col gap-5">
          <p>
            Este Termo de Compromisso ("o Termo") é celebrado entre você ("o
            Cliente") e a Borge's Car, uma concessionária de veículos ("a
            Empresa"), estabelecendo as condições de uso do site da Borge's Car
            ("o Site"). Ao acessar e utilizar o Site, o Cliente concorda em
            cumprir os termos e condições aqui descritos.
          </p>

          <p>
            1. Uso do Site: O Cliente concorda em utilizar o Site da Borge's Car
            de acordo com todas as leis e regulamentos aplicáveis, bem como em
            conformidade com as diretrizes estabelecidas neste Termo. O acesso
            ao Site é concedido apenas para uso pessoal e não comercial.
            Qualquer uso indevido, incluindo a violação de direitos autorais ou
            o uso não autorizado de informações do Site, é estritamente
            proibido.
          </p>

          <p>
            2. Informações do Site: A Empresa envidará todos os esforços
            razoáveis para garantir que as informações apresentadas no Site
            sejam precisas e atualizadas. No entanto, não garantimos a exatidão,
            integridade ou atualidade das informações fornecidas. O Cliente
            concorda em utilizar as informações do Site por sua conta e risco.
          </p>

          <p>
            3. Propriedade Intelectual: Todos os direitos de propriedade
            intelectual relacionados ao Site e seu conteúdo, incluindo, mas não
            se limitando a, textos, gráficos, logotipos, imagens, vídeos, áudios
            e software, são de propriedade exclusiva da Borge's Car ou de seus
            licenciadores. O Cliente concorda em respeitar todos os direitos de
            propriedade intelectual e não reproduzir, distribuir, modificar ou
            criar trabalhos derivados do conteúdo do Site sem autorização prévia
            por escrito da Empresa.
          </p>

          <p>
            4. Privacidade e Proteção de Dados: A Empresa se compromete a
            proteger a privacidade do Cliente e a tratar os dados pessoais de
            acordo com as leis de proteção de dados aplicáveis. Ao fornecer
            dados pessoais ao Site, o Cliente consente com a coleta, uso e
            processamento desses dados pela Empresa, conforme descrito em nossa
            Política de Privacidade.
          </p>

          <p>
            5. Links Externos: O Site da Borge's Car pode conter links para
            sites de terceiros. Esses links são fornecidos apenas para
            conveniência do Cliente, e a Empresa não tem controle sobre o
            conteúdo ou as políticas de privacidade desses sites. A inclusão de
            qualquer link não implica endosso, aprovação ou associação da
            Empresa com esses sites. O Cliente acessa esses sites por sua
            própria conta e risco.
          </p>

          <p>
            6. Limitação de Responsabilidade: A Empresa não será responsável por
            quaisquer danos diretos, indiretos, incidentais, consequenciais ou
            punitivos decorrentes do uso ou da incapacidade de uso do Site,
            mesmo que tenha sido informada da possibilidade de tais danos. O
            Cliente concorda em utilizar o Site por sua conta e risco.
          </p>

          <p>
            7. Alterações e Rescisão: A Empresa reserva-se o direito de alterar,
            suspender ou descontinuar qualquer aspecto do Site a qualquer
            momento, sem aviso prévio. Além disso, a Empresa pode rescindir este
            Termo e negar o acesso ao Site a qualquer momento, por qualquer
            motivo, sem aviso prévio.
          </p>

          <p>8. Disposições Gerais</p>
          <p>
            a) Este Termo constitui o acordo completo entre o Cliente e a
            Borge's Car em relação ao uso do Site e substitui qualquer acordo
            anterior ou contemporâneo.
          </p>

          <p>
            b) A invalidade ou inaplicabilidade de qualquer disposição deste
            Termo não afetará a validade ou aplicabilidade das demais
            disposições.
          </p>

          <p>
            c) Qualquer renúncia a qualquer disposição deste Termo deve ser
            feita por escrito e assinada pela parte renunciante. A falha de
            qualquer parte em exigir o cumprimento estrito de qualquer
            disposição deste Termo não constituirá uma renúncia à mesma ou a
            qualquer outra disposição.
          </p>

          <p>
            d) Este Termo será regido e interpretado de acordo com as leis do
            país/jurisdição em que a Borge's Car está localizada, sem considerar
            seus conflitos de princípios legais.
          </p>

          <p>
            e) Quaisquer disputas ou litígios decorrentes ou relacionados a este
            Termo ou ao uso do Site serão submetidos à jurisdição exclusiva dos
            tribunais competentes da referida localidade.
          </p>

          <p>
            Ao utilizar o Site da Borge's Car, o Cliente declara ter lido,
            entendido e concordado com todos os termos e condições estabelecidos
            neste Termo de Compromisso. Se o Cliente não concordar com algum
            aspecto deste Termo, pedimos que interrompa imediatamente o uso do
            Site.
          </p>

          <p>
            A Borge's Car reserva-se o direito de modificar este Termo a
            qualquer momento, e quaisquer alterações entrarão em vigor assim que
            forem publicadas no Site. É responsabilidade do Cliente revisar
            periodicamente este Termo para estar ciente de quaisquer
            modificações.
          </p>
        </div>
      </div>
    </main>
  );
}

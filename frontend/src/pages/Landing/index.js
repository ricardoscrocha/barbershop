import React from 'react';

import {
  AccentLink,
  Card,
  CardDescription,
  CardIcon,
  CardTitle,
  CardsGrid,
  ContactPanel,
  Content,
  CTAGroup,
  Header,
  Hero,
  Highlight,
  PanelList,
  PanelTitle,
  PrimaryButton,
  SecondaryButton,
  Section,
  Steps,
  StepCard,
  StepDescription,
  StepNumber,
  StepTitle,
  Subtitle,
  Tag,
  Title,
  Wrapper,
} from './styles';

const focusAreas = [
  {
    icon: '💎',
    title: 'Autoconhecimento',
    description:
      'Estratégias práticas para entender padrões de comportamento e tomar decisões conscientes.',
  },
  {
    icon: '🌿',
    title: 'Psicoterapia para mulheres',
    description:
      'Acolhimento seguro para lidar com ciclos, autoestima e desafios da vida adulta.',
  },
  {
    icon: '🧠',
    title: 'Regulação emocional',
    description:
      'Ferramentas para lidar com ansiedade, autocobrança e momentos de transição.',
  },
  {
    icon: '✨',
    title: 'Relacionamentos e rotina',
    description:
      'Planos objetivos para comunicar necessidades, estabelecer limites e viver com leveza.',
  },
];

const steps = [
  {
    title: 'Escolha o formato ideal',
    description: 'Sessões online ou presenciais em Belo Horizonte, com agenda flexível.',
  },
  {
    title: 'Construa seu plano de cuidado',
    description: 'Definimos objetivos claros e revisamos os avanços a cada encontro.',
  },
  {
    title: 'Siga com acompanhamento próximo',
    description: 'Feedback contínuo e materiais de apoio para aplicar no dia a dia.',
  },
];

export default function Landing() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <div>
            <Tag>Psicologia Clínica</Tag>
            <Highlight>Laís Vilella</Highlight>
          </div>
          <CTAGroup>
            <SecondaryButton href="/login">Área do paciente</SecondaryButton>
            <PrimaryButton href="mailto:contato@laisvilella.com">Agendar sessão</PrimaryButton>
          </CTAGroup>
        </Header>

        <Hero>
          <div>
            <Tag>Escuta leve e baseada em evidências</Tag>
            <Title>Laís Vilella — Psicologia Clínica</Title>
            <Subtitle>
              Atendimento acolhedor para quem busca clareza, equilíbrio e relações mais saudáveis.
              Sessões online ou presenciais.
            </Subtitle>
            <CTAGroup>
              <PrimaryButton href="mailto:contato@laisvilella.com">Agendar sessão</PrimaryButton>
            <SecondaryButton href="https://wa.me/5531999999999" target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </SecondaryButton>
            </CTAGroup>
          </div>
          <ContactPanel>
            <PanelTitle>Quero acolhimento para:</PanelTitle>
            <PanelList>
              <li>Autocobrança e ansiedade</li>
              <li>Autoconhecimento</li>
              <li>Relacionamentos</li>
              <li>Regulação emocional</li>
              <li>Rotina e produtividade</li>
              <li>Psicoterapia para mulheres</li>
            </PanelList>
            <AccentLink href="mailto:contato@laisvilella.com">Marcar minha primeira consulta</AccentLink>
          </ContactPanel>
        </Hero>

        <Section>
          <Tag>Áreas de atuação</Tag>
          <CardsGrid>
            {focusAreas.map(area => (
              <Card key={area.title}>
                <CardIcon>{area.icon}</CardIcon>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </Card>
            ))}
          </CardsGrid>
        </Section>

        <Section>
          <Tag>Como funciona</Tag>
          <Steps>
            {steps.map((step, index) => (
              <StepCard key={step.title}>
                <StepNumber>{index + 1}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            ))}
          </Steps>
        </Section>
      </Content>
    </Wrapper>
  );
}

import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  padding: 48px 0 80px;
`;

export const Content = styled.main`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (max-width: 768px) {
    padding: 0 24px;
    gap: 40px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const Highlight = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: #0f766e;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const CTAGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 15px;
  transition: all 0.2s ease;
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: linear-gradient(120deg, #0ea5e9, #6366f1);
  color: #f8fafc;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.25);

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }
`;

export const SecondaryButton = styled.a`
  ${buttonBase}
  background: #ffffff;
  color: #0f172a;
  border-color: rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);

  &:hover {
    background: ${darken(0.02, '#ffffff')};
    transform: translateY(-1px);
  }
`;

export const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 32px;
  align-items: center;
  padding: 36px;
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(14, 165, 233, 0.08), rgba(99, 102, 241, 0.06));
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.12);

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 28px;
    border-radius: 24px;
  }

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(28px, 4vw, 42px);
  line-height: 1.25;
  color: #0b1224;
`;

export const Subtitle = styled.p`
  font-size: 17px;
  color: #243b53;
  max-width: 600px;
  line-height: 1.6;
`;

export const ContactPanel = styled.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 768px) {
    padding: 22px;
  }
`;

export const PanelTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
`;

export const PanelList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 16px;
  color: #1f2937;

  li::before {
    content: '•';
    color: #0ea5e9;
    margin-right: 8px;
    font-weight: bold;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const AccentLink = styled.a`
  font-weight: 700;
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${darken(0.08, '#2563eb')};
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
  display: grid;
  gap: 8px;
  align-content: start;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
    transition: all 0.2s ease;
  }
`;

export const CardIcon = styled.span`
  font-size: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
`;

export const CardDescription = styled.p`
  font-size: 14px;
  color: #334155;
  line-height: 1.5;
`;

export const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.div`
  background: #0ea5e9;
  background: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
  color: #f8fafc;
  border-radius: 18px;
  padding: 18px;
  display: grid;
  gap: 6px;
  box-shadow: 0 16px 36px rgba(14, 165, 233, 0.35);
`;

export const StepNumber = styled.span`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.14);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 16px;
`;

export const StepTitle = styled.h4`
  font-size: 16px;
  font-weight: 800;
`;

export const StepDescription = styled.p`
  font-size: 14px;
  color: #e2e8f0;
  line-height: 1.4;
`;

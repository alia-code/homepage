import React from 'react';
import { Layout, Container } from 'flamework';
import PoweredBy from './PoweredBy';
// import CallToActions from './CallToActions';
import FooterStyled, * as S from './Footer.styled';
import logo from '../../images/logo.png';
import { social, lastName } from '../../data/hero';

const Footer = React.memo(() => (
  <FooterStyled id="Footer" className="hide-print">
    <Container>
      <Layout className="footer" align="between stretch" mobileAlign="start center">
        <S.CompanyInfo>
          <img width="28" src={logo} alt="Logo Alia" />

          <p>
            Alia is a brand that represents Christhopher Lion as a Individual
            Entrepreneur
          </p>

          <a className="link" href="//instagram.com/go.alia">
            @go.alia
          </a>
        </S.CompanyInfo>

        <S.Links>
          <h6>Connect with {lastName.en}</h6>

          <Layout as="ul" column mobileRow align="start end" mobileAlign="around center">
            {Object.keys(social).map(key => (
              <a className="link" key={key} href={social[key].url}>
                {social[key].name}
              </a>
            ))}
          </Layout>
        </S.Links>
      </Layout>
    </Container>

    <PoweredBy />
  </FooterStyled>
));

export default Footer;

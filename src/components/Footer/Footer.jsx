import React from 'react';
import logo from 'images/logo.png';
import { social, lastName } from 'data/hero';
import PoweredBy from './PoweredBy';
// import CallToActions from './CallToActions';
import FooterStyled, * as S from './Footer.styled';

const Footer = React.memo(() => (
  <FooterStyled id="Footer" className="hide-print">
    <div contain="">
      <div className="row footer" align="between stretch" mobile-align="start center">
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

          <ul column mobile-row align="start end" mobile-align="around center">
            {Object.keys(social).map(key => (
              <a className="link" key={key} href={social[key].url}>
                {social[key].name}
              </a>
            ))}
          </ul>
        </S.Links>
      </div>
    </div>

    {PoweredBy}
  </FooterStyled>
));

export default Footer;

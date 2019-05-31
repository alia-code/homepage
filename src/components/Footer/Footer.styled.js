import styled from 'styled-components';
import { mobile, black8 } from '../../styles';

export default styled('footer')`
  background-color: #fafafa;
  color: ${black8};

  @media ${mobile} {
    text-align: center;
  }

  .footer {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

export const Links = styled.article`
  text-align: right;
  a { margin: .2rem .5rem }

  @media ${mobile} {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const CompanyInfo = styled.article`
  @media ${mobile} {
    text-align: center;
  }
`;

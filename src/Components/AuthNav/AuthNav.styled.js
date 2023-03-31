import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/images/authNavPage/authNavBackground.jpg";

export const Container = styled.div`
  padding: 0 35px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  ${(p) => p.theme.flexCentered}
`;

export const Box = styled.div`
  color: ${(p) => p.theme.colors.secondaryText};
  text-align: center;
  width: 540px;
  height: 121px;
`;

export const Svg = styled.div`
  margin-bottom: 28px;
  ${(p) => p.theme.sizes.tablet} {
    margin-bottom: 44px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 14px;
  font-weight: ${(p) => p.theme.fontWeights.semiBold};
  font-size: ${(p) => p.theme.fontSizes.m};
  line-height: 1;
  letter-spacing: -0.02em;

  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.l};
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.28;
  letter-spacing: -0.02em;
  ${(p) => p.theme.sizes.tablet} {
    font-size: ${(p) => p.theme.fontSizes.sm};
    line-height: 1.33;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 299.98px) {
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  :first-child {
    margin-bottom: 18px;

    @media screen and (min-width: 299.98px) {
      margin-right: 18px;
    }
  }
`;

export const Button = styled(Link)`
  font-size: 14px;
  line-height: 1.5;
  display: block;
  background-color: transparent;
  padding: 12px 24px;
  border-radius: 24px 44px;
  border: ${(p) => p.theme.borders.secondaryButtonBorder};

  ${(p) => p.theme.sizes.tablet} {
    font-size: 16px;
    line-height: 1.5;
    padding: 22px 44px;
  }

  :hover {
    background-color: ${(p) => p.theme.colors.accentColor};
    border-color: transparent;
  }
`;

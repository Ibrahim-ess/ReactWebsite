import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  ${
  {
    /*changement de couleur page project*/
  }
  }
  .content .years .topic {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  .project {
    box-shadow: 0 2px 4px 2px ${({ theme }) => theme.boxShadow};
    background:${({ theme }) => theme.body};
    transition: all 0.40s linear;
  }

  .project:hover {
    box-shadow: 0 8px 16px 4px  ${({ theme }) => theme.boxShadow};
  } 

  ${
  {
    /*changement de couleur page teaching*/
  }
  }
  .content .years .year {
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }

  .teaching-content {
    box-shadow: 0 2px 4px 2px ${({ theme }) => theme.boxShadow};
    transition: all 0.40s linear;
  }

  .teaching-content:hover {
    box-shadow: 0 8px 16px 4px ${({ theme }) => theme.boxShadow};
  }

  .link-descr {
    color:${({ theme }) => theme.text};
  }

  .links a:hover {
    color: ${({ theme }) => theme.text};
  }

  .links a {
    border: 0.5px solid ${({ theme }) => theme.text};
  }

  ${
  {
    /*changement de couleur de la partie gauche (fixe)*/
  }
  }

  .chercheur-contact a {
    color:${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  .border {
    border-right: 1px solid ${({ theme }) => theme.border};
  }

  ${
  {
    /*changement de couleur du header*/
  }
  }

  .c-header {
    border-bottom: 1px solid ${({ theme }) => theme.text};
  }

  .c-header__menu-item {
    color:${({ theme }) => theme.text};
    transition: all 0.40s linear;
  }

  .c-header__menu-item:hover {
    font-size:28px;
    color:${({ theme }) => theme.border};
    transition: all 0.30s linear;

  }

  ${
  {
    /*changement de couleur du footer*/
  }
  }

  .c-footer {
    border-top: 1px solid ${({ theme }) => theme.text};
  }

  ${
  {
    /*changement de couleur du homepage*/
  }
  }
  .divider {
    background-color:${({ theme }) => theme.border};
  }

  .c-homepage__name::before {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .c-homepage__name::after {
    border-bottom: 1px solid ${({ theme }) => theme.border};
  }

  .links-next p {
    border: 0.5px solid ${({ theme }) => theme.text};
  }

  ${
  {
    /*changement de couleur des lignes des pages Détails*/
  }
  }

  tr:nth-child(even) {
    background-color: ${({ theme }) => theme.lineDetails};
  }

  a{
    color: ${({ theme }) => theme.text};
  }

  `;

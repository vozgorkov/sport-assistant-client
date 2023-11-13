import React from 'react';
import { Container } from './header.styles';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => <Container>{title}</Container>;

export default Header;

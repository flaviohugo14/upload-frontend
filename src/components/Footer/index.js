import React from 'react';

import { Container } from './styles';

import { GoMarkGithub } from "react-icons/go";


const Footer = () => (
    <Container>
        <ul>
            <li>
                <div>
                <a target="_blank" href="https://devtech-85da1.firebaseapp.com/"> Copyright By Flávio Pangrácio </a>
               
                </div> &nbsp;&nbsp;
                <div class="git">
                    <a href="https://github.com/flaviohugo14" target="_blank">
                <GoMarkGithub size={18}></GoMarkGithub>
                    </a>&nbsp;Github
                </div>
            </li>
    </ul>
    </Container>
);

export default Footer;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
    :root{
    --primary-color: black; 
    --secondary-color: red; 
    --global-spacer-small: 5px; 
    --global-spacer-medium: 10px; 
    --global-spacer-big: 15px;
    --main-background: #FFFFFF; 
    --secondary-background: #F0F0F0; 
    --main-grey: #888888; 
    --main-pastel: #FFE8DF; 
    }
    html {
        box-sizing: border-box;
        background-color: var(--main-background);
        padding: 0 150px;
        @media (max-width: 1000px) {
            padding: 0 var(--global-spacer-big)
        }
    }

    /* Only using * omits pseudo elements so specifically include these  */

    
    * , *:before, *:after {
    box-sizing: inherit;
    }
`;

export default GlobalStyle;

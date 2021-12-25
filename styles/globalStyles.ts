import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
    :root{


        --primary-color: black; 
        --secondary-color: red; 
        --global-spacer-small: 5px; 
        --global-spacer-medium: 10px; 
        --global-spacer-big: 15px; 

    }
    html {
    box-sizing: border-box;
    }

    /* Only using * omits pseudo elements so specifically include these  */

    
    * , *:before, *:after {
    box-sizing: inherit;
    }
`;

export default GlobalStyle;

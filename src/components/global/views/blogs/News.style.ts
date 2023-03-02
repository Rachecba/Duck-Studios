import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const Banner = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: black;

    .background-image {
        position:absolute;
        left:0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        filter: blur(3px);
        -webkit-filter: blur(3px);
        opacity: 0.7;
    }
`

export const BannerTitle = styled.div`
    z-index: 5;
    width: 60%;
    height: inherit;
    padding-right: 0;
    padding-left: 0;
    margin-left: 6rem;
    color: white;
    position: inherit;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${(props) => props.theme.breakpoints.down('md')} {
        margin-left: 1rem;
        width: 100% !important;
        padding-right: 3rem;
        padding-left: 1rem;
    }

    .text {
        width: 100%;
        
        h1 {
            font-family: 'Mulish', sans-serif !important;
            font-weight: bold;
            letter-spacing: 4.93px;
            font-size: 3.5rem;
            text-transform: uppercase;

            ${(props) => props.theme.breakpoints.down('sm')} {
                font-size: 1.6rem;
            }
        }

        p {
            font-family: montserrat, sans-serif;
            letter-spacing: 1.11px;
            font-size: 1rem;
            font-weight: 300;
            margin-top: 1.5rem;
            text-align: justify;

            ${(props) => props.theme.breakpoints.down('md')} {
               width: 100%;
               font-size: 0.9rem;
            }
        }

        .button {
            margin-top: 3rem;

            button {
                font-family: montserrat, sans-serif;
                font-weight: 500;
                font-size: 1rem;
                letter-spacing: 1.11px;
                background: #2680EB 0% 0% no-repeat padding-box;
                border-radius: 7px;
                color: white;
                border: none;
                width: 14rem;
                height: 3rem;
                transition: all 0.5s ease-in-out;

                &:hover {
                    width: 16rem;
                    height: 3.3rem;
                    background-color: #cc790c;
                    font-weight: 500;
                    transition: all 0.5s ease-in-out;
                }
            }
        }
    }
`

export const PageTitle = styled.div`

    margin-left: 4rem;
    margin-top: 6rem;
    margin-bottom: 2rem;

    ${(props) => props.theme.breakpoints.down('sm')} {
        margin-left: 1.5rem;
        margin-bottom: 2rem;
    }

    color: white;

    h1 {
        font-family: 'Mulish', sans-serif !important;
        font-weight: bold;
        letter-spacing: 4.23px;

        &:after {
            margin-top: 1rem;
            content: ' ';
            display: block;
            border: 1px solid #2680EB;
            width: 20.5%;

            ${(props) => props.theme.breakpoints.down('sm')} {
                width: 80%;
            }
        }
    }
`

export const Blogs = styled.div`
    .blogContainer:nth-child(odd) {
        background-color: #0C0C0C;
    }

    .blogContainer {
        background-color: #070707;
    }
`
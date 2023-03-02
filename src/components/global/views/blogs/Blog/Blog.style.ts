import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 4rem;
    width: 100%;

    ${(props) => props.theme.breakpoints.down('lg')} {
        display: block;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
        padding: 2rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`

export const ImageContainer = styled.div`

    width: 30%;

    ${(props) => props.theme.breakpoints.down('lg')} {
        width: 100%;
    }

    img {
        width: 100%;
        border-radius: 10px;
    }
`

export const DescriptionContainer = styled.div`
    width: 70%;
    height: 100%;
    padding-left: 3.5rem;

    ${(props) => props.theme.breakpoints.down('lg')} {
        padding: 0;
        padding-top: 2rem;
        width: 100%;
    }

    color: white;

    .about {
        h1 {
            font-family: 'Mulish', sans-serif;
            font-size: 2.1rem;

            ${(props) => props.theme.breakpoints.down('sm')} {
                font-size: 1.8rem;
            }
        }

        p {
            font-family: montserrat, sans-serif;
            letter-spacing: 1.11px;
            font-wsize: 1.5rem;
            margin-top: 1.2rem;
            text-align: justify;

            ${(props) => props.theme.breakpoints.down('sm')} {
                font-size: 1rem;
            }
        }
    }

    .buttonContainer {
        display: flex;
        align-items: end;
        height: 100%;

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

            a {
                color: inherit;
                text-decoration: none;
            }

            &:hover {
                width: 16rem;
                height: 3.3rem;
                background-color: #cc790c;
                font-weight: 500;
                transition: all 0.5s ease-in-out;
            }
        }
    }
`
import styled from "styled-components";

export const Container  = styled.div`
    p{
        font-size: 13px;
        color: #b8b8d4;

    }
    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }

    label{
        font-size: 13px;
        
        input{
            display: block;
            margin-top: 7px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 15px;
            background-color: #02044a;
        }
    }

    span{
        font-size: 12px;
        color: red;
        margin-left: 20px;
    }

    a{
        display: block;
        width: 160px;
        height: 40px;
        line-height: 40px;
        padding: 10px 5px;
        margin-top: 20px;
        background-color: #25cd89;
        color: #FFF;
        border-radius: 5px;
        text-decoration: none;
        text-align: center;
        font-weight: bold;
        font-family: Arial;
    }
`;
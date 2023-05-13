import styled from "styled-components";

export const PageArea = styled.div`
    
   
    
    form{
        max-width: 400px;
        background-color: white;
        border-radius: 3px;
        padding: 5px 20px;
        box-shadow: 0px 0px 3px #333;
       

        .area{
            display: flex;
            align-items: center;
            padding: 10px;
            max-width: 500px;


            .area-title{
                
                text-align: center;
                font-size: 14px;
                font-weight: bold;
                color: #ccc;
            }
            .area-input{
                flex: 1;
                  
                input{   
                    font-size: 14px;
                    padding: 10px;
                    border:  1px solid #DDD;
                    border-radius: 20px;
                    outline: 0;
                    transition: all ease .4s;

                    &:focus{
                        border: 1px solid #333;
                        color:  #333;
                    }
                }
                
                button{
                    
                    background-color: #0089ff;
                    border: 0;
                    outline: 0;
                    padding: 5px 10px;
                    color: #fff;
                    font-size: 15px;
                    cursor: pointer;
                    
                    

                    &:hover{
                        background-color: #006fce;
                    }
                }
            }

        }
    }
`;
import styled from "styled-components";
export const Wrapper = styled.div`
  margin: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  justify-content: center;
  @media screen and (min-width: 630px) {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 16rem));
  }
`;
export const CardWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-left: 3px solid ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  min-width: 100%;
  display: flex;
  @media screen and (max-width: 630px) {
    flex-direction: column;
    text-align: center;
    min-width: 14rem;
  }
`;
export const CardImg = styled.img`
  width: 14rem;
  height: 11rem;
  object-fit: cover;
  width: 100%;
  height: 12rem;
`;
export const CardBody = styled.div`
  margin: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CardTitle = styled.h2`
  line-height: 1.4rem;
  margin-bottom: 0.5rem;
  margin-top: 0px;
  text-align: left;
`;
export const CardDescription = styled.div`
text-align:left;
&::before {
  content:'';
  display: block;
    ${({ icon }) => `background: url(${icon}) no-repeat;`}
width: 20px;
height: 20px;
float: left;
margin: 6px 6px 0 0;
line - height: 1px;
}`;

export const Status = styled.span`
  width: max-content;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 5px;
  border-radius: 40px;
  color: ${({ theme }) => theme.colors.secondaryBold};
`;
export const LowerSection = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: auto;
  gap: 10px;
`;

export const CardButton = styled.button`
  padding: 0px 20px 0px 20px;
  border-radius: 10px;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonIcon = styled.span`
  ${({ src }) => `background: url(${src}) no-repeat;`}
  float: left;
  width: 25px;
  height: 25px;
  vertical-align: sub;
`;

export const ButtonText = styled.span`
  vertical-align: sub;
`;

export const AttendeeImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

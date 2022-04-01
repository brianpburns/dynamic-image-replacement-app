import styled from 'styled-components';

export const CloseButton = styled.button`
  align-items: center;
  background: #252525;
  border: none;
  color: #fff;
  display: flex;
  font-size: 30px;
  height: 50px;
  justify-content: center;
  line-height: 30px;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
`;

export const Modal = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  left: 50%;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  z-index: 23;
`;

export const Overlay = styled.div`
  background: #000;
  bottom: 0;
  left: 0;
  opacity: 0.3;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 22;
`;

import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  left: string;
  right: string;
  content: string;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  onConfirm,
  right,
  left,
  title,
  content,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        {title && <Title>{title}</Title>}
        <Message>
          {content.split('<br/>').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </Message>
        <ButtonContainer>
          <CancelButton onClick={onClose}>{left}</CancelButton>
          <ConfirmButton onClick={onConfirm}>{right}</ConfirmButton>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: 100%;
  height: 100%;
  background: rgba(217, 217, 217, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;

const ModalContainer = styled.div`
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  width: 90%;
  max-width: 450px;
  border-radius: 1.3rem;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: -4px -4px 20px 0px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const Title = styled.div`
  margin-top: 2rem;
  ${({ theme }) => theme.fontStyles.headingSB};
`;

const Message = styled.div`
  flex-direction: column;
  ${({ theme }) => theme.fontStyles.headingR};
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ButtonContainer = styled.div`
  bottom: 0;
  display: grid;
  height: 6.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: auto;
  border-top: 0.1rem solid ${({ theme }) => theme.colors.black10};
`;

const CancelButton = styled.button`
  border-bottom-left-radius: 1.3rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-right: 0.1rem solid ${({ theme }) => theme.colors.black10};
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  border-bottom-right-radius: 1.3rem;
  color: ${({ theme }) => theme.colors.mainColor};
  background: ${({ theme }) => theme.colors.background};
  border: none;
  cursor: pointer;
`;

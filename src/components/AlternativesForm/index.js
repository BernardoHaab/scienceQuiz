import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-is-submitted='true']{
        cursor: not-allowed;
        &:hover {
            opacity: 1;
        }
    }
    &[data-selected='true'] {
      background-color: ${({ theme }) => theme.colors.primary};

    &[data-status='SUCCESS'] {
        border: 2px solid ${({ theme }) => theme.colors.success};
        background-color: ${({ theme }) => theme.colors.success};
    }
    &[data-status='ERROR'] {
        border: 2px solid ${({ theme }) => theme.colors.wrong};
        background-color: ${({ theme }) => theme.colors.wrong};
    }
    }
    &:focus {
      opacity: 1;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;

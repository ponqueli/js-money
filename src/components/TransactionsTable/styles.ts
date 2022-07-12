import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  overflow: auto;

  @media screen and (max-width: 69rem){
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      
      &.short-text{
        display: none;
      }
      
      @media screen and (max-width: 24rem){
        &.short-text{
          display: flex;
          padding: 0;
          justify-content: space-between;
          padding-bottom: 0.5rem;
        }
        &.hide-on-media{
          display: none;
        }
      }
    }

    td {
      border: solid 1px var(--shape);
      padding: 1rem 2rem;
      background: var(--shape);
      color: var(--text-body);
      border-style: none solid solid none;
      &:first-child {
        color: var(--text-title);
      }

      &.withdraw {
        color: var(--red);
      }

      &.deposit {
        color: var(--green);
      }

      @media screen and (max-width: 24rem){
        flex-direction: column;
        display: flex;
        padding: 0.25rem 1rem;
        &.deposit {
          font-size: 1.5rem;
        }
        &.withdraw {
          font-size: 1.5rem;
        }
        &.inline-media-screen-left{
          float: left;
        }
        &.inline-media-screen-right{
          text-align: end;
        }
      }
    }

    tr:first-child td:first-child { border-top-left-radius: 0.3125rem; }
    tr:first-child td:last-child { border-top-right-radius: 0.3125rem; }

    tr:last-child td:first-child { border-bottom-left-radius: 0.3125rem; }
    tr:last-child td:last-child { border-bottom-right-radius: 0.3125rem; }

    tr:first-child td { border-top-style: solid; }
    tr td:first-child { border-left-style: solid; }
  }
`;
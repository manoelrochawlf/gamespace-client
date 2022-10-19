import styled, { css } from 'styled-components';

export const Home = styled.section`
	${({ theme }) => css`
		background-color: ${theme.colors.baseBg1};
		color: ${theme.colors.textColor};
		
	`}
`;

export const HomeContent = styled.main`
	${() => css`
		width: calc(100% - 450px);
		padding: 20px;
		overflow: auto;
		height: 100vh;
		box-sizing: border-box;
	`}
`;

export const HomeHeaderDetails = styled.div`
	${() => css`
		display: flex;
		justify-content: space-between;
		align-items:center;
	`}
`;

export const HomeHeaderDetailsLogo = styled.h1`
	${({ theme }) => css`
		${theme.mixins.logoStyle};
		margin-left: 70px;
	`}
`;

export const HomeProductTitle = styled.h2`
	${({ theme }) => css`
		margin: 0;
		border-bottom: 1px solid ${theme.colors.baseLine};
		${theme.mixins.bodyStyle()};
		color: ${theme.colors.primaryColor};
		padding-bottom: 10px;
		b {
			position: relative;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				bottom: -13px;
				width: 100%;
				height: 4px;
				background-color: ${theme.colors.primaryColor};
				border-radius: 5rem;
			}
		}
	`}
`;

export const HomeProductList = styled.div`
	${() => css`
		margin-top: 25px;
		padding-bottom: 25px;
	`}
`;

export const HomeProductListGap = styled.div`
	${({ theme }) => css`
		width: 200px;
	`}
`;
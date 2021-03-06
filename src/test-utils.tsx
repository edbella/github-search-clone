import {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from "react-router-dom";
import { AuthenticationContextProvider } from './context/Authentication'
import queryMocks from './config/mock_queries';

const AllTheProviders: FC = ({children}) => {
  return (
    <AuthenticationContextProvider>
      <MockedProvider mocks={queryMocks}>
        <BrowserRouter>
          {children}
          </BrowserRouter>
      </MockedProvider>
    </AuthenticationContextProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
import {ReactElement} from 'react'
import {LayoutProps} from 'sanity'
import styled from 'styled-components'
export const Layout = (props: LayoutProps): ReactElement => {
  const LayoutWrapper = styled.div`
    *[data-testid='Media'] [data-border='true'] {
      box-shadow: none;
    }
  `

  return <LayoutWrapper> {props.renderDefault(props)} </LayoutWrapper>
}

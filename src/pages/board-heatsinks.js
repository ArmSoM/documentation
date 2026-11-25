import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HeatsinksRedirect() {
  const {hash} = useLocation();
  return <Redirect to={`${useBaseUrl('/sige-active-cooling-kit')}${hash}`} />;
}

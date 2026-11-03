import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AIMIORedirect() {
  const {hash} = useLocation();
  const anchor = hash ? `aim-io-${hash.slice(1)}` : 'aim-io';
  return <Redirect to={`${useBaseUrl('/armsom-aim7')}#${anchor}`} />;
}

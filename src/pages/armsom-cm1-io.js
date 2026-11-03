import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CM1IORedirect() {
  const {hash} = useLocation();
  return <Redirect to={`${useBaseUrl('/armsom-cm1')}${hash}`} />;
}

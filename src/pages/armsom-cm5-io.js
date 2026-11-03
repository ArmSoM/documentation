import React from 'react';
import {Redirect, useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CM5IORedirect() {
  const {hash} = useLocation();
  const anchor = hash ? `cm5-io-${hash.slice(1)}` : 'cm5-io';
  return <Redirect to={`${useBaseUrl('/armsom-cm5')}#${anchor}`} />;
}

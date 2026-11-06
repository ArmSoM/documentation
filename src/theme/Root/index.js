import React from 'react';
import ContactDock from '@site/src/components/ContactDock';

export default function Root({children}) {
  return <>{children}<ContactDock /></>;
}

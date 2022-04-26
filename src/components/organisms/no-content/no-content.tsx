import React from 'react';

import { Text } from '@atoms/text';

export const NoContent = () => {
  return <Text message={{ id: 'no_content' }} fontSize={30} opacity={0.5} />;
};

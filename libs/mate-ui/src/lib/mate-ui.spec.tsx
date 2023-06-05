import { render } from '@testing-library/react';

import MateUi from './mate-ui';

describe('MateUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MateUi />);
    expect(baseElement).toBeTruthy();
  });
});

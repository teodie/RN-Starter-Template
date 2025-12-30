import { render } from '@testing-library/react-native';

import Home, { CustomText } from '../src/app';

describe('<Home />', () => {
  test('Text renders correctly on HomeScreen', () => {
    const { getByText } = render(<Home />);

    getByText('Welcome!');
  });
});
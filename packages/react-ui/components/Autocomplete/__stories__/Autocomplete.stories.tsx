import React from 'react';

import { Gapped } from '../../Gapped';
import { Autocomplete } from '../Autocomplete';

export default { title: 'Autocomplete', parameters: { creevey: { skip: [true] } } };

export const Simple = () => <UncontrolledAutocomplete source={['One', 'Two', 'Three']} />;
Simple.story = { name: 'simple' };

export const WithRenderItem = () => (
  <UncontrolledAutocomplete
    source={['One', 'Two', 'Three']}
    renderItem={(x: string) => <div>Item: {x.toUpperCase()}</div>}
  />
);
WithRenderItem.story = { name: 'with renderItem' };

export const WithBigRenderItemWidth = () => (
  <UncontrolledAutocomplete
    source={['One', 'Two', 'Three']}
    renderItem={(x: string) => <div style={{ width: 400 }}>Item: {x.toUpperCase()}</div>}
  />
);
WithBigRenderItemWidth.story = { name: 'with big renderItem width' };

export const WithFixedMenuSize = () => (
  <UncontrolledAutocomplete
    source={[
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed.',
      'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.',
      'Donec lacus nunc, viverra nec.',
      'Sed lectus. Integer euismod lacus luctus magna.',
      'Suspendisse potenti.',
      ' Sed dignissim lacinia nunc.',
    ]}
    renderItem={(x: string) => <div>{x}</div>}
    menuWidth={400}
    menuMaxHeight={150}
  />
);
WithFixedMenuSize.story = { name: 'with fixed menu size' };

export const WithOnBlurOnFocusHandlers = () => <WithBlurFocusHandlersExample />;
WithOnBlurOnFocusHandlers.story = { name: 'with onBlur/onFocus handlers' };

class UncontrolledAutocomplete extends React.Component<any, any> {
  public state = {
    value: '',
  };

  public render() {
    return (
      <Autocomplete
        {...this.props}
        value={this.state.value}
        onValueChange={value => {
          this.setState({ value });
        }}
      />
    );
  }
}

class WithBlurFocusHandlersExample extends React.Component<any, any> {
  public state = {
    focusCount: 0,
    blurCount: 0,
  };
  public render() {
    return (
      <Gapped vertical>
        <UncontrolledAutocomplete
          onFocus={() => {
            const { focusCount } = this.state;
            this.setState({ focusCount: focusCount + 1 });
          }}
          onBlur={() => {
            const { blurCount } = this.state;
            this.setState({ blurCount: blurCount + 1 });
          }}
          source={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'.split(
            ' ',
          )}
        />
        <span>Focuses count: {this.state.focusCount}</span>
        <span>Blures count: {this.state.blurCount}</span>
      </Gapped>
    );
  }
}

export const WithMaxWidth = () => (
  <div style={{width: '600px'}}>
    <UncontrolledAutocomplete
      width="100%"
      source={['One', 'Two', 'Three']}
      renderItem={(x: string) => <div>Item: {x.toUpperCase()}</div>}
    />
  </div>
);
WithMaxWidth.story = { name: 'with max width' };

export const WithFixedWidth = () => (
  <UncontrolledAutocomplete
    width="200px"
    source={['One', 'Two', 'Three']}
    renderItem={(x: string) => <div>Item: {x.toUpperCase()}</div>}
  />
);
WithFixedWidth.story = { name: 'with fixed width' };

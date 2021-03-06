import React from 'react';
import { Button } from '@skbkontur/react-ui/components/Button';
import { Gapped } from '@skbkontur/react-ui/components/Gapped';
import { Input } from '@skbkontur/react-ui/components/Input';

import { text, ValidationContainer, ValidationInfo, ValidationWrapper } from '../../src';
import { Nullable } from '../../typings/Types';
import { ValidationState } from '../ValidationHelper';

interface SingleInputPageProps {
  initialValue?: string;
  validationType: ValidationInfo['type'];
}

interface SingleInputPageState {
  sending: boolean;
  value: string;
  validation: ValidationState;
}

export class SingleInputPage extends React.Component<SingleInputPageProps, SingleInputPageState> {
  public state: SingleInputPageState = {
    sending: false,
    value: this.props.initialValue || '',
    validation: 'none',
  };

  private container: ValidationContainer | null = null;

  public validate(): Nullable<ValidationInfo> {
    if (this.state.value.substr(0, 3) === 'bad') {
      return {
        message: 'incorrect value',
        type: this.props.validationType,
      };
    }
    return null;
  }

  public render() {
    return (
      <ValidationContainer ref={this.refContainer}>
        <div style={{ padding: 30 }}>
          <Gapped vertical>
            <ValidationWrapper data-tid="InputValidation" validationInfo={this.validate()} renderMessage={text()}>
              <Input data-tid={'Input'} value={this.state.value} onValueChange={value => this.setState({ value })} />
            </ValidationWrapper>
            <Gapped wrap verticalAlign="middle">
              <Button data-tid={'SubmitButton'} loading={this.state.sending} onClick={this.handleSubmit}>
                Submit
              </Button>
              <span data-tid={'ValidationState'}>{this.state.validation}</span>
            </Gapped>
          </Gapped>
        </div>
      </ValidationContainer>
    );
  }

  public handleSubmit = () => {
    this.setState({ sending: true, validation: 'validating' }, async () => {
      if (this.container) {
        const isValid = await this.container.validate();
        this.setState({ sending: false, validation: isValid ? 'valid' : 'invalid' });
      }
    });
  };

  private refContainer = (el: ValidationContainer | null) => (this.container = el);
}

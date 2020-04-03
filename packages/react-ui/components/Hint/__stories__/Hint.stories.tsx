import React from 'react';
import { StoryFn } from '@storybook/addons';
import { CSFStory } from 'creevey';

import { Hint } from '../Hint';
import { Gapped } from '../../Gapped';
import { Input } from '../../Input';
import { PopupPositions } from '../../../internal/Popup';
import { Textarea } from '../../Textarea';

export default {
  title: 'Hint',
  decorators: [(story: StoryFn<JSX.Element>) => <div style={{ padding: '100px 300px' }}>{story()}</div>],
};

export const Playground = () => <Hint text="Hello!">Plain hint with knobs</Hint>;
Playground.story = { name: 'playground', parameters: { creevey: { skip: [true] } } };

export const TooMuchHints = () => (
  <Gapped gap={5}>
    {new Array(252).fill(null).map((_el, i) => (
      <Hint text="test" key={i}>
        Hover me!
      </Hint>
    ))}
  </Gapped>
);
TooMuchHints.story = { name: 'too much hints', parameters: { creevey: { skip: [true] } } };

export const Default = () => (
  <Hint text="Something will never be changed" manual opened>
    <span className="hint-content">Ich Liebe dich</span>
  </Hint>
);
Default.story = { name: 'default' };

export const Left = () => (
  <Hint pos="left" text="Something will never be changed" manual opened>
    <span className="hint-content">Je t&apos;aime</span>
  </Hint>
);
Left.story = { name: 'left' };

export const Right = () => (
  <Hint pos="right" text="Something will never be changed" manual opened>
    <span className="hint-content">Ti voglio bene</span>
  </Hint>
);
Right.story = { name: 'right' };

export const Bottom = () => (
  <Hint pos="bottom" text="Something will never be changed" manual opened>
    <span className="hint-content">Te amo</span>
  </Hint>
);
Bottom.story = { name: 'bottom' };

export const WithLargeWord = () => (
  <div style={{ marginTop: -100 }}>
    <Hint
      pos="bottom"
      manual
      opened
      text="Используется на элементах, которые не вмещают полноеназваниеилитребуютнебольшогопояснения. Например: панель действий, иконки без текста, сокращенные слишком длинные..."
    >
      <span className="hint-content">Там длинное слово</span>
    </Hint>
  </div>
);
WithLargeWord.story = { name: 'with large word' };

export const WithBlockElement = () => (
  <Hint pos="right" text="Something will never be changed" manual opened>
    <div
      className="hint-content"
      style={{
        width: 150,
        border: '1px solid',
      }}
    >
      <span>Ti voglio bene</span>
    </div>
  </Hint>
);
WithBlockElement.story = { name: 'with block-element' };

export const With100WidthInput = () => (
  <span style={{ width: '400px', display: 'inline-block' }}>
    <Hint pos="top" text="Something will never be changed" manual opened>
      <Input width="100%" />
    </Hint>
  </span>
);
With100WidthInput.story = { name: 'with 100%-width input' };

export const HintWithoutAnimations = () => (
  <div>
    <Hint text="No disableAnimations prop">
      <button>Hover me (No disableAnimations prop)</button>
    </Hint>
    <Hint text="disableAnimations={false}" disableAnimations={false}>
      <button>Hover me (disableAnimations: false)</button>
    </Hint>
    <Hint text="disableAnimations={true}" disableAnimations={true}>
      <button>Hover me (disableAnimations: true)</button>
    </Hint>
  </div>
);
HintWithoutAnimations.story = { name: 'hint without animations', parameters: { creevey: { skip: [true] } } };

export const HintsWithoutWrapperAroundInlineBlockWith50Width: CSFStory<JSX.Element> = () => (
  <div style={{ margin: '0 -150px', padding: '50px 0', width: '500px' }}>
    {PopupPositions.reduce(
      (child, position) => (
        <Hint useWrapper={false} text={position} pos={position} manual opened>
          {child}
        </Hint>
      ),
      <Textarea rows={10} resize="none" width="50%">
        {"I'm inline-block with 50% width.\n\nHover me!"}
      </Textarea>,
    )}
  </div>
);
HintsWithoutWrapperAroundInlineBlockWith50Width.story = {
  name: 'Hints without wrapper around inline-block with 50% width',
  parameters: { creevey: { delay: 500 } },
};

const changingTextTimeout = 0;

export const HintWithDynamicValueShortToLong: CSFStory<JSX.Element> = () => {
  let timeout: number;
  const [value, updateValue] = React.useState('short');
  const [trigger, updateTrigger] = React.useState(1);
  const [isOpened, updateIsOpened] = React.useState(false);

  const onClick = () => {
    updateIsOpened(!isOpened);
    updateValue('short');

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      updateTrigger(trigger + 1);
      updateValue('new long value after programmatically changing');
    }, changingTextTimeout);
  };

  return (
    <>
      <div
        style={{
          padding: '5px 5px 5px 5px',
          position: 'absolute',
          border: '1px solid black',
          right: '50%',
          top: '100px',
        }}
      >
        <Hint text={value} pos="top" disableAnimations manual opened>
          hint here
        </Hint>
      </div>
      <div
        id="hint-wrapper"
        style={{
          padding: '80px 5px 5px 160px',
          position: 'absolute',
          border: '1px solid black',
          right: '0',
          top: '100px',
        }}
      >
        <Hint text={value} pos="top" disableAnimations manual opened={isOpened}>
          <div id="hint-trigger" onClick={onClick} key={trigger} style={{ border: '1px solid black' }}>
            hint here
          </div>
        </Hint>
      </div>
    </>
  );
};

HintWithDynamicValueShortToLong.story = {
  parameters: {
    creevey: {
      tests: {
        async hintNearWindowBorderAfterTextChanging() {
          const hintTrigger = await this.browser.findElement({ css: '#hint-trigger' });
          const hintWrapper = await this.browser.findElement({ css: '#hint-wrapper' });

          await this.browser
            .actions({ bridge: true })
            .click(hintTrigger)
            .perform();
          await new Promise(r => setTimeout(r, changingTextTimeout));

          const hintedElement = await hintWrapper.takeScreenshot();

          await this.expect({ hintedElement }).to.matchImages();
        },
      },
    },
  },
};

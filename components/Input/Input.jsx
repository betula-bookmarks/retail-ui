var React = require('react');

var filterProps = require('../filterProps');

var PropTypes = React.PropTypes;

require('./Input.less');
var cx = require('../cx')('RTInput');

var polyfillPlaceholder = false;
if (typeof window !== 'undefined' && window.document
    && window.document.createElement) {
  polyfillPlaceholder = !('placeholder' in document.createElement('input'));
}

const INPUT_PASS_PROPS = {
  placeholder: true,
};

var Input = React.createClass({
  propTypes: {
    placeholder: PropTypes.string,

    /**
     * Иконка слева инпута.
     */
    leftIcon: PropTypes.element,

    /**
     * Иконка справа инпута.
     */
    rightIcon: PropTypes.element,

    /**
     * Вызывается при вводе каждого символа.
     */
    onChange: PropTypes.func,
  },

  render() {
    var labelProps = {
      className: cx({
        '': true,
        'disabled': this.props.disabled,
        'padLeft': this.props.leftIcon,
        'padRight': this.props.rightIcon,
      }),
      style: {},
    };
    if (this.props.width) {
      labelProps.style.width = this.props.width;
    }

    var placeholder = null;
    if (this.state.polyfillPlaceholder && this.props.placeholder
        && !this.state.value) {
      placeholder = (
        <div className={cx('placeholder')}>{this.props.placeholder}</div>
      );
    }

    var leftIcon = null;
    if (this.props.leftIcon) {
      leftIcon = <div className={cx('leftIcon')}>{this.props.leftIcon}</div>;
    }
    var rightIcon = null;
    if (this.props.rightIcon) {
      rightIcon = (
        <div className={cx('rightIcon')}>{this.props.rightIcon}</div>
      );
    }

    const inputProps = filterProps(this.props, INPUT_PASS_PROPS);

    return (
      <label {...labelProps}>
        <input className={cx('input')} {...inputProps} value={this.state.value}
            onChange={e => this.handleChange(e)} />
        {placeholder}
        {leftIcon}
        {rightIcon}
      </label>
    );
  },

  getDefaultProps() {
    return {};
  },

  getInitialState() {
    return {
      value: this.props.value !== undefined ? this.props.value : '',
    };
  },

  componentDidMount() {
    if (polyfillPlaceholder) {
      this.setState({polyfillPlaceholder: true});
    }
  },

  componentWillReceiveProps(props) {
    if (props.value !== undefined) {
      this.setState({value: props.value});
    }
  },

  handleChange(event) {
    if (this.props.value === undefined) {
      this.setState({value: event.target.value});
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }
  },
});

module.exports = Input;

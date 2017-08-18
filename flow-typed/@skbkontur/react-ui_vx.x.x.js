// flow-typed signature: 095ce1b5d1c43c920c1efa3e92a8558a
// flow-typed version: <<STUB>>/@skbkontur/react-ui_v^0.8.0/flow_v0.48.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   '@skbkontur/react-ui'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

/**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 */
declare module '@skbkontur/react-ui/Autocomplete' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Button' {
  declare export default class Button extends React$Component {
    props: {|
      active?: boolean,
      arrow?: boolean,
      autoFocus?: boolean,
      checked?: boolean,
      children?: string,
      disabled?: boolean,
      focused?: boolean,
      icon?: string,
      loading?: boolean,
      narrow?: boolean,
      onClick?: (e: SyntheticMouseEvent) => void,
      onKeyDown?: (e: SyntheticKeyboardEvent) => void,
      onMouseEnter?: (e: SyntheticMouseEvent) => void,
      onMouseLeave?: (e: SyntheticMouseEvent) => void,
      onMouseOver?: (e: SyntheticMouseEvent) => void,
      size?: 'small' | 'medium' | 'large',
      type?: 'button' | 'submit' | 'reset',
      use?: 'default' | 'primary' | 'success' | 'danger' | 'pay' | 'link',
      width?: number | string
    |}
  }
}

declare module '@skbkontur/react-ui/Center' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Checkbox' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/ComboBox' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/ComboBoxOld' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/CustomComboBox' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/DatePicker' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/DateSelect' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Dropdown' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/FxInput' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Gapped' {
  declare export default class Gapped extends React$Component {
    props: {|
      gap?: number,
      vertical?: boolean,
      children: React.Element<mixed>
    |}
  }
}

declare module '@skbkontur/react-ui/Group' {
  declare export default class Group extends React$Component {
    props: {|
      width?: string | number,
      children: React.Element<mixed>
    |}
  }
}

declare module '@skbkontur/react-ui/Hint' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Icon' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Input' {
  declare export default class Input extends React$Component {
    props: {|
      align?: 'left' | 'center' | 'right',
      alwaysShowMask?: boolean,
      autoFocus?: boolean,
      borderless?: boolean,
      disabled?: boolean,
      error?: boolean,
      id?: string,
      leftIcon?: React.Element<mixed>,
      mainInGroup?: boolean,
      mask?: string,
      maskChar?: string,
      maxLength?: number | string,
      placeholder?: string,
      rightIcon?: React.Element<mixed>,
      size?: 'small' | 'medium' | 'large',
      title?: string,
      type?: 'password' | 'text',
      value: string,
      warning?: boolean,
      width?: number | string,
      onBlur?: (e: SyntheticFocusEvent) => void,
      onChange?: (e: { target: { value: string } }, v: string) => void,
      onCopy?: (e: SyntheticClipboardEvent) => void,
      onCut?: (e: SyntheticClipboardEvent) => void,
      onFocus?: (e: SyntheticFocusEvent) => void,
      onInput?: (e: SyntheticInputEvent) => void,
      onKeyDown?: (e: SyntheticKeyboardEvent) => void,
      onKeyPress?: (e: SyntheticKeyboardEvent) => void,
      onKeyUp?: (e: SyntheticKeyboardEvent) => void,
      onPaste?: (e: SyntheticFocusEvent) => void,
      onMouseEnter?: (e: SyntheticMouseEvent) => void,
      onMouseLeave?: (e: SyntheticMouseEvent) => void,
      onMouseOver?: (e: SyntheticMouseEvent) => void
    |},

    setSelectionRange: (start: number, end: number) => void
  }
}

declare module '@skbkontur/react-ui/Kebab' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Kladr' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/browserNormalizer' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/Colors' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/dom/addClass' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/dom/getComputedStyle' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/dom/getScrollWidth' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/dom/removeClass' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/events/stopPropagation' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/LayoutEvents' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/listenFocusOutside' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/net/fetch-cors' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/pluralize' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/lib/Upgrades' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Link' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Loader' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Logotype' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/MenuHeader' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/MenuItem' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/MenuSeparator' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Modal' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/PhoneInput' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Popup' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Radio' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/RadioGroup' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/RenderContainer' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/RenderLayer' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/ScrollContainer' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/SearchSelect' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Select' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Spinner' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Sticky' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Tabs' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Textarea' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Toast' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Toggle' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/Tooltip' {
  declare module.exports: any
}

declare module '@skbkontur/react-ui/TopBar' {
  declare module.exports: any
}

// Filename aliases
declare module '@skbkontur/react-ui/Autocomplete.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Autocomplete'>
}
declare module '@skbkontur/react-ui/Button.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Button'>
}
declare module '@skbkontur/react-ui/Center.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Center'>
}
declare module '@skbkontur/react-ui/Checkbox.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Checkbox'>
}
declare module '@skbkontur/react-ui/ComboBox.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/ComboBox'>
}
declare module '@skbkontur/react-ui/ComboBoxOld.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/ComboBoxOld'>
}
declare module '@skbkontur/react-ui/components/all.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/all'>
}
declare module '@skbkontur/react-ui/components/Autocomplete/Autocomplete.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Autocomplete/Autocomplete.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Autocomplete/Autocomplete.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Autocomplete/Autocomplete'
  >
}
declare module '@skbkontur/react-ui/components/Autocomplete/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Autocomplete/index'
  >
}
declare module '@skbkontur/react-ui/components/Button/Button.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Button/Button.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Button/Button.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Button/Button'
  >
}
declare module '@skbkontur/react-ui/components/Button/Corners.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Button/Corners'
  >
}
declare module '@skbkontur/react-ui/components/Button/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Button/index'
  >
}
declare module '@skbkontur/react-ui/components/Center/Center.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Center/Center'
  >
}
declare module '@skbkontur/react-ui/components/Center/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Center/index'
  >
}
declare module '@skbkontur/react-ui/components/Checkbox/Checkbox.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Checkbox/Checkbox.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Checkbox/Checkbox.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Checkbox/Checkbox'
  >
}
declare module '@skbkontur/react-ui/components/Checkbox/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Checkbox/index'
  >
}
declare module '@skbkontur/react-ui/components/ComboBox/ComboBox.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ComboBox/ComboBox'
  >
}
declare module '@skbkontur/react-ui/components/ComboBox/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ComboBox/index'
  >
}
declare module '@skbkontur/react-ui/components/ComboBoxOld/ComboBox.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ComboBoxOld/ComboBox.adapter'
  >
}
declare module '@skbkontur/react-ui/components/ComboBoxOld/ComboBox.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ComboBoxOld/ComboBox'
  >
}
declare module '@skbkontur/react-ui/components/ComboBoxOld/ComboBoxRenderer.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ComboBoxOld/ComboBoxRenderer'
  >
}
declare module '@skbkontur/react-ui/components/ComboBoxOld/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ComboBoxOld/index'
  >
}
declare module '@skbkontur/react-ui/components/CustomComboBox/ComboBoxView.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/CustomComboBox/ComboBoxView'
  >
}
declare module '@skbkontur/react-ui/components/CustomComboBox/CustomComboBox.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/CustomComboBox/CustomComboBox'
  >
}
declare module '@skbkontur/react-ui/components/CustomComboBox/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/CustomComboBox/index'
  >
}
declare module '@skbkontur/react-ui/components/CustomComboBox/reducer/autocomplete.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/CustomComboBox/reducer/autocomplete'
  >
}
declare module '@skbkontur/react-ui/components/CustomComboBox/reducer/default.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/CustomComboBox/reducer/default'
  >
}
declare module '@skbkontur/react-ui/components/CustomComboBox/reducer/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/CustomComboBox/reducer/index'
  >
}
declare module '@skbkontur/react-ui/components/cx.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/cx'>
}
declare module '@skbkontur/react-ui/components/DatePicker/Calendar.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/Calendar'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/CalendarCell.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/CalendarCell'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/DateInput.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/DateInput'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/dateParser.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/dateParser'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/DatePicker.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/DatePicker.adapter'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/DatePicker.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/DatePicker'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/index'
  >
}
declare module '@skbkontur/react-ui/components/DatePicker/Picker.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DatePicker/Picker'
  >
}
declare module '@skbkontur/react-ui/components/DateSelect/DateSelect.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DateSelect/DateSelect'
  >
}
declare module '@skbkontur/react-ui/components/DateSelect/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DateSelect/index'
  >
}
declare module '@skbkontur/react-ui/components/Dropdown/Dropdown.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Dropdown/Dropdown'
  >
}
declare module '@skbkontur/react-ui/components/Dropdown/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Dropdown/index'
  >
}
declare module '@skbkontur/react-ui/components/DropdownContainer/DropdownContainer.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/DropdownContainer/DropdownContainer'
  >
}
declare module '@skbkontur/react-ui/components/ensureOldIEClassName.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ensureOldIEClassName'
  >
}
declare module '@skbkontur/react-ui/components/filterProps.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/filterProps'>
}
declare module '@skbkontur/react-ui/components/FxInput/FxInput.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/FxInput/FxInput.adapter'
  >
}
declare module '@skbkontur/react-ui/components/FxInput/FxInput.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/FxInput/FxInput'
  >
}
declare module '@skbkontur/react-ui/components/FxInput/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/FxInput/index'
  >
}
declare module '@skbkontur/react-ui/components/Gapped/Gapped.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Gapped/Gapped'
  >
}
declare module '@skbkontur/react-ui/components/Gapped/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Gapped/index'
  >
}
declare module '@skbkontur/react-ui/components/Group/Group.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Group/Group'>
}
declare module '@skbkontur/react-ui/components/Group/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Group/index'>
}
declare module '@skbkontur/react-ui/components/Hint/Hint.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Hint/Hint'>
}
declare module '@skbkontur/react-ui/components/Hint/HintBox.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Hint/HintBox'
  >
}
declare module '@skbkontur/react-ui/components/Hint/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Hint/index'>
}
declare module '@skbkontur/react-ui/components/Icon/20px/Icon.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Icon/20px/Icon'
  >
}
declare module '@skbkontur/react-ui/components/Icon/20px/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Icon/20px/index'
  >
}
declare module '@skbkontur/react-ui/components/Icon/Icon.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Icon/Icon'>
}
declare module '@skbkontur/react-ui/components/Icon/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Icon/index'>
}
declare module '@skbkontur/react-ui/components/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/index'>
}
declare module '@skbkontur/react-ui/components/Input/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Input/index'>
}
declare module '@skbkontur/react-ui/components/Input/Input.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Input/Input.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Input/Input.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Input/Input'>
}
declare module '@skbkontur/react-ui/components/internal/cross.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/internal/cross'
  >
}
declare module '@skbkontur/react-ui/components/internal/InputLikeText/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/internal/InputLikeText/index'
  >
}
declare module '@skbkontur/react-ui/components/internal/InputLikeText/InputLikeText.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/internal/InputLikeText/InputLikeText'
  >
}
declare module '@skbkontur/react-ui/components/internal/types.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/internal/types'
  >
}
declare module '@skbkontur/react-ui/components/internal/withFocusOutside.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/internal/withFocusOutside'
  >
}
declare module '@skbkontur/react-ui/components/Kebab/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Kebab/index'>
}
declare module '@skbkontur/react-ui/components/Kebab/Kebab.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Kebab/Kebab'>
}
declare module '@skbkontur/react-ui/components/Kladr/AddressModal.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Kladr/AddressModal'
  >
}
declare module '@skbkontur/react-ui/components/Kladr/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Kladr/index'>
}
declare module '@skbkontur/react-ui/components/Kladr/Kladr.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Kladr/Kladr'>
}
declare module '@skbkontur/react-ui/components/Kladr/KladrAPI.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Kladr/KladrAPI'
  >
}
declare module '@skbkontur/react-ui/components/Kladr/Types.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Kladr/Types'>
}
declare module '@skbkontur/react-ui/components/Kladr/util.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Kladr/util'>
}
declare module '@skbkontur/react-ui/components/Link/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Link/index'>
}
declare module '@skbkontur/react-ui/components/Link/Link.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Link/Link.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Link/Link.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Link/Link'>
}
declare module '@skbkontur/react-ui/components/Loader/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Loader/index'
  >
}
declare module '@skbkontur/react-ui/components/Loader/Loader.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Loader/Loader'
  >
}
declare module '@skbkontur/react-ui/components/Logotype/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Logotype/index'
  >
}
declare module '@skbkontur/react-ui/components/Logotype/Logotype.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Logotype/Logotype'
  >
}
declare module '@skbkontur/react-ui/components/Menu/isActiveElement.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Menu/isActiveElement'
  >
}
declare module '@skbkontur/react-ui/components/Menu/Menu.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Menu/Menu'>
}
declare module '@skbkontur/react-ui/components/MenuHeader/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/MenuHeader/index'
  >
}
declare module '@skbkontur/react-ui/components/MenuHeader/MenuHeader.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/MenuHeader/MenuHeader'
  >
}
declare module '@skbkontur/react-ui/components/MenuItem/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/MenuItem/index'
  >
}
declare module '@skbkontur/react-ui/components/MenuItem/MenuItem.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/MenuItem/MenuItem'
  >
}
declare module '@skbkontur/react-ui/components/MenuSeparator/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/MenuSeparator/index'
  >
}
declare module '@skbkontur/react-ui/components/MenuSeparator/MenuSeparator.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/MenuSeparator/MenuSeparator'
  >
}
declare module '@skbkontur/react-ui/components/Modal/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Modal/index'>
}
declare module '@skbkontur/react-ui/components/Modal/Modal.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Modal/Modal.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Modal/Modal.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Modal/Modal'>
}
declare module '@skbkontur/react-ui/components/PhoneInput/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/PhoneInput/index'
  >
}
declare module '@skbkontur/react-ui/components/PhoneInput/PhoneInput.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/PhoneInput/PhoneInput'
  >
}
declare module '@skbkontur/react-ui/components/polyfillPlaceholder.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/polyfillPlaceholder'
  >
}
declare module '@skbkontur/react-ui/components/Popup/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Popup/index'>
}
declare module '@skbkontur/react-ui/components/Popup/Popup.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Popup/Popup'>
}
declare module '@skbkontur/react-ui/components/Popup/PopupHelper.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Popup/PopupHelper'
  >
}
declare module '@skbkontur/react-ui/components/Popup/PopupPin.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Popup/PopupPin'
  >
}
declare module '@skbkontur/react-ui/components/Radio/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Radio/index'>
}
declare module '@skbkontur/react-ui/components/Radio/Radio.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Radio/Radio'>
}
declare module '@skbkontur/react-ui/components/RadioGroup/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/RadioGroup/index'
  >
}
declare module '@skbkontur/react-ui/components/RadioGroup/RadioGroup.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/RadioGroup/RadioGroup.adapter'
  >
}
declare module '@skbkontur/react-ui/components/RadioGroup/RadioGroup.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/RadioGroup/RadioGroup'
  >
}
declare module '@skbkontur/react-ui/components/RenderContainer/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/RenderContainer/index'
  >
}
declare module '@skbkontur/react-ui/components/RenderContainer/RenderContainer.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/RenderContainer/RenderContainer'
  >
}
declare module '@skbkontur/react-ui/components/RenderLayer/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/RenderLayer/index'
  >
}
declare module '@skbkontur/react-ui/components/ScrollContainer/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ScrollContainer/index'
  >
}
declare module '@skbkontur/react-ui/components/ScrollContainer/ScrollContainer.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/ScrollContainer/ScrollContainer'
  >
}
declare module '@skbkontur/react-ui/components/SearchSelect/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/SearchSelect/index'
  >
}
declare module '@skbkontur/react-ui/components/SearchSelect/SearchSelect.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/SearchSelect/SearchSelect.adapter'
  >
}
declare module '@skbkontur/react-ui/components/SearchSelect/SearchSelect.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/SearchSelect/SearchSelect'
  >
}
declare module '@skbkontur/react-ui/components/Select/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Select/index'
  >
}
declare module '@skbkontur/react-ui/components/Select/Item.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Select/Item'>
}
declare module '@skbkontur/react-ui/components/Select/Select.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Select/Select.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Select/Select.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Select/Select'
  >
}
declare module '@skbkontur/react-ui/components/Spinner/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Spinner/index'
  >
}
declare module '@skbkontur/react-ui/components/Spinner/settings.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Spinner/settings'
  >
}
declare module '@skbkontur/react-ui/components/Spinner/Spinner.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Spinner/Spinner'
  >
}
declare module '@skbkontur/react-ui/components/Spinner/SpinnerFallback.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Spinner/SpinnerFallback'
  >
}
declare module '@skbkontur/react-ui/components/Sticky/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Sticky/index'
  >
}
declare module '@skbkontur/react-ui/components/Sticky/Sticky.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Sticky/Sticky'
  >
}
declare module '@skbkontur/react-ui/components/Tabs/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Tabs/index'>
}
declare module '@skbkontur/react-ui/components/Tabs/Indicator.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Tabs/Indicator'
  >
}
declare module '@skbkontur/react-ui/components/Tabs/Tab.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Tabs/Tab'>
}
declare module '@skbkontur/react-ui/components/Tabs/Tabs.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Tabs/Tabs'>
}
declare module '@skbkontur/react-ui/components/Textarea/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Textarea/index'
  >
}
declare module '@skbkontur/react-ui/components/Textarea/Textarea.adapter.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Textarea/Textarea.adapter'
  >
}
declare module '@skbkontur/react-ui/components/Textarea/Textarea.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Textarea/Textarea'
  >
}
declare module '@skbkontur/react-ui/components/Toast/index.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Toast/index'>
}
declare module '@skbkontur/react-ui/components/Toast/Toast.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Toast/Toast'>
}
declare module '@skbkontur/react-ui/components/Toast/ToastStatic.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Toast/ToastStatic'
  >
}
declare module '@skbkontur/react-ui/components/Toast/ToastView.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Toast/ToastView'
  >
}
declare module '@skbkontur/react-ui/components/Toggle/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Toggle/index'
  >
}
declare module '@skbkontur/react-ui/components/Toggle/Toggle.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Toggle/Toggle'
  >
}
declare module '@skbkontur/react-ui/components/Tooltip/Box.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/components/Tooltip/Box'>
}
declare module '@skbkontur/react-ui/components/Tooltip/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Tooltip/index'
  >
}
declare module '@skbkontur/react-ui/components/Tooltip/position.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Tooltip/position'
  >
}
declare module '@skbkontur/react-ui/components/Tooltip/renderPin.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Tooltip/renderPin'
  >
}
declare module '@skbkontur/react-ui/components/Tooltip/Tooltip.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/Tooltip/Tooltip'
  >
}
declare module '@skbkontur/react-ui/components/TopBar/index.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/TopBar/index'
  >
}
declare module '@skbkontur/react-ui/components/TopBar/TopBar.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/components/TopBar/TopBar'
  >
}
declare module '@skbkontur/react-ui/CustomComboBox.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/CustomComboBox'>
}
declare module '@skbkontur/react-ui/DatePicker.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/DatePicker'>
}
declare module '@skbkontur/react-ui/DateSelect.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/DateSelect'>
}
declare module '@skbkontur/react-ui/Dropdown.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Dropdown'>
}
declare module '@skbkontur/react-ui/FxInput.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/FxInput'>
}
declare module '@skbkontur/react-ui/Gapped.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Gapped'>
}
declare module '@skbkontur/react-ui/Group.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Group'>
}
declare module '@skbkontur/react-ui/Hint.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Hint'>
}
declare module '@skbkontur/react-ui/Icon.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Icon'>
}
declare module '@skbkontur/react-ui/Input.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Input'>
}
declare module '@skbkontur/react-ui/Kebab.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Kebab'>
}
declare module '@skbkontur/react-ui/Kladr.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Kladr'>
}
declare module '@skbkontur/react-ui/lib/browserNormalizer.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/browserNormalizer'>
}
declare module '@skbkontur/react-ui/lib/Colors.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/Colors'>
}
declare module '@skbkontur/react-ui/lib/dom/addClass.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/dom/addClass'>
}
declare module '@skbkontur/react-ui/lib/dom/getComputedStyle.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/lib/dom/getComputedStyle'
  >
}
declare module '@skbkontur/react-ui/lib/dom/getScrollWidth.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/dom/getScrollWidth'>
}
declare module '@skbkontur/react-ui/lib/dom/removeClass.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/dom/removeClass'>
}
declare module '@skbkontur/react-ui/lib/events/stopPropagation.js' {
  declare module.exports: $Exports<
    '@skbkontur/react-ui/lib/events/stopPropagation'
  >
}
declare module '@skbkontur/react-ui/lib/LayoutEvents.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/LayoutEvents'>
}
declare module '@skbkontur/react-ui/lib/listenFocusOutside.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/listenFocusOutside'>
}
declare module '@skbkontur/react-ui/lib/net/fetch-cors.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/net/fetch-cors'>
}
declare module '@skbkontur/react-ui/lib/pluralize.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/pluralize'>
}
declare module '@skbkontur/react-ui/lib/Upgrades.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/lib/Upgrades'>
}
declare module '@skbkontur/react-ui/Link.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Link'>
}
declare module '@skbkontur/react-ui/Loader.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Loader'>
}
declare module '@skbkontur/react-ui/Logotype.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Logotype'>
}
declare module '@skbkontur/react-ui/MenuHeader.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/MenuHeader'>
}
declare module '@skbkontur/react-ui/MenuItem.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/MenuItem'>
}
declare module '@skbkontur/react-ui/MenuSeparator.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/MenuSeparator'>
}
declare module '@skbkontur/react-ui/Modal.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Modal'>
}
declare module '@skbkontur/react-ui/PhoneInput.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/PhoneInput'>
}
declare module '@skbkontur/react-ui/Popup.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Popup'>
}
declare module '@skbkontur/react-ui/Radio.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Radio'>
}
declare module '@skbkontur/react-ui/RadioGroup.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/RadioGroup'>
}
declare module '@skbkontur/react-ui/RenderContainer.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/RenderContainer'>
}
declare module '@skbkontur/react-ui/RenderLayer.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/RenderLayer'>
}
declare module '@skbkontur/react-ui/ScrollContainer.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/ScrollContainer'>
}
declare module '@skbkontur/react-ui/SearchSelect.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/SearchSelect'>
}
declare module '@skbkontur/react-ui/Select.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Select'>
}
declare module '@skbkontur/react-ui/Spinner.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Spinner'>
}
declare module '@skbkontur/react-ui/Sticky.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Sticky'>
}
declare module '@skbkontur/react-ui/Tabs.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Tabs'>
}
declare module '@skbkontur/react-ui/Textarea.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Textarea'>
}
declare module '@skbkontur/react-ui/Toast.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Toast'>
}
declare module '@skbkontur/react-ui/Toggle.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Toggle'>
}
declare module '@skbkontur/react-ui/Tooltip.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/Tooltip'>
}
declare module '@skbkontur/react-ui/TopBar.js' {
  declare module.exports: $Exports<'@skbkontur/react-ui/TopBar'>
}
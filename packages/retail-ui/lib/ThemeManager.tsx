import defaultThemeVariables from '../components/variables.less';
import flatThemeVariables from '../components/variables.flat.less';

interface VariablesObject {
  [key: string]: string;
}
type ThemeType = 'default' | 'flat';

export default class ThemeManager {
  public static getVariables(themeType: ThemeType): VariablesObject {
    if (themeType === 'default') {
      return this.defaultThemeVariables;
    }

    if (themeType === 'flat') {
      return this.flatThemeVariables;
    }

    throw new Error(`Incompatible them type in argument: ${themeType}`);
  }

  public static overrideVariables(themeType: ThemeType, themeObject: VariablesObject) {
    if (themeType === 'default') {
      this.defaultThemeVariables = { ...this.defaultThemeVariables, ...themeObject };
    }

    if (themeType === 'flat') {
      this.flatThemeVariables = { ...this.flatThemeVariables, ...themeObject };
    }
  }

  public static resetVariablesToDefaultValues(themeType: ThemeType): VariablesObject {
    if (themeType === 'default') {
      this.defaultThemeVariables = defaultThemeVariables;
      return this.defaultThemeVariables;
    }

    if (themeType === 'flat') {
      this.flatThemeVariables = flatThemeVariables;
      return this.flatThemeVariables;
    }

    throw new Error(`Incompatible them type in argument: ${themeType}`);
  }

  private static defaultThemeVariables: VariablesObject = defaultThemeVariables;
  private static flatThemeVariables: VariablesObject = flatThemeVariables;
}

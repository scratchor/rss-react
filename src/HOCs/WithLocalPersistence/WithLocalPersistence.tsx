import React, { Component } from "react";

export type InjectedProps = {
  setValue: (value: string) => void;
  initialValue: string;
};

type WithLocalPersistenceProps = {
  storageKey: string;
};

interface WithLocalPersistenceState {
  value: string;
}

// function WithLocalPersistence<P, WithLocalPersistenceProps extends keyof P>(
function WithLocalPersistence<P extends InjectedProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return class WithLocalPersistence extends Component<
    Omit<P, keyof InjectedProps> & WithLocalPersistenceProps,
    WithLocalPersistenceState
  > {
    constructor(
      props: Omit<P, keyof InjectedProps> & WithLocalPersistenceProps
    ) {
      super(props);
      this.state = {
        value: localStorage.getItem(`${this.props.storageKey}`) || "",
      };
    }

    render() {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { storageKey, ...props } = this.props;

      return (
        <WrappedComponent
          {...(props as unknown as P)}
          setValue={this.setValue}
          initialValue={this.state.value}
        />
      );
    }

    setValue = (value: string): void => {
      localStorage.setItem(this.props.storageKey, value);
    };
  };
}

export default WithLocalPersistence;

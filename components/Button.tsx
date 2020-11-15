import React from 'react';

type Props = {
  text: string;
};

const Button: React.FunctionComponent<Props> = (props: Props) => {
    const { text } = props;
    return (
        <button>{text}</button>
    )
}

export default Button;
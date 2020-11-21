import React from 'react';
import css from './button.module.scss';
import '../../../styles/global.scss';

type Props = {
  text: string;
};

const Button: React.FunctionComponent<Props> = (props: Props) => {
    const { text } = props;
    return (
        <button className={`${css.button} icon-shield1`}>{text}</button>
    )
}

export default Button;
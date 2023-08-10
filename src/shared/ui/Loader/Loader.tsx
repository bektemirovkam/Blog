import {classNames} from 'shared/lib/classNames/classNames';
import './Loader.scss';

type LoaderProps = {
	className?: string;
};

export const Loader = ({className}: LoaderProps) => (
	<div className={classNames('lds-ellipsis', {}, [className])}>
		<div />
		<div />
		<div />
		<div />
	</div>
);

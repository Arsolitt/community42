import style from './title.module.scss'
interface TitleProps {
	text: string
}

export default function Title( { text }: TitleProps ) {
	return (
		<h1 className={style.title}>
			{text}
		</h1>
	)
}